<template>
    <v-container class="pa-5 d-flex justify-center align-center">
        <MarkdownRender :post="postContent"></MarkdownRender>
    </v-container>
</template>

<script>
import MarkdownRender from '@/components/markdownrender.vue';

export default {
    name: 'PostReader',
    components: {
        MarkdownRender
    },
    props: {
        file: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            postContent: ('/Blog/post/'+this.file)
        };
    }
};
</script>

<style scoped>
.v-card {
    border-radius: 12px;
    background-color: var(--v-theme-surface);
    color: var(--v-theme-on-surface);
}

.v-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: var(--v-theme-background);
}
</style>