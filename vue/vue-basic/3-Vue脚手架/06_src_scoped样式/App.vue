<template>
    <div>
        <h1 class="title">你好啊！</h1>
        <SchoolCom/>
        <StudentCom/>
    </div>
</template>

<script>
import SchoolCom from './components/SchoolCom.vue';
import StudentCom from "./components/StudentCom.vue";
    export default {
        name:'App',
        components:{
            StudentCom, 
            SchoolCom
        },
    }
</script>
// 加scoped属性后只有本页内容可以使用属性，引入的内容无法使用此样式
<style scoped>
    .title{
        color:red;
    }
</style>
