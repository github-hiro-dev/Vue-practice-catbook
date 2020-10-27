var myComponent = {
    template: '<li>{{name}} HP.{{hp}}</li>',
    props:['name', 'hp']
}

var app = new Vue({
    el: "#app",
    data: {
        list:[
            {id:1, name:'スライム', hp:100},
            {id:2, name:'ゴブリン', hp:200},
            {id:3, name: 'ドラゴン', hp:500},
        ]
    },
    components: {
        'my-component': myComponent
    }
})