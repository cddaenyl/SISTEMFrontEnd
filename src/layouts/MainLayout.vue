<script setup lang="ts">
import FooterContent from '@/components/FooterContent.vue';
import HeaderContent from '@/components/HeaderContent.vue';
</script>

<template>
  <HeaderContent />
  <main>
    <slot>
      
    </slot>
  </main>
  <FooterContent />
</template>
