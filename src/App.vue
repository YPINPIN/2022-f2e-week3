<template>
  <ProgressBar />
  <Step0 v-if="step === 0"></Step0>

  <footer>
    <p>© 2022 The F2E | UI Design - EG | F2E - PINPIN</p>
  </footer>
</template>

<script>
import { mapState } from 'vuex'
import ProgressBar from './components/ProgressBar.vue'
import Step0 from './components/step/Step0.vue'

export default {
  computed: {
    ...mapState(['step']),
  },
  components: {
    ProgressBar,
    Step0,
  },
}
</script>

<style lang="scss">
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
