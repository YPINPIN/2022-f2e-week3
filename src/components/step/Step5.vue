<template>
  <section class="step-5">
    <section class="bg">
      <div class="bg-back"></div>
    </section>
    <section class="content">
      <Role
        ref="roleG"
        role="team2"
        left="1158px"
        :scale="0.8"
        @close="setNext(6)"
      />
      <DialogRoleGG
        v-if="isShow > 0"
        class="dialog-1"
        top="52px"
        left="50px"
        width="1070px"
        height="152px"
        @done="setNext(2)"
      >
        嗚啊啊新來的 , 你真的很幸運 , 今天剛好是開發 B 組的 Retro ,
        你也來見識一下 , 看看 Retro 都該做些什麼吧～～
      </DialogRoleGG>
      <ClickMask
        v-if="isShow > 1"
        class="click-mask-1"
        :isBg="false"
        :isTip="false"
        @mask-click="setNext(3)"
      />
      <!-- //////////////// -->
      <DialogRoleGG
        v-if="isShow > 2"
        class="dialog-2"
        top="52px"
        left="50px"
        width="1070px"
        height="152px"
      >
        我們會在會議裡請團隊成員提出哪些是做得好的地方 、 哪些可以繼續改善的地方
        ? 並記錄再 Confluence 中 。 Retro 重點在於「正面表述」， 你也思考看看 ,
        哪一些是適合 Retro 的回饋呢 ?
      </DialogRoleGG>
      <div class="question">
        <div class="question-item left">
          <div class="question-tag question-tag-1">
            <h2>Q1.做得好的地方?</h2>
          </div>
          <div class="question-block">
            <div class="question-radio">
              <div class="question-role">
                <Role
                  role="sm"
                  top="235px"
                  left="202px"
                  :scale="0.5"
                  :isAnim="false"
                  :rota="180"
                />
              </div>
              <div class="radio">
                <input
                  type="radio"
                  name="question-1"
                  id="radio-1"
                  value="1"
                  @change="question1value"
                />
                <span class="radio-mark"></span>
              </div>
              <label for="radio-1">這次我幫了很多人救火耶～</label>
            </div>
            <div class="question-radio">
              <div class="question-role">
                <Role
                  role="po"
                  top="235px"
                  left="202px"
                  :scale="0.5"
                  :isAnim="false"
                  :rota="180"
                />
              </div>
              <div class="radio">
                <input
                  type="radio"
                  name="question-1"
                  id="radio-2"
                  value="2"
                  @change="question1value"
                />
                <span class="radio-mark"></span>
              </div>
              <label for="radio-2"
                >大家在開發上都會互相 cover , 讓任務都有準在時間內完成 。</label
              >
            </div>
          </div>
        </div>
        <div class="question-item right">
          <div class="question-tag question-tag-2">
            <h2>Q2.有哪些可以做得更好？</h2>
          </div>
          <div class="question-block">
            <div class="question-radio">
              <div class="question-role">
                <Role
                  role="team1"
                  top="235px"
                  left="202px"
                  :scale="0.5"
                  :isAnim="false"
                  :rota="180"
                />
              </div>
              <div class="radio">
                <input
                  type="radio"
                  name="question-2"
                  id="radio-3"
                  value="3"
                  @change="question2value"
                />
                <span class="radio-mark"></span>
              </div>
              <label for="radio-3"
                >可以記錄這次的開發時間 , 讓預估團隊點數可以更精準 。</label
              >
            </div>
            <div class="question-radio">
              <div class="question-role" style="transform: scaleX(-1)">
                <Role
                  role="team2"
                  top="235px"
                  left="202px"
                  :scale="0.5"
                  :isAnim="false"
                  :rota="180"
                />
              </div>
              <div class="radio error">
                <input
                  type="radio"
                  name="question-2"
                  id="radio-4"
                  value="4"
                  @change="question2value"
                />
                <span class="radio-mark"></span>
              </div>
              <label for="radio-4"
                >開發時間預估不準確 , 請後端下次改進 , 避免 delay 到我 。</label
              >
            </div>
          </div>
        </div>
      </div>
      <ButtomUI
        class="btn-submit"
        text="我選好了"
        top="calc(100% - 84px - 66px)"
        left="calc(100% - 40px - 94px)"
        :isDisable="isBtnDisable"
        @clickEvent="checkAns"
      />
      <!-- //////////////// -->
      <DialogRoleGG
        v-if="isShow > 3"
        class="dialog-3"
        top="52px"
        left="50px"
        width="1070px"
        height="128px"
      >
        <h2>太酷ㄌ吧 , 根本天才 , 畢業之後不要忘記我唷 &gt;&lt; !</h2>
      </DialogRoleGG>
      <ClickMask
        v-if="isShow > 3"
        class="click-mask-2"
        @mask-click="setNext(5)"
      />
    </section>
  </section>
</template>

<script>
import gsap from 'gsap'
import Role from '../Role.vue'
import DialogRoleGG from '../DialogRoleGG.vue'
import ClickMask from '../ClickMask.vue'
import ButtomUI from '../ButtomUI.vue'

export default {
  name: 'Step5',
  data() {
    return {
      isShow: 0,
      q1: '',
      q2: '',
      ans1: '2',
      ans2: '3',
    }
  },
  components: {
    Role,
    DialogRoleGG,
    ClickMask,
    ButtomUI,
  },
  mounted() {
    gsap.set('.question, .btn-submit', {
      autoAlpha: 0,
    })
    this.setNext(1)
  },
  methods: {
    setNext(next) {
      // console.log('setNext :', next)
      switch (next) {
        case 1:
          // console.log('show dialog 1')
          this.isShow = 1
          break
        case 2:
          // console.log('show click mask 1')
          this.isShow = 2
          break
        case 3:
          // console.log('close dialog 1, click mask 1 and show dialog 2')
          gsap.to('.dialog-1, .click-mask-1', {
            duration: 0.5,
            autoAlpha: 0,
          })
          this.isShow = 3
          const timeline1 = gsap.timeline()
          timeline1
            .fromTo(
              '.question',
              {
                autoAlpha: 0,
              },
              {
                duration: 0.8,
                autoAlpha: 1,
              }
            )
            .from('.question-role .role-wrapper', {
              duration: 0.3,
              autoAlpha: 0,
              top: '300px',
            })
            .to('.btn-submit', {
              duration: 0.5,
              autoAlpha: 1,
            })
          break
        case 4:
          // console.log('完成')
          // console.log('close dialog 2 ,and show dialog 3, click mask 2')
          gsap.to('.dialog-2, .btn-submit', {
            duration: 0.5,
            autoAlpha: 0,
            onComplete: () => {
              this.isShow = 4
            },
          })
          break
        case 5:
          // console.log('close role')
          this.$refs.roleG.close()
          break
        case 6:
          gsap.to('.content', {
            duration: 0.5,
            autoAlpha: 0,
            onComplete: () => {
              this.$store.commit('onNextStep')
            },
          })
          break
        default:
          break
      }
    },
    question1value() {
      this.resetQ1()
      let checked = document.querySelector('[name=question-1]:checked')
      this.q1 = checked.value
    },
    question2value() {
      this.resetQ2()
      let checked = document.querySelector('[name=question-2]:checked')
      this.q2 = checked.value
    },
    resetQ1() {
      document
        .querySelectorAll('[name=question-1] ~ .radio-mark')
        .forEach((mark) => mark.classList.toggle('error', false))
    },
    resetQ2() {
      document
        .querySelectorAll('[name=question-2] ~ .radio-mark')
        .forEach((mark) => mark.classList.toggle('error', false))
    },
    checkAns() {
      if (this.q1 !== this.ans1) {
        // add error
        let checked = document.querySelector(
          '[name=question-1]:checked ~ .radio-mark'
        )
        if (checked) {
          checked.classList.toggle('error', true)
        }
      }
      if (this.q2 !== this.ans2) {
        let checked = document.querySelector(
          '[name=question-2]:checked ~ .radio-mark'
        )
        if (checked) {
          checked.classList.toggle('error', true)
        }
      }
      if (this.q1 === this.ans1 && this.q2 === this.ans2) {
        this.setNext(4)
      }
    },
  },
  computed: {
    isBtnDisable() {
      return this.q1 === '' || this.q2 === ''
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

.question {
  position: relative;
  margin: 0 auto;
  max-width: 1440px;
  height: 1024px;
  &-item {
    position: absolute;
    width: 540px;
    height: 494px;
    &.left {
      left: 120px;
      top: 304px;
    }
    &.right {
      left: 780px;
      top: 304px;
    }
  }
  &-tag {
    height: 56px;
    margin: 0 auto;
    padding: 4px 32px;
    background: var(--primary-default);
    &-1 {
      width: 341px;
    }
    &-2 {
      width: 445px;
    }
    h2 {
      color: var(--bg-dark);
    }
  }
  &-block {
    display: flex;
    justify-content: space-between;
    height: calc(100% - 56px);
  }
  &-radio {
    display: flex;
    flex-direction: column;
    align-items: center;
    .radio {
      width: 28px;
      height: 28px;
      margin: 20px auto;
      position: relative;
      /* Hide the browser's default radio button */
      input {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        opacity: 0;
        cursor: pointer;
        width: 28px;
        height: 28px;
      }
      /* Create a custom checkbox */
      &-mark {
        position: absolute;
        top: 0;
        left: 0;
        width: 28px;
        height: 28px;
        background: var(--bg-dark-60);
        border: 3px solid var(--primary-default);
        border-radius: 50%;
        pointer-events: none;
        // error style
        &.error {
          border: 3px solid var(--danger-default);
          &:after {
            background: var(--danger-default);
          }
        }
        /* Create the indicator and Style (the dot/circle - hidden when not checked) */
        &:after {
          content: '';
          position: absolute;
          top: calc(50% - 7px);
          left: calc(50% - 7px);
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--primary-default);
          display: none;
        }
      }
      /* Show the checkmark when checked */
      input:checked ~ .radio-mark:after {
        display: block;
      }
    }
    label {
      width: 260px;
      height: 132px;
      padding: 10px 16px;
      text-align: center;
      background: var(--bg-dark-60);
      border: 4px solid var(--primary-default);
      backdrop-filter: blur(5px);
      border-radius: 20px;
      cursor: pointer;
    }
  }
  &-role {
    position: relative;
    height: 238px;
    width: 240px;
    z-index: 1;
  }
}
</style>
