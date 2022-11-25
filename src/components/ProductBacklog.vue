<template>
  <div class="product">
    <div class="list-wrapper">
      <div class="list-title">
        <h2>產品待辦清單</h2>
        <p class="capation">Product Backlog</p>
      </div>
      <div class="list-bg">
        <div class="list-bg-block">
          <div class="list-bg-item"></div>
          <div class="list-bg-item"></div>
          <div class="list-bg-item"></div>
          <div class="list-bg-item"></div>
        </div>
        <!-- 目標列表 -->
        <draggable
          class="list-main"
          v-model="myList"
          :group="{ name: 'product', pull: false }"
          ghost-class="ghost"
          animation="1000"
          item-key="id"
        >
          <template #item="{ element }">
            <div :class="['list-main-item', `item${element.id}`, 'done']">
              {{ element.info }}
            </div>
          </template>
        </draggable>
      </div>
      <div class="list-bg1"></div>
      <div class="list-bg2"></div>
      <div class="list-light"></div>
      <div class="list-capation">
        <p class="capation">高</p>
        <img src="@/assets/images/other/arrow.svg" alt="" />
        <p class="capation">低</p>
      </div>
    </div>
    <!-- 起始列表 -->
    <draggable
      class="start-block block1"
      v-model="myItem1"
      :group="{ name: 'product', put: false }"
      ghost-class="ghost"
      animation="1000"
      item-key="id"
    >
      <template #item="{ element }">
        <div :class="['list-main-item', `item${element.id}`]">
          {{ element.info }}
        </div>
      </template>
    </draggable>
    <draggable
      class="start-block block2"
      v-model="myItem2"
      :group="{ name: 'product', put: false }"
      ghost-class="ghost"
      animation="1000"
      item-key="id"
    >
      <template #item="{ element }">
        <div :class="['list-main-item', `item${element.id}`]">
          {{ element.info }}
        </div>
      </template>
    </draggable>
    <draggable
      class="start-block block3"
      v-model="myItem3"
      :group="{ name: 'product', put: false }"
      ghost-class="ghost"
      animation="1000"
      item-key="id"
    >
      <template #item="{ element }">
        <div :class="['list-main-item', `item${element.id}`]">
          {{ element.info }}
        </div>
      </template>
    </draggable>
    <draggable
      class="start-block block4"
      v-model="myItem4"
      :group="{ name: 'product', put: false }"
      ghost-class="ghost"
      animation="1000"
      item-key="id"
    >
      <template #item="{ element }">
        <div :class="['list-main-item', `item${element.id}`]">
          {{ element.info }}
        </div>
      </template>
    </draggable>
    <div class="start-block block-test" v-if="!isBtnShow">
      <img class="arrow2" src="@/assets/images/other/arrow2.svg" alt="arrow2" />
      <div class="list-main-item item-test">前台職缺列表、應徵</div>
      <div class="list-main-item item-test item-move">
        前台職缺列表、應徵
        <img
          class="hand-finger"
          src="@/assets/images/other/hand-finger.svg"
          alt="hand-finger"
        />
      </div>
    </div>
  </div>
  <ButtomUI
    v-if="isBtnShow"
    text="我完成了"
    :isDisable="isBtnDisable"
    top="calc(100% - 84px - 66px)"
    left="calc(100% - 40px - 94px)"
    @clickEvent="onBtnDone"
  />
  <ClickMask
    v-if="!isBtnShow"
    class="click-mask-3"
    :isBg="false"
    :isTip="false"
    @mask-click="onMaskClick"
  />
</template>

<script>
import gsap from 'gsap'
import draggable from 'vuedraggable'
import ButtomUI from './ButtomUI.vue'
import ClickMask from './ClickMask.vue'

export default {
  name: 'ProductBacklog',
  data() {
    return {
      myItem1: [{ id: 1, info: '應徵者的線上履歷編輯器' }],
      myItem2: [{ id: 2, info: '會員系統（登入、註冊、權限管理）' }],
      myItem3: [{ id: 3, info: '前台職缺列表、應徵' }],
      myItem4: [
        { id: 4, info: '後台職缺管理功能（資訊上架、下架、顯示應徵者資料）' },
      ],
      myList: [],
      isBtnShow: false,
    }
  },
  emits: ['btn-mask', 'btn-done'],
  mounted() {
    gsap.set(['.product'], {
      autoAlpha: 0,
    })
    const timeline = gsap.timeline()
    timeline
      .to('.product', {
        duration: 0.5,
        autoAlpha: 1,
      })
      .to('.block1, .block2, .block3, .block4', {
        duration: 0.5,
        opacity: 0.3,
      })
      .from(
        '.arrow2',
        {
          duration: 0.5,
          opacity: 0,
        },
        '<'
      )
      .to(
        '.item-move',
        {
          duration: 0.5,
          width: 416,
          height: 96,
          x: -511,
          y: -265,
        },
        '<'
      )
  },
  components: {
    draggable,
    ButtomUI,
    ClickMask,
  },
  computed: {
    isBtnDisable() {
      return this.myList.length !== 4
    },
  },
  methods: {
    onBtnDone() {
      this.$emit('btn-done')
    },
    onMaskClick() {
      console.log('onMaskClick')
      this.$emit('btn-mask')
      const timeline = gsap.timeline()
      timeline
        .to('.block1, .block2, .block3, .block4', {
          duration: 0.5,
          opacity: 1,
        })
        .to(
          '.arrow2',
          {
            duration: 0.5,
            autoAlpha: 0,
          },
          '<'
        )
        .to(
          '.item-move',
          {
            duration: 0.5,
            autoAlpha: 0,
            onComplete: () => {
              this.isBtnShow = true
            },
          },
          '<'
        )
    },
  },
}
</script>

<style lang="scss" scoped>
// 產品代辦清單
.product {
  position: absolute;
  top: 0;
  left: 0;
  .list {
    &-wrapper {
      position: absolute;
      top: 284px;
      left: 464px;
      width: 524px;
      height: 620px;
    }
    &-title {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0px;
      width: 500px;
      height: 100px;

      background: var(--primary-default);
      border-radius: 20px 20px 0px 0px;
      h2 {
        color: var(--bg-dark);
      }
      p {
        color: var(--primary-dark);
      }
    }
    &-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 500px;
      height: 596px;
      background: rgba(0, 255, 224, 0.3);
      backdrop-filter: blur(5px);
      border-radius: 20px;
      &-block {
        position: absolute;
        top: 132px;
        left: 52px;
        width: 416px;
        height: 432px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 16px;
      }
      &-item {
        width: 416px;
        height: 96px;
        border: 2px dashed var(--primary-default);
        border-radius: 20px;
      }
    }
    &-main {
      position: absolute;
      top: 132px;
      left: 52px;
      width: 416px;
      height: 432px;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      gap: 16px;
    }
    &-bg1 {
      position: absolute;
      top: 12px;
      left: 12px;
      z-index: -2;
      width: 500px;
      height: 596px;
      background: rgba(0, 255, 224, 0.2);
      backdrop-filter: blur(5px);
      border-radius: 20px;
    }
    &-bg2 {
      position: absolute;
      top: 24px;
      left: 24px;
      z-index: -3;
      width: 500px;
      height: 596px;
      background: rgba(0, 255, 224, 0.1);
      backdrop-filter: blur(5px);
      border-radius: 20px;
    }
    &-light {
      position: absolute;
      top: 24px;
      left: 24px;
      z-index: -4;
      width: 500px;
      height: 596px;
      background: radial-gradient(
        50% 50% at 50% 50%,
        #00ffe0 0%,
        rgba(0, 255, 224, 0) 100%
      );
      opacity: 0.9;
      backdrop-filter: blur(5px);
      border-radius: 20px;
    }
    &-capation {
      position: absolute;
      top: 128px;
      left: 20px;
      width: 16px;
      height: 436px;

      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0px;
      gap: 6px;
    }
  }
}

.start-block {
  position: absolute;
  &.block1 {
    width: 282px;
    height: 60px;
    top: 535px;
    left: 147px;
  }
  &.block2 {
    width: 347px;
    height: 60px;
    top: 537px;
    left: 1052px;
  }
  &.block3,
  &.block-test {
    width: 230px;
    height: 60px;
    top: 681px;
    left: 1027px;
  }
  &.block4 {
    width: 328px;
    height: 96px;
    top: 654px;
    left: 49px;
  }
}

.arrow2 {
  width: 169px;
  height: 146px;
  position: absolute;
  top: -144px;
  left: -141px;
  padding: 0;
}
.hand-finger {
  position: absolute;
  right: 67px;
  bottom: -9px;
}

.list-main-item {
  padding: 8px 20px;
  display: flex;
  align-items: center;
  background: var(--bg-dark-60);
  border: 4px solid var(--primary-default);
  border-radius: 20px;
  &:hover {
    cursor: url('@/assets/images/other/hand-finger.svg'), auto;
  }
  &.item1 {
    width: 282px;
    height: 60px;
  }
  &.item2 {
    width: 347px;
    height: 60px;
  }
  &.item3,
  &.item-test {
    width: 230px;
    height: 60px;
  }
  &.item4 {
    width: 328px;
    height: 96px;
  }
  &.item-move {
    position: absolute;
    top: 0;
    left: 0;
    width: 230px;
    height: 60px;
  }
  &.done {
    width: 416px;
    height: 96px;
    backdrop-filter: blur(2px);
  }

  &.ghost {
    border-color: var(--primary-dark) !important;
  }
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s ease;
}
.fade-enter-to {
  opacity: 1;
}
</style>
