<template>
  <div class="sort-tab-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SortTabItem',
  components: {},
  props: {
    name: {
      type: String,
      default: null
    }
  },
  created() {},
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style scoped></style>
