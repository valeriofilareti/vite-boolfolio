<script>
  import vfHeader from './components/vfHeader.vue';
  import vfMain from './components/vfMain.vue';
  import vfFooter from './components/vfFooter.vue';

  export default{
    name: 'App',
    components: {
      vfHeader,
      vfMain,
      vfFooter
    },
    data(){
      return {

      }
    }
  }
</script>

<template>

<vfHeader />
<vfMain />
<vfFooter />

</template>

<style scoped>

</style>
