import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import Register from './components/Register.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import AddEvent from './components/AddEvent.vue';
import EditEvent from './components/EditEvent.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Register',
        path: '/register',
        component: Register
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'AddEvent',
        path: '/addEvent',
        component: AddEvent
    },
    {
        name: 'EditEvent',
        path: '/events/edit',
        component: EditEvent
    }
];

const router = new VueRouter({mode: 'history', routes: routes});
new Vue(Vue.util.extend({router}, App)).$mount('#app');