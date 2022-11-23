<template>
  <div
    :class="['btn-wrapper', { disabled: isDisable }]"
    :style="{ top: `${top}`, left: `${left}` }"
    @click.stop.prevent="$emit('click-event')"
  >
    <div class="btn-back">
      <span>{{ text }}</span>
    </div>
    <div class="btn-top">
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtomUI',
  props: {
    text: {
      type: String,
    },
    top: {
      type: String,
      default: '50%',
    },
    left: {
      type: String,
      default: '50%',
    },
    isDisable: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  &-wrapper {
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 188px;
    height: 60px;
    cursor: pointer;
    &:hover {
      .btn-top {
        top: 3px;
      }
    }
    &.disabled {
      pointer-events: none;
      .btn-top {
        background: linear-gradient(
            0deg,
            rgba(238, 238, 238, 0) 0%,
            #eeeeee 100%
          ),
          #555555;
      }
      .btn-back {
        background: #bbbbbb;
      }
    }
  }
  &-top,
  &-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-weight: 700;
      letter-spacing: 0.2em;
    }
  }
  &-top {
    top: 0;
    left: 0;
    background: linear-gradient(0deg, rgba(0, 255, 224, 0) 0%, #00ffe0 100%),
      #008d96;
    opacity: 0.8;
    transition: top 0.15s ease;
  }
  &-back {
    top: 5px;
    left: 0;
    background: var(--primary-default);
    opacity: 0.8;
  }
}
</style>
