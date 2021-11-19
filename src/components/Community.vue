<template>
<section>
<!-- <div> Community: {{targetIdx}} </div> -->
<img
  v-show="stepState == 1"
  ref="signUp"
  svg-inline
  src= "./svgs/communityList.svg">
<img
  @click="nextPage"
  v-show="stepState == 2"
  ref="communityRead"
  svg-inline
  src= "./svgs/communityRead.svg">
<img
  @click="nextPage"
  v-show="stepState == 3"
  ref="communityWrite"
  svg-inline
  src= "./svgs/communityWrite.svg">

</section>

</template>

<script>
import { defineComponent, computed } from 'vue'
import { gsap } from 'gsap'
import { useStore, mapState } from 'vuex'

export default defineComponent({
  name: 'SignUp',  
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
    
    let chatMain = this.$refs[`signUp`]
    let msg1 = chatMain.querySelector("#msg1")
    let msg2 = chatMain.querySelector("#msg2")
    let msg3 = chatMain.querySelector("#msg3")
    let msg4 = chatMain.querySelector("#msg4")
    let msg5 = chatMain.querySelector("#msg5")
    let msg6 = chatMain.querySelector("#msg6")

    let communityItem1 = chatMain.querySelector("#item1")
    let communityItem2 = chatMain.querySelector("#item2")
    let communityItem3 = chatMain.querySelector("#item3")
    
    communityItem1.setAttribute("cursor","pointer")
    communityItem2.setAttribute("cursor","pointer")
    communityItem3.setAttribute("cursor","pointer")
    communityItem1.onclick=this.toTextChat
    communityItem2.onclick=this.toCommunity
    communityItem3.onclick=this.toVideoCall


    let communityRead = this.$refs[`communityRead`]
  
    let communityReadItem1 = communityRead.querySelector("#item1")
    let communityReadItem2 = communityRead.querySelector("#item2")
    let communityReadItem3 = communityRead.querySelector("#item3")
    communityReadItem1.setAttribute("cursor","pointer")
    communityReadItem2.setAttribute("cursor","pointer")
    communityReadItem3.setAttribute("cursor","pointer")
    communityReadItem1.onclick=this.toTextChat
    communityReadItem2.onclick=this.toCommunity
    communityReadItem3.onclick=this.toVideoCall

    let communityWrite = this.$refs[`communityWrite`]

    let communityWriteItem1 = communityWrite.querySelector("#item1")
    let communityWriteItem2 = communityWrite.querySelector("#item2")
    let communityWriteItem3 = communityWrite.querySelector("#item3")
    communityWriteItem1.setAttribute("cursor","pointer")
    communityWriteItem2.setAttribute("cursor","pointer")
    communityWriteItem3.setAttribute("cursor","pointer")
    communityWriteItem1.onclick=this.toTextChat
    communityWriteItem2.onclick=this.toCommunity
    communityWriteItem3.onclick=this.toVideoCall


    // let msg7 = chatMain.querySelector("#msg7")
    let msgs = [msg1, msg2, msg3, msg4, msg5, msg6]
    
    
    gsap.from(msgs, {opacity:0, fill: "gray", x:-20, stagger: 0.2})
    
    msgs.forEach(item =>{
      item.querySelector("#Background").setAttribute("fill:hover", "red")
      item.setAttribute("cursor","pointer")
      item.onclick=this.nextPage
    })

    gsap.to([ msgs ], {
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
    }
  }

})
</script>
