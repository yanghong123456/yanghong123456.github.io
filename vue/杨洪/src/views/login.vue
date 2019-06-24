

<template>
<div>
    <Head title="登陆/注册" :show="true"></Head>

       <van-tabs v-model="selected">
        <van-tab title="注册" id="resgier">
            
            <van-cell-group>
            <van-field
            v-model="login.username"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
        />

        <van-field
            v-model="login.password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
        />

         <van-field
            v-model="login.password"
            type="password"
            label="确认密码"
            placeholder="请输入密码"
            required
        />

        </van-cell-group>
        <van-button type="info" size="large">注册</van-button>
            
        </van-tab> 
        <van-tab title="登陆" id="login">

            <van-cell-group>
        <van-field
            v-model="login.username"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
        />

        <van-field
            v-model="login.password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
        />
        </van-cell-group>
         <van-button type="info" size="large">登陆</van-button>


        </van-tab>
        </van-tabs>

      
</div>
</template>


<script>
export default {
    name:"login",
    data(){
        return{
            selected:"login",
            login:{},
            resgier:{}
        }
    }
}
</script>
