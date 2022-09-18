<template>
    <div class="demo">
        <h2 class="title">学校名称：{{name}}</h2>
        <h2 class="qwe">学校地址：{{address}}</h2>
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
    }
}
</script>
<style lang='less'>
    .demo{
        background-color: skyblue;
        .qwe{
            font-size: 40px;
        }
    }
</style>
