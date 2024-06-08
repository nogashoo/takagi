<script setup lang="ts">
type Props = {
  title: string;
  default: string;
  lessons: Array<{ title: string; detail: string }>;
};

const props = defineProps<Props>();

const isSelect = ref(props.default);

const elementary = computed(() => {
  return props.lessons.map((lesson) => {
    return {
      title: lesson.title,
      detail: lesson.detail,
      isActive: isSelect.value === lesson.title,
    };
  });
});

const handleClickForElement = (title: string) => {
  isSelect.value = title;
};
</script>

<template>
  <div class="box">
    <AccordionButton :title="title">
      <div>
        <div class="category">
          <button
            class="button"
            :class="{ '-active': item.isActive }"
            v-for="(item, key) in elementary"
            :key="key"
            @click="handleClickForElement(item.title)"
          >
            {{ item.title }}
          </button>
        </div>
        <div v-for="(item, key) in elementary" :key="key">
          <div class="text" v-if="item.isActive" v-html="item.detail" />
        </div>
      </div>
    </AccordionButton>
  </div>
</template>

<style lang="scss">
.category {
  display: flex;
  margin: 10px;
  gap: 20px;

  > .button {
    padding: 5px 20px;
    font-weight: bold;
    background-color: $gray;
    border-style: solid;
    border-color: $black;
    border-width: 2px;
    border-radius: 9999px;

    &:hover {
      cursor: pointer;
    }

    &.-active {
      background-color: $yellow;
    }
  }
}

.text {
  font-size: 14px;
  padding: 20px;
}
</style>
