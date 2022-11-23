<template>
  <div class="bar">
    <div class="bar-bg">
      <div
        ref="progress"
        class="bar-progress"
        :style="{ width: `${progress}` }"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['step', 'maxStep']),
    progress() {
      let progress =
        this.step > 0 ? (this.step / this.maxStep) * 100 + '%' : '12px'
      return progress
    },
  },
}
</script>

<style lang="scss" scoped>
.bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 12px;
  z-index: 10;
  &-bg {
    width: 100%;
    height: 100%;
    background-color: var(--primary-dark);
  }
  &-progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(270deg, #00ffe0 0%, rgba(0, 255, 224, 0) 100%);
    transition: width 0.5s ease;
  }
}
</style>
