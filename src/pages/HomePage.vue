<template>
  <v-container class="d-flex justify-center align-center fill-height">
    <v-card :class="cardClass" max-width="90%" outlined>
      <v-img src="https://img.paulzzh.com/touhou/random" height="750px"></v-img>
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
          
          <!-- <v-btn class="rounded-btn" color="primary" @click="toogleLinksCard" style="margin: 10px;">
            <v-icon left>mdi-link</v-icon>
            Links
          </v-btn> -->

        </v-row>
      </v-col>
    </v-card>
    <v-card :class="cardClass" max-width="90%" outlined v-show="showLinksCard">
      <LinkCard/>
    </v-card>
  </v-container>
</template>

<script>
import LinkCard from '@/components/LinkCard.vue';

export default {
  components: {
    LinkCard
  },
  name: 'HomePage',
  data() {

    return {
      showLinksCard: false,
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
    },
    toggleLinksCard() {
      this.showLinksCard = !this.showLinksCard;
    },
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