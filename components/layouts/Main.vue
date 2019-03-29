<template>
  <main :class="`${this.className}`">
    <div :class="`${this.className}__Container`">
      <div :class="`${this.className}-Primary`">
        <nuxt />
      </div>
      <div :class="`${this.className}-Secondary`">
        <secondary-profile />
      </div>
    </div>
  </main>
</template>


<script>
import SecondaryProfile from '../parts/secondary/Profile.vue';
export default {
  data() {
    return {
      className: 'l-Main',
    }
  },
  components: {
    SecondaryProfile,
  }
}
</script>


<style lang="scss">
.l-Main {}
.l-Main__Container {
  width: $BASE_WIDTH;
  margin: 50px auto 0;
  display: flex;
  justify-content: space-between;
}
.l-Main-Primary {
  width: 100%;
  min-width: calc(100% - #{$SECONDARY_WIDTH});
}
.l-Main-Secondary {
  width: 300px;
  margin-left: 50px;
}
</style>
