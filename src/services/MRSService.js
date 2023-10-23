import axios from 'axios';

const QUERY_URL = "http://localhost:8080/api"

class MRSService {

    sendQuery(songInfo){
        return axios.post(QUERY_URL + '/search', songInfo);
    }
    // getQueryData(){
    //     return axios.get(QUERY_URL + '/dbdata' );
    // }
    // getColumns(){
    //     return axios.get(QUERY_URL + '/getcolumns' );
    // }
    // sendToAT(sendToAT){
    //     return axios.post(QUERY_URL + '/sendToAT' , sendToAT);
    // }

}

export default new MRSService()