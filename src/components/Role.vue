<template>
  <div
    class="role-wrapper"
    :style="{
      top: `${top}`,
      left: `${left}`,
      rotate: `${rota}deg`,
      scale: `${scale}`,
    }"
  >
    <img
      ref="hole"
      class="role-hole"
      src="@/assets/images/role/hole.png"
      alt="hole"
    />
    <img
      ref="light"
      class="role-light"
      :src="getImageUrl(`images/role/role_${role}_light.png`)"
      :alt="`role_${role}_light`"
    />
    <div class="role-mask">
      <img
        ref="img"
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
    scale: {
      type: Number,
      default: 1,
    },
  },
  emits: ['done', 'close'],
  mounted() {
    if (!this.isAnim) {
      gsap.set(this.$refs.img, {
        scaleY: 1,
        opacity: 1,
      })
      this.$emit('done')
    } else {
      const timeline = gsap.timeline()
      timeline
        .from(this.$refs.hole, {
          duration: 0.3,
          scaleX: 0,
        })
        .to(this.$refs.img, {
          duration: 0.5,
          top: 0,
          scaleY: 1,
          opacity: 1,
          ease: 'back.out(1)',
        })
        .from(
          this.$refs.light,
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
    close() {
      const timeline = gsap.timeline()
      timeline
        .to(this.$refs.light, {
          duration: 0.5,
          opacity: 0,
          display: 'none',
        })
        .to(
          this.$refs.img,
          {
            duration: 0.5,
            top: -304,
            scaleY: 0,
            opacity: 0,
            display: 'none',
            onComplete: () => {
              this.$emit('close')
            },
          },
          '<'
        )
        .to(this.$refs.hole, {
          duration: 0.3,
          scaleX: 0,
          autoAlpha: 0,
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.role {
  &-wrapper {
    pointer-events: none;
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
