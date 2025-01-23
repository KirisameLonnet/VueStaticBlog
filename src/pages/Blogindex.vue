<template>
    <v-container>
        <v-row>
            <v-col
                v-for="post in posts"
                :key="post.title"
                cols="12"
                md="6"
            >
                <v-card>
                    <div style="display: flex;">
                    <div>
                        <v-card-title>{{ post.title }}</v-card-title>
                        <v-card-subtitle>{{ post.time }}</v-card-subtitle>
                    </div>
                    <v-card-actions style="margin-left: auto;">
                        <v-btn
                            class="rounded-btn"
                            color="primary"
                            @click="goToPost(post.file)"
                        >
                            Read More
                        </v-btn>
                    </v-card-actions>
                </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    name: 'BlogIndex',
    data() {
        return {
            posts: []
        };
    },
    created() {
        this.fetchPosts();
    },
    methods: {
        async fetchPosts() {
            try {
                const response = await axios.get('/Blog/post_index.json');
                this.posts = response.data;
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        },
        goToPost(file) {
            this.$router.push({ name: 'PostReader', params: { file: file } });
        }
    }
};
</script>

<style scoped>
.v-card {
    margin-bottom: 20px;
}
.rounded-btn {
  border-radius: 50px;
  margin: auto;
}
</style>