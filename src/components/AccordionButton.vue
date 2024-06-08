<script setup lang="ts">
import { IMAGE } from "~/common/image";

type Props = {
  type?: string;
  title: string;
};

defineProps<Props>();

const isOpen = ref(false);

const handleClick = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="accordion-button" :class="{ '-open': isOpen }">
    <button class="button" @click.prevent="handleClick">
      <h2 class="title">
        {{ title }}
      </h2>
      <img class="arrow" :class="{ '-open': isOpen }" :src="IMAGE.arrow" />
    </button>
    <div class="detail">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.accordion-button {
  > .button {
    display: flex;
    justify-content: space-between;
    background-color: $blue1;
    width: 100%;
    height: 50px;

    &:hover {
      cursor: pointer;
    }

    > .title {
      margin: auto 0;
      margin-left: 20px;
    }

    > .arrow {
      margin: auto 0;
      margin-right: 20px;

      &.-open {
        transform: rotate(90deg);
      }
    }
  }

  > .detail {
    height: 0;
    overflow: hidden;
  }

  &.-open > .detail {
    margin: 0 auto;
    height: auto;
    width: 100%;
    border-style: solid;
    border-top-style: none;
    border-color: $black;
    border-width: 2px;
  }
}
</style>
