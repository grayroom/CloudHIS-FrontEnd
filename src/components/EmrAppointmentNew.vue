<template>
	<div class="gap-10 max-w-[64rem] sticky top-0">
		<div class="text-gray-900 dark:text-gray-300 mb-5 pb-5
						border-gray-600 border-b ">
			<p class="text-3xl font-bold">New Appointment</p>
		</div>
		<div class="flex flex-col-reverse md:flex-row gap-10">
			<!-- NOTE: emr viewer -->
			<div class="flex flex-1 flex-col p-5 rounded-lg md:min-w-[12rem] dark:bg-gray-900 border
									border-gray-600">

				<div class="grid md:grid-cols-2 gap-x-6">

					<div class="relative z-0 mb-6 w-full group">
						<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
							Emr Category
						</label>
						<select id="category" v-model="category"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
							<option value="0" selected disabled>--select category--</option>
							<option value="clinic">clinic</option>
							<option value="diagnosis">diagnosis</option>
							<option value="test">test</option>
						</select>
					</div>

					<div class="relative z-0 mb-6 w-full group"><label for="countries"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
							Patient to be seen
						</label>
						<select id="patient_id" v-model="patient_id"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
							<option value="0" selected disabled>--select patient--</option>
							<option v-for="patient in patientList" :value="patient.id" :key="patient.id">
								{{ patient.name }}
							</option>
						</select>
					</div>
				</div>

				<div class="flex flex-col md:flex-row gap-x-6">
					<div class="relative z-0 mb-6 group h-[306px]">
						<label for="pre_script"
							class="block mb-2 p-2 text-sm font-medium text-gray-900 dark:text-gray-400">Appointment
							Date</label>
						<vc-date-picker v-model='selectedDate' title-position="left" is-dark locale="en" />
					</div>

					<div class="relative z-0 w-full group px-2 h-[306px]">
						<label for="countries"
							class="sticky top-0 block mb-2 p-2 text-sm font-medium text-gray-900 dark:text-gray-400">Appointment
							Time</label>
						<ul class="h-[266px] p-5 mb-8 space-y-4 text-left text-gray-900 dark:text-white rounded-lg border border-gray-600 overscroll-none 
							scrollbar-hide overflow-y-scroll shadow-inner">
							<li class="flex items-center space-x-3 cursor-pointer select-none	" v-for="time in timeList"
								v-bind:key="time" v-on:click="selectAppointmentTime(time)">
								<svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
									viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" v-if="time == appointmentTime">
									<path fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>{{ time }}</span>
							</li>
						</ul>
					</div>
				</div>

				<label for="pre_script"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">preliminary</label>
				<editor-content :editor="pre_editor"
					class="block mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

				<button
					class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					@click="submitAppointment">
					submit
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
import { Editor, EditorContent } from '@tiptap/vue-2'
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Placeholder from "@tiptap/extension-placeholder";
import HardBreak from "@tiptap/extension-hard-break";
import HorizontalRule from "@tiptap/extension-horizontal-rule";

import {
	componentTagHighlight as ComponentTagHighlight
} from './Extension.js'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default {
	components: {
		EditorContent
	},

	mounted() {
		this.pre_editor = new Editor({
			content: this.preliminary,
			onUpdate: () => {
				this.$emit('input', this.pre_editor.getHTML())
			},
			extensions: [
				Document,
				Paragraph,
				Text,
				ComponentTagHighlight,
				Placeholder.configure({
					placeholder: 'fill preliminary',
				}),
				HardBreak,
				HorizontalRule,
			]
		})
	},

	watch: {
		p_pre_script: function (newVal) {
			this.pre_editor.commands.setContent(newVal)
		},
	},

	data() {
		return {
			category: 0,
			patient_id: 0,
			selectedDate: new Date(),
			timeList: [
				"09:00",
				"09:30",
				"10:00",
				"10:30",
				"11:00",
				"11:30",
				"12:00",
				"12:30",
				"13:00",
				"13:30",
				"14:00",
				"14:30",
				"15:00",
			],
			appointmentTime: "09:00",
			preliminary: "",

			pre_editor: null,

			// NOTE: 관리중인 환자 목록
			patientList: []
		}
	},

	created() {
		// NOTE: 페이지 첫 로드시에 관리중인 환자 목록을 받아, 예약을 생성할 수 있도록 돕는다.
		const accessToken = Cookies.get('access');
		const accessTokenJSON = JSON.parse(atob(accessToken.split('.')[1]));

		axios.post('/auth/api/patient/in-charge/',
			{
				"doctor_idx": accessTokenJSON.user_id
			},
			{
				withCredentials: true,
				crossDomain: true,
				credentials: "access",
				headers: {
					Authorization: "Bearer " + accessToken,
					ContentType: "application/json"
				}
			}
		).then((res) => {
			console.log(res.data);
			this.patientList = res.data;
			console.log(this.patientList)
		}).catch((err) => {
			console.log(err);
		});
	},

	methods: {
		submitAppointment() {
			const accessToken = Cookies.get('access');
			const accessTokenJSON = JSON.parse(atob(accessToken.split('.')[1]));
			const targetDateTime = this.selectedDate;
			targetDateTime.setHours(this.appointmentTime.split(':')[0]);
			targetDateTime.setMinutes(this.appointmentTime.split(':')[1]);

			axios.post('/emr/api/appointment/',
				{
					"patient_id": this.patient_id,
					"doctor_id": accessTokenJSON.user_id,
					"begin_at": targetDateTime,
					"category": this.category,
					"status": "pending",
					"preliminary": this.pre_editor.getHTML()
				},
				{
					withCredentials: true,
					crossDomain: true,
					credentials: "access",
					headers: {
						Authorization: "Bearer " + accessToken,
						ContentType: "application/json"
					}
				}
			).then(() => {
				alert('new appointment created!')
				this.$router.push({ name: 'EmrMain' })
			}).catch((err) => {
				console.log(err);
			});
		},

		selectAppointmentTime(time) {
			this.appointmentTime = time;
			console.log(this.appointmentTime)
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