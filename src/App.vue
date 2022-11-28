<template>
  <div id="app">
    <Navbar />
    <transition name="slide-fade">
      <component :is="layout">
        <router-view />
      </component>
    </transition>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
import { PUBLIC_LAYOUT } from "@/constants/index";
export default {
  components: {
    Navbar,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || PUBLIC_LAYOUT) + "-layout";
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
