import Vue from 'vue'
import store from './store'
import Router from 'vue-router'
import index from './views/index'
import bookType from './views/bookType'
import find from './views/find'
import home from './views/home'
import my from './views/my'



Vue.use(Router)

const router = new Router({
    //mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/index'
        },

        {
            path: '/index',
            name: 'index',
            component:index,
            children:[
                {path:'',component:home},
                {path:'/home',name:'home',component:home},
                {path: '/bookType', name: 'bookType', component:bookType},
                {path: '/find', name: 'find', component:find},
                {path: '/my', name: 'my', component:my},
            ]
        },
    ]
})


//路由首位
router.beforeEach((to,from,next) => {
    console.log(store)
    if (to.path == '/my'){
        if(store.getters.loginMsg.loginStatus != "成功"){
            next('/index')
        }else{
            next()
        }
    } else{
        next()
    }
})

export default router
