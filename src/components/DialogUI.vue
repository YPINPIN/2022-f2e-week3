<template>
  <div class="dialog-wrapper">
    <div class="dialog-title">
      <h3>（謎之音）</h3>
      <div class="dialog-title-shadow"></div>
    </div>
    <transition name="show">
      <p class="dialog-talk talk" v-show="isDialogShow">
        呦呼 ， 歡迎進入 「SCRUM 新手村」 ， 在正式加入專案開發之前
        ，需要請你先了解 Scrum 的流程與精神 ！ <br />
        <br />
        請接受挑戰任務 ， 成功通過 Scrum 新手村的挑戰任務吧～
      </p>
    </transition>
  </div>
  <transition name="fade">
    <ButtomUI
      v-show="isDialogShow"
      text="接受挑戰"
      top="700px"
      @clickEvent="onStartClick"
    />
  </transition>
</template>

<script>
import ButtomUI from '../components/ButtomUI.vue'

export default {
  name: 'DialogUI',
  data() {
    return {
      // 使否開始顯示對話
      isDialogShow: false,
    }
  },
  emits: ['startgame'],
  components: {
    ButtomUI,
  },
  methods: {
    onStartClick() {
      this.$emit('startgame')
    },
    onDialogShow() {
      console.log('onDialogShow')
      this.isDialogShow = true
    },
  },
}
</script>

<style lang="scss" scoped>
.dialog {
  &-wrapper {
    position: absolute;
    top: 229px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    max-width: 908px;
    height: 430px;
    padding: 100px 40px 0;

    display: flex;
    justify-content: center;
    // align-items: center;

    background: var(--bg-dark-60);
    border: 2px solid var(--primary-default);
    box-shadow: 0px 0px 24px 8px rgba(0, 255, 224, 0.8),
      0px 0px 8px 8px rgba(0, 255, 224, 0.95);
    backdrop-filter: blur(5px);
    border-radius: 80px;
  }
  &-title {
    position: absolute;
    top: 40px;
    left: -10px;
    height: 44px;
    background: var(--primary-default);
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
      left: -2px;
      width: 10px;
      height: 52px;
      transform: skew(20deg, 20deg) rotate(20deg);
      background: #00ffe0;
    }
  }
  &-talk {
    max-width: 707px;
    transform-origin: top center;
    overflow: hidden;
  }
}

.show-enter-from {
  height: 0;
}
.show-enter-active {
  transition: height 1s ease, opacity 0.5s ease;
}
.show-enter-to {
  height: 100%;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s ease 0.5s;
}
.fade-enter-to {
  opacity: 1;
}
</style>
