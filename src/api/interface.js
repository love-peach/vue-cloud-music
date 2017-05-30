const baseUrl = '/api';

export default {
    // 搜索
    search: `${baseUrl}/search/get/`,

    // 个性推荐 - banner
    banner: `${baseUrl}/banner`,

    // 个性推荐 - 推荐歌单
    recommendSongList: `${baseUrl}/personalized`,

    // 个性推荐 - 主播电台
    recommendAnchorRadio: `${baseUrl}/personalized/djprogram`,
}
