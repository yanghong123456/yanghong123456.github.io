import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
  
    {
      path:"/index",
      name:"index",
      component: () => import( '@/views/index.vue'),
      children:[
        {
          path:"",
          redirect:{name:'home'}
        },
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path:"fenlei",
          name:"fenlei",
          component: () => import( '@/views/fenlei.vue')
        },
        {
          path:"car",
          name:"car",
          component: () => import( '@/views/car.vue')
        },
        {
          path:"myzhong",
          name:"myzhong",
          component: () => import( '@/views/myzhong.vue')
        },
        
      ]
      
    },
    
    {
      path:"search",
      name:"search",
      component: () => import( '@/views/search.vue')
    },
    {
      path:"login",
      name:"login",
      component: () => import( '@/views/login.vue')
    },
    {
      path:"/good/detail/:goodId",
      name:"good",
      component: () => import( '@/views/good.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'*',
      redirect:({name:'home'})
    }
  ]
})
