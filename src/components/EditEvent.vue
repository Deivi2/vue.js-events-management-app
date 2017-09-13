<template>
    <div>
        <h1>Update Item</h1>

        <form v-on:submit.prevent="updateItem">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Title: </label>
                        <input type="text" class="form-control" v-model="event.eventTitle">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group"> <!-- Date input -->
                        <label class="control-label" for="date-from">Date</label>
                        <input class="form-control" id="date-from" name="date" placeholder="DD/MM/YYY" type="text" v-model="event.dateFrom" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group"> <!-- Date input -->
                        <label class="control-label" for="date-until">Date</label>
                        <input class="form-control" id="date-until" name="date" placeholder="DD/MM/YYY" type="text" v-model="event.dateTo" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Location: </label>
                        <input type="text" class="form-control col-md-6" v-model="event.location" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Description </label>
                        <input type="text" class="form-control col-md-6" v-model="event.description" />
                    </div>
                </div>
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                event:{}
            }
        },

        created: function(){
            this.getItem();
        },

        methods: {
            getItem()
            {
                let uri = '/events/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.event = response.data.event;
                });
            },

            updateItem()
            {
                let uri = '/events/update/' + this.$route.params.id;
                this.axios.post(uri, this.event).then((response) => {
                    this.$router.push({name: 'Home'});
                });
            }
        }
    }
</script>
