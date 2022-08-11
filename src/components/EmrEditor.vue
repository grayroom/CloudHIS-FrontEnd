<template>
  <div class="h-[calc(100vh-4rem)] w-8/12">
    <QuillEditor theme="snow" class="min-h-full" />
  </div>
</template>

<script>
import QuillEditor from "./CustomQuill.vue"
export default {
  components: {
    QuillEditor
  }
}
</script>

<style>
  .ql-toolbar {
    height: 3rem;
  }
  .ql-editor {
    height: calc(100vh - 9rem);
  }
</style>