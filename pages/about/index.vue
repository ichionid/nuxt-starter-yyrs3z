<template>
  <Tabs :items="navigationItems" />
</template>

<script>
export default {
  data() {
    return {
      navigationItems: [
        { label: 'Systemer', url: '/systemoverblik' },
        { label: 'Platforme', url: '/platformsoverblik' },
        { label: 'IT-løsninger', url: '/løsningsoverblik' },
        { label: 'Personale', url: '/personaleoverblik' },
        { label: 'Webservices', url: '/webserviceoverblik' },
        { label: 'Begreber', url: '/begrebsoverblik' },
        { label: 'Om It-overblik', url: '/about' },
      ],
    };
  },
};
</script>
