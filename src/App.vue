<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar'
// https://quasar.dev/vue-components/icon#svg-icon-format
const myIcons = {
  'app:icon1': './assets/svg/splash.svg',
}

export default defineComponent({
  name: 'App',
  setup() {
    const $q = useQuasar()
    $q.iconMapFn = (iconName) => {
        const icon = myIcons[iconName]
        if (icon !== void 0) {
        return { icon: icon }
        }
    }
  }
})
</script>
