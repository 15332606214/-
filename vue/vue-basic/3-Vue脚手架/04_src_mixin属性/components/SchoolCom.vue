<template>
    <div>
        <h2 @click='showName'>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
//引入hunhe
import { hunhe } from "../mixin";
export default {
    name:'SchoolCom',
    data(){
        return{
            name:'小尚',
            address:'北京'
        }
    },
    mixins:[hunhe]
}
</script>
