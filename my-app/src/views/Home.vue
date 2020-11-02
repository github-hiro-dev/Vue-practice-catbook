<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
  created(){
    this.disp()
  },
  methods:{
    disp(){
      console.log(this.$route.fullPath)
      console.log(this.$route.name)
    }
  }
}
</script>