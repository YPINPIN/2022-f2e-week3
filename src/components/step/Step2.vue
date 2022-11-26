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
      <ClickMask
        v-if="isShow > 11"
        class="click-mask-3"
        :isBg="false"
        :isTip="false"
        @mask-click="setNext(13)"
      />
    </section>
  </section>
</template>

<script>
import gsap from 'gsap'
import Role from '../Role.vue'
import DialogRole from '../DialogRole.vue'
import DialogRoleMM from '../DialogRoleMM.vue'
import ClickMask from '../ClickMask.vue'
import ButtomUI from '../ButtomUI.vue'
import Info1 from '../Info1.vue'
import Info2 from '../Info2.vue'
import Info3 from '../Info3.vue'

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
    ClickMask,
    ButtomUI,
    Info1,
    Info2,
    Info3,
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
          console.log('show mask click 3')
          this.isShow = 12
          break
        case 13:
          console.log('close mask 3, info3 and role 2')
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
</style>
