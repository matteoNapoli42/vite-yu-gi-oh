<script>
import AppHeader from './components/AppHeader.vue';
import AppCards from './components/AppCards.vue';
export default {
    name: "App",
    components: {
        AppHeader,
        AppCards
    }
}
</script>

<template>
    <header>
        <AppHeader />
    </header>

    <main>
        <AppCards />
    </main>
</template>

<style scoped></style>
