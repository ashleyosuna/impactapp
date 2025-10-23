<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <header>
    <div>
      <Navbar />
    </div>
  </header>

  <main>
    <Hero />
    <About />
    <Projects />
    <!-- <Skills /> -->
    <Contact />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
