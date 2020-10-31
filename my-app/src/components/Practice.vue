<template>
    <div>
        <div>{{myTest}}</div>
        <div>{{testArray}}</div>
        <input type="button" value="Push" v-on:click="handleClick">
    </div>
</template>

<script>
export default {
    name: 'Practice',
    props: ['test'],
    data() {
        return {
            myTest: this.test,
            testArray: [1,2,3]
        }
    },
    methods:{
        handleClick(){
            this.myTest = 'Bye'
            this.testArray = this.testArray.map((el, index) => el*index)
            this.myFunction(100).then(value => {
                console.log(value)
            }).catch(value => {
                console.log(value)
            })
        },
        myFunction(num){
            return new Promise((resolve, reject) => {
                if(num < 10){
                    resolve('success!')
                }else{
                    reject('error!')
                }
            })
        }
    }
}
</script>