

<template>
   
    <van-nav-bar v-bind:title="title" left-text="返回" @click-left="onClickLeft" left-arrow>
    <van-icon name="search" slot="right" @click="gowk" />
    </van-nav-bar> 
    
        
</template>

<script>
    export default {
         props:["title","show"],
        methods: {
            
            
            onClickRight() {
            Toast('按钮');
            },
             gowk(){
                 this.$router.push({name:'search'})
            },
            onClickLeft(){
                history.go(-1)
                console.log(111)
            }
        }
}
</script>

