<template>
    <div>
        <input class="new-todo"
               autofocus
               placeholder="请添加代办事项"
               v-model.trim="newTodo"
               @keyup.enter="addTodo">
    </div>
</template>

<style scoped lang="less">
    .new-todo {
        width: 100%;
        box-sizing: border-box;
        padding: 16px 16px 16px 60px;
        line-height: 1.4em;
        font-size: 24px;
        border: 0;
        font-weight: 100;
        outline: none;
    }
</style>

<script>
    export default {
        name: 'addition',
        data() {
            return {
                newTodo: '',
            }
        },
        methods: {
            addTodo() {
                this.$store.dispatch('addTodo', this.newTodo);
                this.newTodo = '';
            },
        },
    }
</script>
