<template>
<section>
<img
  v-show="stepState == 1"
  ref="signUp"
  svg-inline
  src= "./svgs/signUp.svg">
<img
  v-show="stepState == 2"
  ref="sms"
  svg-inline
  src= "./svgs/sms.svg">
<img
  v-show="stepState == 3"
  ref="sms2"
  svg-inline
  src= "./svgs/sms2.svg">
<img
  v-show="stepState == 4"
  ref="sms3"
  svg-inline
  src= "./svgs/sms3.svg">
</section>

</template>

<script>
import { defineComponent, computed } from 'vue'
import { gsap } from 'gsap'
import { useStore, mapState } from 'vuex'

export default defineComponent({
  name: 'SignUp',
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
    naverBtn : null,
    kakaoBtn: null,
    googleBtn: null,
    registerBtn: null,
    targetIdx: 1,
  }},
  
  mounted(){
    let registerBtn = this.$refs[`signUp`].querySelector("#register")
    let naverBtn = this.$refs[`signUp`].querySelector("#naver")
    let kakaoBtn = this.$refs[`signUp`].querySelector("#kakao")
    let googleBtn = this.$refs[`signUp`].querySelector("#google")

    let smsContinueBtn = this.$refs[`sms`].querySelector("#continueBtn")
    let prevBtn = this.$refs[`sms`].querySelector("#prevBtn")
    let verifyBtn = this.$refs[`sms2`].querySelector("#verifyBtn")
    let closeBtn = this.$refs[`sms2`].querySelector("#closeBtn")
    let doneBtn = this.$refs[`sms3`].querySelector("#doneBtn")

    registerBtn.onclick = this.nextStep
    naverBtn.onclick = this.nextStep
    kakaoBtn.onclick = this.nextStep
    googleBtn.onclick = this.nextStep
    smsContinueBtn.onclick = this.nextStep
    verifyBtn.onclick = this.nextStep
    closeBtn.onclick = this.prevStep
    prevBtn.onclick = this.prevStep
    doneBtn.onclick = this.nextStep
    
    registerBtn.setAttribute("cursor","pointer")
    naverBtn.setAttribute("cursor","pointer")
    kakaoBtn.setAttribute("cursor","pointer")
    googleBtn.setAttribute("cursor","pointer")
    verifyBtn.setAttribute("cursor","pointer")
    closeBtn.setAttribute("cursor","pointer")
    doneBtn.setAttribute("cursor","pointer")
    smsContinueBtn.setAttribute("cursor","pointer")

    this.disableTextSelection(`signUp`)
    this.disableTextSelection(`sms`)
    this.disableTextSelection(`sms2`)
    this.disableTextSelection(`sms3`)


    gsap.to([ registerBtn,  naverBtn, kakaoBtn, googleBtn, smsContinueBtn, verifyBtn, closeBtn, prevBtn, doneBtn ], {
      duration: 1,
      scale: 1.05,
      repeat: -1,
      transformOrigin:"50% 50%",
      yoyo: true,
    });

  },
  methods:{
    prevStep(){
      this.stepState--
    },
    nextStep(){
      this.stepState ++;  
    },
    resetBtn(){
      this.targetIdx = 1
    },
    disableTextSelection(targetSvg){
      let tspans = this.$refs[targetSvg].querySelectorAll('text')
      tspans.forEach(i=>{
        i.setAttribute("user-select", "none !important")
      })
    }
  }

})
</script>
<style>
text{
-webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
}
</style>