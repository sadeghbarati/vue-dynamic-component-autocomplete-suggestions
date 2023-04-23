<script setup lang="ts">
import type { } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
</script>

<template>

  <h1>Show suggestions on dynamic components</h1>

  <HelloWorld msg="Vite + Vue" />

  <!--                  here 👇 I should see msg prop -->
  <Component :is="HelloWorld" />
    
  <!--             👇 href, I should see AnchorHTMLAttributes -->
  <Component is="a" ></Component>

  <component is="time" datetime=""></component>

  <!-- show both component props in this case     👇 -->
  <component :is="Math.random() > 0.5 ? Foo : Bar" />
</template>
