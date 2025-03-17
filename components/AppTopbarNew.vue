<script setup>
import { ref } from 'vue'
// import { usePrimeVue } from 'primevue/config'
import MenuBar from 'primevue/menubar'
import Button from 'primevue/button'

const menuItems = ref([
  {
    label: 'Home',
    icon: 'pi pi-home'
  },
  {
    label: 'About',
    icon: 'pi pi-info-circle'
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope'
  }
])

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <div class="w-full">
    <!-- Desktop Menu -->
    <div class="hidden md:block">
      <MenuBar :model="menuItems" />
    </div>

    <!-- Mobile MenuBar Header -->
    <div class="flex items-center justify-between md:hidden px-4 py-3 bg-white shadow-md">
      <div class="text-xl font-semibold">MyApp</div>
      <Button
        icon="pi pi-bars"
        class="p-button-text"
        @click="toggleMobileMenu"
        aria-label="Menu"
      />
    </div>

    <!-- Fullscreen Mobile Menu -->
    <transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center space-y-6 text-xl font-medium"
      >
        <Button
          icon="pi pi-times"
          class="absolute top-4 right-4 p-button-text"
          @click="toggleMobileMenu"
          aria-label="Close"
        />
        <div
          v-for="item in menuItems"
          :key="item.label"
          class="hover:text-blue-600 cursor-pointer"
          @click="toggleMobileMenu"
        >
          <i :class="item.icon" class="mr-2"></i> {{ item.label }}
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
