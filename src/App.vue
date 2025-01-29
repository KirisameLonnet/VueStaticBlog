<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <v-app-bar app color="primary" dark flat>
      <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-primary">KirisameLonnet's Blog</v-toolbar-title>
    </v-app-bar>
    <v-main class="main-background">
      <v-container class="main-background">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-main>
    <v-fade-transition mode="in-out">
      <finderBar v-if="isFinderBarOpen" class="finder-bar"></finderBar>
    </v-fade-transition>

    <MenuButton v-if="!isHomePage"></MenuButton>
  </v-app>
</template>

<script>
import MenuButton from '@/components/MenuButton.vue';
import finderBar from '@/components/finderBar.vue';

export default {
  name: 'App',
  components: {
    MenuButton,
    finderBar
  },
  data() {
    return {
      theme: ''
    };
  },
  computed: {
    isHomePage() {
      return this.$route.path === '/';
    },
    isFinderBarOpen() {
      return this.$store.getters.isFinderBarOpen;
    }
  },
  created() {
    this.listen();
  },
  mounted() {
    document.title = 'Lonnet\'s Blog';
  },
  methods: {
    listen() {
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
      this.$vuetify.theme.dark = prefersDarkScheme;
      if (prefersDarkScheme) {
        this.theme = 'dark';
      } else {
        this.theme = 'light';
      }
    },
    toggleDrawer() {
      this.$store.dispatch('toggleFinderBar');
    }
  }
}
</script>

<style scoped>
.finder-bar {
  z-index: 9999;
  position: absolute;
}

.transition-enter-active, .transition-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
  position: absolute;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>