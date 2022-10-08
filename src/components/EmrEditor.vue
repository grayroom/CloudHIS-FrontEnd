<template>
	<div class="editor">
		<div class="editor__buttons--navbar mb-2 flex flex-wrap gap-1">
			<button
				class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-300 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
				@click="insertRadio">
				pos / neg
			</button>
			<button
				class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-300 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
				@click="insertDropdown">
				list
			</button>
			<button
				class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-300 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
				@click="insertHr">
				divider
			</button>
			<button
				class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-300 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
				dummy
			</button>
			<button
				class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-300 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
				dummy
			</button>
			<button
				class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-300 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
				dummy
			</button>
			<button
				class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-300 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
				dummy
			</button>
			<button
				class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-300 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
				dummy
			</button>
			<button
				class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-300 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
				dummy
			</button>
			<button
				class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-300 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
				dummy
			</button>
			<button
				class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-300 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
				dummy
			</button>
		</div>

		<editor-content :editor="editor" class="" />

		<div class="editor__buttons--footer mt-2 flex gap-1">
			<button outlined
				class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				@click="toggleModal">
				save form
			</button>
		</div>

		<!-- Modal container -->
		<div id="defaultModal" tabindex=" -1" aria-hidden="true" ref="defaultModal"
			class="hidden overflow-y-auto overflow-x-hidden fixed z-50 w-full md:inset-0 h-modal md:h-full">
			<div class="relative p-4 w-full max-w-2xl h-full md:h-auto m-auto">
				<!-- Modal content -->
				<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
					<!-- Modal header -->
					<div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
						<h3 class="text-xl font-semibold text-gray-900 select-none dark:text-white">
							Template Editor
						</h3>
						<button @click="toggleModal"
							class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
							<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clip-rule="evenodd"></path>
							</svg>
							<span class="sr-only">close</span>
						</button>
					</div>
					<!-- Modal body -->
					<div class="p-6 space-y-6">
						<div class="mb-6">
							<label for="tmeplate-title"
								class="block mb-2 text-sm font-medium text-gray-900 select-none dark:text-gray-300">
								Template name
							</label>
							<input type="text" id="tmeplate-title" v-model="title"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="양식 이름을 정해주세요" required>
						</div>
					</div>
					<!-- Modal footer -->
					<div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-300 dark:border-gray-600">
						<button
							class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							@click="putData">
							save</button>
						<button @click="toggleModal" outlined
							class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-300 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
							cancel</button>
					</div>
				</div>
			</div>
		</div>
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
import axios from 'axios'
import Cookies from 'js-cookie'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


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
			title: ''
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
					placeholder: 'fill template',
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
		},

		// put editor data with axios
		putData() {
			const accessToken = Cookies.get('access');
			const data = {
				"content": this.editor.getJSON(),
				"title": this.title
			}

			axios.post('/emr/api/templates/',
				data,
				{
					withCredentials: true,
					crossDomain: true,
					credentials: "access",
					headers: {
						'Content-Type': 'application/json',
						Authorization: "Bearer " + accessToken
					}
				})
				.then(response => {
					console.log(response)
					// location.reload()
				})
				.catch(error => {
					console.log(error)
					// location.reload()
				})

			this.toggleModal()
		},

		toggleModal() {
			this.$refs.defaultModal.toggleAttribute('aria-hidden')
			this.$refs.defaultModal.classList.toggle('hidden')

			this.title = ''
		}
	},

	beforeUnmount() {
		this.editor.destroy()
	},
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
</style>