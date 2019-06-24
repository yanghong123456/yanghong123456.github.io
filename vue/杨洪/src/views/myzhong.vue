

<template>
    <div>
         <Head title="个人中心" ></Head>

        <h1>个人中心------------</h1>
        <div v-if="islogin">
            <h2> username == ??? </h2>
        </div>
        <div v-else>
                <van-button type="danger" @click="gologin">马上登陆</van-button>
        </div>
        <swipe id="banner" :swiperOptions="options"> 
             <div class="swiper-slide" v-for="(b,i) in banners" :key="i">
                <img :src="b" alt="" width="100%" height="200">
            </div>
        </swipe>   
        <swipe id="movie" :swiperOptions="options"> 
             <div class="swiper-slide" v-for="(m,i) in mv" :key="i">
                <img :src="m.images.large" alt="" width="100%" height="200">
            </div>
        </swipe>   
    </div>
</template>



<script>
import { Toast } from 'vant';
export default {
    data(){
        return{
            islogin:false,
            
             options:{
                loop:true,
                autoplay:true,
                speed:1500,
            },
             banners:[
                require("@/assets/images/img1.jpg"),
                require("@/assets/images/img2.jpg"),
                require("@/assets/images/img3.jpg"),
                require("@/assets/images/img4.jpg"),
            ],
            mv:[]
        }
        
    },
    methods:{
        gologin(){
            this.$router.push({name:"login"})
        }
    },
    mounted(){
        this.$axios.get("vue/movie",{
            params:{
                limit:8
            }
        }).then(res=>{
            console.log(res)
            //   setTimeout(()=>{
            //     // Indicator.close();
            //     Toast({
            //         message: '请求成功',
            //         iconClass: 'icon iconfont icon-success',
            //         duration:500
            //     });
            // },1000);


            // // 将回调延迟到下次 DOM 更新循环之后执行 在修改数据之后立即使用它，然后等待 DOM 更
            //  this.$nextTick(()=>{
                 this.mv=res.data.result
                 console.log("下一次DOM 更新之后再执行 promise ")

            //  })
        })
    },

   
}
</script>
