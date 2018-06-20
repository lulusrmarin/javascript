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

            $.post( 'index.php' {threadPost: post}, function( response ){
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
                <input type="text" class="form-control" v-model="title">
            </div>

            <div class="container-fluid">
                <textarea class="form-control" v-model="body"></textarea>
            </div>

            <div class="container-fluid">
                <button type="button btn btn-primary" @click="post">Submit</button>
            </div>

        </div>
    `
});
