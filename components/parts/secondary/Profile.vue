<template>
  <aside :class="`${this.className}`">
    <h2 :class="`${this.className}-Heading`">Profile</h2>
    <p :class="`${this.className}-Thumbnail`">
      <img v-bind:src="siteData.thumbnail.link"
           v-bind:alt="siteData.thumbnail.alt">
    </p>
    <p :class="`${this.className}-Name`">{{ siteData.name }}</p>
    <ul :class="`${this.className}-Accounts`">
      <!-- FIXME: リストで className を bind したらエラーになる -->
      <li v-for="social in siteData.socials"
          class="s-Profile-AccountsItem">
        <router-link :to="social.link">
          <i :class="`fab fa-${social.name}-square fa-2x`"></i>
        </router-link>
      </li>
    </ul>
    <p :class="`${this.className}-Description`">{{ siteData.description }}</p>
  </aside>
</template>


<script>
import siteData from '~/site.json';
export default {
  data() {
    return {
      className: 's-Profile',
      siteData,
    }
  },
}
</script>


<style lang="scss">
.s-Profile {
  > :first-child {
    margin-top: 0;
  }
  &-Heading {
    background-color: $COLOR_GRAY3;
    font-size: $FONT_SIZE16;
    font-weight: bold;
    color: $COLOR_GRAY1;
    text-align: left;
    line-height: 1.1;
    padding: 15px;
    margin-top: 15px;
  }
  &-Thumbnail {
    margin: 15px auto 0;
    img {
      border-radius: 10px;
    }
  }
  &-Name {
    font-size: $FONT_SIZE20;
    font-weight: bold;
    margin-top: 15px;
  }
  &-Accounts {
    margin-top: 15px;
    display: flex;
  }
  &-AccountsItem {
    margin-left: 20px;
    &:first-child {
      margin-left: 0;
    }
  }
  &-Description {
    border-top: 1px solid $COLOR_GRAY3;
    margin-top: 15px;
    padding-top: 15px;
  }
}
</style>
