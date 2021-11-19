<template>
  <q-page style="background: rgb(111 118 207);" class="flex flex-center">
   
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  watch: {
    $route(to, from) {
      var vm = this
      // console.log(to.params)
      if(to.params.id==1) {
          vm.targetIdx = 1
      } else if(to.params.id==2) {
          vm.targetIdx = 2
      } else if(to.params.id==3) {
          vm.targetIdx = 3
      }
    }
  },
  data(){
    return {
        targetIdx : 2
    }
  },
  methods: {
    goTo(dest){
      this.$router.push({name: dest})
    },
    nextIntro(){
      if(this.targetIdx + 1 > 3) {
        // this.targetIdx = 1
      } else {
        this.targetIdx++
      }

    }
  },
  mounted(){

  }
})
</script>
