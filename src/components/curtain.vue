<template>
    <div class="curtain" ref="curtain" :class="{ 'is-active': isActive }">
        <div v-for="index in 10" :key="index" ref="blocks" class="block"></div>
    </div>
</template>

<script setup>
import { ref, useTemplateRef } from 'vue'
import { useRouter } from 'vue-router'

const wait = (delay, value) => {
    return new Promise(resolve => setTimeout(resolve, delay, value))
}

const router = useRouter()
const isActive = ref(false)
const blocks = useTemplateRef('blocks')

router.beforeEach(async (to, from, next) => {
    if (from.fullPath === '/' && !from.matched.length) return next()

    isActive.value = true
    for (let block of blocks.value) {
        block.classList.add('transtion')
        await wait(50)
    }
    next()
})

router.afterEach(async (to, from) => {
    if (isActive.value === false) return

    isActive.value = false
    for (let block of blocks.value) {
        block.classList.remove('transtion')
        await wait(50)
    }
})
</script>

<style scoped>
.curtain {
    transform: rotate(0.1rad);
    position: fixed;
    inset: 0;
    z-index: 2;
    display: flex;
    scale: 1.2;
    pointer-events: none;
}

.curtain.is-active {
    pointer-events: unset;
}

.block {
    transform-origin: bottom center;
    background-color: #333;
    flex: 1;
    white-space: nowrap;
    transition: transform 0.5s ease-out;
    transform: scaleY(0);
}

.block.transtion {
    transform-origin: top center;
    transform: scaleY(1);
}

.block:nth-child(1) {
    background-color: #ffadad;
}

.block:nth-child(2) {
    background-color: #ffd6a5;
}

.block:nth-child(3) {
    background-color: #fdffb6;
}

.block:nth-child(4) {
    background-color: #caffbf;
}

.block:nth-child(5) {
    background-color: #a0c4ff;
}

.block:nth-child(6) {
    background-color: #93b1e8;
}

.block:nth-child(7) {
    background-color: #bdb2ff;
}

.block:nth-child(8) {
    background-color: #ffc6ff;
}

.block:nth-child(9) {
    background-color: #ffffff;
}

.block:nth-child(10) {
    background-color: #cccccc;
}

.dark .block:nth-child(1) {
  background-color: #5d3148;
}

.dark .block:nth-child(2) {
  background-color: #6d4b31;
}

.dark .block:nth-child(3) {
  background-color: #6d6631;
}

.dark .block:nth-child(4) {
  background-color: #3f6631;
}

.dark .block:nth-child(5) {
  background-color: #313e66;
}

.dark .block:nth-child(6) {
  background-color: #3d3166;
}

.dark .block:nth-child(7) {
  background-color: #573166;
}

.dark .block:nth-child(8) {
  background-color: #66315c;
}

.dark .block:nth-child(9) {
  background-color: #404040;
}

.dark .block:nth-child(10) {
  background-color: #202020;
}
</style>