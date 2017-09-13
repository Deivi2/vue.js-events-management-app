<template>
    <div>
        <h1>Events</h1>
        <div class="card-group">
            <div v-for="e in events">
                <div class="card">
                    <div class="card-block">
                        <p v-bind:class="{'bg-danger': upcomeingEvent(e)}"></p>
                        <p>Title: {{ e.eventTitle }}</p>
                        <p >Author: {{ e.author }}</p>
                        <p>Created: {{ e.dateFrom }}</p>
                        <p>Until: {{ e.dateTo }}</p>
                        <p>Location: {{ e.location }}</p>
                        <router-link :to="{name: 'EditEvent', params: { id: e._id }}" class="btn btn-primary">Edit</router-link>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>



<style>
    .card {
        width: 170px;
        height: 230px;
        margin-left: 10px;
        border: solid 1px black;
        float: left;
        text-align: center;

    }
    .card-group{
        padding: 30px;
    }


    .bg-danger{
        background-color: aqua;
    }

    .bg-danger:after{
        content: 'Starts Soon';
    }



</style>

<script>
    import moment from 'moment'

    export default {
        data(){
            return {
                events: []
            }
        },

        created: function () {
            this.fetchItems();
        },

        methods: {
            fetchItems()
            {
                let uri = '/events/list';
                this.axios.get(uri)
                    .then((response) => {
                        this.events = response.data.events;

                    })
                    .catch(e => {
                        console.log('err', e);
                    })
            },
            deleteItem(id)
            {
                let uri = 'http://localhost:4000/items/delete/' + id;
                this.items.splice(id, 1);
                this.axios.get(uri);
            },
            upcomeingEvent(event){
               let daysUntilEvent = moment(event.dateTo, "DDMMYYYY").fromNow().substring(3,5).trim();
               return (daysUntilEvent <= 5 || daysUntilEvent === 'a');
            },
            startsIn(event){
                return moment(event.dateTo, "DDMMYYYY").fromNow();
            }
        }
    }
</script>
