<template>
    <div>
        <h1 v-text='msg' ref='title'></h1>
        <button ref='btn' @click='showDOM'>点我输出上方的DOM元素</button>
        <SchoolCom ref='sch'/>
    </div>
</template>

<script>
    // 引入School组件
    import SchoolCom from "./components/SchoolCom.vue";
    export default {
        name:'App',
        components:{SchoolCom},
        data(){
            return {
                msg:'欢迎学习Vue!'
            }
        },
        methods:{
            showDOM(){
                console.log(this.$refs.title),  //真实DOM元素
                console.log(this.$refs.btn),    //真实DOM元素
                console.log(this.$refs.sch)     //School组件的实例对象（vc）
            }

        }
    }
</script>
