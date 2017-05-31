/**
 * Created by wangJie on 2017/5/31.
 */
import request from '../../../api/request';
export default{
    props: ['photos'],
    data(){
        return{
            photoLength:4,

        }
    },
    computed: {
        rankingOfficialArray: function () {
            let rankingArray = [];
            Object.keys(this.rankingOfficial).forEach(key => {
                rankingArray.push(this.rankingOfficial[key])
            });
            return rankingArray;
        }
    },
    components:{

    },

    methods: {
        getRanking(type) {
            const vm = this;
            request.getRanking(type)
                .then(data => {
                    const rankingItem = vm.rankingOfficial[data.ToplistType]
                    rankingItem.coverImgUrl = data.coverImgUrl;
                    rankingItem.tracksPreview = data.tracks.slice(0,3);
                })
                .catch()
        },

    },

    mounted: function() {
        console.log(this.photos)
        this.photoLength = this.photos.length
    }


}
