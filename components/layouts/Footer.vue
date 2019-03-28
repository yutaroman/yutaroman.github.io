<template>
  <footer :class="`${this.className}`">
    <div :class="`${this.className}__Container`">
      <p :class="`${this.className}-Copyright`">
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
}
.l-Footer__Container {
  width: $BASE_WIDTH;
  margin: 0 auto;
}
.l-Footer-Copyright {
  display: flex;
  justify-content: center;
  small {
    a {
      display: inline-block;
      text-decoration: underline;
    }
  }
}
</style>
