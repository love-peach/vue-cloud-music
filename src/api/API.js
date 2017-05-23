import axios from 'axios'
import config from './config'
import qs from 'qs'

const baseUrl = 'http://192.168.31.103:3000';

export function get(url, params) {
    return axios.get(`${baseUrl}${url}`,params);
}
