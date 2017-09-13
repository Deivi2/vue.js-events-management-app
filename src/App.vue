<template>
    <div id="app">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li v-if="!loggedIn()">
                <router-link  to="/register">Register</router-link>
            </li>
            <li v-if="!loggedIn()">
                <router-link  to="/login">Login</router-link>
            </li>
            <li v-if="loggedIn()" >
                <router-link to="/addEvent">Add Event</router-link>
            </li>
            <li v-if="loggedIn()">
                <button class="btn btn-primary" v-on:click="logout()" to="/logout">logout</button>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<style>

    li {
        display: inline;
        margin: 20px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>

<script>
    export default{
        methods: {
            loggedIn(){
                return localStorage.getItem('token') != null;
            },
            logout(){
                localStorage.clear();
                this.$router.push({name: 'Login'});
            }
        }
    }
</script>
