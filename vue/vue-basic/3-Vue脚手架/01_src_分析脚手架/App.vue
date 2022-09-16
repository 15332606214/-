<template>
    <div>
        <img src="./assets/logo.png" alt="logo">
        <SchoolCom></SchoolCom>
        <StudentCom></StudentCom>
    </div>
</template>

<script>
    // 引入组件
    import SchoolCom from './components/SchoolCom.vue'
    import StudentCom from './components/StudentCom.vue'

    export default {
        name:'App',
        components:{
            SchoolCom,
            StudentCom
        }
    }
</script>
