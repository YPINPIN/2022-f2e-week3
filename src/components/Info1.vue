<template>
  <div class="info">
    <div class="info-wrapper">
      <div class="info-img1">
        <img
          src="@/assets/images/other/planning_sprint.png"
          alt="planning_sprint"
        />
      </div>
      <div class="info-bg1"></div>
      <div class="info-img2">
        <img
          src="@/assets/images/other/planning_sprint.png"
          alt="planning_sprint_back"
        />
      </div>
      <div class="info-bg2"></div>
      <div class="info-light"></div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'Info1',
  emits: ['done'],
  mounted() {
    gsap.set('.info', {
      autoAlpha: 0,
    })
    gsap.fromTo(
      '.info',
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
.info {
  position: absolute;
  top: 0;
  left: 0;
  &-wrapper {
    position: absolute;
    top: 324px;
    left: 418px;
    width: 604px;
    height: 604px;
    border: 1px solid white;
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
    background: rgba(0, 255, 224, 0.3);
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
    background: rgba(0, 255, 224, 0.15);
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
      #00ffe0 0%,
      rgba(0, 255, 224, 0) 100%
    );
    opacity: 0.9;
    backdrop-filter: blur(5px);
    border-radius: 50%;
  }
}
</style>
