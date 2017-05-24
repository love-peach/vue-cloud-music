<template>
    <div>
        <div style="height: 1000px">个性推荐</div>
    </div>
</template>
<style>

</style>
<script type="text/javascript">

    import axios from 'axios'
    import API from '../../api/API'

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        },
        mounted() {
            API.get('/api/search', {
                keywords: '成都'
            })
            API.get('/api/song/detail', {
                ids: '347230'
            })
        },
        methods: {

        }

    }
</script>
