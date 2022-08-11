<template>
  <div class=" min-w-fit flex-1">
    <QuillEditor class="min-h-full"/>

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
.ql-editor {
  height: calc(100vh - 8rem);
}
</style>