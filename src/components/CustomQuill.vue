<template>
  <div id="app">
    <quill-editor theme="snow" toolbar="#my-toolbar" v-model:content="content" contentType="html">
      <template #toolbar>
        <div id="my-toolbar">
          <button class="ql-bold"></button>
          <button class="ql-italic"></button>

          <button id="add-selective-line" v-on:click="addSel">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg></button>
          <button id="add-selective-line" v-on:click="removeSel">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
            </svg></button>

        </div>
      </template>
    </quill-editor>
  </div>
</template>

<script>
import { createApp } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const app = createApp()
app.component('QuillEditor', QuillEditor)

export default {
  components: {
    QuillEditor
  },
  methods: {
    addSel: function () {
    },
    removeSel: function () {
    }
  },
  data() {
    return {
      content: "fill"
    }
  }
}


</script>

<style scoped>
#app {
  padding: calc(1rem - 1px);
}
</style>