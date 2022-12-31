<script lang="ts">
import { provide,inject } from 'vue';

  export default{
    mounted(){
      const test = inject('test')
      console.log(test)
    },
    setup(){

      provide('info',"值")
      
    }
  }
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>
