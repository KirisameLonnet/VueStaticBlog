<template>
  <div>
    <div :class="['markdown-content', themeClass]" v-html="markdownToHtml"></div>
  </div>
</template>

<script>
import { marked } from 'marked';


export default {
  name: 'MarkdownRender',
  props: {
    post: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      markdown: "",
      themeClass: this.$vuetify.theme.dark ? 'dark-theme' : 'light-theme', // 初始值
    };
  },
  computed: {
    markdownToHtml() {
      return marked(this.markdown);
    }
  },
  watch: {
    '$vuetify.theme.dark': function(newVal) {
      this.themeClass = newVal ? 'dark-theme' : 'light-theme';
    }
  },
  mounted() {
    fetch(this.post)
      .then(response => response.text())
      .then(text => {
        this.markdown = text;
      })
      .catch(error => {
        console.error('读取文件失败:', error);
      });
  }
};
</script>

<style scoped>

@import 'markdown.css';

</style>
