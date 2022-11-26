<template>
  <div class="info3">
    <div class="info3-wrapper">
      <div class="info3-img1">
        <img
          src="@/assets/images/other/planning_point.png"
          alt="planning_point"
        />
      </div>
      <div class="info3-bg1"></div>
      <div class="info3-img2">
        <img
          src="@/assets/images/other/planning_point.png"
          alt="planning_point_back"
        />
      </div>
      <div class="info3-bg2"></div>
      <div class="info3-light"></div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'info3',
  emits: ['done'],
  mounted() {
    gsap.set('.info3', {
      autoAlpha: 0,
    })
    gsap.fromTo(
      '.info3',
      {
        autoAlpha: 0,
      },
      {
        duration: 0.5,
        autoAlpha: 1,
        onComplete: () => {
          this.$emit('done')
        },
      }
    )
  },
}
</script>

<style lang="scss" scoped>
.info3 {
  position: absolute;
  top: 0;
  left: 0;
  &-wrapper {
    position: absolute;
    top: 120px;
    left: 120px;
    width: 604px;
    height: 604px;
  }
  &-img1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 580px;
    height: 580px;
    border-radius: 50%;
  }
  &-bg1 {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 580px;
    height: 580px;
    background: rgba(255, 0, 245, 0.35);
    backdrop-filter: blur(5px);
    border-radius: 50%;
  }
  &-img2 {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: -2;
    width: 580px;
    height: 580px;
    opacity: 0.3;
    border-radius: 50%;
  }
  &-bg2 {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: -3;
    width: 580px;
    height: 580px;
    background: rgba(255, 0, 245, 0.25);
    backdrop-filter: blur(5px);
    border-radius: 50%;
  }
  &-light {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: -4;
    width: 580px;
    height: 580px;
    background: radial-gradient(
      50% 50% at 50% 50%,
      #ff00f5 0%,
      rgba(255, 48, 247, 0) 100%
    );
    opacity: 0.9;
    backdrop-filter: blur(5px);
    border-radius: 50%;
  }
}
</style>
