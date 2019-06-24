<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>
      <h1>我的首页--------------------</h1>
    </div>-->
        <Head title="首页" :show="true"></Head>
        <demo></demo>
        <tvle></tvle>
        <foot></foot>
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
  </div> 
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'home',
//   components: {
//     HelloWorld
//   }
// }
import Demo from "@/components/demo.vue"
import Tvle from "@/components/table.vue"
import Foot from "@/components/foot.vue"
export default {
    components:{
        Demo,
        Tvle,
        Foot
    }
}
</script>
