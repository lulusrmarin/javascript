Vue.component('pagination',{
    props: [ 'total', 'page' ],
    data: function() {
        return {
            resultsPerPage: 25,
            resultsOptions: [ 25, 50, 75, 100 ],
            range: 2
        }
    },
    computed: {
        maxPage: function() {
            return Math.ceil( this.total / this.resultsPerPage )
        },
        displaying: function() {
            return "Displaying " + (this.currentPage - 1) * this.resultsPerPage + " - " +
                parseInt( ( this.currentPage * this.resultsPerPage ) > this.total ? this.total : ( this.currentPage * this.resultsPerPage ) ) +
                " of " + this.total + " videos";
        },
        currentPage:  {
            get: function() {
                return this.page;
            },
            set: function() {
                return this.page;
            }
        }
    },
    methods: {
        loadPage: function( pg ) {
            this.currentPage = pg;
            this.$emit( 'page', pg );
        },
        resetPage: function() {
            this.currentPage = 1;
        },
        prevPage: function( i ) {
            return this.currentPage - this.range + i - 1 > 0 ? this.currentPage - this.range + i - 1 : 1
        },
        setResults: function( i ) {
            this.resultsPerPage = i;
        }
    },
    template: `
        <div class="row">
            <div class="col text-center">
                <nav aria-label="Page navigation example" class="text-center container-fluid">
                  <ul class="pagination container-fluid text-center">
                    <li class="page-item"><a class="page-link" href="#" @click="loadPage( 1 )" v-if="currentPage > 1">First</a></li>                              
                    <li class="page-item"><a class="page-link" href="#" @click="loadPage( currentPage - 1 )" v-if="currentPage > 1">Prev</a></li>

                    <li class="page-item" v-for="i in range">
                        <a class="page-link" href="#" @click="loadPage( prevPage(i) )" v-if="currentPage > i">{{prevPage(i)}}</a>
                    </li>                                  

                    <li class="page-item"><a class="page-link">{{currentPage}}</a></li>

                    <li class="page-item" v-for="i in range">
                        <a class="page-link" href="#" @click="loadPage( currentPage + i )" v-if="currentPage < maxPage">{{currentPage + i}}</a>
                    </li>

                    <li class="page-item"><a class="page-link" href="#" @click="loadPage( currentPage + 1 )" v-if="currentPage < maxPage">Next</a></li>
                    <li class="page-item"><a class="page-link" href="#" @click="loadPage( maxPage )" v-if="currentPage < maxPage">Last</a></li>
                  </ul>
                </nav>
            </div>

            <div class="col text-center">{{displaying}}</div>

            <div class="col">
                <div class="row">
                    <div class="col align-bottom text-right">Results Per Page:</div>
                    <div class="col">
                        <dropdown :data="resultsOptions" @select="setResults" name="Results Per Page"></dropdown>
                    </div>
                </div>
            </div>
            <search placeholder="Search For Videos"></search>
        </div>                
    `
});
