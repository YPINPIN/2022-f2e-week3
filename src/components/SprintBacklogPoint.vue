<template>
  <div class="product">
    <div class="list-wrapper">
      <div class="list-title">
        <h2>開發Ａ組的短衝待辦清單</h2>
        <p class="capation">Sprint Backlog</p>
      </div>
      <div class="list-bg">
        <div class="list-bg-block">
          <div class="list-bg-item"></div>
          <div class="list-bg-item"></div>
          <div class="list-bg-item"></div>
          <div class="list-bg-bar">
            <div
              :class="['list-bg-point', { over: isPointOver }]"
              :style="{
                width: `${pointValue}%`,
              }"
            ></div>
            <p class="capation">{{ curPoint }} / 20 (5人)</p>
          </div>
        </div>
        <!-- 目標列表 -->
        <draggable
          class="list-main"
          v-model="myList"
          :group="{
            name: 'product',
          }"
          ghost-class="ghost"
          animation="300"
          item-key="id"
        >
          <template #item="{ element }">
            <div
              :class="[
                'list-main-item',
                `item${element.id}`,
                { over: isPointOver },
              ]"
            >
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
  <ButtomUI
    class="btn-sprint"
    text="開始sprint"
    :isDisable="isBtnDisable"
    top="calc(100% - 84px - 66px)"
    left="calc(100% - 40px - 94px)"
    @clickEvent="onBtnSprint"
  />
</template>

<script>
import gsap from 'gsap'
import draggable from 'vuedraggable'
import ButtomUI from './ButtomUI.vue'

export default {
  name: 'SprintBacklogPoint',
  data() {
    return {
      myList: [],
      curPoint: 0,
    }
  },
  emits: ['btn-sprint'],
  mounted() {
    gsap.set(['.product', '.btn-sprint'], {
      autoAlpha: 0,
    })
    gsap.to('.product, .btn-sprint', {
      duration: 0.5,
      autoAlpha: 1,
      delay: 0.5,
    })
  },
  components: {
    draggable,
    ButtomUI,
  },
  computed: {
    isBtnDisable() {
      return this.myList.length < 2 || this.curPoint > 20
    },
    isPointOver() {
      this.curPoint = this.myList.reduce((prev, curr) => {
        return prev + curr.point
      }, 0)
      return this.curPoint > 20
    },
    pointValue() {
      let value = (this.curPoint / 20) * 100
      if (value > 100) {
        value = 100
      }
      return value
    },
  },
  methods: {
    onBtnSprint() {
      this.$emit('btn-sprint')
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
      top: 303px;
      left: 616px;
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

      background: var(--role-team1);
      border-radius: 20px 20px 0px 0px;
      h2 {
        color: var(--bg-dark);
      }
      p {
        color: var(--role-team-dark);
      }
    }
    &-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 480px;
      height: 596px;
      background: rgba(255, 122, 0, 0.4);
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
        border: 2px dashed var(--role-team1);
        border-radius: 20px;
      }
      &-bar {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 416px;
        height: 24px;
        padding: 4px;
        background: var(--role-team-dark);
        border-radius: 20px;
        p {
          position: absolute;
          top: 0;
          left: 50%;
          line-height: 24px;
          transform: translateX(-50%);
        }
      }
      &-point {
        width: 0%;
        height: 16px;
        background: var(--role-team1);
        border-radius: 20px;
        transition: width 0.5s ease;
        &.over {
          background: var(--danger-default);
        }
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
      background: rgba(255, 122, 0, 0.3);
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
      background: rgba(255, 122, 0, 0.2);
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
        #ffc700 0%,
        rgba(255, 199, 0, 0) 100%
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
  border: 4px solid var(--role-team1);
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
    border-color: var(--role-team-dark) !important;
  }
  .list-point-bg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    min-width: 50px;
    height: 50px;
    background: var(--role-team1);
    border-radius: 100px;

    font-weight: 700;
    font-size: 32px;
    line-height: 150%;
    text-align: center;
  }
  &.over {
    border-color: var(--danger-default);
  }
}
</style>
