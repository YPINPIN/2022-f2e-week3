<template>
  <section class="step-0">
    <section class="bg">
      <div class="bg-back">
        <transition name="dark" @after-leave="nextStep">
          <div class="leaf-dark" v-if="!isLeafMoveEnd">
            <transition name="top" @after-leave="isLeafMoveEnd = true">
              <img
                v-if="!isLeafMoveStart"
                class="leaf-dark-top"
                src="@/assets/images/bg/bg_leafDark_4_t.png"
                alt="leafDark_4_t"
              />
            </transition>
            <transition name="right">
              <img
                v-if="!isLeafMoveStart"
                class="leaf-dark-right"
                src="@/assets/images/bg/bg_leafDark_3_r.png"
                alt="leafDark_3_r"
              />
            </transition>
            <transition name="bottom">
              <img
                v-if="!isLeafMoveStart"
                class="leaf-dark-bottom"
                src="@/assets/images/bg/bg_leafDark_2_b.png"
                alt="leafDark_2_b"
              />
            </transition>
            <transition name="left">
              <img
                v-if="!isLeafMoveStart"
                class="leaf-dark-left"
                src="@/assets/images/bg/bg_leafDark_1_l.png"
                alt="leafDark_1_l"
              />
            </transition>
          </div>
        </transition>
        <transition name="tint">
          <div class="leaf-tint" v-if="!isLeafMove">
            <transition name="top" @after-leave="isLeafMove = true">
              <img
                v-if="!isEnter"
                class="leaf-tint-top"
                src="@/assets/images/bg/bg_leafTint_3_t.png"
                alt="leafTint_4_t"
              />
            </transition>
            <transition name="right">
              <img
                v-if="!isEnter"
                class="leaf-tint-right"
                src="@/assets/images/bg/bg_leafTint_4_rb.png"
                alt="leafTint_3_r"
              />
            </transition>
            <transition name="bottom">
              <img
                v-if="!isEnter"
                class="leaf-tint-bottom"
                src="@/assets/images/bg/bg_leafTint_2_lb.png"
                alt="leafTint_2_b"
              />
            </transition>
            <transition name="left">
              <img
                v-if="!isEnter"
                class="leaf-tint-left"
                src="@/assets/images/bg/bg_leafTint_1_lt.png"
                alt="leafTint_1_l"
              />
            </transition>
          </div>
        </transition>
      </div>
    </section>
    <transition name="fade">
      <section class="content" v-if="!isEnter">
        <div class="content-logo">
          <img src="@/assets/images/logo/logo_hole.png" alt="logo_hole" />
        </div>
        <h2 class="content-title">深入敏捷の村一探究竟</h2>
        <ButtomUI text="進入村莊" top="669px" @clickEvent="isEnter = true" />
      </section>
    </transition>
    <transition
      name="fadeDialog"
      @after-enter="dialogShow"
      @after-leave="this.isLeafMoveStart = true"
    >
      <section class="content" v-if="isEnter && !isStart">
        <DialogUI ref="dialog" @startgame="this.isStart = true" />
      </section>
    </transition>
  </section>
</template>

<script>
import ButtomUI from '@/components/ButtomUI.vue'
import DialogUI from '@/components/DialogUI.vue'

export default {
  data() {
    return {
      // 是否點擊進入村莊
      isEnter: false,
      // 樹葉是否已完成散開動畫
      isLeafMove: false,
      // 第二層樹葉散開動畫
      isLeafMoveStart: false,
      // 第二層樹葉是否已完成散開動畫
      isLeafMoveEnd: false,
      // 是否點擊接受挑戰
      isStart: false,
    }
  },
  components: {
    ButtomUI,
    DialogUI,
  },
  methods: {
    dialogShow() {
      console.log('dialogShow')
      this.$refs.dialog.onDialogShow()
    },
    leaf2Move() {
      console.log('leaf2Move')
      this.isLeafMove2 = true
    },
    nextStep() {
      this.$store.commit('onNextStep')
    },
  },
}
</script>

<style lang="scss" scoped>
// 背景
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
  }
  .leaf-dark,
  .leaf-tint {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      position: absolute;
    }
  }

  .leaf-dark {
    &-top {
      width: 910px;
      height: 464px;
      top: 0;
      left: 318px;
    }
    &-right {
      width: 738px;
      height: 1024px;
      top: 0;
      left: 702px;
    }
    &-bottom {
      width: 777px;
      height: 488px;
      top: 536px;
      left: 219px;
    }
    &-left {
      width: 795px;
      height: 1024px;
      top: 0;
      left: 0;
    }
  }
  .leaf-tint {
    z-index: 2;
    &-top {
      width: 693px;
      height: 387px;
      top: 0;
      left: 527px;
    }
    &-right {
      width: 646px;
      height: 706px;
      top: 318px;
      left: 794px;
    }
    &-bottom {
      width: 806px;
      height: 343px;
      top: 681px;
      left: 0;
    }
    &-left {
      width: 566px;
      height: 665px;
      top: 0;
      left: 0;
    }
  }
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &-logo {
    position: absolute;
    left: 50%;
    top: 84px;
    transform: translateX(-50%);
    img {
      width: 1000px;
      height: 736px;
    }
  }
  &-title {
    position: absolute;
    left: 50%;
    top: 605px;
    transform: translateX(-50%);
    text-align: center;
    color: var(--text-default);
  }
}

.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-leave-to {
  opacity: 0;
}

.tint-leave-active {
  transition: opacity 0s ease;
}
.tint-leave-to {
  opacity: 0;
}

.dark-leave-active {
  transition: opacity 1s ease;
}
.dark-leave-to {
  opacity: 0;
}

.top-leave-active,
.right-leave-active,
.bottom-leave-active,
.left-leave-active {
  transition: transform 1s ease 0.5s;
}
.top-leave-to {
  transform: translateY(-464px); //translateY(-400px);
}
.right-leave-to {
  transform: translateX(738px); //translateX(646px);
}
.bottom-leave-to {
  transform: translateY(488px); //translateY(343px);
}
.left-leave-to {
  transform: translateX(-795px); //translateX(-566px);
}

.fadeDialog-enter-from,
.fadeDialog-leave-to {
  opacity: 0;
}
.fadeDialog-enter-active {
  transition: opacity 0.5s ease 1.5s;
}
.fadeDialog-enter-to,
.fadeDialog-leave-from {
  opacity: 1;
}
.fadeDialog-leave-active {
  transition: opacity 0.5s ease;
}
</style>
