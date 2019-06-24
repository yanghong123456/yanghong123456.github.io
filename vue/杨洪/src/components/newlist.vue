

<template>
    <div class="ki">
        <ul>
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <li v-for="(good ,i) in goods" :key="i" class="ki">
                <router-link :to="{name:'good',params:{goodId:good.id},query:{name:good.name}}">
                    
                    <img v-lazy="good.img" alt="" width="100%" height="240px">
                    <h2 class="h2">{{good.name}}--rmb{{good.price}}---{{good.type.text}}</h2>
                </router-link>
            </li>
            
            <p>刷新次数: {{ count }}</p> -->
             </van-pull-refresh>
        </ul>
    </div>
</template>


<script>


export default {
    name:"list",
    props:{
      
        type:Object,
        allgoods:Array
    },
    computed:{
        goods(){
            return this.allgoods.filter(item=>item.type.value==this.type.value)
        }
    },
    data() {
       
        return {
            count: 0,
            isLoading: false
            
        }
  },
  mounted(){
            
  },
        methods: {
            
            onRefresh() {
                console.log("下拉刷新")
                    setTimeout(() => {
                         this.goods=this.goods.reverse()
                        this.$toast('刷新成功');
                        this.isLoading = false;
                        this.count++;
                    }, 500);
            }
        }

}
</script>

<style>

.ki{
    animation: fadeOut .8s;
}
</style>
