<template>
  <section class="step-3">
    <section class="bg">
      <div class="bg-back"></div>
    </section>
    <section class="content">
      <Role
        ref="roleG"
        role="team2"
        :isAnim="false"
        left="1158px"
        :scale="0.8"
        @close="setNext(4)"
      />
      <DialogRoleGG
        v-if="isShow > 0"
        class="dialog-1"
        top="52px"
        left="50px"
        width="1070px"
        height="199px"
      >
        <h2>換你來試試看吧 !</h2>
        把 <span class="text-tint">「 產品待辦清單 」</span> 的項目拖進
        <span class="text-tint">「 開發Ａ組的短衝待辦清單 」</span> 裡吧 !
        <br />
        提示 : 置入兩項以上的 Story , 點數總和不能超過團隊負擔上限 20 點唷 !
      </DialogRoleGG>
      <!-- 產品代辦清單區域 -->
      <ProductBacklogPoint v-if="isShow > 0" />
      <!-- 開發Ａ組的短衝待辦清單 -->
      <SprintBacklogPoint v-if="isShow > 0" @btn-sprint="setNext(2)" />
      <DialogRoleGG
        v-if="isShow > 1"
        class="dialog-2"
        top="52px"
        left="50px"
        width="1070px"
        height="128px"
      >
        <h2>噢嗚嗚 , 太厲害ㄌ ! 又完成了一關 ! 還有下一關等著你 !</h2>
      </DialogRoleGG>
      <ClickMask
        v-if="isShow > 1"
        class="click-mask-1"
        @mask-click="setNext(3)"
      />
    </section>
  </section>
</template>

<script>
import gsap from 'gsap'
import Role from '../Role.vue'
import DialogRoleEE from '../DialogRoleEE.vue'
import DialogRoleGG from '../DialogRoleGG.vue'
import ClickMask from '../ClickMask.vue'
import ProductBacklogPoint from '../ProductBacklogPoint.vue'
import SprintBacklogPoint from '../SprintBacklogPoint.vue'

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
    ProductBacklogPoint,
    SprintBacklogPoint,
  },
  mounted() {
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
          // console.log('show click mask 1 , dialog 2 and close dialog 1')
          gsap.to('.dialog-1', {
            duration: 0,
            autoAlpha: 0,
          })
          this.isShow = 2
          break
        case 3:
          // console.log('close role')
          this.$refs.roleG.close()
          break
        case 4:
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
  min-width: 1440px;
  width: 100%;
  height: 1024px;

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
