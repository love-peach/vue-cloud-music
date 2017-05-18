<style lang="less">
    .list-wrap {
        margin: 0;
        padding: 0;
        list-style: none;
        border-top: 1px solid #e6e6e6;
        font-weight: 300;
        li {
            position: relative;
            &:hover {
                .destroy {
                    display: block;
                }
             }
        }
        li + li {
            border-top: 1px solid #e6e6e6;
        }
        .toggle {
            height: 40px;
            text-align: center;
            width: 40px;
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto 0;
            border: none;
            -webkit-appearance: none;
            appearance: none;
            outline: none;
        }
        .toggle:after {
            content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>')
        }
        .toggle:checked:after {
            content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>')
        }
        label {
            word-break: break-all;
            padding: 15px 60px 15px 15px;
            margin-left: 45px;
            display: block;
            line-height: 1.2;
            transition: color 0.4s;
        }
        label.completed {
            color: #d9d9d9;
            text-decoration: line-through;
        }
        .destroy {
            display: none;
            position: absolute;
            top: 0;
            right: 10px;
            bottom: 0;
            width: 40px;
            height: 40px;
            margin: auto 0;
            font-size: 30px;
            color: #cc9a9a;
            border: 0;
            line-height: 1;
            font-weight: 100;
            cursor: pointer;
            outline: none;
            background-color: transparent;
        }
        .destroy:after {
            content: '×';
        }
    }
</style>

<template>
    <ul class="list-wrap">
        <li v-for="todo in todos">
            <input class="toggle" type="checkbox" :checked="todo.complete" @click="changeStatus(todo.id)">
            <label :class="[todo.complete ? 'completed' : '']">{{todo.title}}</label>
            <button class="destroy" @click="deleteTodo(todo)"></button>
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'list',
    computed: {
        ...mapGetters({
            visibilityType: 'visibilityType',
            todoListAll: 'todoListAll',
            todoListCompleted: 'todoListCompleted',
            todoListCompleting: 'todoListCompleting'
        }),
        todos: function () {
            let todos = [];
            switch (this.visibilityType) {
                case 'completing':
                    todos = this.todoListCompleting;
                    break;
                case 'completed':
                    todos = this.todoListCompleted;
                    break;
                default:
                    todos = this.todoListAll;
            }
            return todos;
        },
    },
    methods: {
        changeStatus(id){
        this.$store.dispatch('changeStatus', id);
        },
        deleteTodo(todo) {
            this.$store.dispatch('deleteTodo', todo);
        }
    }
}
</script>
