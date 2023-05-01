<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import { OnClickOutside, OnLongPress,  } from '@vueuse/components'
</script>

<template>
  <h1>Show suggestions on dynamic components</h1>

  <HelloWorld msg="Vite + Vue" />

  <!-- Volar typecheck working ✅ -->
  <Component :is="HelloWorld" msg="a"/>
    
  <!-- Volar typecheck working ✅ -->
  <Component is="a" :href="true"></Component>

  <!-- Volar typecheck `not` working ❌ -->
  <Component :is="'a'" :href="true"></Component>

  <!-- Volar typecheck working ✅ -->
  <component :is="Math.random() > 0.5 ? Foo : Bar" />

  <!-- Volar typecheck `not` working ❌ -->
  <OnClickOutside :as="'a'" :href="true">asdf</OnClickOutside>

  <!-- Volar typecheck `not` working ❌ -->
  <OnLongPress :as="'button'" :type="true"></OnLongPress>

  <!-- Volar typecheck `not` working ❌ -->
  <Component :is="OnLongPress" :as="'button'" :type="true"/>
</template>
