<template>
  <div>
    <el-button @click="change">改变</el-button>
    <sort-tab :sort-names="sortNames">
      <sort-tab-item name="n1">
        11111
      </sort-tab-item>
      <sort-tab-item name="n2">
        2222
      </sort-tab-item>
      <sort-tab-item name="n3">
        333
      </sort-tab-item>
    </sort-tab>
  </div>
</template>

<script>
import SortTab from './SortTab';
import SortTabItem from './SortTabItem';
export default {
  name: 'Demo',
  components: { SortTab, SortTabItem },
  props: {},
  created() {},
  mounted() {},
  data() {
    return {
      sortNames: ['n2', 'n1', 'n3']
    };
  },
  methods: {
    change() {
      this.sortNames = ['n1', 'n2', 'n3'];
    }
  },
  computed: {}
};
</script>

<style scoped></style>
