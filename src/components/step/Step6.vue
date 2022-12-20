<template>
  <section class="step-6">
    <section class="bg">
      <div class="bg-back"></div>
    </section>
    <section class="content">
      <div class="content-light"></div>
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

      <div class="dot-wrapper">
        <div class="dot-item dot-1 dot-yellow"></div>
        <div class="dot-item dot-2 dot-red"></div>
        <div class="dot-item dot-3 dot-purple"></div>
        <div class="dot-item dot-4 dot-blue"></div>
        <div class="dot-item dot-5 dot-yellow"></div>
        <div class="dot-item dot-6 dot-red"></div>
        <div class="dot-item dot-7 dot-blue"></div>
        <div class="dot-item dot-8 dot-purple"></div>
      </div>
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
      .from(
        '.content-light',
        {
          duration: 0.8,
          opacity: 0,
        },
        '<'
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
      .from(
        '.dot-wrapper',
        {
          duration: 0.3,
          y: 20,
          opacity: 0,
        },
        '<'
      )
      .add(this.dot1_tl)
      .add(this.dot2_tl, '<')
      .add(this.dot3_tl, '<')
      .add(this.dot4_tl, '<')
      .add(this.dot5_tl, '<')
      .add(this.dot6_tl, '<')
      .add(this.dot7_tl, '<')
      .add(this.dot8_tl, '<')
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
    dot1_tl() {
      let tl = gsap.timeline()
      tl.to('.dot-1', {
        duration: 0.8,
        left: 89,
        top: 505,
      })
        .to('.dot-1', {
          duration: 0.8,
          left: 88,
          top: 519,
          opacity: 0.8,
        })
        .to('.dot-1', {
          duration: 0.8,
          left: 82,
          top: 498,
          opacity: 0.5,
        })
        .to('.dot-1', {
          duration: 0.8,
          left: 79,
          top: 515,
          opacity: 1,
        })
        .add(this.dot1_tl)
    },
    dot2_tl() {
      let tl = gsap.timeline()
      tl.to('.dot-2', {
        duration: 0.8,
        left: 256,
        top: 350,
        opacity: 0.5,
      })
        .to('.dot-2', {
          duration: 0.8,
          left: 267,
          top: 359,
          opacity: 1,
        })
        .to('.dot-2', {
          duration: 0.8,
          left: 250,
          top: 370,
        })
        .to('.dot-2', {
          duration: 0.8,
          left: 266,
          top: 350,
          opacity: 0.8,
        })
        .add(this.dot2_tl)
    },
    dot3_tl() {
      let tl = gsap.timeline()
      tl.to('.dot-3', {
        duration: 0.8,
        left: 55,
        top: 180,
        opacity: 0.5,
      })
        .to('.dot-3', {
          duration: 0.8,
          left: 58,
          top: 199,
          opacity: 1,
        })
        .to('.dot-3', {
          duration: 0.8,
          left: 66,
          top: 186,
          opacity: 0.8,
        })
        .to('.dot-3', {
          duration: 0.8,
          left: 60,
          top: 190,
          opacity: 1,
        })
        .add(this.dot3_tl)
    },
    dot4_tl() {
      let tl = gsap.timeline()
      tl.to('.dot-4', {
        duration: 0.8,
        left: 300,
        top: 48,
      })
        .to('.dot-4', {
          duration: 0.8,
          left: 295,
          top: 65,
          opacity: 0.5,
        })
        .to('.dot-4', {
          duration: 0.8,
          left: 299,
          top: 60,
          opacity: 1,
        })
        .to('.dot-4', {
          duration: 0.8,
          left: 310,
          top: 38,
        })
        .add(this.dot4_tl)
    },
    dot5_tl() {
      let tl = gsap.timeline()
      tl.to('.dot-5', {
        duration: 0.8,
        left: 1030,
        top: 22,
        opacity: 0.5,
      })
        .to('.dot-5', {
          duration: 0.8,
          left: 1024,
          top: 40,
          opacity: 1,
        })
        .to('.dot-5', {
          duration: 0.8,
          left: 1025,
          top: 36,
          opacity: 0.8,
        })
        .to('.dot-5', {
          duration: 0.8,
          left: 1020,
          top: 12,
          opacity: 1,
        })
        .add(this.dot5_tl)
    },
    dot6_tl() {
      let tl = gsap.timeline()
      tl.to('.dot-6', {
        duration: 0.8,
        left: 1274,
        top: 200,
        opacity: 0.8,
      })
        .to('.dot-6', {
          duration: 0.8,
          left: 1261,
          top: 195,
          opacity: 1,
        })
        .to('.dot-6', {
          duration: 0.8,
          left: 1267,
          top: 200,
          opacity: 0.5,
        })
        .to('.dot-6', {
          duration: 0.8,
          left: 1284,
          top: 190,
          opacity: 1,
        })
        .add(this.dot6_tl)
    },
    dot7_tl() {
      let tl = gsap.timeline()
      tl.to('.dot-7', {
        duration: 0.8,
        left: 1089,
        top: 331,
      })
        .to('.dot-7', {
          duration: 0.8,
          left: 1089,
          top: 331,
          opacity: 0.5,
        })
        .to('.dot-7', {
          duration: 0.8,
          left: 1083,
          top: 342,
          opacity: 1,
        })
        .to('.dot-7', {
          duration: 0.8,
          left: 1079,
          top: 341,
        })
        .add(this.dot7_tl)
    },
    dot8_tl() {
      let tl = gsap.timeline()
      tl.to('.dot-8', {
        duration: 0.8,
        left: 1240,
        top: 537,
        opacity: 0.5,
      })
        .to('.dot-8', {
          duration: 0.8,
          left: 1256,
          top: 543,
          opacity: 0.8,
        })
        .to('.dot-8', {
          duration: 0.8,
          left: 1247,
          top: 546,
          opacity: 1,
        })
        .to('.dot-8', {
          duration: 0.8,
          left: 1250,
          top: 527,
        })
        .add(this.dot8_tl)
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
  &-light {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1440px;
    height: 160px;
    background: var(--primary-linear);
    opacity: 0.9;
    transform: rotate(-180deg);
  }
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

.dot {
  &-wrapper {
    position: absolute;
    top: 0px;
    left: 0px;
  }
  &-item {
    position: absolute;
    width: 130px;
    height: 130px;
  }
  &-yellow {
    background: url('@/assets/images/logo/logo_dot_yellow.png');
    background-size: cover;
  }
  &-red {
    background: url('@/assets/images/logo/logo_dot_red.png');
    background-size: cover;
  }
  &-purple {
    background: url('@/assets/images/logo/logo_dot_purple.png');
    background-size: cover;
  }
  &-blue {
    width: 134px;
    height: 134px;
    background: url('@/assets/images/logo/logo_dot_blue.png');
    background-size: cover;
  }
  &-1 {
    top: 515px;
    left: 79px;
  }
  &-2 {
    top: 350px;
    left: 266px;
    opacity: 0.8;
  }
  &-3 {
    top: 190px;
    left: 60px;
  }
  &-4 {
    top: 38px;
    left: 310px;
  }
  &-5 {
    top: 12px;
    left: 1020px;
  }
  &-6 {
    top: 190px;
    left: 1284px;
  }
  &-7 {
    top: 341px;
    left: 1079px;
  }
  &-8 {
    top: 527px;
    left: 1250px;
  }
}
</style>
