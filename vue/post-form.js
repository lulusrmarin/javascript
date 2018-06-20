// post-form takes a google profile as a property and constructs
// a preview post with it
Vue.component( 'post-form', {
    props: [ 'profile' ],
    data: function(){
        return {
            title: null,
            body: null
        }
    },
    methods: {
        post: function() {
            post = {
                title: this.title,
                body: this.body
            }

            $.post( 'cars.php', {threadPost: post}, function( response ){
                console.log( response );
            });
        }
    },
    mounted: function() {
        console.log( this.profile );
    },
    template: `
        <div>
            <div class="container-fluid">
                <img :src="profile.image.url">
                <span>Posting As: {{profile.displayName}}</span>
            </div>
            <hr>

            <div class="container-fluid">
                <input type="text" class="form-control" v-model="title" placeholder="Title">
            </div>

            <div class="container-fluid">
                <textarea class="form-control" v-model="body" placeholder="Body"></textarea>
            </div>

            <div class="container-fluid">
                <button type="button btn btn-primary" @click="post">Submit</button>
            </div>

        </div>
    `
});
