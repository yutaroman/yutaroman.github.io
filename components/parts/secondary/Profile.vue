<template>
  <aside :class="`${className}`">
    <h2 :class="`${className}-Heading`">Profile</h2>
    <p :class="`${className}-Thumbnail`">
      <img v-bind:src="siteData.thumbnail.link"
           v-bind:alt="siteData.thumbnail.alt">
    </p>
    <p :class="`${className}-Name`">{{ siteData.name }}</p>
    <ul :class="`${className}-Accounts`">
      <!-- FIXME: リストで className を bind したらエラーになる -->
      <li v-for="social in siteData.socials"
          :class="`${className}-AccountsItem`">
        <router-link :to="social.link">
          <i :class="`fab fa-${social.name}-square fa-2x`"></i>
        </router-link>
      </li>
    </ul>
    <p :class="`${className}-Description`">{{ siteData.description }}</p>
  </aside>
</template>


<script>
import siteData from '~/assets/json/site.json';
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
    margin: 30px auto 0;
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
    a {
      padding: 0 1px;
      transition: $BASE_TRANSTION;
      &:hover {
        opacity: $BASE_TRANSTION_OPACITY;
      }
    }
  }
  &-Description {
    border-top: 1px solid $COLOR_GRAY3;
    font-size: $FONT_SIZE14;
    margin-top: 15px;
    padding-top: 15px;
  }
}
</style>
