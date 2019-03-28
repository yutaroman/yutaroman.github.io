<template>
  <div>
    <layout-header />
    <layout-main />
    <layout-footer />
  </div>
</template>


<script>
import LayoutHeader from '~/components/layouts/Header.vue';
import LayoutMain from '~/components/layouts/Main.vue';
import LayoutFooter from '~/components/layouts/Footer.vue';
export default {
  props: ['layoutName'],
  components: {
    LayoutHeader,
    LayoutMain,
    LayoutFooter,
  },
}
</script>
