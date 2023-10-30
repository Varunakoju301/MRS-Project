// Function to get access token
function getAccessToken() {
    const clientId = '0c2f2f206cfa45bfba979b5015e57d6e';
    const clientSecret = '42f1a392dbbb4cfda9ec6d9fbb4f0dd5';
    const base64EncodedCredentials = btoa(`${clientId}:${clientSecret}`);
    const tokenEndpoint = 'https://accounts.spotify.com/api/token';

    // Request body
    const requestBody = new URLSearchParams();
    requestBody.append('grant_type', 'client_credentials');

    // Fetch request to get token
    return fetch(tokenEndpoint, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${base64EncodedCredentials}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: requestBody
    })
    .then(response => response.json())
    .then(data => {
        // console.log('Access token:', data.access_token); // Add this line
        return data.access_token;
    })
    .catch(error => console.error('Error getting access token:', error));
}

// Function to get artist IDs
function getArtistIDs(accessToken, favoriteArtists) {
    const searchEndpoint = 'https://api.spotify.com/v1/search';
    const queryParams = new URLSearchParams({
        q: favoriteArtists.join(','),
        type: 'artist',
        limit: 5,
    });

    return fetch(`${searchEndpoint}?${queryParams}`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(data => data.artists.items.map(artist => artist.id))
    .catch(error => console.error('Error getting artist IDs:', error));
}


// Function to display recommendations as cards
function displayRecommendations(recommendations) {
    const recommendationsList = document.getElementById('recommendations');
    recommendationsList.innerHTML = '';

    recommendations.forEach(track => {
        const listItem = document.createElement('li');

        const songCard = document.createElement('div');
        songCard.classList.add('song-card');

        const img = document.createElement('img');
        img.src = track.album.images[0].url;
        img.alt = `${track.name} Album Cover`;

        const title = document.createElement('p');
        title.textContent = `${track.name}`;

        const artist = document.createElement('p');
        artist.textContent = `Artist: ${track.artists[0].name}`;

        songCard.appendChild(img);
        songCard.appendChild(title);
        songCard.appendChild(artist);

        listItem.appendChild(songCard);
        recommendationsList.appendChild(listItem);
    });
}

// Function to get song recommendations based on user's favorite artists
function getRecommendations(accessToken) {
    const favoriteArtistsInput = document.getElementById('favoriteArtists');
    const favoriteArtists = favoriteArtistsInput.value.split(',').map(artist => artist.trim());

    // console.log('accessToken :'+accessToken)
    getArtistIDs(accessToken, favoriteArtists)
        .then(artistIDs => {
            const recommendationsEndpoint = 'https://api.spotify.com/v1/recommendations';
            const seed_artists = artistIDs.join(',');
            const queryParams = new URLSearchParams({
                seed_artists,
                limit: 15,
            });

            return fetch(`${recommendationsEndpoint}?${queryParams}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
        })
        .then(response => response.json())
        .then(data => {
            const recommendationsList = document.getElementById('recommendations');
            recommendationsList.innerHTML = '';
            const recommendations = data.tracks;
            displayRecommendations(recommendations);
        })
        .catch(error => console.error('Error getting recommendations:', error));
}

// // Example usage
// getAccessToken()
//     .then(accessToken => getRecommendations(accessToken))
//     .then(recommendations => {
//         console.log('Recommended tracks:', recommendations);
//         // Do something with the recommendations (e.g., display on the webpage)
//     });

    function getAccessTokenAndRecommendations() {
        getAccessToken()
            .then(accessToken => getRecommendations(accessToken))
            .then(recommendations => {
                console.log('Recommended tracks:', recommendations);
                // Do something with the recommendations (e.g., display on the webpage)
            });
    }