<template>
    <div>
        <h1>Register</h1>
        <form v-on:submit.prevent="registerUser">
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
            </div>
            <br/>
            <div class="form-group">
                <button class="btn btn-primary">Add Item</button>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                item: {}
            }
        },
        methods: {
            registerUser(){
                let uri = '/register';
                this.axios.post(uri, this.item)
                    .then((res) => {
                        this.$router.push('/');
                    });
            }
        }
    }
</script>
