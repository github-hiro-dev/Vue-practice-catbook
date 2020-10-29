var myComponent = {
    template: '#my-component',
}

var app = new Vue({
    el: "#app",
    components: {
        'my-component': myComponent
    }
})