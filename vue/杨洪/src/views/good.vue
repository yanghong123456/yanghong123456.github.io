

<template>
    <div>
        <Head :title="$route.query.name" :show="true"></Head>
        <div v-if="good.type">
            <img :src="good.img" alt="" width="100%" height="280px">
            <h2>{{good.name}}</h2>
            <h2>价格：{{good.price}} /  折扣{{good.discount}}</h2>
            <h2>分类 ：{{good.type.text}}</h2>
            <div>

            <van-button type="info" @click="number++">+</van-button>
           
            <van-button type="danger" :disabled="number<2" @click="number--">-</van-button>
           <van-field id="ki" :value="number" placeholder="购买数量" />购买数量
            </div>
             <van-button type="warning" @click="buycar">加入购物车</van-button>
            <van-button type="danger" @click="tocar">立即购买</van-button>
        </div>
    </div>
</template>


<script>
import { Dialog } from 'vant';

Dialog({ message: '提示' });
export default {
    name:"good",
    // components:{
    //      [Dialog.Component.name]: Dialog.Component
    // },
    data(){
        return{
            good:{},
            number:1
        }
    },
    mounted(){
        // console.log(222)
        this.$axios.get("/vue/getgoodl",{
            params:{
                goodId:this.$route.params.goodId
            }
        }).then(res=>{
            // console.log(res)
            this.good=res.data.result
            
        })
    },
    methods:{
        buycar(){ 
            console.log("购物车新增成功")
                this.$axios.post("/vue/cary",{
                count:this.number
            })
        },
       tocar(){
            Dialog.confirm({
                    title: '你好',
                    message: '是否购买此商品？'
                    }).then((action) => {
                    // on confirm
                   
                        if(action){
                            this.$router.push({name:"car"})
                        }
                    }).catch(() => {
                    // on cancel
                    });
       }
        
    }
}
</script>


<style>
    #ki{width: 50px; }
     div.van-cell{
        width: 50px;
    } 
</style>
