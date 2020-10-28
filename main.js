var myComponent = {
    template: '<section class="my-comp"><header><slot name="header">デフォルトタイトル</slot></header><div class="content"><slot></slot></div><footer><slot name="footer"></slot></footer></section>',
}

var app = new Vue({
    el: "#app",
    components: {
        'my-component': myComponent
    }
})