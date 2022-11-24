<template>
  <section class="step-1">
    <section class="bg">
      <div class="bg-back"></div>
    </section>
    <section class="content content-1" v-if="content === 1">
      <div class="role-wrapper">
        <img class="role-hole" src="@/assets/images/role/hole.png" alt="hole" />
        <img
          class="role-po-light"
          src="@/assets/images/role/role_po_light.png"
          alt="role_po_light"
        />
        <div class="role-mask">
          <img
            class="role-po"
            src="@/assets/images/role/role_po.png"
            alt="role_po"
          />
        </div>
      </div>
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
      <div class="click-mask" @click="setNext(3)">
        <div class="click-tip highlight">點擊畫面任意處繼續</div>
      </div>
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
        @done="setNext(7)"
      >
        在這階段我們要把需求放進產品待辦清單 , 並調整其優先順序。<br />
        對了 ! 我們公司也推薦使用 jira 來做任務的管理呢 !
      </DialogRole>

      <!-- 產品代辦清單區域 -->
      <!-- <div class="product" v-if="isShow > 2">
        <div class="product-block">
          <div class="list-wrapper">
            <div class="list-title">
              <h2>產品待辦清單</h2>
              <p class="capation">Product Backlog</p>
            </div>
            <div class="list">
              <div class="list-item"></div>
              <div class="list-item"></div>
              <div class="list-item"></div>
              <div class="list-item"></div>
            </div>
            <div class="list-bg1"></div>
            <div class="list-bg2"></div>
            <div class="list-light"></div>
          </div>
        </div>
      </div> -->
    </section>
  </section>
</template>

<script>
import gsap from 'gsap'
import DialogRole from '../DialogRole.vue'
import ButtomUI from '../ButtomUI.vue'

export default {
  name: 'Step1',
  data() {
    return {
      isShow: 0,
      content: 1,
    }
  },
  components: {
    DialogRole,
    ButtomUI,
  },
  mounted() {
    gsap.set(['.click-mask', '.btn-ready', '.dialog-3'], {
      autoAlpha: 0,
    })
    const timeline = gsap.timeline()
    timeline
      .to('.bg-back', {
        duration: 1,
        autoAlpha: 1,
      })
      .from('.role-hole', {
        duration: 0.3,
        scaleX: 0,
      })
      .from('.role-po', {
        duration: 0.5,
        top: -304,
        scaleY: 0,
        ease: 'back.out(1)',
      })
      .from(
        '.role-po-light',
        {
          duration: 0.5,
          opacity: 0,
          onComplete: () => {
            this.isShow = 1
          },
        },
        '<'
      )
  },
  methods: {
    setNext(next) {
      console.log('setNext :', next)
      switch (next) {
        case 2:
          console.log('show click mask')
          gsap.to('.click-mask', {
            duration: 0.5,
            autoAlpha: 1,
          })
          break
        case 3:
          console.log('close click mask and dialog')
          const timeline = gsap.timeline()
          timeline
            .to('.click-mask', {
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
          console.log('show btn-ready')
          gsap.to('.btn-ready', {
            duration: 0.5,
            autoAlpha: 1,
            onComplete: () => {
              this.setNext(6)
            },
          })
          break
        case 6:
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
        default:
          break
      }
    },
    content2Anim() {},
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
    opacity: 0;
  }
}

.content {
  position: relative;
  margin: 0 auto;
  max-width: 1440px;
  height: 100vh;
  // top: 0;
  // left: 0;
  // width: 100%;
  // height: 100%;
  border: 1px solid red;
}

.role {
  &-wrapper {
    position: absolute;
    top: 30px;
    left: 30px;
  }
  &-hole {
    width: 324px;
    height: 83px;
    position: absolute;
    top: 0;
    left: 0;
  }
  &-po-light {
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
  &-po {
    width: 320px;
    height: 304px;
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: top;
    border: 1px solid blue;
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

.product {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &-block {
    position: relative;
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    height: 100%;
  }
}
</style>
