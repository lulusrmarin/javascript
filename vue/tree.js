Vue.component( 'tree', {
props: [ 'dir', 'depth' ],
data: function(){ 
    return {
        node: {},
        expanded: {}
    } 
},
methods: {
    getDirectoryInfo: function( dir ) {
        $.get('index.php?files=true&dir=' + dir, ( response ) => { 
            Vue.set( this.node, this.dir, response.fileList );
        }, 'json');       
    },
    expand: function( path ) {
        console.log( path );
        console.log( this.node );
        Vue.set( this.expanded, path, true );
    },
    collapse: function( path ) {
        Vue.set( this.expanded, path, false );
        Vue.set( this.node, path, null );
    },
    emit; function( action, path ) {
        $this.emit( action, path );
    }
},
mounted: function() {
    this.getDirectoryInfo( this.dir );
},
computed: {
    newDepth: function() {
        return this.depth + 1;
    },
    indent: function() {
        return (4 * this.depth) + 'px';
    },
    hasData: function() {
        return typeof this.node[ this.dir ] !== 'undefined'
    },
    hasDirs: function() {
        return typeof this.node[ this.dir ].directories !== 'undefined'
    },                    
    hasFiles: function() {
        return typeof this.node[ this.dir ].files !== 'undefined'
    },
},
template: `
<div class="v-tree">
    <div v-if="hasData">

        <div v-if="hasDirs">
            <div v-for="(info, folder) in node[ dir ].directories">
                <div class="inl" v-bind:style="{ 'padding-left': indent }" v-if="info.directory">
                    <i class="fa fa-plus-square pointer text-success" aria-hidden="true" @click="expand( info.path )" v-if="!expanded[ info.path ]"></i>
                    <i class="fa fa-minus-square pointer text-danger" aria-hidden="true" @click="collapse( info.path )" v-if="expanded[ info.path ]"></i>
                    <i class="fa fa-folder text-warning pointer" aria-hidden="true" @click="getDirectoryInfo( info.path )" v-if="!expanded[ info.path ]"></i>
                    <i class="fa fa-folder-open text-warning pointer" aria-hidden="true" v-if="info.directory && expanded[ info.path ]"></i>
                    {{folder}}
                </div>
                <tree :dir="info.path" :depth="newDepth" autoscroll="true" v-if="expanded[ info.path ]"></tree>
            </div>
        </div>

        <div v-if="hasFiles">                    
             <div v-for="(info, filename) in node[ dir ].files" v-if="hasFiles">
                 <div class="inl" :style="{'padding-left': indent}">
                     <i class="fa fa-pencil text-warning pointer tt" aria-hidden="true" @click="emit( 'load', info.path )" title="edit"></i>'
                     <i class="fa fa-trash text-danger pointer tt" aria-hidden="true" @click="emit( 'delete', info.path )" title="delete"></i>
                     {{filename}}
                 </div>
             </div>
         </div>

     </div>
 </div>`                
})
