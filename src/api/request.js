/**
 * Created by zhangjinpei on 2017/5/24.
 */

import API from './API';
import Interface from './interface';

export default {
    login(data, vm) {
        const ajaxPromise = API.get('/api/login/cellphone', data);
        ajaxPromise.then((data) => {
            if(data.code === 200) {
                vm.$router.push('/');
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

    // 发现音乐 - 个性推荐 - banner
    getRecommendBanner() {
        return API.get(Interface.banner)
    },

    // 发现音乐 - 个性推荐 - 推荐歌单
    getRecommendSongList() {
        return API.get(Interface.recommendSongList)
    },

    // 发现音乐 - 个性推荐 - 主播电台
    getRecommendAnchorRadio() {
        return API.get(Interface.recommendAnchorRadio)
    },

    // 发现音乐 - 歌单 - 精品歌单
    getSongListHighQuality(params) {
        return API.get(Interface.songListHighQuality, params)
    },

    // 发现音乐 - 歌单
    getFoundMusicSongList(params) {
        return API.get(Interface.foundMusicSongList, params)
    },
}
