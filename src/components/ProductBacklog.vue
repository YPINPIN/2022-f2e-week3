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
        <div class="list-main">
          <!-- <div class="list-main-item item1 done">應徵者的線上履歷編輯器</div>
          <div class="list-main-item item2 done">
            會員系統（登入、註冊、權限管理）
          </div>
          <div class="list-main-item item3 done">前台職缺列表、應徵</div>
          <div class="list-main-item item4 done">
            後台職缺管理功能（資訊上架、下架、顯示應徵者資料）
          </div> -->
        </div>
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
    <div class="start-block">
      <div class="list-main-item item1">應徵者的線上履歷編輯器</div>
      <div class="list-main-item item4">
        後台職缺管理功能（資訊上架、下架、顯示應徵者資料）
      </div>
      <div class="list-main-item item2">會員系統（登入、註冊、權限管理）</div>
      <div class="list-main-item item3">前台職缺列表、應徵</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductBacklog',
}
</script>

<style lang="scss" scoped>
// 產品代辦清單
.product {
  position: absolute;
  top: 0;
  left: 0;
  // height: 100%;
  // width: 100%;
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
      z-index: -1;
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
  top: 0;
  left: 0;
  .drag-block {
    width: 100px;
    height: 50px;
    border: 1px solid red;
  }
}

.list-main-item {
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  background: var(--bg-dark-60);
  border: 4px solid var(--primary-default);
  border-radius: 20px;
  &.item1 {
    width: 282px;
    height: 60px;
    top: 535px;
    left: 147px;
  }
  &.item2 {
    width: 347px;
    height: 60px;
    top: 537px;
    left: 1052px;
  }
  &.item3 {
    width: 230px;
    height: 60px;
    top: 681px;
    left: 1027px;
  }
  &.item4 {
    width: 328px;
    height: 96px;
    top: 654px;
    left: 49px;
  }
  &.done {
    position: static;
    width: 416px;
    height: 96px;
    backdrop-filter: blur(2px);
  }
  &.ghost {
    opacity: 0.3;
  }
}
</style>
