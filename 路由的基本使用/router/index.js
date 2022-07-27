import VueRouter from 'vue-router'//引入路由
import About from '../components/About'
import Home from '../components/Home'

// 创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {   path:'/about',
            component:About
         },
         {
            path:'/home',
            component:Home
         }
    ]
})