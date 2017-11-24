<style scoped>
.all-view{
    margin: 100px auto;
}
</style>
<template>
<div id=content>
  
        <transition enter-active-class="bounceInLeft" leave-active-class="bounceOutLeft">
        <router-view v-show="show" class="animated"></router-view>
        </transition>    
    
</div>
</template>
<script>
export default {
  data(){
      return {
          show: false
      }
  },
  mounted(){
      return (this.show = true);
  }

}
</script>

