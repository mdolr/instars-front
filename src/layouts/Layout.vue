<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault';
import { shallowRef } from 'vue';

export default {
  name: 'Layout',
  data: () => {
    return {
      layout: shallowRef(LayoutDefault),
    };
  },
  watch: {
    $route: {
      immediate: true,
      async handler(route) {
        try {
          const component = await import(`@/layouts/${route.meta.layout}.vue`);
          this.layout = shallowRef(component?.default) || shallowRef(LayoutDefault);
        } catch (e) {
          this.layout = shallowRef(LayoutDefault);
        }
      },
    },
  },
};
</script>
