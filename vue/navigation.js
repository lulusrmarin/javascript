Vue.component('navigation',{
    props: [ 'options' ],
    data: function(){
        return {
            selected: ""
        }
    },
    methods: {
        select: function( option ) {
            this.selected = option;
            this.$emit( 'select', this.selected );
        }    
    },
    mounted: function(){
        console.log( this.options );
    },
    template: `
        <nav class="navbar navbar-expand-lg navbar-light bg-light text-center container-fluid text-center">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto container-row">
                    <li class="nav-item col" v-for="option in options">
                        <a class="nav-link" :class="{active: this.selected == option}" href="#" @click="select('option')">{{option}}</a>
                    </li>
                </ul>
            </div>
        </nav>
    `
});
