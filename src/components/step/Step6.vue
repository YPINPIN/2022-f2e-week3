<template>
  <section class="step-6">
    <section class="bg">
      <div class="bg-back"></div>
    </section>
    <section class="content">
      <div class="content-logo">
        <img src="@/assets/images/logo/logo_txt.png" alt="logo_txt" />
      </div>
      <h2 class="content-text">恭喜你通過</h2>
      <div class="content-title">
        <h2 class="content-title-text">《 敏捷任務 - 最初の試煉 》</h2>
      </div>
      <p class="content-again capation" @click="setNext(1)">再玩一次</p>

      <div class="role-wrapper role1">
        <img class="role-hole" src="@/assets/images/role/hole.png" alt="hole" />
        <img
          class="role-light"
          src="@/assets/images/role/role_team2_light.png"
          alt="role_team2_light"
        />
        <div class="role-mask">
          <img
            class="role-img"
            src="@/assets/images/role/role_team2.png"
            alt="role_team2"
          />
        </div>
      </div>
      <div class="role-wrapper role2">
        <img class="role-hole" src="@/assets/images/role/hole.png" alt="hole" />
        <img
          class="role-light"
          src="@/assets/images/role/role_team1_light.png"
          alt="role_team1_light"
        />
        <div class="role-mask">
          <img
            class="role-img"
            src="@/assets/images/role/role_team1.png"
            alt="role_team1"
          />
        </div>
      </div>
      <div class="role-wrapper role3">
        <img class="role-hole" src="@/assets/images/role/hole.png" alt="hole" />
        <img
          class="role-light"
          src="@/assets/images/role/role_sm_light.png"
          alt="role_sm_light"
        />
        <div class="role-mask">
          <img
            class="role-img"
            src="@/assets/images/role/role_sm.png"
            alt="role_sm"
          />
        </div>
      </div>
      <div class="role-wrapper role4">
        <img class="role-hole" src="@/assets/images/role/hole.png" alt="hole" />
        <img
          class="role-light"
          src="@/assets/images/role/role_po_light.png"
          alt="role_po_light"
        />
        <div class="role-mask">
          <img
            class="role-img"
            src="@/assets/images/role/role_po.png"
            alt="role_po"
          />
        </div>
      </div>

      <p class="role-text role-text-1 highlight">窩的冰淇淋ㄋ？</p>
      <p class="role-text role-text-2 highlight">嗚嗚我會想尼QQ</p>
      <p class="role-text role-text-3 highlight">不愧似窩ㄉ學生</p>
      <p class="role-text role-text-4 highlight">哇喔太厲害ㄌㄅ</p>
    </section>
  </section>
</template>

<script>
import gsap from 'gsap'
import Role from '../Role.vue'
export default {
  name: 'Step6',
  data() {
    return {}
  },
  components: {
    Role,
  },
  mounted() {
    const timeline = gsap.timeline()
    timeline.set('.content-again', {
      autoAlpha: 0,
    })
    timeline
      .from('.content-logo', {
        duration: 0.8,
        scale: 0,
        opacity: 0,
        ease: 'back.out(1.7)',
      })
      .from(
        '.content-text',
        {
          duration: 0.8,
          opacity: 0,
        },
        '<+0.5'
      )
      .from('.content-title', {
        duration: 0.6,
        scaleX: 0,
        ease: 'power4.out',
      })
      .from('.content-title-text', {
        duration: 0.3,
        opacity: 0,
      })
      .from('.role-hole', {
        duration: 0.5,
        scaleX: 0,
      })
      .to('.role-img', {
        duration: 0.3,
        top: 0,
        scaleY: 1,
        opacity: 1,
        stagger: 0.3,
        ease: 'back.out(1)',
      })
      .from(
        '.role-light',
        {
          duration: 0.3,
          opacity: 0,
          stagger: 0.3,
        },
        '<'
      )
      .to('.role-text', {
        duration: 0.3,
        opacity: 1,
        stagger: 0.3,
      })
      .to('.role-text-1', {
        duration: 0.6,
        y: -6,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      })
      .to(
        '.role-text-2',
        {
          duration: 0.8,
          y: -4,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1,
        },
        '<'
      )
      .to(
        '.role-text-3',
        {
          duration: 0.7,
          y: -7,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1,
        },
        '<'
      )
      .to(
        '.role-text-4',
        {
          duration: 0.9,
          y: -6,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1,
        },
        '<'
      )
      .to(
        '.content-again',
        {
          duration: 0.3,
          autoAlpha: 1,
        },
        '<'
      )
  },
  methods: {
    setNext(next) {
      console.log('setNext :', next)
      switch (next) {
        case 1:
          this.reloadPage()
          break
        default:
          break
      }
    },
    reloadPage() {
      window.location.reload()
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
  &-logo {
    position: absolute;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    img {
      width: 600px;
      height: 365px;
    }
  }
  &-text {
    position: absolute;
    left: 50%;
    top: 379px;
    transform: translateX(-50%);
  }
  &-title {
    width: 601px;
    height: 112px;
    position: absolute;
    left: 50%;
    top: 447px;
    transform: translateX(-50%);
    box-shadow: 0px 0px 24px 8px rgba(0, 255, 224, 0.8),
      0px 0px 8px 2px rgba(0, 255, 224, 0.95);
    backdrop-filter: blur(5px);
    background: linear-gradient(
        180deg,
        rgba(0, 255, 224, 0) 0%,
        rgba(0, 255, 224, 0.03) 59.9%,
        rgba(0, 255, 224, 0.12) 78.12%,
        rgba(0, 255, 224, 0.36) 100%
      ),
      rgba(10, 13, 20, 0.6);
    border: 2px solid var(--primary-default);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    &-text {
      color: var(--primary-default);
    }
  }
  &-again {
    position: absolute;
    left: 50%;
    top: 586px;
    transform: translateX(-50%);
    color: var(--primary-default);
    cursor: pointer;
    &:hover {
      color: rgba(0, 255, 224, 0.6);
    }
  }
}

.role {
  &-wrapper {
    pointer-events: none;
    position: absolute;
    top: 945px;
    left: 500px;
    scale: 1;
    rotate: 180deg;
    z-index: 8;
    &.role1 {
      left: 398px;
    }
    &.role2 {
      left: 618px;
    }
    &.role3 {
      left: 1002px;
    }
    &.role4 {
      left: 1250px;
    }
  }
  &-hole {
    width: 208px;
    height: 53px;
    position: absolute;
    top: 0;
    left: 0;
  }
  &-light {
    width: 300px;
    height: 293px;
    position: absolute;
    top: 7px;
    left: -46px;
    // border: 1px solid orange;
  }
  &-mask {
    position: absolute;
    top: 7px;
    left: 0;
    width: 208px;
    height: 255px;
    overflow: hidden;
    // border: 1px solid green;
    border-radius: 50px;
  }
  &-img {
    height: 196px;
    width: 205px;
    position: absolute;
    top: -304;
    left: 0;
    transform-origin: top;
    // border: 1px solid blue;
    opacity: 0;
    transform: scaleY(0);
  }
}

.role-text {
  position: absolute;
  opacity: 0;
  &-1 {
    top: 686px;
    left: 225px;
    color: var(--role-team2);
  }
  &-2 {
    top: 712px;
    left: 435px;
    color: var(--role-team1);
  }
  &-3 {
    top: 686px;
    left: 819px;
    color: var(--role-sm-tint);
  }
  &-4 {
    top: 712px;
    left: 1073px;
    color: var(--primary-default);
  }
}
</style>
