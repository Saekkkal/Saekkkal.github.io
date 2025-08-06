<template>
    <curtain />
    <header>
        <div class="wrapper">
            <theme-switch />
            <div class="line"></div>
            <social-link />
        </div>
    </header>
    <main>
        <router-view />
    </main>
</template>

<script setup>
import './style.css'
import curtain from './components/curtain.vue'
import themeSwitch from './components/themeSwitch.vue'
import socialLink from './components/socialLink.vue'
</script>

<style scoped>
main {
    position: fixed;
    inset: 0;
}

header {
    position: fixed;
    width: 100%;
    z-index: 1;
    top: 0;
    right: 0;
    left: 0;
    height: 64px;
    display: flex;
    justify-content: center;
}

.wrapper {
    display: flex;
    width: 100%;
    max-width: 1440px;
    align-items: center;
    justify-content: flex-end;
    margin: 0 20px;
}

.wrapper .line {
    border-left: 1px solid #c2c2c4;
    margin: 0 12px;
    height: 24px;
}

.dark .wrapper .line {
    border-color: #2e2e32;
}
</style>