<template>
  <div class="NotFound">
    <p class="code">404</p>
    <h1 class="title">PAGE NOT FOUND</h1>
    <div class="divider"></div>
    <blockquote class="quote">But if you don't change your direction, and if you keep looking, you may end up where
      you are heading.</blockquote>

    <div class="action">
      <router-link class="link" to="/" aria-label="go to home">Take me home</router-link>
    </div>
  </div>
</template>

<style scoped>
:global(body.dark) {
  background-color: #1b1b1f;
}

.NotFound {
  padding: 64px 24px 96px;
  text-align: center;
  color: #3c3c43;
}

.dark .NotFound {
  color: #dfdfd6;
}

@media (min-width: 768px) {
  .NotFound {
    padding: 96px 32px 168px;
  }
}

.code {
  line-height: 64px;
  font-size: 64px;
  font-weight: 600;
  margin: 0;
}

.title {
  padding-top: 12px;
  letter-spacing: 2px;
  line-height: 20px;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
}

.divider {
  margin: 24px auto 18px;
  width: 64px;
  height: 1px;
  background-color: #e2e2e3;
}

.dark .divider {
  background-color: #2e2e32;
}

.quote {
  margin: 0 auto;
  max-width: 256px;
  font-size: 14px;
  font-weight: 500;
  color: #67676c;
}

.dark .quote {
  color: #98989f;
}

.action {
  padding-top: 20px;
}

.link {
  display: inline-block;
  border: 1px solid #3451b2;
  border-radius: 16px;
  padding: 3px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #3451b2;
  transition: border-color 0.25s, color 0.25s;
  text-decoration: inherit;
}

.dark .link {
  border-color: #a8b1ff;
  color: #a8b1ff;
}

.link:hover {
  border-color: #5c73e7;
  color: #5c73e7;
}

.dark .link:hover {
  color: #5c73e7;
}
</style>
