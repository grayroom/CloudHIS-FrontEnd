<template>
	<div>
		<div class="max-w-[64rem] mx-auto">
			<h1 class="text-3xl font-bold text-gray-900 dark:text-gray-300 mb-5 pb-5
						border-gray-600 border-b ">
				Diagnosis Chart
			</h1>
			<div class="flex gap-10">
				<div class="flex-1 max-w-[48rem] min-w-[18rem] mx-auto">
					<div class="relative z-0 mb-6 w-full group">
						<input type="text" name="floating_alias" id="floating_alias"
							class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" " required="" v-model="p_name">
						<label for="floating_alias"
							class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							name</label>
					</div>

					<div class="grid md:grid-cols-4 gap-x-6">
						<div class="relative z-0 mb-6 col-span-2 w-full group">
							<input type="date" name="floating_password" id="floating_password"
								class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" " required="" v-model="p_age">
							<label for="floating_password"
								class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
								Day Of Birth
							</label>
						</div>
						<div class="flex items-center pl-4 mb-6 rounded border border-gray-200 dark:border-gray-700">
							<input checked id="bordered-radio-1" type="radio" v-model="p_sex" value="female" name="bordered-radio"
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
							<label for="bordered-radio-1"
								class="py-2.5 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">female</label>
						</div>
						<div class="flex items-center pl-4 mb-6 rounded border border-gray-200 dark:border-gray-700">
							<input id="bordered-radio-2" type="radio" v-model="p_sex" value="male" name="bordered-radio"
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
							<label for="bordered-radio-2"
								class="py-2.5 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">male</label>
						</div>
					</div>

					<div class="relative z-0 mb-6 w-full group">
						<input type="text" name="floating_name" id="floating_name"
							class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" " required="" v-model="p_home">
						<label for="floating_name"
							class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							residence
						</label>
					</div>

					<label for="pre_script"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">preliminary</label>
          <editor-content :editor="pre_editor"
                          class="block mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

					<label for="cur_script"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">comment</label>
          <editor-content :editor="cur_editor"
                          class="block mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

					<button
						class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						@click="submitPrescript">
						submit
					</button>
				</div>
				<emr-nlp-helper @new-text="nerHandler"></emr-nlp-helper>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
import EmrNlpHelper from "@/components/EmrNlpHelper";
import { Editor, EditorContent } from '@tiptap/vue-2'
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Placeholder from "@tiptap/extension-placeholder";
import HardBreak from "@tiptap/extension-hard-break";
import HorizontalRule from "@tiptap/extension-horizontal-rule";

import {
  radioSelect as RadioSelect,
  componentTagHighlight as ComponentTagHighlight
} from './Extension.js'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default {
	components: {
		EmrNlpHelper,
    EditorContent
	},

  watch: {
    p_pre_script: function (newVal) {
      this.pre_editor.commands.setContent(newVal)
    },
  },

  mounted() {
    this.pre_editor = new Editor({
      content: this.p_pre_script,
      onUpdate: () => {
        this.$emit('input', this.pre_editor.getHTML())
      },
      extensions: [
        Document,
        Paragraph,
        Text,
        RadioSelect,
        ComponentTagHighlight,
        Placeholder.configure({
          placeholder: 'fill template',
        }),
        HardBreak,
        HorizontalRule,
      ]
    })

    this.cur_editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
        RadioSelect,
        Placeholder.configure({
          placeholder: 'fill template',
        }),
        HardBreak,
        HorizontalRule,
      ]
    })
  },

  beforeDestroy() {
    this.pre_editor.destroy()
  },

	data() {
		return {
			p_name: '',
			p_age: '',
			p_sex: '',
			p_home: '',
      p_pre_script: '',

      pre_editor: null,
      cur_editor: null
		}
	},


	methods: {
    nerHandler(new_text) {
      this.pre_editor.commands.clearContent()
      this.pre_editor.commands.insertContent("<tag-highlight text = '" + new_text + "'></tag-highlight>")
    },
		//NOTE: 처방전을 저장함
		submitPrescript() {
			const accessToken = Cookies.get('access');

			axios.post('/emr/api/prescript',
				JSON.stringify('ste'),
				{
					withCredentials: true,
					crossDomain: true,
					credentials: "access",
					headers: {
						'Content-Type': 'application/json',
						Authorization: accessToken
					}
				})
				.then(response => {
					console.log(response)
					//FIXME: reload 하지 않고 특정 컴포넌트만 reload 할수있는 방법이 있을것 같아
					location.reload()
				})
				.catch(error => {
					console.log(error)
					location.reload()
				})
		}
	}
}

</script>

<style lang="scss">
button {
  line-break: nowrap;
}

/* Basic editor styles */
.ProseMirror {
  padding: 1rem;
  border: 1px solid rgb(209 213 219);
  border-radius: 0.5rem;
  height: 100%;

  >hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}

@media (prefers-color-scheme: dark) {
  .ProseMirror {
    border-color: rgb(107 114 128);
  }
}

/* Basic editor styles */

/* Placeholder (at the top) */

.ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #6B7280;
  pointer-events: none;
  height: 0;
}

hr.ProseMirror-selectednode {
  border-top: 1px solid #68CEF8;
}

#defaultModal {
  background: rgba($color: #000000, $alpha: 0.5);
}

.pr {
  color: orange;
}
.te {
  color: deepskyblue;
}
.tr {
  color: lightgreen;
}
</style>