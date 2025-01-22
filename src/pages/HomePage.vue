<template>
  <v-container class="d-flex justify-center align-center fill-height">
    <v-card :class="cardClass" max-width="90%" outlined>
      <v-img src="https://img.paulzzh.com/touhou/random" height="400px"></v-img>
      <v-card-title class="headline">KirisameLonnet's Blog</v-card-title>
      <v-card-subtitle>Hi there</v-card-subtitle>
      <v-col style="margin-top: 1%; display: flex; justify-content: center;">
        <v-row justify="center">
          <v-btn class="rounded-btn" color="primary" @click="goToAbout" style="margin: 10px;">
            <v-icon left>mdi-account</v-icon>
            About Me
          </v-btn>
          <v-btn class="rounded-btn" color="primary" @click="goToIndex" style="margin: 10px;">
            <v-icon left>mdi-book-open</v-icon>
            Blog Posts
          </v-btn>
          <v-btn class="rounded-btn" color="primary" @click="goToAbout" style="margin: 10px;">
            <v-icon left>mdi-link</v-icon>
            Links
          </v-btn>
        </v-row>
      </v-col>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      cardClass: 'elevation-12'
    };
  },
  methods: {
    goToAbout() {
      this.$router.push({ path: '/about' });
    },
    toggleFinderBar() {
      this.$store.dispatch('toggleFinderBar');
    },
    goToIndex() {
      this.$router.push({ path: '/index' });
    }
  }
};
</script>

<style scoped>
.light-card {
  background-color: #f0f1f9;
  color: var(--v-theme-on-surface);
}

.dark-card {
  background-color: #424242;
  color: var(--v-theme-on-surface);
}

.v-container {
  min-height: 100vh;
}

.rounded-btn {
  border-radius: 50px;
}
</style>