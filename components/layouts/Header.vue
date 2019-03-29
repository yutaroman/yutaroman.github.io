<template>
  <header :class="`${this.className}`">
    <div :class="`${this.className}__Container`">
      <p :class="`${this.className}-Logo`">
        <router-link to="/">{{ siteData.name }}</router-link>
      </p>
    </div>
  </header>
</template>


<script>
import siteData from '~/site.json';
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
}
.l-Header__Container {
  width: $BASE_WIDTH;
  margin: 0 auto;
  padding: 20px 0;
}
.l-Header-Logo {
  display: flex;
  justify-content: center;
}

</style>
