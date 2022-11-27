<template>
  <section class="step-4">
    <section class="bg">
      <div class="bg-back"></div>
    </section>
    <section class="content">
      <Role
        ref="roleE"
        role="team1"
        left="1158px"
        :scale="0.8"
        @close="setNext(10)"
      />
      <DialogRoleEE
        v-if="isShow > 0"
        class="dialog-1"
        top="52px"
        left="50px"
        width="1070px"
        height="152px"
        @done="setNext(2)"
      >
        等等等等等 , 你都還不知道什麼是 Sprint 吧 ! 讓我先為你介紹一下～<br />
        仔細聽好唷 , 等等會考考你 !
      </DialogRoleEE>
      <ClickMask
        v-if="isShow > 1"
        class="click-mask-1"
        :isBg="false"
        :isTip="false"
        @mask-click="setNext(3)"
      />
      <!-- //////////////// -->
      <DialogRoleEE
        v-if="isShow > 2"
        class="dialog-2"
        top="52px"
        left="50px"
        width="1070px"
        height="188px"
        @done="setNext(4)"
      >
        Sprint 是一個短衝 , 開發團隊會在這期間執行開發 。 在這段期間內 ,
        開發團隊舉辦<span class="text-tint">每日站立會議 (Daily Scrum)</span> ,
        追蹤成員間的工作狀況 , 在 Sprint 的結束也會包含<span class="text-tint"
          >短衝檢視會議 (Sprint Review)</span
        >
        以及<span class="text-tint">短衝自省會議 (Sprint Retrospective)</span>。
      </DialogRoleEE>
      <div class="info info-1">
        <img
          class="info-img"
          src="@/assets/images/other/sprint_daily.png"
          alt="sprint_daily"
        />
        <div class="info-title">
          <h2>每日站立會議</h2>
          <p class="capation text-tint">Daily Scrum</p>
        </div>
        <div class="info-text">
          <p>每天都要進行的會議 , 以15分鐘為限制</p>
          <ul>
            <li>昨天為團隊的短衝目標 (Sprint Goal)做了那些進度</li>
            <li>今天我會如何準備來幫助團隊達到短衝目標</li>
            <li>過程中有遇到什麼問題、難題</li>
          </ul>
          <p>透過團隊分享 , 追蹤大家的工作狀況。</p>
        </div>
      </div>
      <div class="info info-2">
        <img
          class="info-img"
          src="@/assets/images/other/sprint_review.png"
          alt="sprint_review"
        />
        <div class="info-title">
          <h2>短衝檢視會議</h2>
          <p class="capation text-tint">Sprint Review</p>
        </div>
        <div class="info-text">
          <p>用來檢視該次短衝增量的成果 ， 以蒐集相關的回饋數據或意見 。</p>
        </div>
      </div>
      <div class="info info-3">
        <img
          class="info-img"
          src="@/assets/images/other/sprint_retro.png"
          alt="sprint_retro"
        />
        <div class="info-title">
          <h2>短衝自省會議</h2>
          <p class="capation text-tint">Sprint Retrospective</p>
        </div>
        <div class="info-text">
          <p>團隊在自省會議裡 , 會共同回顧該短衝歷程發生的事情</p>
          <ul>
            <li>好的地方</li>
            <li>可以改進的地方</li>
            <li>如何維持我們已有的成功經驗</li>
          </ul>
        </div>
      </div>
      <ClickMask
        v-if="isShow > 3"
        class="click-mask-2"
        :isBg="false"
        :isTip="false"
        @mask-click="setNext(5)"
      />
      <!-- //////////////// -->
      <DialogRoleEE
        v-if="isShow > 4"
        class="dialog-3"
        top="52px"
        left="50px"
        width="1070px"
        height="152px"
        @done="setNext(6)"
      >
        優化工作流程、讓團隊有變得更好的機會。<br />
        推薦工具 :
        <img
          class="inline-logo logo-confluence"
          src="@/assets/images/logo/logo_confluence_w.svg"
          alt="logo_confluence"
        />
      </DialogRoleEE>
      <ButtomUI
        class="btn-practice"
        text="練習去囉"
        top="calc(100% - 84px - 66px)"
        left="calc(100% - 40px - 94px)"
        @clickEvent="setNext(7)"
      />
      <!-- //////////////// -->
      <DialogRoleEE
        v-if="isShow > 5"
        class="dialog-4"
        top="52px"
        left="50px"
        width="1070px"
        height="199px"
      >
        <h2>換你來試試看吧 !</h2>
        在這經典的 Surum 流程圖中 , 這些流程分別代表哪一個會議呢 ? <br />
        提示 : 把右側的三個流程拖移至正確的位置上吧 !
      </DialogRoleEE>
      <SprintProcess v-if="isShow > 5" @btn-done="setNext(8)" />
      <!-- //////////////// -->
      <DialogRoleEE
        v-if="isShow > 6"
        class="dialog-5"
        top="52px"
        left="50px"
        width="1070px"
        height="128px"
      >
        <h2>哼哼沒想到你這麼快就學會惹 , 快結束了加油加油 !</h2>
      </DialogRoleEE>
      <ClickMask
        v-if="isShow > 6"
        class="click-mask-3"
        @mask-click="setNext(9)"
      />
    </section>
  </section>
</template>

<script>
import gsap from 'gsap'
import Role from '../Role.vue'
import DialogRoleEE from '../DialogRoleEE.vue'
import ClickMask from '../ClickMask.vue'
import ButtomUI from '../ButtomUI.vue'
import SprintProcess from '../SprintProcess.vue'

export default {
  name: 'Step3',
  data() {
    return {
      isShow: 0,
    }
  },
  components: {
    Role,
    DialogRoleEE,
    ClickMask,
    ButtomUI,
    SprintProcess,
  },
  mounted() {
    gsap.set('.info, .btn-practice', {
      autoAlpha: 0,
    })
    this.setNext(1)
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
          this.isShow = 2
          break
        case 3:
          console.log('close dialog 1, click mask 1 and show dialog 2')
          gsap.to('.dialog-1, .click-mask-1', {
            duration: 0.5,
            autoAlpha: 0,
          })
          this.isShow = 3
          break
        case 4:
          console.log('show info and click mask 2')
          const timeline1 = gsap.timeline()
          timeline1
            .fromTo(
              '.info',
              {
                x: -150,
                autoAlpha: 0,
              },
              {
                duration: 0.8,
                x: 0,
                autoAlpha: 1,
                stagger: 0.15,
                ease: 'power3.out',
              }
            )
            .from('.info-text', {
              duration: 0.8,
              height: 0,
              stagger: 0.2,
              onComplete: () => {
                this.isShow = 4
              },
            })

          break
        case 5:
          console.log('close click mask 2 , dialog 2 and show dialog 3')
          gsap.to('.dialog-2, .click-mask-2', {
            duration: 0.5,
            autoAlpha: 0,
          })
          this.isShow = 5
          break
        case 6:
          console.log('show ')
          gsap.to('.btn-practice', {
            duration: 0.3,
            autoAlpha: 1,
          })
          break
        case 7:
          console.log(
            'info title move, btn-practice, dialog 3 close, show dialog 4'
          )
          const timeline2 = gsap.timeline()
          timeline2
            .to('.dialog-3, .info-img, .info-text, .btn-practice', {
              duration: 0.4,
              autoAlpha: 0,
            })
            .to(
              '.info-title',
              {
                duration: 0.8,
                width: '300px',
                onComplete: () => {
                  this.isShow = 6
                },
              },
              '<'
            )
            .to(
              '.info-1',
              {
                duration: 0.8,
                top: 347,
                left: 1090,
              },
              '<'
            )
            .to(
              '.info-2',
              {
                duration: 0.8,
                top: 465,
                left: 1090,
              },
              '<'
            )
            .to(
              '.info-3',
              {
                duration: 0.8,
                top: 583,
                left: 1090,
              },
              '<'
            )
            .to('.info', {
              duration: 0.4,
              autoAlpha: 0,
            })
          break
        case 8:
          console.log('close dialog 4 ,and show dialog 5, click mask 3')
          gsap.to('.dialog-4', {
            duration: 0.5,
            autoAlpha: 0,
            onComplete: () => {
              this.isShow = 7
            },
          })
          break
        case 9:
          console.log('close role')
          this.$refs.roleE.close()
          break
        case 10:
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
    opacity: 1;
  }
}

.content {
  position: relative;
  margin: 0 auto;
  max-width: 1440px;
  height: 1024px;
}

.info {
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  &-img {
    position: absolute;
    top: -208px;
    left: 0;
    width: 400px;
    height: 188px;
  }
  &-title {
    position: absolute;
    top: 0;
    left: 10px;
    width: 380px;
    height: 94px;
    background: var(--bg--dark-60);
    border: 4px solid var(--role-team1);
    backdrop-filter: blur(5px);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      color: var(--role-team1);
    }
  }
  &-text {
    overflow: hidden;
    position: absolute;
    top: 114px;
    left: 10px;
    width: 380px;
    padding: 0;
    ul {
      padding-left: 20px;
      li {
        list-style-type: disc;
      }
    }
  }
  &-1 {
    top: 508px;
    left: 60px;
    .info-text {
      height: 277px;
    }
  }
  &-2 {
    top: 508px;
    left: 520px;
    .info-text {
      height: 80px;
    }
  }
  &-3 {
    top: 508px;
    left: 980px;
    .info-text {
      height: 190px;
    }
  }
}
</style>
