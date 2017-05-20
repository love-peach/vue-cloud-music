import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index.vue'

import MineMusic from '@/view/mine-music/mine-music.vue'
import FoundMusic from '@/view/found-music/found-music.vue'
import Friend from '@/view/friend/friend.vue'

import error404 from '@/view/error/404.vue'
import error500 from '@/view/error/500.vue'

import Demo from '@/view/demo/index.vue'
import DemoIntroduce from '@/view/demo/introduce.vue'
import DemoTodoList from '@/view/demo/demo-todoList/index.vue'


Vue.use(Router)

export default new Router({
    linkActiveClass: 'demo-abc',
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            children: [
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
        {
            path: '*',
            component: error404
        }
    ]
})
