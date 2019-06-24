<template>
    <div>
        <Head title="商品搜索" :show="true"></Head>
        <!-- <van-search placeholder="请输入搜索关键词" v-model="value" /> -->
       <!-- <form action="/"> -->
        <van-search
            v-model.lazy="keyword"
            placeholder="请输入搜索关键词"
            show-action
            @search="onSearch"
            @cancel="onCancel"
            
        />
        <list :goods="goods"></list>
        <!-- </form> -->
    </div>
</template>

<script>
export default {
    name:"search",
    data(){
        return{
            keyword:"",
            goods:[]
        }

        
    },
    watch:{
        keyword(newVal){
            // console.log(1111)
             this.$axios.get("/vue/getgoods",{
                params:{
                    keyword:newVal
                }
                
                
            }).then(res=>{
                    console.log("接收成功")

                    this.goods  = res.data.result;
            })
        }
    },
   
    methods:{
        onCancel(){
           
        },
        onSearch(){
            // this.$axios.get("/vue/getgoods",{
            //     params:{
            //         value:newVal
            //     }
                
            // }).then(res=>{
            //         console.log(1111)

            //         // this.goods  = res.data.result;
            // })
        }
       
    }
}
</script>

