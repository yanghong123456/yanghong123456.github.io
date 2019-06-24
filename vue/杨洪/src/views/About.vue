<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Head></Head>
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

