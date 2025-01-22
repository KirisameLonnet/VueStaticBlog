<template>
    <v-navigation-drawer app temporary class="finder-bar" v-model="drawer">
        <div style="margin-top: 50px; display: flex; justify-content: center; align-items: center; height: 64px;">
            <img src="@/assets/profile.jpg" alt="Logo" height="100" class="margin-top-50" style="border-radius: 50%;">
        </div>
        <v-list class="d-flex justify-left flex-column" style="margin-left: 20px; margin-top: 50px; text-align: left; font-size: 25px;">
            <v-list-item>
            <v-list-item-content>
                <v-list-item-title>Finder</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'FinderBar',
    computed: {
        drawer: {
            get() {
                return this.$store.getters.isFinderBarOpen;
            },
            set(value) {
                if (!value) {
                    this.$store.dispatch('toggleFinderBar');
                }
            }
        }
    }
}
</script>

<style scoped>
.finder-bar {
    z-index: 9999;
    position: absolute;
}
</style>