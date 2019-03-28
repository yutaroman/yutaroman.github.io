<template>
  <div v-bind:id="`page-${this.$route.name}`">
    <test-parts />
  </div>
</template>


<script>
import TestParts from '~/components/parts/primary/TestParts.vue'
export default {
  layout: 'default',
  components: {
    TestParts,
  }
}
</script>


<style lang="scss">
</style>
