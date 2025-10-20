<template>
  <div
    class="flex flex-col justify-center md:flex-row md:justify-between md:gap-0 gap-2 items-center px-12 py-4"
  >
    <div class="flex flex-col text-center">
      <h1 class="text-3xl font-bold">Ashley Osuna</h1>
      <p class="italic">for impact.com</p>
    </div>
    <div class="text-center">
      <span @click="scroll('about-me')">About</span>
      <span @click="scroll('projects')">Projects</span>
      <span @click="scroll('skills')">Skills</span>
      <span @click="scroll('contact')">Contact</span>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 36px;
}
span {
  margin-right: 10px;
  font-size: 16px;
  font-weight: 400;
}

span:hover {
  cursor: pointer;
  color: #298dda;
}
</style>

<script>
export default {
  methods: {
    scroll(id) {
      const element = document.getElementById(id)
      element.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>
