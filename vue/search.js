Vue.component( 'search', {
    props: ['placeholder'],
    data: function() {
        return {
            search: null
        }
    },
    methods: {
        emitSearch: function() {
            this.$emit( 'search', this.search );
        }    
    },
    template: `
        <div class="col-sm-3">
            <div class="row">
                <div class="col text-right">
                    <i class="fas fa-search align-bottom"></i>
                </div>
                <div class="col">
                    <input type="text" class="form-control" :placeholder="placeholder" v-on:keydown.enter="emitSearch" v-model="search">
                </div>
            </div>
        </div>                  
    `
});
