<template>
   <div>
    我是儿子{{ money }}
   </div>
</template>
<script lang="ts">
import setup from 'vue'
import {ref} from 'vue'
export default {
   name: 'son',
   props:[money],
      
   setup(props){
      console.log('props',props)
   
   }
};
</script>
<style lang='' scoped>
</style>