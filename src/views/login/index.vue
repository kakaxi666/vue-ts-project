<template>
    <div>
        <div>我是登录页面</div>

        <div><el-button type="primary" round>Primary</el-button></div>
        <parent-part></parent-part>
    </div>
    
</template>
<script lang="ts">
import ParentPart from '@/components/ParentPart.vue'
import {inject,provide} from 'vue'
export default {
    mounted(){
        console.log("我是登录")
        const info = inject('info')
        console.log(info)
    },
    components:{
        ParentPart
    },
    setup(){
        // provide('info',"值")
        provide('test',"伏黑惠")
    }
}
</script>
<style>
</style>