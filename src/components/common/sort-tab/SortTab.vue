<script>
export default {
  name: 'SortTab',
  components: {},
  props: {
    sortNames: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  render(h) {
    return h(
      'div',
      { class: 'sort-tab' },
      this.getSortSlot(this.$slots.default)
    );
  },
  created() {},
  mounted() {},
  data() {
    return {};
  },
  methods: {
    getSortSlot(slots) {
      return this.sortNames.map(name => {
        return slots.find(
          slot => slot.componentOptions.propsData.name === name
        );
      });
    }
  },
  computed: {}
};
</script>

<style scoped></style>
