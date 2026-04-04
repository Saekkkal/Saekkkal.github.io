<template>
  <div
    v-if="isCurtainVisible"
    class="curtain"
    :class="{transition: isTransitioning}"
  >
    <div
      v-for="index in 10"
      :key="index"
      class="block"
      :style="{transitionDelay: `${(index - 1) * 50}ms`}"
      @transitionend="index === 10 ? handleTransitionEnd($event) : null"
    ></div>
  </div>
</template>

<script setup>
import {nextTick, ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();

const isCurtainVisible = ref(false);
const isTransitioning = ref(false);

let resolveTransition = null;

const handleTransitionEnd = e => {
  if (e.propertyName === 'transform' && resolveTransition) {
    resolveTransition();
    resolveTransition = null;
  }
};

const waitTransition = () =>
  new Promise(resolve => {
    resolveTransition = resolve;
  });

const waitAnimationFrame = () => new Promise(requestAnimationFrame);

router.beforeEach(async (to, from, next) => {
  if (typeof window === 'undefined') return next();
  if (from.fullPath === '/' && !from.matched.length) return next();

  isCurtainVisible.value = true;
  await nextTick();
  await waitAnimationFrame();
  await waitAnimationFrame();

  isTransitioning.value = true;

  await waitTransition();

  next();
});

router.afterEach(async () => {
  if (!isCurtainVisible.value) return;

  isTransitioning.value = false;

  await waitTransition();

  isCurtainVisible.value = false;
});
</script>

<style scoped>
.curtain {
  transform: rotate(0.1rad);
  position: fixed;
  inset: 0;
  z-index: 2;
  display: flex;
  scale: 1.2;
}

.block {
  transform-origin: bottom center;
  background-color: #333;
  flex: 1;
  white-space: nowrap;
  transition: transform 0.5s ease-out;
  transform: scaleY(0);
}

.curtain.transition .block {
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
