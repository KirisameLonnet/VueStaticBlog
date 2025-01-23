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
      markdown: ""
    };
  },
  computed: {
    themeClass() {
      return this.$vuetify.theme.dark ? 'dark-theme' : 'light-theme';
    },
    markdownToHtml() {
      return marked(this.markdown);
    }
  },
  watch: {
    '$vuetify.theme.dark': function(newVal) {
      this.updateThemeClass(newVal);
    }
  },
  mounted() {
    this.updateThemeClass(this.$vuetify.theme.dark);
    fetch(this.post)
      .then(response => response.text())
      .then(text => {
        this.markdown = text;
      })
      .catch(error => {
        console.error('读取文件失败:', error);
      });
  },
  methods: {
    updateThemeClass(isDark) {
      this.themeClass = isDark ? 'dark-theme' : 'light-theme';
    }
  }
}
</script>

<style scoped>
@import '@/components/markdown.css';
@import '@/components/markdown-dark.css';

.light-theme {
  /* 适用于浅色模式的样式 */
}

.dark-theme {
  /* 适用于深色模式的样式 */
}
</style>