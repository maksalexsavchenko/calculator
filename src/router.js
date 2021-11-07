import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'

Vue.use(Router);

export default Router({
    routes: [
        {path: '/', component: Home},
        {path: '/login', component: Login}
    ]
})