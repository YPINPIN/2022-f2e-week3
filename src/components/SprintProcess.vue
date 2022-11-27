<template>
  <div class="sprint">
    <div class="step-wrapper">
      <div class="step-bg">
        <img
          class="step-bg-img"
          src="@/assets/images/other/sprint_process.png"
          alt="sprint_process_iimg"
        />
        <div class="step step-1 step-show">
          <div class="line"></div>
          <h2>產品待辦清單</h2>
          <p class="capation">Product Backlog</p>
        </div>
        <div class="step step-2 step-show">
          <div class="line"></div>
          <h2>短衝規劃會議</h2>
          <p class="capation">Sprint Planning</p>
        </div>
        <div class="step step-3 step-show">
          <div class="line"></div>
          <h2>短衝待辦清單</h2>
          <p class="capation">Sprint Backlog</p>
        </div>
        <div class="step step-4 step-show">
          <div class="line"></div>
          <h2>短衝</h2>
          <p class="capation">Sprint</p>
        </div>
        <div class="step step-5"><div class="line"></div></div>
        <div class="step step-6"><div class="line"></div></div>
        <div class="step step-7"><div class="line"></div></div>

        <!-- 目標列表 -->
        <draggable
          class="step-main list-1"
          data-list="myItem1"
          v-model="myItem1"
          :group="{ name: 'sprint' }"
          ghost-class="ghost"
          animation="1000"
          item-key="id"
          :move="handleMoveItem"
          @end="handleDragEndItem"
        >
          <template #item="{ element }">
            <div
              :class="[
                'step-main-item',
                `step${element.id}`,
                { error: isStep5Error },
              ]"
            >
              <h2>{{ element.title }}</h2>
              <p class="capation text-tint">{{ element.sub }}</p>
            </div>
          </template>
        </draggable>
        <draggable
          class="step-main list-2"
          data-list="myItem2"
          v-model="myItem2"
          :group="{ name: 'sprint' }"
          ghost-class="ghost"
          animation="1000"
          item-key="id"
          :move="handleMoveItem"
          @end="handleDragEndItem"
        >
          <template #item="{ element }">
            <div
              :class="[
                'step-main-item',
                `step${element.id}`,
                { error: isStep6Error },
              ]"
            >
              <h2>{{ element.title }}</h2>
              <p class="capation text-tint">{{ element.sub }}</p>
            </div>
          </template>
        </draggable>
        <draggable
          class="step-main list-3"
          data-list="myItem3"
          v-model="myItem3"
          :group="{ name: 'sprint' }"
          ghost-class="ghost"
          animation="1000"
          item-key="id"
          :move="handleMoveItem"
          @end="handleDragEndItem"
        >
          <template #item="{ element }">
            <div
              :class="[
                'step-main-item',
                `step${element.id}`,
                { error: isStep7Error },
              ]"
            >
              <h2>{{ element.title }}</h2>
              <p class="capation text-tint">{{ element.sub }}</p>
            </div>
          </template>
        </draggable>
      </div>
    </div>
    <!-- 起始列表 -->
    <draggable
      class="start-block"
      data-list="myList"
      v-model="myList"
      :group="{ name: 'sprint', put: false }"
      ghost-class="ghost"
      animation="1000"
      item-key="id"
      :move="handleMoveItem"
      @end="handleDragEndItem"
    >
      <template #item="{ element }">
        <div :class="['step-main-item', `step${element.id}`]">
          <h2>{{ element.title }}</h2>
          <p class="capation text-tint">{{ element.sub }}</p>
        </div>
      </template>
    </draggable>
  </div>
  <ButtomUI
    v-if="isBtnShow"
    class="btn-donoe"
    text="我完成了"
    :isDisable="isBtnDisable"
    top="calc(100% - 84px - 66px)"
    left="calc(100% - 40px - 94px)"
    @clickEvent="onBtnDone"
  />
</template>

<script>
import gsap from 'gsap'
import draggable from 'vuedraggable'
import ButtomUI from './ButtomUI.vue'
import ClickMask from './ClickMask.vue'

export default {
  name: 'SprintProcess',
  data() {
    return {
      myItem1: [],
      myItem2: [],
      myItem3: [],
      myList: [
        { id: 5, title: '每日站立會議', sub: 'Daily Scrum' },
        { id: 6, title: '短衝檢視會議', sub: 'Sprint Review' },
        { id: 7, title: '短衝自省會議', sub: 'Sprint Retrospective' },
      ],
      isSwap: false,
      isBtnShow: false,
    }
  },
  emits: ['btn-mask', 'btn-done'],
  mounted() {
    gsap.set(['.sprint', '.step'], {
      autoAlpha: 0,
      pointerEvents: 'none',
    })
    const timeline = gsap.timeline()
    timeline
      .to('.sprint', {
        duration: 0.5,
        autoAlpha: 1,
      })
      .to('.step-show', {
        autoAlpha: 1,
        stagger: 0.5,
      })
      .to('.step-5', {
        duration: 0.5,
        autoAlpha: 1,
      })
      .to(
        '.step-6',
        {
          duration: 0.5,
          autoAlpha: 1,
        },
        '<'
      )
      .to(
        '.step-7',
        {
          duration: 0.5,
          autoAlpha: 1,
          onComplete: () => {
            this.isBtnShow = true
            gsap.to('.sprint', {
              duration: 0.5,
              pointerEvents: 'auto',
            })
          },
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
      return this.isStep5Error || this.isStep6Error || this.isStep7Error
    },
    isStep5Error() {
      return (
        this.myItem1.length === 0 ||
        (this.myItem1.length > 0 && this.myItem1[0].id !== 5)
      )
    },
    isStep6Error() {
      return (
        this.myItem2.length === 0 ||
        (this.myItem2.length > 0 && this.myItem2[0].id !== 6)
      )
    },
    isStep7Error() {
      return (
        this.myItem3.length === 0 ||
        (this.myItem3.length > 0 && this.myItem3[0].id !== 7)
      )
    },
  },
  methods: {
    handleMoveItem(event) {
      const { index, futureIndex } = event.draggedContext
      this.originalIndex = index
      this.futureIndex = futureIndex
      this.originalList = event.from.getAttribute('data-list')
      this.futureList = event.to.getAttribute('data-list')
      if (this[this.futureList].length > 0) {
        this.isSwap = true
        return false // disable sort
      } else {
        this.isSwap = false
        return 1
      }
    },
    handleDragEndItem() {
      if (!this.isSwap) {
        return
      }
      if (this.originalList === this.futureList) {
        this.movingItem = this[this.futureList][this.originalIndex]
        this.futureItem = this[this.futureList][this.futureIndex]

        if (this.movingItem && this.futureItem) {
          let _list = Object.assign([], this[this.futureList])
          _list[this.futureIndex] = this.movingItem
          _list[this.originalIndex] = this.futureItem
          this[this.futureList] = _list
        }
      } else {
        this.movingItem = this[this.originalList][this.originalIndex]
        this.futureItem = this[this.futureList][this.futureIndex]

        if (this.movingItem && this.futureItem) {
          let _listFrom = Object.assign([], this[this.originalList])
          let _listTo = Object.assign([], this[this.futureList])
          _listTo[this.futureIndex] = this.movingItem
          _listFrom[this.originalIndex] = this.futureItem
          this[this.originalList] = _listFrom
          this[this.futureList] = _listTo
        }
      }
    },
    onBtnDone() {
      this.$emit('btn-done')
    },
  },
}
</script>

<style lang="scss" scoped>
// 產品代辦清單
.sprint {
  position: absolute;
  top: 0;
  left: 0;
  .step {
    &-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 1440px;
      height: 1024px;
      border: 1px solid purple;
    }
    &-bg {
      position: absolute;
      top: 0;
      left: 0;
      &-img {
        height: 710px;
        width: 1085px;
        position: absolute;
        top: 255px;
        left: 82px;
      }
      .step {
        position: absolute;
        width: 300px;
        height: 94px;
        background: var(--bg-dark-60);
        border: 2px solid var(--primary-default);
        backdrop-filter: blur(5px);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2 {
          color: var(--text-tint);
        }
        p {
          color: var(--primary-dark);
        }
        &-1 {
          top: 285px;
          left: 118px;
          .line {
            position: absolute;
            width: 24px;
            height: 0px;
            top: 45px;
            left: -24px;
            border: 2px solid var(--primary-default);
          }
        }
        &-2 {
          top: 407px;
          left: 118px;
          .line {
            position: absolute;
            width: 24px;
            height: 0px;
            top: 45px;
            left: -24px;
            border: 2px solid var(--primary-default);
          }
        }
        &-3 {
          top: 529px;
          left: 118px;
          .line {
            position: absolute;
            width: 24px;
            height: 0px;
            top: 45px;
            left: -24px;
            border: 2px solid var(--primary-default);
          }
        }
        &-4 {
          width: 150px;
          top: 731px;
          left: 297px;
          .line {
            position: absolute;
            width: 65px;
            height: 0px;
            top: -36px;
            left: 41px;
            transform: rotate(-90deg);
            border: 2px solid var(--primary-default);
          }
        }
        &-5 {
          top: 620px;
          left: 584px;
          border: 2px dashed var(--primary-default);
          background: transparent;
          backdrop-filter: none;
          .line {
            position: absolute;
            width: 24px;
            height: 0px;
            top: 45px;
            left: -24px;
            border: 2px solid var(--primary-default);
          }
        }
        &-6 {
          top: 809px;
          left: 544px;
          border: 2px dashed var(--primary-default);
          background: transparent;
          backdrop-filter: none;
          .line {
            position: absolute;
            width: 32px;
            height: 0px;
            top: 106px;
            left: 134px;
            transform: rotate(-90deg);
            border: 2px solid var(--primary-default);
          }
        }
        &-7 {
          top: 809px;
          left: 872px;
          border: 2px dashed var(--primary-default);
          background: transparent;
          backdrop-filter: none;
          .line {
            position: absolute;
            width: 32px;
            height: 0px;
            top: 106px;
            left: 134px;
            transform: rotate(-90deg);
            border: 2px solid var(--primary-default);
          }
        }
      }
      .step-main {
        width: 300px;
        height: 94px;
        position: absolute;
        &.list-1 {
          top: 620px;
          left: 584px;
        }
        &.list-2 {
          top: 809px;
          left: 544px;
        }
        &.list-3 {
          top: 809px;
          left: 872px;
        }
      }
    }
  }
}

.start-block {
  position: absolute;
  top: 347px;
  left: 1100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
}

.step-main-item {
  width: 300px;
  height: 94px;
  background: var(--bg--dark-60);
  border: 4px solid var(--role-team1);
  backdrop-filter: blur(5px);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: var(--role-team1);
  }
  &:hover {
    cursor: url('@/assets/images/other/hand-finger.svg'), auto;
  }
  &.step5 {
  }
  &.step6 {
  }
  &.step7 {
  }

  &.ghost {
    border-color: var(--role-team-dark) !important;
  }
  &.error {
    border-color: var(--danger-default);
  }
}
</style>
