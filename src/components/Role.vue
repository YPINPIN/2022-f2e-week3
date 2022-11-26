<template>
  <div
    class="role-wrapper"
    :style="{
      top: `${top}`,
      left: `${left}`,
      transform: `'rotate(${rota}deg)'`,
    }"
  >
    <img class="role-hole" src="@/assets/images/role/hole.png" alt="hole" />
    <img
      class="role-light"
      :src="getImageUrl(`images/role/role_${role}_light.png`)"
      :alt="`role_${role}_light`"
    />
    <div class="role-mask">
      <img
        class="role-img"
        :src="getImageUrl(`images/role/role_${role}.png`)"
        :alt="`role_${role}`"
      />
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'Role',
  data() {
    return {}
  },
  props: {
    isAnim: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      default: 'po',
    },
    top: {
      type: String,
      default: '30',
    },
    left: {
      type: String,
      default: '30',
    },
    rota: {
      type: Number,
      default: 0,
    },
  },
  emits: ['done'],
  mounted() {
    if (!this.isAnim) {
      gsap.set(['.role-img'], {
        scaleY: 1,
        opacity: 1,
      })
      this.$emit('done')
    } else {
      const timeline = gsap.timeline()
      timeline
        .from('.role-hole', {
          duration: 0.3,
          scaleX: 0,
        })
        .to('.role-img', {
          duration: 0.5,
          top: 0,
          scaleY: 1,
          opacity: 1,
          ease: 'back.out(1)',
        })
        .from(
          '.role-light',
          {
            duration: 0.5,
            opacity: 0,
            onComplete: () => {
              this.$emit('done')
            },
          },
          '<'
        )
    }
  },
  methods: {
    getImageUrl(imagePath) {
      return new URL(`/src/assets/${imagePath}`, import.meta.url).href
    },
  },
}
</script>

<style lang="scss" scoped>
.role {
  &-wrapper {
    position: absolute;
    top: 30px;
    left: 30px;
    z-index: 8;
  }
  &-hole {
    width: 324px;
    height: 83px;
    position: absolute;
    top: 0;
    left: 0;
  }
  &-light {
    width: 467px;
    height: 454px;
    position: absolute;
    top: 7px;
    left: -71px;
    border: 1px solid orange;
  }
  &-mask {
    position: absolute;
    top: 7px;
    left: 0;
    width: 320px;
    height: 350px;
    overflow: hidden;
    border: 1px solid green;
    border-radius: 100px;
  }
  &-img {
    width: 320px;
    height: 304px;
    position: absolute;
    top: -304;
    left: 0;
    transform-origin: top;
    border: 1px solid blue;
    opacity: 0;
    transform: scaleY(0);
  }
}
</style>
