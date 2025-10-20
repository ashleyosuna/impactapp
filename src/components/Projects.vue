<script setup>
import { ref, onMounted } from 'vue'

const display = ref('consignment-software')
const myButton = ref(null)

onMounted(() => {
  if (myButton.value) {
    myButton.value.focus()
  }
})
</script>

<template>
  <div class="section" id="projects">
    <h1 class="">Selected Projects</h1>
    <div class="tabs">
      <button
        @click="display = 'consignment-software'"
        ref="myButton"
        :class="{ 'bg-white': display === 'consignment-software' }"
      >
        Consignment Software
      </button>
      <button
        @click="display = 'online-catalog'"
        :class="{ 'bg-white': display === 'online-catalog' }"
      >
        Online Catalog
      </button>
      <button @click="display = 'product-page'" :class="{ 'bg-white': display === 'product-page' }">
        Product Page
      </button>
    </div>
    <div>
      <div v-if="display === 'consignment-software'" class="project-container">
        <h2>Good Things Consignments — Internal Consignment Software</h2>
        <span>
          <p class="font-semibold italic inline">Stack:</p>
          Angular | MongoDB | Express
        </span>
        <span>
          Worked as a full-stack web developer building and maintaining in-store software for
          managing consignment inventory, payouts, and sales.
        </span>

        <div>
          <p class="font-semibold italic">Some Projects I Worked on...</p>
          <div>
            <font-awesome-icon icon="fa-check" />
            <p class="italic inline font-semibold">Inventory Filtering</p>
            - used latest MongoDB tools to filter faster and more reliably.
          </div>
          <div>
            <font-awesome-icon icon="fa-check" />
            <p class="italic inline font-semibold">Business Dashboard</p>
            - built an administrative dashboard where managers could visualize sales data.
          </div>
        </div>
        <div>
          <p class="font-semibold italic">What I learned...</p>
          <div>
            <font-awesome-icon icon="fa-lightbulb" />
            <p class="italic inline font-semibold">Debugging under time constraints</p>
            - had to understand legacy code to fix pressing issues that would arise.
          </div>
          <div>
            <font-awesome-icon icon="fa-lightbulb" />
            <p class="italic inline font-semibold">Thorough testing</p>
            - tested teammate's work to ensure the high-quality of deployments.
          </div>
          <div>
            <font-awesome-icon icon="fa-lightbulb" />
            <p class="italic inline font-semibold">Working in a smaller team</p>
            - gained valuable experience from requirements-gathering to deployment.
          </div>
        </div>
      </div>
      <div v-if="display === 'online-catalog'" class="flex flex-col lg:flex-row gap-4">
        <div class="info">
          <h2>Stationary Store Catalogue</h2>
          <span>
            <p class="font-semibold italic inline">Stack:</p>
            NextJs | Typescript | Supabase | Tailwind
          </span>
          <span>
            A full-stack online catalogue for my family's stationary store. Built with customer and
            admin interfaces, allowing product display, creation and updated. Implemented
            authentication functionality for admin protected routes.
          </span>
          <div>
            <p class="font-semibold italic">What I learned...</p>
            <div>
              <font-awesome-icon icon="fa-lightbulb" />
              <p class="italic inline">Component-driven design.</p>
            </div>
            <div>
              <font-awesome-icon icon="fa-lightbulb" />
              <p class="italic inline">End-to-end deployment.</p>
            </div>
            <div>
              <font-awesome-icon icon="fa-lightbulb" />
              <p class="italic inline">Middleware and authentication.</p>
            </div>
          </div>
          <div>
            <a class="block" href="https://los-reyess-new.vercel.app/" target="_blank"
              ><font-awesome-icon icon="fa-link" /> View Live</a
            >
            <a href="https://github.com/ashleyosuna/los-reyess-new" target="_blank"
              ><font-awesome-icon icon="fa-folder-open" /> Source Code</a
            >
          </div>
        </div>
        <div>
          <div class="image-container left pb-[10px]">
            <video muted autoplay class="border border-[#eaebed] rounded-md p-2">
              <source src="/catalog.mp4" controls type="video/mp4" />
            </video>
          </div>
          <div class="image-container right">
            <img src="/admin-page.png" class="border border-[#eaebed] rounded-md p-2" />
          </div>
        </div>
      </div>
      <div v-if="display === 'product-page'" class="flex flex-col lg:flex-row gap-4">
        <div class="info">
          <h2>Startup Product Page</h2>
          <span>
            <p class="font-semibold italic inline">Stack:</p>
            NextJs | Typescript | Tailwind
          </span>
          <span>
            A product page created for Gifted, a startup team project I've been working on for a
            class this term. Utilized my knowledge of NextJs along with Figma Make to create a clean
            and attractive product page.
          </span>
          <div>
            <a class="block" href="https://gifted-seng-480-a-bcom-450.vercel.app/" target="_blank"
              ><font-awesome-icon icon="fa-link" /> View Live</a
            >
          </div>
        </div>
        <div class="">
          <div class="image-container top left">
            <img src="/product-page1.png" class="rounded-md" />
          </div>
          <div class="image-container right">
            <img src="/product-page-2.png" class="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tabs {
  border-radius: 40px;
  background: #eaebed;
  padding: 10px;
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 36px;
}

.tabs button {
  border-radius: 26px;
  padding: 10px 30px;
  cursor: pointer;
  transition:
    color 0.3s,
    background-color 0.3s;
}

/* .tabs button:focus {
  background-color: white;
} */

.project-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
}

.info h2,
.project-container h2 {
  color: black;
  font-size: 24px;
  font-weight: 400;
}

.image-container {
  width: 650px;
}

.top {
  margin-bottom: -10px;
}

.left {
  padding-right: 100px;
}

.right {
  padding-left: 100px;
}
</style>
