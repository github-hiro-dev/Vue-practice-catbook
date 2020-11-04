<template>
  <div id="app">
    <div id="nav">
      <nav>
        <router-link to="/" exact>Home</router-link>
        <router-link to="/product">商品一覧</router-link>
      </nav>
    </div>
    <transition name="view">
      <router-view/>
    </transition>
    <loading-overlay/>
  </div>
</template>

<script>
import LoadingOverlay from '@/components/LoadingOverlay.vue'
export default {
  components:{
    'loading-overlay':LoadingOverlay
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-active {
      color: #42b983;
    }
  }
}

.view-enter-active, .view-leave-active {
  transition: opacity 0.5s;
}
.view-leave-active {
  position: absolute;
}
.view-enter, .view-leave-to {
  opacity: 0;
}
</style>

