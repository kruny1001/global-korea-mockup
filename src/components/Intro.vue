<template>
<section>
<!-- <div style="margin-bottom:10px;">
  <q-btn style="background:white;" @click="resetBtn()"> 리셋 {{targetIdx}}/3</q-btn> 
</div> -->
<img v-show="stepState == 1" @click="nextPage()"
  ref="splash1"
  svg-inline
  src= "./svgs/intro1.svg">
<img v-show="stepState == 2" @click="nextPage()"
  ref="splash2"
  svg-inline
  src= "./svgs/intro2.svg">
<img v-show="stepState == 3" @click="nextPage()"
  ref="splash3"
  svg-inline
  style="background: white;"
  src= "./svgs/intro3.svg">

</section>

</template>

<script>
import { defineComponent, computed } from 'vue'
import { gsap } from 'gsap'
import { useStore, mapState } from 'vuex'

export default defineComponent({

  name: 'Intro',  
  setup () {
    const $store = useStore()
    
    const stepState = computed({
      get: () => $store.state.progress.step,
      set: val => {
        $store.commit('progress/updateStep', val)
      }
    })

    const stageState = computed({
      get: () => $store.state.progress.stage,
      set: val => {
        $store.commit('progress/updateStage', val)
      }
    })

    return{
      stepState,
      stageState
    }
  },
  data(){ return {
    targetIdx : 1,
    titleElement: null,
    descElement: null,
    illustrationElement: null
  }},
  mounted(){
    this.getElement(this.targetIdx)
    let registerBtn = this.$refs[`splash3`].querySelector("#register")
    let loginBtn = this.$refs[`splash3`].querySelector("#login")
    
    let skipBtn1 = this.$refs[`splash1`].querySelector("#skip")
    let skipBtn2 = this.$refs[`splash2`].querySelector("#skip")

    // registerBtn.onclick = this.loginPage
    // loginBtn.onclick = function() {console.log(321)} 

    skipBtn1.onclick = this.setLastPage
    skipBtn2.onclick = this.setLastPage

    skipBtn1.setAttribute("cursor","pointer")
    skipBtn2.setAttribute("cursor","pointer")
    registerBtn.setAttribute("cursor","pointer")
    loginBtn.setAttribute("cursor","pointer")

    gsap.to([registerBtn, loginBtn, skipBtn1, skipBtn2], {
      duration: 1,
      scale: 1.1,
      repeat: -1,
      transformOrigin:"50% 50%",
      yoyo: true,
    });
  },
  methods:{
    loginPage(){
      // console.log("from method: 123")
    },
    getElement(targetIdx){
      // console.log('getElement', this.$refs[`splash${targetIdx}`])
      let illustration = this.$refs[`splash${targetIdx}`].querySelector('#illustration')
      this.illustrationElement = illustration
      gsap.from(this.illustrationElement, {rotation: -27, x: -100, duration: 0.5})
      gsap.from(['#title', '#desc'], {opacity: 0, duration: 1})
    },
    resetBtn(){
      this.targetIdx = 1
      this.getElement(this.targetIdx)
    },
    setLastPage(){
      this.targetIdx = 3
    },
    nextPage(){
      this.stepState++
    }
  }

})
</script>
