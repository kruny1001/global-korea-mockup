<template>
<section>
<!-- <div style="margin-bottom:10px;">
  <q-btn style="background:white;" @click="resetBtn()"> 리셋 {{targetIdx}}/4</q-btn> 
</div> -->
<img
  v-show="stepState == 1"
  ref="videoCallList"
  svg-inline
  src= "./svgs/videoCallList.svg">
<!-- <img
  v-show="stepState == 2"
  ref="callEvent"
  svg-inline
  src= "./svgs/callEvent.svg"> -->
<img
  v-show="stepState == 2"
  ref="calling"
  svg-inline
  src= "./svgs/calling.svg">
<img
  v-show="stepState == 3"
  ref="callAction1"
  svg-inline
  src= "./svgs/callAction1.svg">
<img
  v-show="stepState == 4"
  ref="callAction2"
  svg-inline
  src= "./svgs/callAction2.svg">
<img
  v-show="stepState == 5"
  ref="callAction3"
  svg-inline
  src= "./svgs/callAction3.svg">
</section>

</template>
<script>
import { defineComponent, computed } from 'vue'
import { gsap } from 'gsap'
import { useStore, mapState } from 'vuex'

export default defineComponent({
  name: 'VideoCall',  
  data(){ return {
    naverBtn : null,
    kakaoBtn: null,
    googleBtn: null,
    registerBtn: null,
    targetIdx: 1,
  }},
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
  mounted(){
    let calling = this.$refs['calling'].querySelector("#callBtn")
    calling.setAttribute("cursor","pointer")
    calling.onclick = this.nextPage

    let endCall1 = this.$refs['callAction1'].querySelector("#To-end-the-call")
    let endCall2 = this.$refs['callAction2'].querySelector("#To-end-the-call")
    let endCall3 = this.$refs['callAction3'].querySelector("#To-end-the-call")
    
    let nextBtn1 = this.$refs['callAction1'].querySelector("#background")
    let nextBtn2 = this.$refs['callAction2'].querySelector("#background")
    let nextBtn3 = this.$refs['callAction3'].querySelector("#background")

    nextBtn1.setAttribute("cursor","pointer")
    nextBtn2.setAttribute("cursor","pointer")
    nextBtn3.setAttribute("cursor","pointer")
    nextBtn1.onclick = this.nextPage
    nextBtn2.onclick = this.nextPage
    nextBtn3.onclick = this.nextPage

    endCall1.setAttribute("cursor","pointer")
    endCall2.setAttribute("cursor","pointer")
    endCall3.setAttribute("cursor","pointer")
    endCall1.onclick = this.resetBtn
    endCall2.onclick = this.resetBtn
    endCall3.onclick = this.resetBtn

    let videoCallListItem1 = this.$refs[`videoCallList`].querySelector("#item1")
    let videoCallListItem2 = this.$refs[`videoCallList`].querySelector("#item2")
    let videoCallListItem3 = this.$refs[`videoCallList`].querySelector("#item3")

    videoCallListItem1.setAttribute("cursor","pointer")
    videoCallListItem2.setAttribute("cursor","pointer")
    videoCallListItem3.setAttribute("cursor","pointer")
    videoCallListItem1.onclick=this.toTextChat
    videoCallListItem2.onclick=this.toCommunity
    videoCallListItem3.onclick=this.toVideoCall

    let videoCallList = this.$refs[`videoCallList`]
    let msg1 = videoCallList.querySelector("#msg1")
    let msg2 = videoCallList.querySelector("#msg2")
    let msg3 = videoCallList.querySelector("#msg3")
    let msg4 = videoCallList.querySelector("#msg4")
    let msg5 = videoCallList.querySelector("#msg5")
    let msg6 = videoCallList.querySelector("#msg6")
    
    gsap.from([msg1, msg2, msg3, msg4, msg5, msg6], {opacity:0, fill: "gray", x:-20, stagger: 0.2})
    let msgs = [msg1, msg2, msg3, msg4, msg5, msg6]
    msgs.forEach(item =>{
      item.setAttribute("cursor","pointer")
      item.onclick=this.nextPage
    })
  },
  methods:{
    toTextChat(){
      this.stepState = 1
      this.stageState = 5
    },
    toCommunity(){
      this.stepState = 1
      this.stageState = 6
    },
    toVideoCall(){
      this.stepState = 1
      this.stageState = 7
    },
    prevPage(){
      this.targetIdx--
    },
    nextPage(){
      if(this.stepState <= 5) {
        this.stepState++
      } else {
        this.stepState = 1
        this.stageState ++
        // let finalPage = this.$refs[`sms3`]
        // gsap.to(finalPage, {rotation: 27, x: 100, opacity: 0, duration: 1})
      }
    },
    resetBtn(){
      this.stepState = 1
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