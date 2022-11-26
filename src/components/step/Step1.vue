<template>
  <section class="step-1">
    <section class="bg">
      <div class="bg-back"></div>
    </section>
    <section class="content">
      <Role v-if="isShowRole" role="po" @done="setNext(1)" />
      <DialogRole
        v-if="isShow > 0"
        class="dialog-1"
        top="52px"
        left="403px"
        width="997px"
        height="224px"
        @done="setNext(2)"
      >
        <span class="text-tint">\ 碰 / </span>我是短衝小精靈 , 開發 A 組的 PO 。
        <br />
        <span class="text-tint"> PO 也就是產品負責人(Product Owner) </span>,
        產品負責人會負責評估產品待辦清單的價值與重要性，
        依序排列要執行的優先順序 , 對齊產品目標 。 最後排出產品待辦清單 (Product
        Backlog) 唷 !
      </DialogRole>
      <ClickMask class="click-mask-1" :isBg="false" @mask-click="setNext(3)" />
      <!-- //////////////// -->
      <DialogRole
        v-if="isShow > 1"
        class="dialog-2"
        top="52px"
        left="403px"
        width="997px"
        height="152px"
        @done="setNext(4)"
      >
        剛好我最近手邊有一個 「 人才招募系統 」 的案子 , 我才剛列出了<span
          class="text-tint"
          >「 產品需求清單 」</span
        >。<br />既然你都來了 , 來試試看調整產品優先度 , 排出產品待辦清單吧 !
      </DialogRole>
      <ButtomUI
        class="btn-ready"
        text="準備好了"
        top="calc(100% - 84px - 66px)"
        left="calc(100% - 40px - 94px)"
        @clickEvent="setNext(5)"
      />
      <!-- //////////////// -->
      <DialogRole
        v-if="isShow > 2"
        class="dialog-3"
        top="52px"
        left="403px"
        width="997px"
        height="152px"
      >
        在這階段我們要把需求放進產品待辦清單 , 並調整其優先順序。<br />
        對了 ! 我們公司也推薦使用
        <img
          class="inline-logo logo-jira"
          src="@/assets/images/logo/logo_jira_w.svg"
          alt="logo_jira"
        />
        來做任務的管理呢 !
      </DialogRole>
      <!-- 產品代辦清單區域 -->
      <ProductBacklog
        v-if="isShow > 2"
        @btn-mask="setNext(6)"
        @btn-done="setNext(7)"
      />
      <DialogRole
        v-if="isShow > 3"
        class="dialog-4"
        top="52px"
        left="403px"
        width="997px"
        height="163px"
      >
        <h2>換你來試試看吧 !</h2>
        提示 : 請把需求拖移至產品待辦清單 , 並調整其優先順序 。
      </DialogRole>

      <!-- //////////////// -->
      <DialogRole
        v-if="isShow > 4"
        class="dialog-5"
        top="52px"
        left="403px"
        width="997px"
        height="128px"
      >
        <h2>哇喔完成惹 , 尼太棒ㄌ！ 我們繼續吧 !</h2>
      </DialogRole>
      <ClickMask class="click-mask-2" @mask-click="setNext(8)" />
    </section>
  </section>
</template>

<script>
import gsap from 'gsap'
import Role from '../Role.vue'
import DialogRole from '../DialogRole.vue'
import ClickMask from '../ClickMask.vue'
import ButtomUI from '../ButtomUI.vue'
import ProductBacklog from '../ProductBacklog.vue'
export default {
  name: 'Step1',
  data() {
    return {
      isShow: 0,
      isShowRole: false,
    }
  },
  components: {
    Role,
    DialogRole,
    ClickMask,
    ButtomUI,
    ProductBacklog,
  },
  mounted() {
    gsap.set(['.click-mask-1', '.btn-ready', '.click-mask-2'], {
      autoAlpha: 0,
    })
    gsap.to('.bg-back', {
      duration: 1,
      autoAlpha: 1,
      onComplete: () => {
        this.isShowRole = true
      },
    })
  },
  methods: {
    setNext(next) {
      console.log('setNext :', next)
      switch (next) {
        case 1:
          console.log('show dialog 1')
          this.isShow = 1
          break
        case 2:
          console.log('show click mask 1')
          gsap.to('.click-mask-1', {
            duration: 0.5,
            autoAlpha: 1,
          })
          break
        case 3:
          console.log('close click mask 1 and dialog 1 show dialog 2')
          const timeline = gsap.timeline()
          timeline
            .to('.click-mask-1', {
              duration: 0.5,
              autoAlpha: 0,
            })
            .to(
              '.dialog-1',
              {
                duration: 0.5,
                autoAlpha: 0,
                onComplete: () => {
                  this.isShow = 2
                },
              },
              '<'
            )
          break
        case 4:
          console.log('show btn-ready')
          gsap.to('.btn-ready', {
            duration: 0.5,
            autoAlpha: 1,
          })
          break
        case 5:
          console.log('close btn-ready and dialog 2')
          const timeline2 = gsap.timeline()
          timeline2
            .to('.btn-ready', {
              duration: 0.5,
              autoAlpha: 0,
            })
            .to(
              '.dialog-2',
              {
                duration: 0.5,
                autoAlpha: 0,
                onComplete: () => {
                  this.isShow = 3
                },
              },
              '<'
            )
          break
        case 6:
          console.log('close dialog 3 show dialog 4')
          gsap.to('.dialog-3', {
            duration: 0.5,
            autoAlpha: 0,
            onComplete: () => {
              this.isShow = 4
            },
          })
          break
        case 7:
          console.log('close dialog 4 show click mask 2 and dialog 5')
          const timeline3 = gsap.timeline()
          timeline3
            .to('.dialog-4', {
              duration: 0.5,
              autoAlpha: 0,
              onComplete: () => {
                this.isShow = 5
              },
            })
            .to('.click-mask-2', {
              duration: 0.5,
              autoAlpha: 1,
            })
          break
        case 8:
          console.log('go to next step')
          this.$store.commit('onNextStep')
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
    opacity: 0;
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
