/**
 * Created by zhangjinpei on 2017/5/24.
 */

import API from './API';

export default {
    login(data, vm) {
        const ajaxPromise = API.get('/api/login/cellphone', data);
        ajaxPromise.then((data) => {
            if(data.code === 200) {
                vm.$router.push('/home');
            } else {
                vm.$toast(data.msg);
            }
        }).catch((err) => {
            console.log(err, 'err');
        });
        return ajaxPromise;
    },
    getRanking(type) {
        return API.get(`/api/top/list?idx=${type}`)
    },
}
