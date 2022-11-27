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
          :group="{
            name: 'product',
            pull: () => {
              return myList.length > 1
            },
          }"
          ghost-class="ghost"
          animation="300"
          item-key="id"
        >
          <template #item="{ element }">
            <div :class="['list-main-item', `item${element.id}`]">
              <div class="list-point-bg">{{ element.point }}</div>
              {{ element.info }}
            </div>
          </template>
        </draggable>
      </div>
      <div class="list-bg1"></div>
      <div class="list-bg2"></div>
      <div class="list-light"></div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import draggable from 'vuedraggable'

export default {
  name: 'ProductBacklogPoint',
  data() {
    return {
      myList: [
        { id: 1, info: '應徵者的線上履歷編輯器', point: 5 },
        { id: 2, info: '會員系統（登入、註冊、權限管理）', point: 13 },
        { id: 3, info: '前台職缺列表、應徵', point: 8 },
        {
          id: 4,
          info: '後台職缺管理功能（資訊上架、下架、顯示應徵者資料）',
          point: 8,
        },
      ],
    }
  },
  mounted() {
    gsap.set(['.product'], {
      autoAlpha: 0,
    })
    gsap.to('.product', {
      duration: 0.5,
      autoAlpha: 1,
      delay: 0.5,
    })
  },
  components: {
    draggable,
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
      top: 303px;
      left: 60px;
      width: 504px;
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
      width: 480px;
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
      width: 480px;
      height: 596px;
      background: rgba(0, 255, 224, 0.3);
      backdrop-filter: blur(5px);
      border-radius: 20px;
      &-block {
        position: absolute;
        top: 132px;
        left: 32px;
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
      left: 32px;
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
      width: 480px;
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
      width: 480px;
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
      width: 480px;
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
  }
}

.list-main-item {
  display: flex;
  align-items: center;
  background: var(--bg-dark-60);
  border: 4px solid var(--primary-default);
  border-radius: 20px;
  width: 416px;
  height: 96px;
  padding: 12px 24px;
  gap: 10px;
  backdrop-filter: blur(2px);
  &:hover {
    cursor: url('@/assets/images/other/hand-finger.svg'), auto;
  }
  &.ghost {
    border-color: var(--primary-dark) !important;
  }
  .list-point-bg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    min-width: 50px;
    height: 50px;
    background: rgba(0, 255, 224, 0.7);
    border-radius: 100px;

    font-weight: 700;
    font-size: 32px;
    line-height: 150%;
    text-align: center;
  }
}
</style>
