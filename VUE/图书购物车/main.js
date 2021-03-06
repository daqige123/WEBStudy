const vm = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《daqige》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-3',
                price: 128.00,
                count: 1
            },
        ]
    },
    methods: {
        // getFinalPrice(price) {
        //     return '￥' + price.toFixed(2);
        // }
        decrement(index) {

            return this.books[index].count--;
        },
        increment(index) {

            return this.books[index].count++;
        },
        removeHandler(index) {
            this.books.splice(index, 1);
        }
    },
    computed: {
        getTotalPrice() {
            let sum = 0;
            for (let i = 0; i < this.books.length; i++) {
                sum += this.books[i].price * this.books[i].count;
            }
            return sum;
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2);
        }
    }

});