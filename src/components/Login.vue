<template>
    <div>
        <h1>Login</h1>
        <form v-on:submit.prevent="loginUser">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>user name:</label>
                        <input type="text" class="form-control" v-model="item.username" required>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>password:</label>
                        <input type="password" class="form-control col-md-6" v-model="item.password" required/>
                    </div>
                </div>
            </div><br />
            <div class="form-group">
                <button class="btn btn-primary">Add Item</button>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                item:{}
            }
        },
        methods: {
            loginUser(){
                let uri = '/login';
                this.axios.post(uri, this.item)
                    .then( (res) => {
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('username', res.data.username);
                        this.$router.push('/');

                    });

            }

        }
    }
</script>
