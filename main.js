var app = new Vue({
    el: "#app",
    data: {
        list:[
            {id:1, name:'スライム', hp:100},
            {id:2, name:'ゴブリン', hp:200},
            {id:3, name:'ドラゴン', hp:500},
        ]
    },
    methods: {
        doRemove: function (index) {
            this.list.splice(index, 1)
        }
    },
    created: function () {
        this.list.forEach(function (item) {
            this.$set(item, 'active', false)
        }, this)
    }
})