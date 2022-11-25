<template>
  <div class="mask">
    <div class="mask-color" v-if="isBg"></div>
    <div class="mask-black" v-if="isBg"></div>
    <div class="click-mask" @click="onMaskClick">
      <div class="click-tip highlight" v-if="isTip">點擊畫面任意處繼續</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClickMask',
  props: {
    isBg: {
      type: Boolean,
      default: true,
    },
    isTip: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['mask-click'],
  methods: {
    onMaskClick() {
      this.$emit('mask-click')
    },
  },
}
</script>

<style lang="scss" scoped>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 1440px;
  height: 1024px;
  &-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primary-linear);
  }
  &-black {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(28, 50, 69, 0.6);
    backdrop-filter: blur(5px);
  }
}
.click {
  &-mask {
    position: relative;
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
  }
  &-tip {
    padding: 8px 40px;
    position: absolute;
    min-width: 268px;
    min-height: 52px;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
    color: var(--primary-default);
    border: 2px solid var(--primary-default);
    border-radius: 20px;
  }
}
</style>
