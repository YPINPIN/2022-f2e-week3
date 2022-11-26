<template>
  <section class="step-3">
    <section class="bg">
      <div class="bg-back"></div>
    </section>
    <section class="content">
      <Role
        ref="roleE"
        role="team1"
        :isAnim="false"
        left="878px"
        :scale="0.8"
      />
      <Role
        ref="roleG"
        role="team2"
        :isAnim="false"
        left="1158px"
        :scale="0.8"
      />
      <DialogRoleGG
        v-if="isShow > 0"
        class="dialog-1"
        top="52px"
        left="50px"
        width="790px"
        height="152px"
      >
        沒錯，如 EE 說的，我這邊已經把剛剛討論好的點數標上去囉～
        你來練習把任務排到短衝待辦清單吧 !
      </DialogRoleGG>
    </section>
  </section>
</template>

<script>
import gsap from 'gsap'
import Role from '../Role.vue'
import DialogRoleEE from '../DialogRoleEE.vue'
import DialogRoleGG from '../DialogRoleGG.vue'
import ClickMask from '../ClickMask.vue'
import ButtomUI from '../ButtomUI.vue'

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
    DialogRoleGG,
    ClickMask,
    ButtomUI,
  },
  mounted() {
    this.isShow = 1
  },
  methods: {
    setNext(next) {
      console.log('setNext :', next)
      switch (next) {
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
