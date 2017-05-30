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
}
