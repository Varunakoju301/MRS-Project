document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    const genre = document.getElementById('genre').value;
    const artist = document.getElementById('artist').value;
    const album = document.getElementById('album').value;
    const song = document.getElementById('song').value;

    // Call Spotify API (Replace YOUR_API_ENDPOINT with the actual API endpoint)
    // const apiUrl = `YOUR_API_ENDPOINT?genre=${genre}&artist=${artist}&album=${album}&song=${song}`;
    const apiUrl = 'https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA';
    

    const clientId = '0c2f2f206cfa45bfba979b5015e57d6e';
    const clientSecret = '42f1a392dbbb4cfda9ec6d9fbb4f0dd5';
  
    // private methods
    const _getToken = async () => {
  
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa( clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
  
        const data = await result.json();
        return data.access_token;
    }
    

    let token = _getToken();

    console.log('token:'+token)
    fetch(apiUrl, {
        headers: {
            'Authorization': 'Bearer'+ token
        }
    })
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => console.error('Error:', error));

});

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    // Process data and display results here
    // Example: Display the first 5 results
    for (let i = 0; i < 5 && i < data.length; i++) {
        const result = data[i];
        const resultElement = document.createElement('div');
        resultElement.innerText = `Track Name: ${result.trackName}, Artist: ${result.artist}`;
        resultsDiv.appendChild(resultElement);
    }
}
