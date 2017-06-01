const baseUrl = '/api';

export default {
    // 搜索
    search: `${baseUrl}/search/get/`,

    // 发现音乐 - 个性推荐 - banner
    banner: `${baseUrl}/banner`,

    // 发现音乐 - 个性推荐 - 推荐歌单
    recommendSongList: `${baseUrl}/personalized`,

    // 发现音乐 - 个性推荐 - 主播电台
    recommendAnchorRadio: `${baseUrl}/personalized/djprogram`,

    // 发现音乐 - 歌单 - 精品歌单
    songListHighQuality: `${baseUrl}/top/playlist/highquality`,

    // 发现音乐 - 歌单
    foundMusicSongList: `${baseUrl}/top/playlist`,

    // 发现音乐 - 主播电台 - 每天听些好节目
    programRecommend: `${baseUrl}/program/recommend`,

    // 发现音乐 - 主播电台 - 电台推荐
    radioRecommend: `${baseUrl}/dj/recommend`,

    // 电台 - 分类
    radioCategory: `${baseUrl}/dj/catelist`,

    // 电台 - 分类推荐
    radioCategoryByType: `${baseUrl}/dj/recommend/type`,

    // 朋友圈动态
    friendsDynamicList: `${baseUrl}/event`,
    // friendsDynamicList: 'static/json/test.json',
}
