

<template>
    <div>
         <Head title="分类" :show="true"></Head>

       
        <van-tabs v-model="active" swipeable>
                <van-tab :id="type.value" 
                v-for="(type ,i) in types" 
                :key="i" :title="type.text">
                 <newlist :type="type" :allgoods="allgoods"  @chang="getAllgood"></newlist>
                </van-tab>
       
        </van-tabs>
       
       

  

    </div>
</template>



<script>
import newlist from "@/components/newlist.vue"
export default {
    name:"fenlei",
    components:{
        newlist
    },
    data(){
        return{
            types:[],
            allgoods:[],
            show:false,
            active:"shirt"
            
        }
    },
    methods:{
            getAllgood(){
                    this.allgoods=this.allgoods.reverse()
            }
    },
    created(){
        this.$axios.get("/vue/getgoodfen").then(res=>{
            // console.log(res)
            this.types=res.data.result;
        })
    },
    mounted(){
         this.$axios.get("/vue/getgoods").then(res=>{
            //  console.log(res)
             this.allgoods=res.data.result
             this.show=true
         })
    }
}
</script>


<style>
  div .van-tab{
        width: 30px ; 
  } 
</style>
