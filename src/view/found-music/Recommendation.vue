<template>
    <div>
        <div style="height: 1000px">个性推荐</div>
    </div>
</template>
<style>

</style>
<script type="text/javascript">

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
            API.get('/search', {
                params:{
                    keywords: '天下'
                }
            })

        },
        methods: {

        }

    }
</script>
