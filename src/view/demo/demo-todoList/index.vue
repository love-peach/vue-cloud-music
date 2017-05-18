<template>
  <div>
    <h1 class="title">todos</h1>
    <div class="todolist-wrap">
      <Addition />
      <List />
      <Status />
    </div>
  </div>

</template>

<style lang="less">

    .todolist-wrap {
        position: relative;
        width: 500px;
        margin: 0 auto 40px;
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
        border-top: 1px solid #f5f5f5;
    }
    .title {
        margin: 20px 0;
        font-size: 100px;
        font-weight: 100;
        text-align: center;
        color: rgba(175, 47, 47, 0.15);
        -webkit-text-rendering: optimizeLegibility;
        -moz-text-rendering: optimizeLegibility;
        text-rendering: optimizeLegibility;
    }
</style>

<script>
    import Addition from './addition.vue';
    import List from './list.vue';
    import Status from './status.vue';
    export default {
        props: [],
        name: 'index',
        components: {
            Addition,
            List,
            Status
        },

        data() {
            return {
                mes: '',
            }
        },
        methods: {},
    }
</script>
