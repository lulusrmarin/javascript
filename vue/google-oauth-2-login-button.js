Vue.component('google-login',{
    data: function() {
        return {
            authed: false,
            profile: {}
        }
    },
    methods: {
        getCode: function(){
            var url = new URL( window.location.href );
            var code = ( url.searchParams.get("code") );
            $.get('oauth.php?code=' + code, ( response ) => {
                if( response.userProfile ) {
                    this.authed = true;
                    this.profile = response.userProfile
                    this.emitProfile();
                }
            }, 'json' );     
        },
        googleAuth: function() {
            $.get('oauth.php', ( response ) => {
                this.authUrl = response.authUrl;                      
                window.location.replace( this.authUrl );                            
            }, 'json' );
        },
        logout: function() {
            console.log( 'logout' );
            $.post('oauth.php', { logout: true }, ( response ) => {
                this.authed = false;
                this.profile = {};
                this.emitProfile();
            }, 'json' );
        },
        emitProfile: function() {
            this.$emit( 'profile', this.profile );
        }
    },
    mounted: function(){
        this.getCode();
    },
    template: `
    <div>
        <img src="/images/google.png" class="pointer" @click="googleAuth" v-if="!authed">
        <div v-else>
            <div class="col-sm-2 border border-dark rounded bg-light" v-if="profile.displayName">
                <div class="container-fluid text-center">Hello, {{profile.displayName}}</div>
                <div class="container-fluid text-center"><img :src="profile.image.url" v-if="profile.image.url"></div>
                <div class="container-fluid text-center">
                    <a href="#" @click="logout">Logout</a>
                </div>
            </div>
        </div>
    </div>
    `
});
