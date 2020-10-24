var app = new Vue({
    el: "#app",
    data: {
        res:{}
    },
    created: function () {
        axios.get("http://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=my-api-key")
            .then(function (response) {
            this.res = response.data
            }.bind(this))
            .catch(function (e) {
            console.error(e)
        })
    }
})