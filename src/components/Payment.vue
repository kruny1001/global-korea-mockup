<template>
<section>
<!-- <div style="margin-bottom:10px;">
  <q-btn style="background:white;" @click="resetBtn()"> 리셋 {{targetIdx}}/5</q-btn> 
</div> -->
<img v-show="stepState == 1"
  ref="home"
  svg-inline
  src= "./svgs/home.svg">
<img v-show="stepState == 2"
  ref="payMenu"
  svg-inline
  src= "./svgs/payMenu.svg">
<img v-show="stepState == 3"
  ref="selectCard"
  svg-inline
  style="background: white;"
  src= "./svgs/selectCard.svg">

<img v-show="stepState == 4"
  ref="verifyPayment"
  svg-inline
  style="background: white;"
  src= "./svgs/verifyPayment.svg">

<img v-show="stepState == 5"
  ref="paymentConfirmation"
  svg-inline
  style="background: white;"
  src= "./svgs/paymentConfirmation.svg">

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
    // Meetup
    // home
    let menuBtn = this.$refs[`home`].querySelector("#Meetup")
    let payBtn = this.$refs[`payMenu`].querySelector("#Button")
    let payConfirmBtn = this.$refs[`selectCard`].querySelector("#paymentBtn")
    let Password = this.$refs[`verifyPayment`].querySelector("#Password")
    let startBtn = this.$refs[`paymentConfirmation`].querySelector("#startBtn")
    
    // payMenu Button
    // this.getElement(this.targetIdx)
    // let registerBtn = this.$refs[`splash3`].querySelector("#register")
    // let loginBtn = this.$refs[`splash3`].querySelector("#login")
    
    // let skipBtn1 = this.$refs[`splash1`].querySelector("#skip")
    // let skipBtn2 = this.$refs[`splash2`].querySelector("#skip")

    // registerBtn.onclick = this.loginPage
    // loginBtn.onclick = function() {console.log(321)} 

    menuBtn.onclick = this.nextPage
    payBtn.onclick = this.nextPage
    payConfirmBtn.onclick = this.nextPage
    startBtn.onclick = this.nextPage
    Password.onclick = this.nextPage

    menuBtn.setAttribute("cursor","pointer")
    payBtn.setAttribute("cursor","pointer")
    payConfirmBtn.setAttribute("cursor","pointer")
    startBtn.setAttribute("cursor","pointer")
    Password.setAttribute("cursor","pointer")

    gsap.to([menuBtn, payBtn, payConfirmBtn, startBtn, Password], {
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
      this.targetIdx = 5
    },
    nextPage(){
      this.stepState++
    }
  }

})
</script>
