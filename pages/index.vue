<template>
  <div class="page-index">
    <card v-bind:jsonData="productsData" />
  </div>
</template>


<script>
import siteData from '~/assets/json/site.json';
import productsData from '~/assets/json/products.json';
import Card from '~/components/parts/primary/Card.vue';
export default {
  data() {
    return {
      siteData,
      productsData,
    }
  },
  layout: 'default',
  components: {
    Card,
  },
  head: {
    title: siteData.name,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: siteData.description,
      },
    ],
  },
}
</script>


<style lang="scss">
.page-index {
  > :first-child {
    margin-top: 0;
  }
}
</style>
