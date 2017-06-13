import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store';

const App = resolve => require(['../App.vue'], resolve);
const Login = resolve => require(['../view/login/index.vue'], resolve);
const Home = resolve => require(['../components/home/index.vue'], resolve);
const Page = resolve => require(['../components/secondary-pages/secondary-pages.vue'], resolve);
const PageHeader  = resolve => require(['../components/secondary-pages/TopBar.vue'], resolve);


const MineMusic = resolve => require(['../view/mine-music/mine-music.vue'], resolve);
const FoundMusic = resolve => require(['../view/found-music/found-music.vue'], resolve);
const Friend = resolve => require(['../view/friend/friend.vue'], resolve);

const FoundMusicRecommendation = resolve => require(['../view/found-music/recommendation/Recommendation.vue'], resolve);
const FoundMusicSongList = resolve => require(['../view/found-music/song-list/index.vue'], resolve);
const FoundMusicAnchorRadio = resolve => require(['../view/found-music/anchor-radio/AnchorRadio.vue'], resolve);
const FoundMusicRanking = resolve => require(['../view/found-music/ranking/Ranking.vue'], resolve);


const RadioCategory = resolve => require(['../view/found-music/anchor-radio/RadioCategory.vue'], resolve);


const error404 = resolve => require(['../view/error/404.vue'], resolve);
const error500 = resolve => require(['../view/error/500.vue'], resolve);

const Demo = resolve => require(['../view/demo/index.vue'], resolve);
const DemoIntroduce = resolve => require(['../view/demo/introduce.vue'], resolve);
const DemoTodoList = resolve => require(['../view/demo/demo-todoList/index.vue'], resolve);

Vue.use(Router);

export default new Router({
    linkActiveClass: 'router-link-active',
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: Login,
        },
        // 首屏页面，以 home 为模板
        {
            path: '/',
            component: Home,
            children: [
                {
                    path: '',
                    redirect: '/found-music',
                },
                // 我的音乐
                {
                    path: '/mine-music',
                    component: MineMusic
                },
                // 发现音乐
                {
                    path: '/found-music',
                    component: FoundMusic,
                    beforeEnter: (to, from, next) => {
                        // 刷新当前页面，防止重定向到首页
                        if (from.path === '/') {
                            next();
                            return;
                        }
                        // 后退按钮，防止重定向到首页
                        if (store.state.foundMusic.activeTab !== to.path) {
                            next(store.state.foundMusic.activeTab);
                        } else {
                            next();
                        }
                    },
                    children: [
                        {
                            path: '',
                            redirect: '/found-music/recommendation',
                        },
                        {
                            path: '/found-music/recommendation',
                            component: FoundMusicRecommendation
                        },
                        {
                            path: '/found-music/song_list',
                            component: FoundMusicSongList
                        },
                        {
                            path: '/found-music/anchor_radio',
                            component: FoundMusicAnchorRadio
                        },
                        {
                            path: '/found-music/ranking',
                            component: FoundMusicRanking
                        },
                    ],
                },
                {
                    path: '/friend',
                    component: Friend
                },
            ]
        },
        {
            path: '/page',
            component: Page,
            children: [
                {
                    path: '/page/radio_category',
                    meta: {
                        title: '我的TV'
                    },
                    components: {
                        default: RadioCategory,
                        header: PageHeader,
                    }
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
