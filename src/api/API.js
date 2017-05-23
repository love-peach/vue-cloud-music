import axios from 'axios'

const baseUrl = 'http://192.168.31.103:3000';

export function get(url, params) {
    return axios.get(`${baseUrl}${url}`,params);
}
