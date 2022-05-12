<template>
    <NavBar />
    <router-view v-slot="{ Component }">
        <transition name="fade" enter-active-class="animate__animated animate__faster animate__fadeIn"
            leave-active-class="animate__animated animate__faster animate__fadeOut">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue"
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap");



* {
    font-family: "Lato", sans-serif;
    color: $textColor;
}

body {
    margin: 0;
    background-color: $bgColor;
    min-width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
}

span.main-color {
    color: $lime;
}
</style>