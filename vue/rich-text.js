Vue.component( 'rich-text', {
    props: [ 'text' ],
    data: function(){
        return {
            textarea: null
        }
    },
    methods: {
        initRich: function() {
            this.textarea = document.getElementById( 'rich' );
        sceditor.create( this.textarea, {
          format: 'bbcode',
          icons: 'monocons',
          style: 'js/sceditor/minified/themes/content/default.min.css',
          width: '100%',
          height: '100%'
        });

        sceditor.instance( this.textarea ).val( this.text );
    },
    destroyRich: function() {
        sceditor.instance( this.textarea ).destroy();
    }
    },
    mounted: function() {
        this.initRich();
    },
    destroyed: function() {
        this.$emit( 'value', sceditor.instance( this.textarea ).val() );
        this.destroyRich();
    },
    template: `
        <textarea id="rich"></textarea>
    `
});
