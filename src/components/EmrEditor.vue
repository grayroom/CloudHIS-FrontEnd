<template>
  <div class="p-4 editor">
    <div class="editor__buttons--navbar mb-1 flex gap-1">
      <button outlined class="text-sm p-2 bg-gray-200 border border-gray-400 whitespace-nowrap
      hover:bg-gray-300"
        v-on:click="insertRadio">
        양성/음성 선택
      </button>
      <button outlined class="text-sm p-2 bg-gray-200 border border-gray-400 whitespace-nowrap
      hover:bg-gray-300"
      v-on:click="insertDropdown">
        목록 선택
      </button>
      <button outlined class="text-sm p-2 bg-gray-200 border border-gray-400 whitespace-nowrap
      hover:bg-gray-300">
        일반텍스트
      </button>
      <button outlined class="text-sm p-2 bg-gray-200 border border-gray-400 whitespace-nowrap
      hover:bg-gray-300"
     v-on:click="insertHr">
        구분선 추가
      </button>
    </div>
    <editor-content :editor="editor" class="" />
  </div>
</template>

<script>
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Placeholder from '@tiptap/extension-placeholder'
import { Editor, EditorContent } from '@tiptap/vue-2'
import HardBreak from '@tiptap/extension-hard-break'
import HorizontalRule from '@tiptap/extension-horizontal-rule'

import { v4 as uuidv4 } from 'uuid'

import {
  radioSelect as RadioSelect,
  dropdownSelect as DropdownSelect,
  editable as Editable
} from './Extension.js'


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
        Document,
        Paragraph,
        Text,
        RadioSelect,
        DropdownSelect,
        Editable,
        Placeholder.configure({
          placeholder: '양식을 작성해주세요',
        }),
        HardBreak,
        HorizontalRule,
      ]
    })
  },

  methods: {
    insertRadio() {
      this.editor.commands.insertContent(
        '<radio-select count = "0" na = ' +
        uuidv4() + // random and for unique name(radio button group)
        '></radio-select><editable><p>항목명을 명시하세요</p></editable>')
      this.editor.chain().focus().setHorizontalRule().run()
      // this.editor.commands.setHardBreak()
    },
    insertDropdown() {
      this.editor.commands.insertContent(
        '<dropdown-select></dropdown-select><editable><p>항목명을 명시하세요</p></editable>')
      this.editor.chain().focus().setHorizontalRule().run()
      // this.editor.commands.setHardBreak()
    },
    insertHr() {
      this.editor.chain().focus().setHorizontalRule().run()
    }
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
button{
  line-break: nowrap;
}
/* Basic editor styles */
.ProseMirror {
  padding: 1rem;
  border: 1px solid #94a3b8;
  height: 100%;

  >hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}
/* Basic editor styles */

/* Placeholder (at the top) */
.ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
}

hr.ProseMirror-selectednode {
  border-top: 1px solid #68CEF8;
}
</style>