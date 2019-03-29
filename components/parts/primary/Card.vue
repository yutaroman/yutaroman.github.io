<template>
  <section :class="`${className}`">
    <h2 :class="`${className}-Heading`">{{ jsonData.name }}</h2>
    <ul :class="`${className}-List`">
      <li v-for="item in jsonData.list"
          :class="`${className}-ListItem`">
        <h3 :class="`${className}-ListItemHeading`">{{ item.name }}</h3>
        <p :class="`${className}-ListItemDescription`">{{ item.description }}</p>
        <p :class="`${className}-ListItemLink`">
          <router-link :to="item.link">show</router-link>
        </p>
      </li>
    </ul>
  </section>
</template>


<script>
export default {
  data() {
    return {
      className: 'p-Card',
    }
  },
  props: {
    jsonData: Object,
  }
}
</script>


<style lang="scss">
.p-Card {
  margin-top: 50px;
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
  &-List {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &-ListItem {
    border: 1px solid $COLOR_GRAY3;
    box-sizing: border-box;
    width: calc(50% - 15px);
    min-width: calc(50% - 15px);
    margin-top: 30px;
    &:nth-child(even) {
      margin-left: 30px;
    }
    > :first-child {
      border-top: 0;
    }
  }
  &-ListItemHeading {
    border-top: 1px solid $COLOR_GRAY3;
    font-size: $FONT_SIZE20;
    font-weight: bold;
    padding: 15px;
  }
  &-ListItemDescription {
    border-top: 1px solid $COLOR_GRAY3;
    font-size: $FONT_SIZE14;
    padding: 15px;
  }
  &-ListItemLink {
    border-top: 1px solid $COLOR_GRAY3;
    padding: 15px;
    a {
      background-color: $COLOR_GRAY1;
      border-radius: 20px;
      font-size: $FONT_SIZE14;
      font-weight: bold;
      color: $COLOR_WHITE1;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 40px;
      margin: 0 auto;
      transition: $BASE_TRANSTION;
      &:hover {
        opacity: $BASE_TRANSTION_OPACITY;
      }
    }
  }
}
</style>
