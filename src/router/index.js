import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index.vue'

import MineMusic from '@/view/mine-music/mine-music.vue'
import FoundMusic from '@/view/found-music/found-music.vue'
import Friend from '@/view/friend/friend.vue'

import Demo from '@/view/demo/index.vue'
import DemoIntroduce from '@/view/demo/introduce.vue'
import DemoTodoList from '@/view/demo/demo-todoList/index.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home,
            children: [
                {
                    path: '/',
                    component: MineMusic
                },
                {
                    path: '/mine-music',
                    component: MineMusic
                },
                {
                    path: '/found-music',
                    component: FoundMusic
                },
                {
                    path: '/friend',
                    component: Friend
                },
            ],
        },
        {
            path: '/demo',
            component: Demo,
            children: [
                {
                    path: '/demo/',
                    component: DemoIntroduce
                },
                {
                    path: '/demo/demo_todolist',
                    component: DemoTodoList
                },
            ]
        },
    ]
})
