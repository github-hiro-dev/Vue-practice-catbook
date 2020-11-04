export default {
    namespaced: true,
    state: {
        loading: false
    },
    getters: {
        loading: state => state.loadings
    },
    mutations: {
        start(state) { state.loading = true },
        end(state) { state.loading = false }
    }
}