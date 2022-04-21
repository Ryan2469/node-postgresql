<template>
<div>
    <Grid ref="grid"
        :style="{height: '650px'}"
        :data-items="result"
        :resizable="true"
        :reorderable="true"
        :sortable="true"
        :pageable="gridPageable"

        :take="take"
        :skip="skip"
        :total="total"

        :expand-field="'expanded'"
        :columns="columns"
        @datastatechange="dataStateChange"
        @pagechange="pageChangeHandler"
        @rowclick="[
            $router.push('/onorder_view')
        ]"
    >
    </Grid>

        <v-container>
            <div align="right">
                <button @click="$router.push({path:'/onorder_writing'})" class="btn">글쓰기</button>
            </div>
        </v-container>
</div>
</template>
<script>
import { process } from '@progress/kendo-data-query';
import { Grid } from '@progress/kendo-vue-grid';

export default {
    components: {
        'Grid': Grid,
    },

    data: function () {
        return {
            gridPageable: { pageSizes: true },
            products: this.createRandomData(1000),
            gridData: [],
            skip: 0,
            take: 20,
            group: [ { field: 'UnitsInStock' } ],
            expandedItems: [],
            columns: [
                { field: 'ProductID', filterable: false, title: '번호', width: '50px' },
                { field: 'ProductName', title: '분류' },
                { field: 'ProductName', title: '제목' },
                { field: 'ProductName', title: '작성자' },
                { field: 'UnitPrice', filter: 'numeric', title: '작성날짜' },
            ]
        };
    },

    computed: {
        result: {
            get: function() {
                return this.products.slice(this.skip, this.take + this.skip);
            }
        },
        total () {
            return this.products ? this.products.length : 0;
        }
    },    

    created: function() {
        this.getData();
        // console.log(this.products);
    },

    methods: {
        getData() {
            this.gridData = this.products.splice(this.skip ,this.take + this.skip);
            console.log("-- getData --")
            console.log(this.gridData);
        },

        pageChangeHandler(event) {
            this.skip = event.page.skip;
            this.take = event.page.take;
        },

        createRandomData(count) {
            const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk'];
            const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120];
            const units = [2, 7, 12, 25,  67, 233, 123, 53, 67, 89];

            return Array(count).fill({}).map((_, idx) => ({
                ProductID: idx + 1,
                ProductName: productNames[Math.floor(Math.random() * productNames.length)],
                UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
                UnitsInStock: units[Math.floor(Math.random() * units.length)],
            }));
        },
    }
};

</script>
<style scoped>
.btn{margin:40px; background-color:#3D76D7; color:white;}
</style>