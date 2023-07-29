<script setup lang="ts">
import { ref } from 'vue'

import TypeComponent from '@/components/TypeComponent.vue'

const activeBar = ref('all')

const changeActiveBar = (type: string) => {
  activeBar.value = type
}
</script>

<template>
  <p>#todo</p>
  <nav>
    <div class="tabs">
      <div class="tab" @click="changeActiveBar('all')">All</div>
      <div class="tab" @click="changeActiveBar('active')">Active</div>
      <div class="tab" @click="changeActiveBar('completed')">Completed</div>
    </div>
    <div class="slider"></div>
    <hr>
  </nav>
  <main>
    <type-component type="all" :class="{ notSeen: activeBar !== 'all'}" />
    <type-component type="active" :class="{ notSeen: activeBar !== 'active'}" />
    <type-component type="completed" :class="{ notSeen: activeBar !== 'completed'}" />
  </main>
</template>

<style scoped>
p {
  font-family: "Raleway", "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 42.26px;
  text-align: center;
  letter-spacing: -4.5%;
}

.tabs {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin: 0;
  padding: 0;

  .tab {
    text-decoration: none;
    text-align: center;
    font-size: 14px;
    line-height: 17.07px;
    margin: 8px 0;
    cursor: pointer;
    &:hover, &:focus, &:active, &:visited {
      text-decoration: none;
      color: var(--default-color);
    }
  }
}


.slider {
  height: 4px;
  width: 89px;
  background-color: var(--secondary-color);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.notSeen {
  display: none;
}

hr {
  margin: 0;
}
</style>
