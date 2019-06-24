


<template>
    <div>
        <h2>chrild-one</h2>
         <h2>props==={{msg}}=={{word}}=={{count}}</h2>
         <slot></slot>   
    </div>
</template>

<script>
export default {
    props:[
        "msg" ,"word"
    ],
    data(){
        return{
            count:100
        }
    }
}
</script>

