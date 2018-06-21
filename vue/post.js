Vue.component( 'post',{
    props: [ 'post' ],
    template: `
    <div>
        <hr>
        <div class="postInfo container-fluid">
            <div class="row">
                <div class="avatar col ml-4 bg-light"><img :src="post.image" class="mr-4">{{post.displayName}}</div>                        
                <div class="postedBy col text-center">{{post.timestamp}}</div>
            </div>
        </div>
        <hr>

        <div class="container-fluid">
            <h5>{{post.title}}</h5>
        </div>
        <hr>                  

        <div class="container-fluid">
            <span class="postBody">{{post.body}}</span>
        </div>

        <hr>
    </div>
    `
});
