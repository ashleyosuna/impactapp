<template>
  <div class="infinite-color-loop h-[600px] p-12">
    <div>
      <h1 class="text-white text-[55px]">Ashley Osuna.</h1>
      <div class="container">
        <div class="sliding-vertical">
          <span class="sliding-text"
            ><h2>Aspiring</h2>
            <h2>Frontend Engineer.</h2></span
          >
          <span class="sliding-text">
            <h2>Fast</h2>
            <h2>Learner.</h2>
          </span>
          <span class="sliding-text"
            ><h2>Growth Technologist</h2>
            <h2>in the Making.</h2></span
          >
        </div>
      </div>
      <p class="font-semibold">
        Hi! I am a 4th year Computer Science student at the University of Victoria passionate about
        building technology that provides users with the best experience possible.
      </p>
      <p class="font-semibold">
        This site is my application for impact.com's Frontent Software Engineering co-op position. I
        hope you enjoy it!
      </p>
      <button
        @click="scroll"
        class="text-black px-[30px] py-[12px] border border-white rounded-[26px] bg-white w-full md:w-fit hover:bg-transparent hover:border-black hover:text-white hover:cursor-pointer transition-all font-semibold"
      >
        View My Projects
        <font-awesome-icon icon="fa-arrow-down" class="animate-bounce" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.infinite-color-loop {
  background: linear-gradient(90deg, #298dda, #d73184, #f5333f, #fccc38);
  background-size: 400% 100%;
  animation: gradientSmooth 40s infinite;
}

button {
  margin-top: 30px;
}

.sliding-text {
  color: white;
  animation: slideText 2s infinite alternate;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
}

.sliding-text h2 {
  line-height: 65px;
  font-size: 55px;
  font-weight: 600;
  margin: 0;
}

@media (max-width: 660px) {
  .sliding-text {
    height: 140px;
  }
  .sliding-text h2 {
    font-size: 36px;
    line-height: 46px;
  }
}

.container {
  height: 140px;
  overflow: hidden;
}

.sliding-vertical {
  animation: slideVertical 12s steps(3) infinite;
}

p {
  color: white;
  font-size: 16px;
}

@keyframes gradientSmooth {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 90% 0;
  }
  100% {
    background-position: 0 0;
  }
}

@keyframes slideText {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

@keyframes slideVertical {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-425px);
  }
}
</style>

<script>
import IconDownArrow from './icons/IconDownArrow.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  methods: {
    scroll() {
      const element = document.getElementById('about-me')
      element.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>
