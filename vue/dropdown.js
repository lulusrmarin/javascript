// Dropdown/Select component
Vue.component( 'dropdown', {
    props: [ 'data', 'name' ],
    data: function() {
        return {
            selected: ""
        }
    },
    methods: {
        emit: function(){
            console.log( 'emit' );
            this.$emit( 'select', this.selected );
        }
    },
    template: `
        <select class="form-control" @change="emit" v-model="selected">
            <option value="">{{name}}</option>
            <option v-for="datum in data">{{datum}}</option>
        </select>
    `
});
