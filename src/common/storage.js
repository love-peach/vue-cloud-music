/**
 * Created by zhangjinpei on 2017/6/2.
 */

import Local from 'lockr';
Local.prefix = 'cloud_music_';

export default {
    setUserInfo(val) {
        Local.set('userInfo', val);
    },
    getUserInfo() {
        return Local.get('userInfo');
    },
}
