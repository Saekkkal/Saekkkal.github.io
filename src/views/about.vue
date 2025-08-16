<template>
  <div class="about">
    <carousel :items="[
      {
        image: brushImage,
        title: 'Saekkkal',
        description: '🎨 제 닉네임은 한국어로 \'색깔\'을 의미해요'
      },
      {
        image: profileImage,
        title: 'Profile',
        description: '프로필 이미지는 ChatGPT를 통해 생성되었어요'
      }
    ]" />
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
  </div>
</template>

<script setup>
import carousel from '@/components/carousel.vue'
import brushImage from '@/assets/brush.png'
import profileImage from '@/assets/profile.png'
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 3rem 1rem;
  text-align: center;
  background: linear-gradient(#9c68f1, #fff9cc);
  color: #222;
  align-items: center;
  justify-content: center;
}

.dark .about {
  background: linear-gradient(#1d004d, #635e3d);
  color: #f0f0f0;
}

nav {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

nav a {
  background-color: #d2eaff;
  color: #004b8d;
  padding: 0.6rem 1.2rem;
  border-radius: 1.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s, transform 0.2s;
}

nav a:hover {
  background-color: #abd8ff;
  transform: translateY(-2px);
}
</style>
