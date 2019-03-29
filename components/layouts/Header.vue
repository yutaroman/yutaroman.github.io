<template>
  <header :class="`${className}`">
    <div :class="`${className}__Container`">
      <p :class="`${className}-Logo`">
        <router-link to="/">{{ siteData.name }}</router-link>
      </p>
    </div>
  </header>
</template>


<script>
import siteData from '~/assets/json/site.json';
export default {
  data() {
    return {
      className: 'l-Header',
      siteData,
    }
  }
}
</script>


<style lang="scss">
.l-Header {
  border-bottom: 2px solid $COLOR_GRAY3;
  &__Container {
    width: $BASE_WIDTH;
    margin: 0 auto;
    padding: 20px 0;
  }
  &-Logo {
    display: flex;
    justify-content: center;
  }
}
</style>
