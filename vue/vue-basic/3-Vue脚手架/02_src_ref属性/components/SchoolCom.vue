<template>
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
export default {
    name:'SchoolCom',
    data(){
        return{
            name:'小尚',
            address:'北京'
        }
    },
}
</script>

<style>
    .demo{
        background-color: rgb(173, 67, 67);
    }
</style>