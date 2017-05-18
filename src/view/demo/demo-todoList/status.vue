<style lang="less">
    .footer-wrap {
        position: relative;
        color: #777;
        font-weight: 300;
        padding: 10px 15px;
        height: 20px;
        text-align: center;
        border-top: 1px solid #e6e6e6;
        .footer-content {
            position: relative;
            z-index: 10;
        }
        .footer-status,
        .footer-clear-completed {
            position: absolute;
            top: 50%;
            font-size: 14px;
            transform: translateY(-50%);
        }
        .footer-status {
            left: 0;

        }
        .footer-clear-completed {
            right: 0;
            cursor: pointer;
        }
        .todo-switch {
            color: inherit;
            margin: 3px;
            padding: 3px 7px;
            text-decoration: none;
            border: 1px solid transparent;
            border-radius: 3px;
            font-size: 14px;
            cursor: pointer;
        }
        .todo-switch:hover {
            border: 1px solid rgba(175, 47, 47, 0.1);
        }
        .todo-switch.active {
            border: 1px solid rgba(175, 47, 47, 0.2);
        }
    }
    .footer-wrap:before {
        content: '';
        position: absolute;
        z-index: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: 50px;
        overflow: hidden;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }
</style>

<template>
    <div v-if="todoListAll.length > 0" class="footer-wrap">
        <div class="footer-content">
            <span class="footer-status">剩余 {{todoListCompleting.length}} 项未办</span>
            <a :class="[visibilityType === 'all' ? 'active' : '', 'todo-switch']" @click="switchStatus('all')">全部</a>
            <a :class="[visibilityType === 'completing' ? 'active' : '', 'todo-switch']" @click="switchStatus('completing')">未完成</a>
            <a :class="[visibilityType === 'completed' ? 'active' : '', 'todo-switch']" @click="switchStatus('completed')">已完成</a>
            <span v-if="todoListCompleted.length > 0" class="footer-clear-completed" @click="clearCompleted">清除已完成</span>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'status',
        computed: {
            ...mapGetters({
                visibilityType: 'visibilityType',
                todoListAll: 'todoListAll',
                todoListCompleting: 'todoListCompleting',
                todoListCompleted: 'todoListCompleted'
            })
        },
        methods: {
            switchStatus (status) {
                this.$store.dispatch('switchStatus', status)
            },
            clearCompleted () {
                this.$store.dispatch('clearCompleted')
            }
        }
    }
</script>
