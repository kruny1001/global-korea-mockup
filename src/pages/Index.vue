<template lang="pug">

.row.bottomMenuBar 
    q-btn.col.q-mx-md.btn(@click="nextStage") 다음화면 {{stageState}}
    q-btn.col.q-mx-sm.btn(@click="prevStep") 이전스탭 {{stepState}}
    q-btn.col.q-mx-sm.btn(@click="nextStep") 다음스탭 {{stepState}}

q-page( style="background: #373535; position:relative;" class="background" )
  
  
  q-stepper(v-model="stageState" header-nav ref="stepper" color="primary" animated)
    //- :title="stages[stepIdx-1].title"
    q-step.background(
      v-for="stepIdx in steps"
      :name="stepIdx"
      :title="stages[stepIdx-1].title"
      icon="settings" )

      section(class="flex flex-center")
        Splash(v-if="stepIdx == 1")
        Intro(v-if="stepIdx == 2")
        SignUp(v-if="stepIdx == 3")
        Payment(v-if="stepIdx == 4")
        TextChat(v-if="stepIdx == 5")
        Community(v-if="stepIdx == 6")
        VideoCall(v-if="stepIdx == 7")

      section(style="color:black; background:white;padding: 20px;margin-top:20px;")
        .title {{ stages[stepIdx-1].title }}
        hr
        .desc {{ stages[stepIdx-1].desc }}
        .desc(v-for="item in stages[stepIdx-1].list") {{ item }}

</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import { useStore, mapState } from 'vuex'
import Splash from 'components/Splash.vue'
import Intro from 'components/Intro.vue'
import SignUp from 'components/SignUp.vue'
import TextChat from 'components/TextChat.vue'
import Community from 'components/Community.vue'
import VideoCall from 'components/VideoCall.vue'
import Payment from 'components/Payment.vue'

export default defineComponent({
  name: 'PageIndex',
  components: { Splash , Intro, SignUp, TextChat, Community, VideoCall, Payment},
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
    const stages = [
      {
        idx: 1, title: "스플래쉬", desc: "한국어 학습자를 위한 온라인 화상 교육 서비스 플랫폼",
        list:[]
      },
      {idx: 2, title: "인트로", desc: "국내 유학생들에게 한국어 교육자를 1:1로 연결해주는 플랫폼 앱 서비스",
        list: ['온라인 화상 통화로 쌍방 실시간 소통형 한국어 학습이 가능']
      },
      {idx: 3, title: "로그인", desc: "기본 정보 입력 후 회원가입",
        list: []
      },
      {idx: 4, title: "결제", desc: "무료 서비스 30분 제공 외에 1시간 이상부터는 결제 필요", 
        list: []
      },
      {idx: 5, title: "1:1대화방", desc: "학습 내용 온라인 피드백이 가능한 대화방 서비스", 
        list: []
      },
      {idx: 6, title: "공유게시판", desc: "학습 내용 공유 및 질문 게시판, 온라인 피드백이 가능한 공유게시판 서비스",
        list: []
      },
      {idx: 7, title: "화상채팅", desc: "1:1 or 1:N으로 학습자와 교육자 매칭해 온라인 화상 강의 교육 진행 가능.", 
        list: []
      }
    ]
    const steps = [ 1,2,3,4,5,6,7 ]
    return {
      stages,
      steps,
      stageState,
      stepState,

      reset () {
      }

    }
  },
  data(){ 
    return{}
      
      
  },
  methods: {
    nextStep() {
      this.stepState++
    },
    goTo(dest){
      // this.$router.push({name: dest, params:{id:'1'}})
    },
    prevStep(){
      this.stepState--
    },
    prevStage(){
      // if(this.crntStage > 1) 
      //   this.crntStage --
      // else
      //   this.crntStage = 1
    },
    nextStage(){
      this.stageState++
    }
  }
})
</script>
<style lang="scss" scoped>
.detail{ margin-left: 20px; padding: 20px; background: white; height:80vh; width: 50%;}
.title{font-size:1.5rem;}
.desc{font-size:1rem;}
.background{background:#373535;  padding-bottom: 20px;}
.bottomMenuBar{ position: fixed; bottom:10px; left:0px; z-index: 9999;height: 50px; width:100%;}
.btn{  color:white; background: black; opacity: 0.7; }
</style>