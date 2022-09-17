<template>
    <div>
        <SchoolCom/>
        <hr>
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
