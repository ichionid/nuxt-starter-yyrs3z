<template>
  <a :href="url" class="hover:underline">{{ label }}</a>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>
