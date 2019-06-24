<template>
  <div id="app">
    
    <transition name="transfrom" mode="out-in">
            <router-view class="main-box"></router-view>
    </transition>
    <!-- <router-view class="min-box"></router-view> -->
  </div>
</template>


<script>
export default {
       data(){
         return{
           transfrom:"slide-detail"
         }
       },
       watch:{
          "$route":function(to,from){
            var toLength = to.path.split("/").length;
            var fromLength = from.path.split("/").length;
            //  详情  4  > 列表   3     
            console.log(toLength)          
            console.log(fromLength);

            this.transitionName = toLength>fromLength ? 'slide-detail' : 'slide-list'
          }
       }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
