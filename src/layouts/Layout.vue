<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault';

export default {
  name: 'Layout',
  data: () => {
    return {
      layout: LayoutDefault,
    };
  },
  watch: {
    $route: {
      immediate: true,
      async handler(route) {
        try {
          const component = await import(`@/layouts/${route.meta.layout}.vue`);
          this.layout = component?.default || LayoutDefault;
        } catch (e) {
          this.layout = LayoutDefault;
        }
      },
    },
  },
};
</script>
