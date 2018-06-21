// load thread by ID from server component
Vue.component( 'thread', {
    props: [ 'id' ],
    data: function() {
        return {
            thread: {}
        }
    },
    mounted: function(){
        $.get( 'inidex.php?thread=' + this.id, ( response ) => {
            this.thread = response.thread;
            console.log( this.thread );
        }, 'json')
    },
    template: `
    <div>
        <div v-for="post in thread">
            <post :post="post"></post>
        </div>
    </div>
    `
});
