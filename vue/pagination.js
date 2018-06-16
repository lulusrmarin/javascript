Vue.component('pagination',{
    props: [ 'total' ],
    data: function() {
        return {
            currentPage: 1,
            resultsPerPage:  25,
            resultsOptions: [ 25, 50, 75, 100 ],
            range: 3
        }
    },
    computed: {
        maxPage: function() {
            return this.total / this.resultsPerPage
        },
        displaying: function() {
            return "Displaying " + (this.currentPage - 1) * this.resultsPerPage + " - " +
                parseInt( ( this.currentPage * this.resultsPerPage ) > this.total ? this.total : ( this.currentPage * this.resultsPerPage ) ) +
                " of " + this.total + " videos";
        }
    },
    methods: {
        loadPage: function( pg ) {
            this.currentPage = pg;
            this.$emit( 'page', pg );
        },
        resetPage: function() {
            this.currentPage = 1;
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
                        <a class="page-link" href="#" @click="loadPage( currentPage + i - range - 1 )" v-if="currentPage > i
                            && currentPage + i - range - 1 != 0">{{currentPage + i - range - 1}}</a>
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
                        <select class="form-control" v-model="resultsPerPage" @change="resetPage()">
                            <option v-for="option in resultsOptions">{{option}}</option>
                        </select>        
                    </div>
                </div>
            </div>
            <search placeholder="Search For Videos"></search>
        </div>                
    `
});
