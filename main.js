Vue.component('my-global-component', {
    template:'<p>MyGlobalComponent</p>'
})

var myLocalComponent = {
    template: '<p>MyLocalComponent</p>'
}

var app = new Vue({
    el: "#app",
    components: {
        'my-local-component': myLocalComponent
    }
})