<script setup lang="ts">
import { IMAGE } from "~/common/image";
import { computed } from "vue";

type Props = {
  from: string;
};

const props = defineProps<Props>();

const fromDetails = computed(() => props.from === "details");
const fromConfirm = computed(() => props.from === "confirm");
const fromCompleted = computed(() => props.from === "completed");

const one = fromDetails.value ? IMAGE.black_one : IMAGE.white_one;
const two = fromConfirm.value ? IMAGE.black_two : IMAGE.white_two;
const three = fromCompleted.value ? IMAGE.black_three : IMAGE.white_three;
</script>

<template>
  <h1 class="top">資料請求</h1>
  <div class="nav">
    <div class="number">
      <img class="image" :src="one" />
      <div class="line1" />
      <img class="image -center" :src="two" />
      <div class="line2" />
      <img class="image" :src="three" />
    </div>
    <div class="state">
      <p class="text" :class="{ '-active': fromDetails }">入力</p>
      <p class="text -center" :class="{ '-active': fromConfirm }">確認</p>
      <p class="text" :class="{ '-active': fromCompleted }">完了</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top {
  padding-top: 50px;
  position: relative;
  text-align: center;

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 100px;
    height: 4px;
    bottom: -10px;
    background-color: $blue-line;
    left: calc(50% - 50px);
  }
}

.nav {
  margin-top: 50px;

  > .number {
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    margin: auto;

    > .image {
      z-index: 999;

      &.-center {
        position: relative;
        padding: 0 200px;
      }
    }

    > .line1 {
      &::after {
        content: "";
        display: inline-block;
        position: absolute;
        width: 210px;
        height: 2px;
        background-color: $gray;
        right: calc(50% + 10px);
      }
    }

    > .line2 {
      &::after {
        content: "";
        display: inline-block;
        position: absolute;
        width: 210px;
        height: 2px;
        background-color: $gray;
        left: calc(50% + 11px);
      }
    }
  }

  > .state {
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;

    > .text {
      color: $gray;
      font-weight: bold;
      padding: 5px 0 0;

      &.-active {
        color: $black;
      }

      &.-center {
        position: relative;
        padding: 0 202px;
      }
    }
  }
}
</style>
