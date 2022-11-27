<template>
  <section class="step-2">
    <section class="bg">
      <div class="bg-back"></div>
    </section>
    <section class="content">
      <Role ref="roleP" :isAnim="false" role="po" @done="setNext(1)" />
      <DialogRole
        v-if="isShow > 0"
        class="dialog-1"
        top="52px"
        left="403px"
        width="997px"
        height="224px"
        @done="setNext(2)"
      >
        產品待辦清單好了之後 , 我們來召集 ScrumMaster 和開發團隊共同召開<span
          class="text-tint"
          >短衝規劃會議(Sprint Planning)</span
        >。 短衝即是一個迭代 , 具有固定時間限制 , 我們會在這個會議中 ,
        決定要完成哪些工作事項來達到商業需求 , 列出短衝待辦清單 (Sprint Backlog)
        , 並由開發團隊在接下來的產品開發週期裡執行。
      </DialogRole>
      <Role
        v-if="isShow > 1"
        ref="roleM"
        role="sm"
        top="972px"
        left="1409px"
        :rota="180"
        @done="setNext(3)"
      />
      <Info1 class="info-1" v-if="isShow > 2" @done="setNext(4)" />
      <ClickMask
        v-if="isShow > 3"
        class="click-mask-1"
        :isBg="false"
        :isTip="false"
        @mask-click="setNext(5)"
      />
      <!-- ////////////// -->
      <DialogRoleMM
        v-if="isShow > 4"
        class="dialog-2"
        top="788px"
        left="50px"
        width="997px"
        height="152px"
        @done="setNext(6)"
      >
        哦哦 , 你是新來的前端吧 ! 我是這次的
        <span class="text-tint">ScrumMaster MM</span> ,
        我的工作主要是促成開發團隊成員協作 、 引導團隊進行自省會議 ,
        提升團隊成員對 Scrum 瞭解 。
      </DialogRoleMM>
      <Info2 class="info-2" v-if="isShow > 5" @done="setNext(7)" />
      <ClickMask
        v-if="isShow > 6"
        class="click-mask-2"
        :isBg="false"
        :isTip="false"
        @mask-click="setNext(8)"
      />
      <!-- ////////////// -->
      <DialogRoleMM
        v-if="isShow > 7"
        class="dialog-3"
        top="788px"
        left="50px"
        width="997px"
        height="152px"
        @done="setNext(9)"
      >
        這兩位是 EE 和 GG , 是我們開發團隊的成員唷～ 我們團隊<span
          class="text-tint"
          >一次 Sprint 週期是兩週</span
        >的時間 , 依照我的觀察 , 目前團隊可以負擔的點數 (Story Point) 大約是
        <span class="text-tint">20 點</span>左右。
      </DialogRoleMM>
      <Role
        v-if="isShow > 8"
        ref="roleE"
        role="team1"
        left="878px"
        :scale="0.8"
        @done="setNext(10)"
        @close="setNext(20)"
      />
      <Role
        v-if="isShow > 9"
        ref="roleG"
        role="team2"
        left="1158px"
        :scale="0.8"
        @done="setNext(11)"
      />
      <Info3 class="info-3" v-if="isShow > 10" @done="setNext(12)" />
      <div class="story-spine" v-if="isShow > 11">
        <img src="@/assets/images/other/story_spine.png" alt="story_spine" />
      </div>
      <ClickMask
        v-if="isShow > 11"
        class="click-mask-3"
        :isBg="false"
        :isTip="false"
        @mask-click="setNext(13)"
      />
      <!-- ////////////// -->
      <div class="story story-1">
        <img src="@/assets/images/other/story.png" alt="story_img" />
        <div class="story-point">
          <div class="story-point-bg">1</div>
          <img src="@/assets/images/other/time_1.png" alt="time_1_img" />
        </div>
      </div>
      <div class="story story-2 story-move">
        <img src="@/assets/images/other/story.png" alt="story_img" />
        <div class="story-point">
          <div class="story-point-bg">2</div>
          <img src="@/assets/images/other/time_2.png" alt="time_2_img" />
        </div>
      </div>
      <div class="story story-3 story-move">
        <img src="@/assets/images/other/story.png" alt="story_img" />
        <div class="story-point">
          <div class="story-point-bg">3</div>
          <img src="@/assets/images/other/time_3.png" alt="time_3_img" />
        </div>
      </div>
      <div class="story story-4 story-move">
        <img src="@/assets/images/other/story.png" alt="story_img" />
        <div class="story-point">
          <div class="story-point-bg">5</div>
          <img src="@/assets/images/other/time_5.png" alt="time_5_img" />
        </div>
      </div>
      <div class="story story-5 story-move">
        <img src="@/assets/images/other/story.png" alt="story_img" />
        <div class="story-point">
          <div class="story-point-bg">8</div>
          <img src="@/assets/images/other/time_8.png" alt="time_8_img" />
        </div>
      </div>
      <div class="story story-6 story-move">
        <img src="@/assets/images/other/story.png" alt="story_img" />
        <div class="story-point">
          <div class="story-point-bg story-point-13">13</div>
          <img
            class="story-13"
            src="@/assets/images/other/story_13.png"
            alt="story_13_img"
          />
          <img src="@/assets/images/other/time_13.png" alt="time_13_img" />
        </div>
      </div>
      <div class="story story-7 story-move">
        <img src="@/assets/images/other/story.png" alt="story_img" />
        <div class="story-point">
          <div class="story-point-bg story-point-21">21</div>
          <img
            class="story-21"
            src="@/assets/images/other/story_21.png"
            alt="story_21_img"
          />
          <img src="@/assets/images/other/time_21.png" alt="time_21_img" />
        </div>
      </div>

      <div class="time-large">
        <img src="@/assets/images/other/time.png" alt="time" />
      </div>
      <DialogRoleEE
        v-if="isShow > 12"
        class="dialog-4"
        top="52px"
        left="50px"
        width="790px"
        height="188px"
      >
        欸新來的 , 你應該不知道點數是什麼意思吧ㄏㄏ , 我來跟你介紹一下吧～
        <span class="text-tint">Story Point</span> 目的是為了<span
          class="text-tint"
          >衡量速度</span
        >
        , 是用大概花費的時間預估出的相對點數哦 。
      </DialogRoleEE>
      <ClickMask
        v-if="isShow > 13"
        class="click-mask-4"
        :isBg="false"
        :isTip="false"
        @mask-click="setNext(14)"
      />
      <DialogRoleEE
        v-if="isShow > 14"
        class="dialog-5"
        top="52px"
        left="50px"
        width="790px"
        height="224px"
      >
        以
        <span class="text-tint"
          >「 費氏數列 」 的 1 、2 、3 、5 、8 、13 、21</span
        >
        來估算各項 Story 的分數 。 Story Point 越小 , 表示這個 Story
        花費時間越少 ; 越大 , 花費時間則越多 。 如果出現了一個 21 分 ,
        可能表示這個 Story 太龐大 , 需要再拆分細項執行唷 !
      </DialogRoleEE>
      <ClickMask
        v-if="isShow > 15"
        class="click-mask-5"
        :isBg="false"
        :isTip="false"
        @mask-click="setNext(15)"
      />
      <!-- ////////////// -->
      <DialogRoleGG
        v-if="isShow > 16"
        class="dialog-6"
        top="52px"
        left="50px"
        width="790px"
        height="152px"
        @done="setNext(16)"
      >
        沒錯，如 EE 說的，我這邊已經把剛剛討論好的點數標上去囉～
        你來練習把任務排到短衝待辦清單吧 !
      </DialogRoleGG>
      <ClickMask
        v-if="isShow > 17"
        class="click-mask-6"
        :isBg="false"
        :isTip="false"
        @mask-click="setNext(17)"
      />
      <!-- ////////////////// -->
      <DialogRoleEE
        v-if="isShow > 18"
        class="dialog-7"
        top="436px"
        left="330px"
        width="790px"
        height="152px"
        @done="setNext(18)"
      >
        By the way , 我們平常管理任務是使用
        <img
          class="inline-logo logo-jira"
          src="@/assets/images/logo/logo_jira_w.svg"
          alt="logo_jira"
        />
        這套軟體 , 你有時間記得先去註冊和熟悉唷 !
      </DialogRoleEE>
      <ButtomUI
        class="btn-try"
        text="練習去囉"
        top="calc(100% - 84px - 66px)"
        left="calc(100% - 40px - 94px)"
        @clickEvent="setNext(19)"
      />
    </section>
  </section>
</template>

<script>
import gsap from 'gsap'
import Role from '../Role.vue'
import DialogRole from '../DialogRole.vue'
import DialogRoleMM from '../DialogRoleMM.vue'
import DialogRoleEE from '../DialogRoleEE.vue'
import DialogRoleGG from '../DialogRoleGG.vue'
import ClickMask from '../ClickMask.vue'
import Info1 from '../Info1.vue'
import Info2 from '../Info2.vue'
import Info3 from '../Info3.vue'
import ButtomUI from '../ButtomUI.vue'

export default {
  name: 'Step2',
  data() {
    return {
      isShow: 0,
    }
  },
  components: {
    Role,
    DialogRole,
    DialogRoleMM,
    DialogRoleEE,
    DialogRoleGG,
    ClickMask,
    Info1,
    Info2,
    Info3,
    ButtomUI,
  },
  mounted() {
    gsap.set(['.story', '.time-large', '.btn-try'], {
      autoAlpha: 0,
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
          console.log('show role 2')
          this.isShow = 2
          break
        case 3:
          console.log('show info 1')
          this.isShow = 3
          break
        case 4:
          console.log('show mask click')
          this.isShow = 4
          break
        case 5:
          console.log('close  mask 1, info1 and dialog 1 show dialog 2')
          this.isShow = 5
          const timeline = gsap.timeline()
          timeline
            .to('.click-mask-1', {
              duration: 0.5,
              autoAlpha: 0,
            })
            .to(
              '.info-1',
              {
                duration: 0.5,
                autoAlpha: 0,
              },
              '<'
            )
            .to(
              '.dialog-1',
              {
                duration: 0.5,
                autoAlpha: 0,
                onComplete: () => {
                  console.log(' close role 1')
                  this.$refs.roleP.close()
                },
              },
              '<'
            )
          break
        case 6:
          console.log('show info 2')
          this.isShow = 6
          break
        case 7:
          console.log('show mask click 2')
          this.isShow = 7
          break
        case 8:
          console.log('close mask 2, info2 and dialog 2 show dialog 3')
          const timeline2 = gsap.timeline()
          timeline2
            .to('.click-mask-2', {
              duration: 0.5,
              autoAlpha: 0,
            })
            .to(
              '.info-2',
              {
                duration: 0.5,
                autoAlpha: 0,
              },
              '<'
            )
            .to(
              '.dialog-2',
              {
                duration: 0.5,
                autoAlpha: 0,
                onComplete: () => {
                  this.isShow = 8
                },
              },
              '<'
            )
          break
        case 9:
          console.log('show role 2')
          this.isShow = 9
          break
        case 10:
          console.log('show role 3')
          this.isShow = 10
          break
        case 11:
          console.log('show info 4')
          this.isShow = 11
          break
        case 12:
          console.log('show mask click 3 and story-spine')
          this.isShow = 12
          break
        case 13:
          console.log('close mask 3, info3, and dialog 3')
          const timeline3 = gsap.timeline()
          timeline3
            .to('.click-mask-3', {
              duration: 0.5,
              autoAlpha: 0,
            })
            .to(
              '.story-spine',
              {
                duration: 0.5,
                top: 402,
                left: 368,
              },
              '<'
            )
            .to(
              '.info-3',
              {
                duration: 0.5,
                autoAlpha: 0,
              },
              '<'
            )
            .to(
              '.dialog-3',
              {
                duration: 0.5,
                autoAlpha: 0,
                onComplete: () => {
                  console.log(' close role 2 and show story , dialog 4')
                  this.$refs.roleM.close()
                  this.isShow = 13
                  const timeline4 = gsap.timeline()
                  timeline4
                    .to('.story-1', {
                      duration: 0.5,
                      autoAlpha: 1,
                    })
                    .to('.story-move', {
                      duration: 0.3,
                      x: 100,
                      autoAlpha: 1,
                      stagger: 0.08,
                    })
                    .to('.time-large', {
                      duration: 0.8,
                      scale: 1,
                      autoAlpha: 1,
                      ease: 'back.out(1)',
                      onComplete: () => {
                        this.isShow = 14
                      },
                    })
                },
              },
              '<'
            )
          break
        case 14:
          console.log('close mask click 4 , dialog 4 and show dialog 5 ')
          const timeline5 = gsap.timeline()
          timeline5
            .to('.click-mask-4', {
              duration: 0.5,
              autoAlpha: 0,
            })
            .to('.dialog-4', {
              duration: 0.5,
              autoAlpha: 0,
              onComplete: () => {
                this.isShow = 15
                console.log('show time move ')
                const timeline6 = gsap.timeline()
                timeline6
                  .to('.time-large', {
                    duration: 0.4,
                    top: 363,
                    left: 492,
                    autoAlpha: 0,
                    scale: 0,
                    delay: 0.3,
                  })
                  .to('.story-point', {
                    duration: 1,
                    opacity: 1,
                    stagger: 0.2,
                    onComplete: () => {
                      this.isShow = 16
                    },
                  })
              },
            })
          break
        case 15:
          console.log('close mask click 5, story , dialog 5 and show dialog 6')
          gsap.to('.click-mask-5, .story, .story-spine, .dialog-5', {
            duration: 0.5,
            autoAlpha: 0,
            onComplete: () => {
              this.isShow = 17
            },
          })
          break
        case 16:
          console.log('show click mask 6')
          this.isShow = 18
          break
        case 17:
          console.log('close click mask 6 and show dialog 7')
          gsap.to('.click-mask-6', {
            duration: 0.5,
            autoAlpha: 0,
          })
          this.isShow = 19
          break
        case 18:
          console.log('show btn-try')
          gsap.to('.btn-try', {
            duration: 0.5,
            autoAlpha: 1,
          })
          break
        case 19:
          console.log('btn-try click, close dialog 7 and go to next step')
          const timeline7 = gsap.timeline()
          timeline7
            .to('.btn-try, .dialog-7', {
              duration: 0.5,
              autoAlpha: 0,
            })
            .to('.dialog-6', {
              duration: 0.5,
              autoAlpha: 0,
              onComplete: () => {
                this.$refs.roleE.close()
              },
            })
          break
        case 20:
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
  border: 1px solid green;
}

.story-spine {
  position: absolute;
  top: 348px;
  left: 295px;
  width: 55px;
  height: 185px;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
  }
}

.story {
  position: absolute;
  top: 0;
  left: 0;
  width: 195px;
  height: 185px;
  img {
    width: 100%;
    height: 100%;
  }
  &-1 {
    top: 402px;
    left: 368px;
  }
  &-2 {
    top: 402px;
    left: 523px;
  }
  &-3 {
    top: 402px;
    left: 778px;
  }
  &-4 {
    top: 627px;
    left: 140px;
  }
  &-5 {
    top: 627px;
    left: 395px;
  }
  &-6 {
    top: 627px;
    left: 650px;
  }
  &-7 {
    top: 627px;
    left: 905px;
  }
  &-point {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    &-bg {
      position: absolute;
      top: 52px;
      left: 77px;
      width: 80px;
      height: 80px;
      background: rgba(0, 255, 224, 0.7);
      border-radius: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      font-size: 44px;
      line-height: 150%;
    }
    &-13 {
      background: rgba(255, 122, 0, 0.7);
    }
    &-21 {
      background: rgba(255, 0, 0, 0.7);
    }
    img {
      position: absolute;
      top: -39px;
      left: 124px;
      width: 110px;
      height: 105px;
    }
    .story-13,
    .story-21 {
      position: absolute;
      top: 0;
      left: 0;
      width: 195px;
      height: 185px;
    }
  }
}

.time-large {
  position: absolute;
  top: 329px;
  left: 94px;
  width: 165px;
  height: 165px;
  transform: scale(0);
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
