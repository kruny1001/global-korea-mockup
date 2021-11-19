<template>
  <img
    @click="nextPage"
    ref="splash"
    id="d123"
    svg-inline
    src="./svgs/splash.svg">
</template>

<script>
import { defineComponent, computed } from 'vue'
import { gsap } from 'gsap'
import { useStore, mapState } from 'vuex'

export default defineComponent({
  
  name: 'Splash',  
  setup () {
    const $store = useStore()
    
    // const step = $store.state.progress.step 
    // const stage = $store.state.progress.stage 

    const stepState = computed({
      get: () => $store.state.progress.step,
      set: val => {
        $store.commit('progress/updateStep', val)
      }
    })

    const stageState = computed({
      get: () => $store.state.progress.step,
      set: val => {
        $store.commit('progress/updateStage', val)
      }
    })

    return{
      stepState,
      stageState
    }
  },
  mounted(){
    let title = this.$refs.splash.querySelector('#title')
    let text = this.$refs.splash.querySelector('#text')
    let Group = this.$refs.splash.querySelector('#Group')

    this.titleElement = title
    this.textElement = text
    this.groupElement = Group

    // this.nextPage()
  },
  data(){ return {
      titleElement: null,
      textElement: null,
      groupElement: null
  }},
  methods:{
    nextPage(){
      let vm = this
      this.stepState++;
      // vm.step++
      // vm.stage++
      // gsap.from(vm.groupElement, {x:-100, scale: 3.2, duration: 0.7})
      // gsap.from([vm.textElement, vm.titleElement], {rotation: 27, x: 100, duration: 0.7})
    },
    nextStep(){
      this.stepState++
    }
  }

})
</script>
