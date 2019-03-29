<template>
  <footer :class="`${className}`">
    <div :class="`${className}__Container`">
      <p :class="`${className}-Copyright`">
        <small>© 2019 <router-link to="/">Yutaroman</router-link></small>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      className: 'l-Footer',
    }
  }
}
</script>

<style lang="scss">
.l-Footer {
  margin-top: 50px;
  &__Container {
    width: $BASE_WIDTH;
    margin: 0 auto;
  }
  &-Copyright {
    display: flex;
    justify-content: center;
    small {
      a {
        display: inline-block;
        text-decoration: underline;
        transition: $BASE_TRANSTION;
        &:hover {
          opacity: $BASE_TRANSTION_OPACITY;
        }
      }
    }
  }
}
</style>
