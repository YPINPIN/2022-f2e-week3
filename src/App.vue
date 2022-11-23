<template>
  <section class="bg"></section>
  <ProgressBar />
  <main></main>
  <footer>
    <p>© 2022 The F2E | UI Design - EG | F2E - PINPIN</p>
  </footer>
</template>

<script>
import ProgressBar from './components/ProgressBar.vue'
export default {
  components: {
    ProgressBar,
  },
}
</script>

<style lang="scss">
main {
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
}

// 背景
.bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  width: 100%;
  height: 100%;
  background-image: url('./assets/images/bg/bg_village.png');
  background-size: 1440px 1024px;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  width: 100vw;
  height: 44px;
  position: fixed;
  left: 0;
  bottom: 0;
  background: rgba(10, 13, 20, 0.8);
  p {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    color: var(--primary-dark);
  }
}
</style>
