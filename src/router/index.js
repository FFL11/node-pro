import Vue from "vue"
import VueRouter from 'vue-router' //导入路由
//导入组件
import About from '../components/About.vue'
import Home from '../components/Home.vue'  
Vue.use(VueRouter) //挂载或使用 /中间件
export default new VueRouter({ //暴露路由
    routes:[ 
        {
            path:'/',  //根路径，默认显示那个组件 
            component:Home 
        },
        {
            path:'/about', //路由地址
            component:About  //对应的组件
        },
        {
            path:'/home', 
            component:Home 
        },     
    ]

})

