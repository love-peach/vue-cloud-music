/**
 * Created by zhangjinpei on 2017/5/24.
 */

import API from './API';

export default {
    getRanking(type) {
        return API.get(`/api/top/list?idx=${type}`)
    },
}
