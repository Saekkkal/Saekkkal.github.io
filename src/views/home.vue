<template>
  <div class="home">
    <img class="profile" src="@/assets/profile.png" alt="Profile" />
    <h1 class="name">Saekkkal</h1>
    <p class="subtitle">👋 안녕하세요! 초보 개발자입니다!</p>

    <nav>
      <router-link to="/about" title="about">About</router-link>
      <a href="mailto:saekkkal@saekkkal.dev" class="contact" title="contact">Contact</a>
    </nav>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background: linear-gradient(#96F2ED, #F5FFCC);
  color: #222;
  transition: color 0.3s, transform 0.1s ease-out;
}

.dark .home {
  background: linear-gradient(#00413d, #707754);
  color: #fff;
}

.profile {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.name {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
}

.dark .subtitle {
  color: #eee;
}

nav {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

nav a {
  background-color: #ffffff;
  color: #444;
  padding: 0.6rem 1.2rem;
  border-radius: 1.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s, transform 0.2s;
}

nav a.contact {
  background-color: #ffe7bc;
  color: #444;
}

nav a:hover {
  background-color: #efefef;
  transform: translateY(-2px);
}

nav a.contact:hover {
  background-color: #fcdea8;
}
</style>
