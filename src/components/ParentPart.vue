<template>
   <div>
     我是父亲{{ money }}
     <son-part :money?.sync="money"></son-part>
     <el-button type="primary" @click="clickMe">点我</el-button>
   </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import setup from 'vue'
import {ref,reactive} from 'vue'
import SonPart from './SonPart.vue';
import {LoginData} from '../type/login'

export default defineComponent({
   name:"parent",
   components:{
      SonPart
   },
   data(){
      return{
      }
   },
   setup(){

      let money = reactive({name:"22222"})
      function clickMe(){
         money.name = '333333'
      }

      return{money,clickMe}
   }

});
</script>
<style lang='' scoped>
</style>