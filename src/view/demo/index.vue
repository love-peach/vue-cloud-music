<template>
    <div>
        <h1>Demo 集合</h1>
        <router-link :to="{ path: '/demo/demo_todolist' }">demo_todolist</router-link>
        <router-view></router-view>
    </div>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        }
    }
</script>
