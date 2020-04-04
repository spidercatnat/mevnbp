// For auth example, see https://github.com/vuejs/vue-router-demos/blob/master/examples/auth-flow/index.js

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Login from '../views/Login';
import Signup from '../views/Signup';



Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Signup',
            component: Signup
        }
    ]
})

export default router;