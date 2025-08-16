<template>
  <div class="carousel">
    <div v-for="(item, index) in items" :key="index" class="item" :class="{ active: index === current }">
      <div class="card">
        <img v-if="item.image" :src="item.image" alt="Image" />
        <div class="card-text">
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>

    <button class="prev" @click="prev">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path
          d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z" />
      </svg>
    </button>
    <button class="next" @click="next">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path
          d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  items: Array,
  interval: {
    type: Number,
    default: 5000
  }
})

const current = ref(0)
let timer = null

function next() {
  clearTimeout(timer)
  current.value = (current.value + 1) % props.items.length
  timer = setTimeout(next, props.interval)
}

function prev() {
  clearTimeout(timer)
  current.value = (current.value - 1 + props.items.length) % props.items.length
  timer = setTimeout(next, props.interval)
}

onMounted(() => {
  timer = setTimeout(next, props.interval)
})

onUnmounted(() => {
  clearTimeout(timer)
})
</script>

<style scoped>
.carousel {
  position: relative;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.item {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item.active {
  position: relative;
  opacity: 1;
  transform: translateX(0);
  z-index: 1;
}

.card {
  display: flex;
  width: 700px;
  background: #fff;
  color: #111;
  border-radius: 1rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 2rem;
  gap: 2rem;
  align-items: center;
}

.dark .card {
  background: #1a1a1a;
  color: #eee;
}

img {
  width: 120px;
  height: 120px;
  border-radius: 1rem;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.card-text {
  flex: 1;
  text-align: left;
}

.card-text h2 {
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
}

.card-text p {
  font-size: 1rem;
  line-height: 1.6;
  white-space: pre-wrap;
  color: #555;
}

.dark .card-text p {
  color: #bbb;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: inherit;
  padding: 0.5rem;
  z-index: 10;
}

.prev {
  left: -30px;
}

.next {
  right: -30px;
}

svg {
  width: 2rem;
  height: 2rem;
  fill: currentColor;
}

@media (max-width: 768px) {
  .carousel {
    width: 100%;
  }

  .card {
    flex-direction: column;
    text-align: center;
  }

  img {
    margin-bottom: 1rem;
  }

  .card-text {
    text-align: center;
  }

  .prev {
    left: -10px;
  }

  .next {
    right: -10px;
  }
}
</style>
