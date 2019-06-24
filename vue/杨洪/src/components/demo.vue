

<template>
    <div>
        <h1>武汉1902 daydayuo </h1>
        <div class="box">
            完整的语法高亮
            commonjs规范
            组件作用域的css

        </div>
        <p><input type="text" v-model="word"></p>
        <button  @click="change"> refs 去实现福修改子</button>
        <chrild ref="one" msg="this is props"   :word="word">
                <h3  v-for="(a,i) in are" :key="i" >{{a}}</h3>
        </chrild>
    </div>
</template>

<script>
import Chrild from "./chrild.vue"
export default {
    methods:{
        change(){
            this.$refs.one.count+=10
        }
    },
    data(){
        return{
            word:"暗示健康的火车时刻",
            are:["的即可将","圣诞节客户"]
        }
    },
    components:{
        Chrild
    }
}
</script>
<style lang="css" scoped>
    h1{
        color: aqua;
    }
</style>


