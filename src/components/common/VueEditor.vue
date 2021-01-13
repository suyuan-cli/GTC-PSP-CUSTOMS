<template>
  <div>
    <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import { quillEditor } from 'vue-quill-editor';
export default {
  name: 'editor',
  porps: {
    content: {
      type: String,
      default() {
        return '';
      }
    }
  },
  data: function() {
    return {
        content: '',
      editorOption: {
        placeholder: 'Hello World'
      }
    };
  },
  components: {
    quillEditor
  },
  methods: {}
};
</script>
<style scoped></style>