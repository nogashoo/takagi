<script setup lang="ts">
type Props = {
  title: string;
  to?: string;
  isDisable?: boolean;
};

defineProps<Props>();
</script>

<template>
  <NuxtLink class="button" :class="{ 'is-disabled': isDisable }" :to="to">
    <p class="title">{{ title }}</p>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  text-align: center;
  justify-content: center;
  color: $black;
  text-decoration: none;
  background-color: $blue;
  border-style: solid;
  width: 270px;
  height: 50px;
  border-color: $black;
  border-width: 2px;
  border-radius: 9999px;

  &.is-disabled {
    pointer-events: none;
    background-color: $gray;

    > .title {
      color: $lite-black;
    }
  }

  :hover {
    cursor: pointer;
  }

  > .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
</style>
