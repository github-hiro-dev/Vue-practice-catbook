<template>
    <div class="product">
        <h1>商品情報</h1>
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
            console.log(this.$route.params.id)
            console.log(this.$route.query)
        }
    }
}
</script>