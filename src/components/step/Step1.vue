<template>
  <section class="step-1">
    <section class="bg">
      <div class="bg-back"></div>
    </section>
  </section>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'Step1',
  mounted() {
    const timeline = gsap.timeline()
    timeline.to('.bg-back', {
      duration: 1,
      autoAlpha: 1,
    })
  },
}
</script>

<style lang="scss" scoped>
.bg {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  width: 100%;
  height: 100%;
  background: var(--bg-dark);

  &-back {
    position: relative;
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/images/bg/bg_village.png');
    background-size: 1440px 1024px;
    background-repeat: no-repeat;
    opacity: 0;
  }
}
</style>
