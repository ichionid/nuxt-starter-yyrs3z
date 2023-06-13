<template>
  <nav class="flex flex-row px-12 lg:px-48 py-4">
    <ul class="flex flex-row basis-11/12">
      <li class="" v-for="(item, index) in items" :key="index">
        <NavigationItem :url="item.url" :label="item.label" />
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
