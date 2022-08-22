<template>
  <div class="min-w-fit flex-1 p-4 shadow-xl">
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'

import VueComponent from '../Extension.js'

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    }
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        VueComponent,
      ],
      content: `
        <p>
          This is still the text editor you’re used to, but enriched with node views.
        </p>
        <vue-component count="0" na='1'></vue-component>
        <vue-component count="2" na='2'></vue-component>
        <vue-component count="0" na='3'></vue-component>
        <p>
          Did you see that? That’s a Vue component. We are really living in the future.
        </p>
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
/* Basic editor styles */
.ProseMirror {
  >*+* {
    margin-top: 0.75em;
  }
}
</style>