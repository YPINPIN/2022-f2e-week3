<template>
  <section class="step-6">
    <section class="bg">
      <div class="bg-back"></div>
    </section>
    <section class="content"></section>
  </section>
</template>

<script>
import gsap from 'gsap'
import Role from '../Role.vue'
export default {
  name: 'Step6',
  data() {
    return {}
  },
  components: {
    Role,
  },
  mounted() {
    this.setNext(1)
  },
  methods: {
    setNext(next) {
      console.log('setNext :', next)
      switch (next) {
        case 1:
          break
        default:
          break
      }
    },
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
  height: 1024px;
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
    opacity: 1;
  }
}

.content {
  position: relative;
  margin: 0 auto;
  max-width: 1440px;
  height: 1024px;
  border: 1px solid green;
}
</style>
