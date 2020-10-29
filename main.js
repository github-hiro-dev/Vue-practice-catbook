var mixin = {
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!')
        }
    }
}

var myComponentA = {
    mixins:[mixin],
    template: '<div class="my-component-a">component A</div>',
}

var myComponentB = {
    mixins:[mixin],
    template: '<div class="my-component-b">component B</div>',
}

var app = new Vue({
    el: "#app",
    data: {
        componentTypes: ['my-component-a', 'my-component-b'],current:0
    },
    computed: {
        component: function () {
            return this.componentTypes[this.current]
        }
    },
    components: {
        'my-component-a': myComponentA,
        'my-component-b': myComponentB,
    }
})