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
        @close="setNext(10)"
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
        @done="setNext(4)"
      >
        我們會在會議裡請團隊成員提出哪些是做得好的地方 、 哪些可以繼續改善的地方
        ? 並記錄再 Confluence 中 。 Retro 重點在於「正面表述」， 你也思考看看 ,
        哪一些是適合 Retro 的回饋呢 ?
      </DialogRoleGG>
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
    }
  },
  components: {
    Role,
    DialogRoleGG,
    ClickMask,
    ButtomUI,
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
</style>
