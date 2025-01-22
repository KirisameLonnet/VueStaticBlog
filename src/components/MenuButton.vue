<template>
    <v-btn class="menu-button" @click="goHome" color="primary" dark>
        <v-icon>mdi-home</v-icon>
    </v-btn>
</template>

<script>
export default {
    name: 'MenuButton',
    methods: {
        goHome() {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
.menu-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    min-width: 56px; /* 确保最小宽度 */
    min-height: 62px; /* 确保最小高度 */
}
</style>
