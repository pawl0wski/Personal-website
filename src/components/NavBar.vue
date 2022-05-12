<template>
    <nav>
        <router-link to="/">
            <div class="nav__logo">
                <img src="../assets/avatar.png">
                <h3>Jakub Pawłowski</h3>
            </div>
        </router-link>

    </nav>
</template>

<script lang="ts">

export default {
    data() {
        return {
            links: [
                {
                    routerName: "Welcome",
                },
                {
                    routerName: "Projects"
                }
            ]
        }
    }
}
</script>

<style lang="scss">
nav {
    background-color: $darkLighter;
    position: absolute;
    z-index: 100;
    width: 100vw;

    padding: 0 1em;

    display: flex;
    flex-direction: row;
    align-items: center;

    a {
        text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        margin-top: none;
    }
}

div.nav {
    &__logo {
        display: flex;
        align-items: center;
        flex-direction: row;

        img {
            width: 1.8rem;
            border-radius: 100%;
            margin-right: 0.7rem;
            height: auto;
        }
    }
}
</style>