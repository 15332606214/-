<template>
    <div>
        <StudentCom name="李四" sex="女" :age="18"/>
    </div>
</template>

<script>
    // 引入School组件
    import StudentCom from "./components/StudentCom.vue";
    export default {
        name:'App',
        components:{StudentCom},
    }
</script>
