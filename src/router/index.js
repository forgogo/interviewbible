import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Postcompany from '../views/Postcompany.vue'
Vue.use(VueRouter)
var router = new VueRouter({
  routes: [
    {
      name: 'Index',
      path: '/',
      component: Index
    },
    {
      name: 'Index',
      path: '/index',
      component: Index
    },
    {
      path: '/Postcompany',
      name: 'Postcompany',
      component: Postcompany
    }
  ]
})
//router.beforeEach 导航守卫   您输入的url 是否需要登录  需要的登录，判断token 如果没跳转到登录页面
// to ： Router  即将要进入的目标路由对象
// from 从哪里来的
//next 函数 
// router.beforeEach((to, from, next) => {

//   if (to.path.indexOf('/Info') == 0 || to.path.indexOf('/Postcompany') == 0) {
//       let token = localStorage.getItem('token')
//       if (token) { // 如果有token数据，说明登陆过了
//           // console.log(userId, 111);
         
//           // window.location.href = "http://www.baidu.com"
//           next()
//       } else { // 否则，没有登陆则重新云登陆--重定向
       
//           next({
//               name: 'Index'
//           })
//       }
//   } else { // 如果访问不需要授权的页面，则自由访问
//       next()
//   }
// })



export default router
