<template>
  <transition name="fade" @after-enter="isDialogShow = true">
    <div
      v-if="isFadeIn"
      class="dialog-wrapper"
      :style="{
        top: `${top}`,
        left: `${left}`,
        width: `${width}`,
        height: `${height}`,
      }"
    >
      <div class="dialog-title">
        <h3>MM</h3>
        <div class="dialog-title-shadow"></div>
      </div>
      <div class="dialog-talk-bg"></div>

      <transition name="show" @after-enter="iconShow">
        <p class="dialog-talk" v-show="isDialogShow">
          <slot></slot>
        </p>
      </transition>
      <img
        v-show="isIconShow"
        ref="icon"
        class="dialog-icon"
        src="@/assets/images/icon/ic_continue_sm.svg"
        alt="ic_continue"
      />
    </div>
  </transition>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'DialogRoleMM',
  data() {
    return {
      // 是否開始顯示對話框
      isFadeIn: false,
      // 使否開始顯示對話
      isDialogShow: false,
      // 小icon顯示
      isIconShow: false,
    }
  },
  props: {
    top: {
      type: String,
      default: '0',
    },
    left: {
      type: String,
      default: '0',
    },
    width: {
      type: String,
      default: '50%',
    },
    height: {
      type: String,
      default: '50%',
    },
  },
  emits: ['done'],
  mounted() {
    this.isFadeIn = true
  },
  methods: {
    iconShow() {
      this.isIconShow = true
      gsap.fromTo(
        this.$refs.icon,
        {
          y: 0,
        },
        {
          duration: 0.4,
          y: -6,
          yoyo: true,
          repeat: -1,
        }
      )
      this.$emit('done')
    },
  },
}
</script>

<style lang="scss" scoped>
.dialog {
  &-wrapper {
    pointer-events: none;
    position: absolute;
    z-index: 8;
    padding: 40px 84px 40px 100px;

    box-shadow: 0px 0px 24px 8px rgba(211, 85, 255, 0.8),
      0px 0px 8px 4px rgba(211, 85, 255, 0.95);
    backdrop-filter: blur(5px);
    border-radius: 40px;
  }
  &-title {
    position: absolute;
    top: 40px;
    left: -10px;
    height: 44px;
    background: var(--role-sm);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 24px;
    h3 {
      color: var(--bg-dark);
    }
    &-shadow {
      position: absolute;
      top: 0;
      left: 1px;
      width: 10px;
      height: 52px;
      z-index: -1;
      transform: skew(20deg, 20deg) rotate(20deg);
      background: var(--role-sm-dark);
    }
  }
  &-talk {
    transform-origin: top center;
    overflow: hidden;
    &-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: var(--role-sm-linear), var(--bg-dark-60);
      border: 2px solid var(--role-sm);
      border-radius: 40px;
    }
  }
  &-icon {
    position: absolute;
    right: 32px;
    bottom: 40px;
  }
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.8s ease;
}
.fade-enter-to {
  opacity: 1;
}

.show-enter-from {
  height: 0;
}
.show-enter-active {
  transition: height 0.5s ease, opacity 0.2s ease;
}
.show-enter-to {
  height: 100%;
}
</style>
