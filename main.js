var app = new Vue({
    el: "#app",
    data:{
        width: 800,
        height: 600
    },
    methods: {
        methodData: function () {
            return Math.random()
        }
    },
    computed: {
        computedData: function () {
            return Math.random()
        }
    }
})