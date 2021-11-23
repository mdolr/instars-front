<template>
  <div>
    <div
      class="landing"
      style="
        text-align: center;
        display: flex;
        height: 86vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      "
    >
      <div class="night">
        <div class="shooting_star" v-for="i in 20" :key="i" />
      </div>
      <h1 style="color: white; font-weight: 800; font-style: normal; letter-spacing: 0.0892857143em">INSTARS</h1>
      <h3 style="color: white; font-weight: 400">
        Join thousands of space enthusiasts from around the Earth!<br />Get started now by connecting with Google!
      </h3>
      <div class="mt-2" id="login-button"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

declare global {
  interface Window {
    google: any;
  }
}

window.google = window.google || {};

export default defineComponent({
  mounted() {
    this.initGoogleOAuth();
  },

  methods: {
    ...mapActions(['login']),
    ...mapGetters(['isLoggedIn', 'getUser']),

    initGoogleOAuth() {
      if (
        window &&
        window.google &&
        window.google.accounts &&
        !((window as any).document.getElementById('login-button').childNodes.length > 0)
      ) {
        window.google.accounts.id.initialize({
          client_id: '284772421623-8klntslq83finkqcgee2d3bi08rj7kt0.apps.googleusercontent.com',
          ux_mode: 'popup',
          callback: this.login,
          scope: 'profile email',
        });

        setTimeout(() => {
          console.log('Rendering Google Auth button');
          window.google.accounts.id.renderButton(
            document.getElementById('login-button'),
            { theme: 'outline', size: 'large' }, // customization attributes
          );
          console.log("Button rendered, refresh your browser if you can't see it");
        }, 200);

        // window.google.accounts.id.prompt();
      }
    },
  },
});
</script>

<style scoped>
/*
  Shooting star animation 
  Source: https://codepen.io/YusukeNakaya/pen/XyOaBj
*/

body {
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  height: 100vh;
  overflow: hidden;
  display: flex;
  font-family: 'Anton', sans-serif;
  justify-content: center;
  align-items: center;
}

.night {
  position: fixed;
  width: 100vh;
  height: 100%;
  transform: rotateZ(45deg);
}

.shooting_star {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 2px;
  background: linear-gradient(-45deg, grey, rgba(0, 0, 255, 0));
  border-radius: 999px;
  filter: drop-shadow(0 0 6px white);
  -webkit-animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
  animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
}
.shooting_star::before {
  content: '';
  position: absolute;
  top: calc(50% - 1px);
  right: 0;
  height: 2px;
  background: linear-gradient(-45deg, rgba(0, 0, 255, 0), grey, rgba(0, 0, 255, 0));
  transform: translateX(50%) rotateZ(45deg);
  border-radius: 100%;
  -webkit-animation: shining 3000ms ease-in-out infinite;
  animation: shining 3000ms ease-in-out infinite;
}
.shooting_star::after {
  content: '';
  position: absolute;
  top: calc(50% - 1px);
  right: 0;
  height: 2px;
  background: linear-gradient(-45deg, rgba(0, 0, 255, 0), grey, rgba(0, 0, 255, 0));
  transform: translateX(50%) rotateZ(45deg);
  border-radius: 100%;
  -webkit-animation: shining 3000ms ease-in-out infinite;
  animation: shining 3000ms ease-in-out infinite;
  transform: translateX(50%) rotateZ(-45deg);
}
.shooting_star:nth-child(1) {
  top: calc(50% - -11px);
  left: calc(50% - 276px);
  -webkit-animation-delay: 8821ms;
  animation-delay: 8821ms;
}
.shooting_star:nth-child(1)::before,
.shooting_star:nth-child(1)::after {
  -webkit-animation-delay: 8821ms;
  animation-delay: 8821ms;
}
.shooting_star:nth-child(2) {
  top: calc(50% - 58px);
  left: calc(50% - 118px);
  -webkit-animation-delay: 7062ms;
  animation-delay: 7062ms;
}
.shooting_star:nth-child(2)::before,
.shooting_star:nth-child(2)::after {
  -webkit-animation-delay: 7062ms;
  animation-delay: 7062ms;
}
.shooting_star:nth-child(3) {
  top: calc(50% - -172px);
  left: calc(50% - 257px);
  -webkit-animation-delay: 4988ms;
  animation-delay: 4988ms;
}
.shooting_star:nth-child(3)::before,
.shooting_star:nth-child(3)::after {
  -webkit-animation-delay: 4988ms;
  animation-delay: 4988ms;
}
.shooting_star:nth-child(4) {
  top: calc(50% - 68px);
  left: calc(50% - 208px);
  -webkit-animation-delay: 2874ms;
  animation-delay: 2874ms;
}
.shooting_star:nth-child(4)::before,
.shooting_star:nth-child(4)::after {
  -webkit-animation-delay: 2874ms;
  animation-delay: 2874ms;
}
.shooting_star:nth-child(5) {
  top: calc(50% - 151px);
  left: calc(50% - 111px);
  -webkit-animation-delay: 4363ms;
  animation-delay: 4363ms;
}
.shooting_star:nth-child(5)::before,
.shooting_star:nth-child(5)::after {
  -webkit-animation-delay: 4363ms;
  animation-delay: 4363ms;
}
.shooting_star:nth-child(6) {
  top: calc(50% - -41px);
  left: calc(50% - 25px);
  -webkit-animation-delay: 6320ms;
  animation-delay: 6320ms;
}
.shooting_star:nth-child(6)::before,
.shooting_star:nth-child(6)::after {
  -webkit-animation-delay: 6320ms;
  animation-delay: 6320ms;
}
.shooting_star:nth-child(7) {
  top: calc(50% - 37px);
  left: calc(50% - 26px);
  -webkit-animation-delay: 2672ms;
  animation-delay: 2672ms;
}
.shooting_star:nth-child(7)::before,
.shooting_star:nth-child(7)::after {
  -webkit-animation-delay: 2672ms;
  animation-delay: 2672ms;
}
.shooting_star:nth-child(8) {
  top: calc(50% - -146px);
  left: calc(50% - 166px);
  -webkit-animation-delay: 17ms;
  animation-delay: 17ms;
}
.shooting_star:nth-child(8)::before,
.shooting_star:nth-child(8)::after {
  -webkit-animation-delay: 17ms;
  animation-delay: 17ms;
}
.shooting_star:nth-child(9) {
  top: calc(50% - 19px);
  left: calc(50% - 171px);
  -webkit-animation-delay: 1379ms;
  animation-delay: 1379ms;
}
.shooting_star:nth-child(9)::before,
.shooting_star:nth-child(9)::after {
  -webkit-animation-delay: 1379ms;
  animation-delay: 1379ms;
}
.shooting_star:nth-child(10) {
  top: calc(50% - -57px);
  left: calc(50% - 267px);
  -webkit-animation-delay: 1761ms;
  animation-delay: 1761ms;
}
.shooting_star:nth-child(10)::before,
.shooting_star:nth-child(10)::after {
  -webkit-animation-delay: 1761ms;
  animation-delay: 1761ms;
}
.shooting_star:nth-child(11) {
  top: calc(50% - 30px);
  left: calc(50% - 178px);
  -webkit-animation-delay: 1788ms;
  animation-delay: 1788ms;
}
.shooting_star:nth-child(11)::before,
.shooting_star:nth-child(11)::after {
  -webkit-animation-delay: 1788ms;
  animation-delay: 1788ms;
}
.shooting_star:nth-child(12) {
  top: calc(50% - -158px);
  left: calc(50% - 187px);
  -webkit-animation-delay: 6588ms;
  animation-delay: 6588ms;
}
.shooting_star:nth-child(12)::before,
.shooting_star:nth-child(12)::after {
  -webkit-animation-delay: 6588ms;
  animation-delay: 6588ms;
}
.shooting_star:nth-child(13) {
  top: calc(50% - 180px);
  left: calc(50% - 161px);
  -webkit-animation-delay: 8233ms;
  animation-delay: 8233ms;
}
.shooting_star:nth-child(13)::before,
.shooting_star:nth-child(13)::after {
  -webkit-animation-delay: 8233ms;
  animation-delay: 8233ms;
}
.shooting_star:nth-child(14) {
  top: calc(50% - -188px);
  left: calc(50% - 208px);
  -webkit-animation-delay: 3050ms;
  animation-delay: 3050ms;
}
.shooting_star:nth-child(14)::before,
.shooting_star:nth-child(14)::after {
  -webkit-animation-delay: 3050ms;
  animation-delay: 3050ms;
}
.shooting_star:nth-child(15) {
  top: calc(50% - -121px);
  left: calc(50% - 104px);
  -webkit-animation-delay: 5276ms;
  animation-delay: 5276ms;
}
.shooting_star:nth-child(15)::before,
.shooting_star:nth-child(15)::after {
  -webkit-animation-delay: 5276ms;
  animation-delay: 5276ms;
}
.shooting_star:nth-child(16) {
  top: calc(50% - 165px);
  left: calc(50% - 17px);
  -webkit-animation-delay: 539ms;
  animation-delay: 539ms;
}
.shooting_star:nth-child(16)::before,
.shooting_star:nth-child(16)::after {
  -webkit-animation-delay: 539ms;
  animation-delay: 539ms;
}
.shooting_star:nth-child(17) {
  top: calc(50% - -72px);
  left: calc(50% - 77px);
  -webkit-animation-delay: 4318ms;
  animation-delay: 4318ms;
}
.shooting_star:nth-child(17)::before,
.shooting_star:nth-child(17)::after {
  -webkit-animation-delay: 4318ms;
  animation-delay: 4318ms;
}
.shooting_star:nth-child(18) {
  top: calc(50% - -68px);
  left: calc(50% - 160px);
  -webkit-animation-delay: 4594ms;
  animation-delay: 4594ms;
}
.shooting_star:nth-child(18)::before,
.shooting_star:nth-child(18)::after {
  -webkit-animation-delay: 4594ms;
  animation-delay: 4594ms;
}
.shooting_star:nth-child(19) {
  top: calc(50% - -183px);
  left: calc(50% - 251px);
  -webkit-animation-delay: 5758ms;
  animation-delay: 5758ms;
}
.shooting_star:nth-child(19)::before,
.shooting_star:nth-child(19)::after {
  -webkit-animation-delay: 5758ms;
  animation-delay: 5758ms;
}
.shooting_star:nth-child(20) {
  top: calc(50% - -146px);
  left: calc(50% - 247px);
  -webkit-animation-delay: 3498ms;
  animation-delay: 3498ms;
}
.shooting_star:nth-child(20)::before,
.shooting_star:nth-child(20)::after {
  -webkit-animation-delay: 3498ms;
  animation-delay: 3498ms;
}

@-webkit-keyframes tail {
  0% {
    width: 0;
  }
  30% {
    width: 100px;
  }
  100% {
    width: 0;
  }
}

@keyframes tail {
  0% {
    width: 0;
  }
  30% {
    width: 100px;
  }
  100% {
    width: 0;
  }
}
@-webkit-keyframes shining {
  0% {
    width: 0;
  }
  50% {
    width: 30px;
  }
  100% {
    width: 0;
  }
}
@keyframes shining {
  0% {
    width: 0;
  }
  50% {
    width: 30px;
  }
  100% {
    width: 0;
  }
}
@-webkit-keyframes shooting {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(300px);
  }
}
@keyframes shooting {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(300px);
  }
}
@-webkit-keyframes sky {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(405deg);
  }
}
@keyframes sky {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(405deg);
  }
}
</style>
