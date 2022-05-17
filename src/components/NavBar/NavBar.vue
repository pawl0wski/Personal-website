<template>
    <nav>
        <router-link to="/">
            <div class="nav__logo">
                <img src="../../assets/avatar.webp" alt="pawl0wsk">
                <h3>Jakub Pawłowski</h3>
            </div>
        </router-link>
        <span :class="['nav__link', router.active ? 'nav__link--active' : '']" :key="router" v-for="router in paths">
            <router-link :to="router.path">
                {{ router.name }}
            </router-link>
        </span>
    </nav>
</template>

<script lang="ts">

import { useRouter } from "vue-router";

interface Path {
    active: boolean,
    name: string,
    path: string
}

export default {
    computed: {
        paths(): Path[] {
            const router = useRouter();
            const routersToShow = ["Projects"];
            const routes = router.getRoutes().filter(e => routersToShow.includes(e.name!.toString()));
            const paths: Path[] = [];
            routes.forEach(e => {
                paths.push({
                    name: e.name!.toString(),
                    path: e.path,
                    active: router.currentRoute.value.path === e.path
                });
            });
            return paths;
        }
    }
};
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

.nav {
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

    &__link {
        margin: 0 1.5rem;
        text-decoration: none;

        a {
            color: transparentize($textColor, 0.3);

            &:hover {
                color: transparentize($textColor, 0.1);
            }
        }

        &--active {
            a {
                color: white;
            }

            font-weight: 600;
        }
    }
}
</style>