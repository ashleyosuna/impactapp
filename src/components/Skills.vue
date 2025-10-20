<template>
  <section class="section infinite-color-loop" id="skills"><h1>Tech Stack and Skills</h1></section>
</template>

<style scoped>
.section {
  color: white;
}
.infinite-color-loop {
  background: linear-gradient(90deg, #298dda, #d73184, #f5333f, #fccc38);
  background-size: 400% 100%;
  animation: gradientSmooth 40s infinite;
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
</style>
