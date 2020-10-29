var compBoard = {
    template: '<div>Message board</div>',
}

var compForm = {
    template: '<div>Form<textarea v-model="message"></textarea></div>',
    data: function () {
        return { message: ''}
    },
    activated: function () {
        console.log('activated!')
    },
    deactivated: function () {
        console.log('deactivated!')
    },
}

var app = new Vue({
    el: "#app",
    data: {
        current:'comp-board'
    },
    components: {
        'comp-board': compBoard,
        'comp-form': compForm,
    }
})