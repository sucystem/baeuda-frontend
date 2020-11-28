import axios from 'axios';
axios.baseUrl = process.env.REACT_APP_SERVER_API;

/**
 * 
 * @param {String} endpoint 
 * @param {String} method 
 * @param {Object} headers 
 * @param {Object} body 
 */
export default function callAPI(endpoint, method = 'GET', headers = null,body){
    return axios({
        method: method,
        headers: headers,
        url: `${process.env.REACT_APP_SERVER_API}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    })
}
