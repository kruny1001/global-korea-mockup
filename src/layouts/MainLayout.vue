<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white" style="color:black;" elevated>
      <q-toolbar>
        <!-- <q-btn flat dense round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->
        <q-toolbar-title> 글코 </q-toolbar-title>
      </q-toolbar>
    </q-header>
  
    
    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> 주요기능 </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container class="background">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  // {
  //   title: 'Login',
  //   caption: '로그인, 문자인증',
  //   icon: 'school',
  //   link: '#/signUp'
  // },
  // {
  //   title: 'Payment',
  //   caption: '결제창',
  //   icon: 'school',
  //   link: '#/payment'
  // },
  // {
  //   title: 'TextChat(1:1 대화방)',
  //   caption: 'github.com/quasarframework',
  //   icon: 'code',
  //   link: '#/textchat'
  // },
  // {
  //   title: 'Community(공유게시판)',
  //   caption: 'chat.quasar.dev',
  //   icon: 'chat',
  //   link: '#/community'
  // },
  // {
  //   title: 'VideoCall(화상채팅)',
  //   caption: 'forum.quasar.dev',
  //   icon: 'record_voice_over',
  //   link: '#/videoCall'
  // },
  // {
  //   title: 'Twitter',
  //   caption: '@quasarframework',
  //   icon: 'rss_feed',
  //   link: 'https://twitter.quasar.dev'
  // },
  // {
  //   title: 'Facebook',
  //   caption: '@QuasarFramework',
  //   icon: 'public',
  //   link: 'https://facebook.quasar.dev'
  // },
  // {
  //   title: 'Quasar Awesome',
  //   caption: 'Community Quasar projects',
  //   icon: 'favorite',
  //   link: 'https://awesome.quasar.dev'
  // }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
<style>
.background{background:#373535;}
</style>