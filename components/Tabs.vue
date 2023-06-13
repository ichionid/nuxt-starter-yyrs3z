<template>
  <nav class="">
    <ul class="flex flex-row">
      <li
        class="
          basis-1/6
          text-center
          justify-center
          items-center
          min-w-min
          whitespace-nowrap
          py-2
          px-4
          active:text-white active:bg-primary
          text-primary
          bg-white
          active
        "
        v-for="(item, index) in items"
        :key="index"
      >
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
