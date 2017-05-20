<template>
    <div>
        <mu-drawer :open="$store.state.demoStore.showSideMenu" :docked="$store.state.demoStore.docked" :width="200">
            <router-link class="title" :to="{ path: '/demo/' }">Demo合集</router-link>
            <mu-list>
                <mu-list-item title="Menu Item 2" :to="{ path: '/demo/demo_todolist' }" />
                <mu-list-item title="Menu Item 2"/>
                <mu-list-item title="Menu Item 3"/>
            </mu-list>
        </mu-drawer>
    </div>
</template>
<style scoped lang="less">
    .title {
        font-size: 1rem;
    }
</style>
<script type="text/javascript">
    export default{
        data(){
            return {
            }
        },
        methods: {
        },
        components: {}
    }
</script>
