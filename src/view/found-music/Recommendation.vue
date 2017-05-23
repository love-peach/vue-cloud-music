<template>
    <div>
        <div style="height: 1000px">个性推荐</div>
    </div>
</template>
<style>

</style>
<script type="text/javascript">

    import axios from 'axios'
    import * as API from '../../api/API'

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        },
        mounted() {
            // API.get('/search', {
            //     params:{
            //         keywords: '成都'
            //     }
            // })
            axios.get('/api/search', {
                params:{
                    keywords: '成都'
                }
            })
            axios.get('/api/song/detail', {
                params:{
                    ids: '347230'
                }
            })

        },
        methods: {

        }

    }
</script>
