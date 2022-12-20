<template>
  <section class="step-0">
    <section class="bg">
      <div class="bg-back">
        <div class="leaf-dark">
          <img
            class="leaf-dark-top"
            src="@/assets/images/bg/bg_leafDark_4_t.png"
            alt="leafDark_4_t"
          />
          <img
            class="leaf-dark-right"
            src="@/assets/images/bg/bg_leafDark_3_r.png"
            alt="leafDark_3_r"
          />
          <img
            class="leaf-dark-bottom"
            src="@/assets/images/bg/bg_leafDark_2_b.png"
            alt="leafDark_2_b"
          />
          <img
            class="leaf-dark-left"
            src="@/assets/images/bg/bg_leafDark_1_l.png"
            alt="leafDark_1_l"
          />
        </div>
        <div class="leaf-tint">
          <img
            class="leaf-tint-top"
            src="@/assets/images/bg/bg_leafTint_3_t.png"
            alt="leafTint_4_t"
          />
          <img
            class="leaf-tint-right"
            src="@/assets/images/bg/bg_leafTint_4_rb.png"
            alt="leafTint_3_r"
          />
          <img
            class="leaf-tint-bottom"
            src="@/assets/images/bg/bg_leafTint_2_lb.png"
            alt="leafTint_2_b"
          />
          <img
            class="leaf-tint-left"
            src="@/assets/images/bg/bg_leafTint_1_lt.png"
            alt="leafTint_1_l"
          />
        </div>
      </div>
    </section>
    <section class="content content-1" v-if="!isEnter">
      <div class="content-logo">
        <img src="@/assets/images/logo/logo_hole.png" alt="logo_hole" />
      </div>
      <h2 class="content-title">深入敏捷の村一探究竟</h2>
      <ButtomUI text="進入村莊" top="669px" @clickEvent="onEnterBtnClick" />
    </section>
    <section class="content content-2" v-if="isEnter && !isStart">
      <DialogUI ref="dialog" @startgame="onStartClick" />
    </section>
  </section>
</template>

<script>
import gsap from 'gsap'
import ButtomUI from '@/components/ButtomUI.vue'
import DialogUI from '@/components/DialogUI.vue'

export default {
  name: 'Step0',
  data() {
    return {
      // 是否點擊進入村莊
      isEnter: false,
      // 是否點擊接受挑戰
      isStart: false,
    }
  },
  components: {
    ButtomUI,
    DialogUI,
  },
  methods: {
    onEnterBtnClick() {
      const timeline = gsap.timeline()
      timeline
        .to('.content-1', {
          duration: 0.5,
          autoAlpha: 0,
          onComplete: () => {
            this.isEnter = true
          },
        })
        .to('.leaf-tint-top', {
          duration: 1,
          y: -400,
          ease: 'power3.inOut',
        })
        .to(
          '.leaf-tint-right',
          {
            duration: 1,
            x: 646,
            y: 350,
            ease: 'power3.inOut',
          },
          '<'
        )
        .to(
          '.leaf-tint-bottom',
          {
            duration: 1,
            y: 343,
            ease: 'power3.inOut',
          },
          '<'
        )
        .to(
          '.leaf-tint-left',
          {
            duration: 1,
            x: -566,
            y: -340,
            ease: 'power3.inOut',
          },
          '<'
        )
        .to('.leaf-tint', {
          duration: 0,
          autoAlpha: 0,
          onComplete: () => {
            gsap.to('.content-2', {
              duration: 0.5,
              autoAlpha: 1,
              onComplete: () => {
                this.dialogShow()
              },
            })
          },
        })
    },
    onStartClick() {
      const timeline = gsap.timeline()
      timeline
        .to('.content-2', {
          duration: 0.5,
          autoAlpha: 0,
          onComplete: () => {
            this.isStart = true
          },
        })
        .to('.leaf-dark-top', {
          duration: 1,
          y: -464,
          ease: 'power3.inOut',
        })
        .to(
          '.leaf-dark-right',
          {
            duration: 1,
            x: 738,
            ease: 'power3.inOut',
          },
          '<'
        )
        .to(
          '.leaf-dark-bottom',
          {
            duration: 1,
            y: 488,
            ease: 'power3.inOut',
          },
          '<'
        )
        .to(
          '.leaf-dark-left',
          {
            duration: 1,
            x: -795,
            ease: 'power3.inOut',
          },
          '<'
        )
        .to('.leaf-dark', {
          duration: 0,
          autoAlpha: 0,
          onComplete: () => {
            this.nextStep()
          },
        })
    },
    dialogShow() {
      // console.log('dialogShow')
      this.$refs.dialog.onDialogShow()
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
  height: 1024px;
  background: var(--bg-dark);

  &-back {
    position: relative;
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    height: 100%;
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
  height: 1024px;
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
  &-2 {
    visibility: hidden;
  }
}
</style>
