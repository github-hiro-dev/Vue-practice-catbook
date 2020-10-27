var myComponent = {
    template: '<p>{{val}}</p>',
    props:['val']
}

var app = new Vue({
    el: "#app",
    data: {
        message:"Vue"
    },
    components: {
        'my-component': myComponent
    }
})