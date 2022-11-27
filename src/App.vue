<template>
  <ProgressBar />
  <Step0 v-if="step === 0"></Step0>
  <Step1 v-else-if="step === 1"></Step1>
  <Step2 v-else-if="step === 2"></Step2>
  <Step3 v-else-if="step === 3"></Step3>
  <Step4 v-else-if="step === 4"></Step4>

  <footer>
    <p>© 2022 The F2E | UI Design - EG | F2E - PINPIN</p>
  </footer>
</template>

<script>
import { mapState } from 'vuex'
import ProgressBar from './components/ProgressBar.vue'
import Step0 from './components/step/Step0.vue'
import Step1 from './components/step/Step1.vue'
import Step2 from './components/step/Step2.vue'
import Step3 from './components/step/Step3.vue'
import Step4 from './components/step/Step4.vue'

export default {
  computed: {
    ...mapState(['step']),
  },
  components: {
    ProgressBar,
    Step0,
    Step1,
    Step2,
    Step3,
    Step4,
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
  z-index: 10;
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
