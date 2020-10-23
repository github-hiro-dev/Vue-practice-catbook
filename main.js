var app = new Vue({
    el: "#app",
    data: {
        message: 'hello vue.js',
        scroll: 0
    },
    mounted: function(){
        this.scroll = 100
    }
})