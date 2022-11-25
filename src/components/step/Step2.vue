<template>
  <section class="step-2">
    <section class="bg">
      <div class="bg-back"></div>
    </section>
    <section class="content">
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
      <ClickMask
        class="click-mask-1"
        :isBg="false"
        :isTip="false"
        @mask-click="onMaskClick"
      />
    </section>
  </section>
</template>

<script>
import gsap from 'gsap'
import DialogRole from '../DialogRole.vue'
import ClickMask from '../ClickMask.vue'
import ButtomUI from '../ButtomUI.vue'

export default {
  name: 'Step2',
  data() {
    return {
      isShow: 0,
    }
  },
  components: {
    DialogRole,
    ClickMask,
    ButtomUI,
  },
  mounted() {},
  methods: {
    setNext(next) {
      console.log('setNext :', next)
      switch (next) {
        default:
          break
      }
    },
    onMaskClick() {
      console.log('onMaskClick')
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

.role {
  &-wrapper {
    position: absolute;
    top: 30px;
    left: 30px;
    z-index: 8;
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
    top: -304;
    left: 0;
    transform-origin: top;
    border: 1px solid blue;
    // opacity: 0;
    // transform: scaleY(0);
  }
}
</style>
