<template>
    <router-view v-slot="{ Component }">
        <transition name="fade" enter-active-class="animate__animated animate__faster animate__fadeIn"
            leave-active-class="animate__animated animate__faster animate__fadeOut">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap");

* {
    font-family: "Lato", sans-serif;
}

body {
    margin: 0;
}
</style>