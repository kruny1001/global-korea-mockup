<template>
<img
  v-show="stepState == 1"
  ref="chatMain"
  svg-inline
  src= "./svgs/chatList.svg">
<img
  v-show="stepState == 2"
  ref="chatView"
  svg-inline
  src= "./svgs/chatView.svg">
<img
  v-show="stepState == 3"
  ref="chatUser"
  svg-inline
  src= "./svgs/chatUser.svg">

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
  mounted(){
    let chatMain = this.$refs[`chatMain`]
    let msg1 = chatMain.querySelector("#msg1")
    let msg2 = chatMain.querySelector("#msg2")
    let msg3 = chatMain.querySelector("#msg3")
    let msg4 = chatMain.querySelector("#msg4")
    let msg5 = chatMain.querySelector("#msg5")
    let msg6 = chatMain.querySelector("#msg6")
    let msg7 = chatMain.querySelector("#msg7")

    let chatMainItem1 = chatMain.querySelector("#item1")
    let chatMainItem2 = chatMain.querySelector("#item2")
    let chatMainItem3 = chatMain.querySelector("#item3")

    chatMainItem1.setAttribute("cursor","pointer")
    chatMainItem2.setAttribute("cursor","pointer")
    chatMainItem3.setAttribute("cursor","pointer")
    chatMainItem1.onclick=this.toTextChat
    chatMainItem2.onclick=this.toCommunity
    chatMainItem3.onclick=this.toVideoCall

    gsap.from([msg1, msg2, msg3, msg4, msg5, msg6, msg7], {opacity:0, fill: "gray", x:-20, stagger: 0.2})
    let msgs = [msg1, msg2, msg3, msg4, msg5, msg6, msg7]
    msgs.forEach(item =>{
      item.querySelector("#Background").setAttribute("fill:hover", "red")
      item.setAttribute("cursor","pointer")
      item.onclick=this.nextPage
    })


    let chatView = this.$refs['chatView']
    let backBtn = chatView.querySelector("#backBtn")
    let infoBtn = chatView.querySelector("#infoBtn")
    infoBtn.onclick=this.nextPage
    backBtn.onclick=this.prevStep
    infoBtn.setAttribute("cursor","pointer")
    backBtn.setAttribute("cursor","pointer")

    let chatUser = this.$refs['chatUser']
    let backBtn2 = chatUser.querySelector("#backBtn")
    let infoBtn2 = chatUser.querySelector("#infoBtn")
    let profileContainer = chatUser.querySelector("#profileContainer")
    backBtn2.onclick = this.prevStep
    infoBtn2.onclick = this.nextPage
    profileContainer.onclick = this.nextPage
    backBtn2.setAttribute("cursor","pointer")
    infoBtn2.setAttribute("cursor","pointer")
    profileContainer.setAttribute("cursor","pointer")
    gsap.to([ msgs,  infoBtn, infoBtn2, backBtn, backBtn2, profileContainer ], {
      duration: 1,
      scale: 1.05,
      repeat: -1,
      transformOrigin:"50% 50%",
      yoyo: true,
    });

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
    nextPage(){
      this.stepState++
    },
    prevStep(){
      this.stepState--
    },
    backBtn(){
      this.targetIdx = 1
    },
    infoBtn(){
      this.targetIdx = 3
    }
  }
})
</script>
