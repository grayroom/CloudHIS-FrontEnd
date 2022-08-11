<template>
  <div id="app">
    <quill-editor theme="snow"></quill-editor>
  </div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
  components: {
    QuillEditor
  }
}

</script>

<style scoped>
  #app {
    padding: calc(1rem - 1px);
  }
</style>