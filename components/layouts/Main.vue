<template>
  <main :class="`${className}`">
    <div :class="`${className}__Container`">
      <div :class="`${className}-Primary`">
        <nuxt />
      </div>
      <div :class="`${className}-Secondary`">
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
.l-Main {
  &__Container {
    width: $BASE_WIDTH;
    margin: 50px auto 0;
    display: flex;
    justify-content: space-between;
  }
  &-Primary {
    width: calc(100% - #{$SECONDARY_WIDTH + 50px});
    > :first-child {
      margin-top: 0;
    }
  }
  &-Secondary {
    width: $SECONDARY_WIDTH;
    > :first-child {
      margin-top: 0;
    }
  }
}
</style>
