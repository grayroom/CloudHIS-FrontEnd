<template>
	<div class="gap-10 max-w-[64rem] sticky top-0">
		<div class="text-gray-900 dark:text-gray-300 mb-5 pb-5
						border-gray-600 border-b ">
			<p class="text-3xl font-bold">{{patient.name}}</p>
			<span class="text-gray-600 dark:text-gray-400">
				DOB: {{patient.birth}} ({{patient.sex}})
			</span>
		</div>
		<div class="flex flex-col-reverse md:flex-row gap-10 overflow-y-scroll scrollbar-hide">
			<!-- NOTE: emr viewer -->
			<div id="emrContainer"
				class="flex flex-1 flex-col gap-5 max-h-[42rem] md:min-w-[12rem] p-5 rounded-lg dark:bg-gray-700 hidden"
				ref="emrContainer">
				<div class="modal-header flex flex-shrink-0 items-center justify-between p-2 border-b border-gray-500
											rounded-t-md">
					<h5 class="text-xl font-medium leading-normal text-gray-800 dark:text-white" id="exampleModalLabel">
						EMR Viewer
					</h5>

					<button @click="closeEmrContainer" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5
													ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
						<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0
														01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"></path>
						</svg>
						<span class="sr-only">close</span>
					</button>
				</div>
				<div class="flex-1 max-w-[48rem] min-w-[18rem]">

					<div class="grid md:grid-cols-2 gap-x-6">
						<div class="relative z-0 mb-6 w-full group">
							<input type="text" name="floating_name" id="floating_name" class="block py-2.5 px-0 
																		w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none
																	border-gray-300 appearance-none dark:text-white dark:border-gray-600" placeholder=" " required=""
								v-model="emrList[targetEmrIdx].category" readonly>
							<label for="floating_name"
								class="absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] ">
								EMR Category
							</label>
						</div>

						<div class="relative z-0 mb-6 w-full group">
							<input type="text" name="floating_name" id="floating_name" class="block py-2.5 px-0 
													w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none
												border-gray-300 appearance-none dark:text-white dark:border-gray-600" placeholder=" " required=""
								v-model="emrList[targetEmrIdx].doctorName" readonly>
							<label for="floating_name"
								class="absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] ">
								Primary Care Doctor
							</label>
						</div>
					</div>

					<label for="pre_script"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">preliminary</label>
					<textarea id="pre_script" rows="4" v-model="emrList[targetEmrIdx].preliminary"
						class="block p-2.5 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
						placeholder="preliminary examination" readonly></textarea>

					<label for="cur_script" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">comment</label>
					<textarea id="cur_script" rows="4" v-model="emrList[targetEmrIdx].comment"
						class="block p-2.5 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
						placeholder="comment" readonly></textarea>
				</div>
			</div>
			<!-- NOTE: list view -->
			<div class="flex-1 max-h-[42rem] md:max-w-[48rem] md:min-w-[16rem] min-w-full mx-auto">
				<div id="accordion-collapse" data-accordion="collapse">
					<h2 id="accordion-collapse-heading-1">
						<button type="button"
							class="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 rounded-t-lg dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
							@click="toggleAccordion('accordion-1', $event)">
							<span>Symptoms</span>
							<svg class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd"></path>
							</svg>
						</button>
					</h2>
					<div id="accordion-collapse-body-1" class="accordion" ref="accordion-1">
						<div class="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
							<ul
								class="space-y-3 list-disc list-inside text-gray-500 dark:text-gray-400 overflow-x-scroll scrollbar-hide overscroll-none">
								<li v-for="symptom in symptoms" :key="symptom.idx" class="whitespace-nowrap">
									{{symptom.severity}}
									<span class="font-bold rounded text-gray-900 dark:text-white bg-green-800 p-1 mx-2">
										{{symptom.name}}
									</span>
									{{symptom.code}}
									<span class="rounded text-gray-900 dark:text-white bg-yellow-800 p-1 mx-2">
										{{symptom.onset}} ~
									</span>
								</li>
							</ul>
						</div>
					</div>
					<h2 id="accordion-collapse-heading-2">
						<button type="button"
							class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 border border-b-0 border-gray-200 dark:border-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
							@click="toggleAccordion('accordion-2', $event)">
							<span>Medicines</span>
							<svg class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd"></path>
							</svg>
						</button>
					</h2>
					<div id="accordion-collapse-body-2" class="accordion hidden" ref="accordion-2">
						<div class="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
							<ul
								class="space-y-3 list-none list-inside text-gray-500 dark:text-gray-400 overflow-x-scroll scrollbar-hide overscroll-none">
								<li v-for="medicine in medicines" :key="medicine.idx" class="whitespace-nowrap">
									<i class="fa-solid fa-tablets"></i>
									<span class="font-bold rounded text-gray-900 dark:text-white bg-green-800 p-1 mx-2">
										{{medicine.name}}
									</span>
									{{medicine.unit}} <i class="fa-solid fa-x"></i> {{medicine.amount}}
									<span class="rounded text-gray-900 dark:text-white bg-yellow-800 p-1 mx-2">
										{{medicine.begin}} ~ {{medicine.end}}
									</span>
								</li>
							</ul>
						</div>
					</div>
					<h2 id="accordion-collapse-heading-3">
						<button type="button"
							class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 border border-gray-200 dark:border-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
							@click="toggleAccordion('accordion-3', $event)">
							<span>Medical Records</span>
							<svg class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd"></path>
							</svg>
						</button>
					</h2>
					<div id="accordion-collapse-body-3" class="accordion hidden" ref="accordion-3">
						<div class="p-5 font-light border rounded-b-lg border-gray-200 dark:border-gray-700 dark:bg-gray-900">
							<div v-for="( emr, idx ) in emrList" :key="idx" @click="showEmrData(idx)" class="flex items-center space-x-4 border-b border-gray-600 pb-4 cursor-pointer
																	hover:bg-gray-100 dark:hover:bg-gray-700 p-4 overflow-x-scroll scrollbar-hide overscroll-none">
								<div class="flex-1 min-w-0 break-words">
									<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
										{{emr.symptom}} - {{emr.category}}
									</p>
									<p class="text-sm text-gray-500 truncate dark:text-gray-400">
										{{emr.createdAt}}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default {

	data() {
		return {
			targetEmrIdx: 0,
			emrList: [
				{
					idx: 1,
					patientIdx: 0,
					doctorIdx: 0,
					doctorName: "김의사",
					category: "clinic report",
					preliminary: "hello",
					comment: "world",
					createdAt: "2021-05-01",
					updatedAt: "2021-05-01",

					symptom: 'haedache'
				},
				{
					idx: 2,
					patientIdx: 0,
					doctorIdx: 0,
					doctorName: "김의사",
					appointmentIdx: 0,
					category: "clinic report",
					preliminary: "",
					comment: "",
					createdAt: "2021-05-02",
					updatedAt: "2021-05-02",

					symptom: 'stomachache'
				},

			],
			patient: {
				name: 'Paul Blanco',
				birth: '1999-02-26',
				sex: 'male'
			},
			medicines: [
				{
					name: "acetaminophen",
					amount: 30,
					unit: "500mg",
					begin: "2021-01-01",
				},
				{
					name: "ibuprofen",
					amount: 30,
					unit: "500mg",
					begin: "2021-01-01",
				},
				{
					name: "aspirin",
					amount: 30,
					unit: "500mg",
					begin: "2021-01-01",
					end: "2021-01-31"
				},
			],
			symptoms: [
				{
					name: "headache",
					onset: "2021-01-01",
					code: "R51",
					severity: "severe",
				},
				{
					name: "fever",
					onset: "2021-01-01",
					code: "R50.9",
					severity: "moderate",
				},
				{
					name: "cough",
					onset: "2021-01-01",
					code: "R05.9",
					severity: "mild", // mild, moderate, severe
				},
			]
		}
	},

	created() {
		const accessToken = Cookies.get('access');

		// TODO: 환자와 관련된 정보를 가져옴
		// FIXME: 이거 아직 구현이 안됨... 환자콘솔 구현이랑 같이 진행해야함
		axios.post('/auth/api/patient/info/',
			{
				"user_idx": this.$route.params.idx
			},
			{
				withCredentials: true,
				crossDomain: true,
				headers: {
					'Authorization': 'Bearer ' + accessToken
				}
			})
			.then((response) => {
				this.patient = response.data;
			})
			.catch((error) => {
				console.log(error);
			});

		axios.post('/emr/api/symptom/list/',
			{
				"patient_idx": this.$route.params.id
			},
			{
				withCredentials: true,
				crossDomain: true,
				headers: {
					'Authorization': 'Bearer ' + accessToken
				}
			})
			.then((response) => {
				this.symptoms = response.data;
			})
			.catch((error) => {
				console.log(error);
			});

		axios.post('/emr/prescript/list/',
			{
				"patient_idx": this.$route.params.id
			},
			{
				withCredentials: true,
				crossDomain: true,
				headers: {
					'Authorization': 'Bearer ' + accessToken
				}
			})
			.then((response) => {
				this.medicines = response.data;
			})
			.catch((error) => {
				console.log(error);
			});

		axios.post('/emr/api/emr/list/',
			{
				"patient_idx": this.$route.params.id
			},
			{
				withCredentials: true,
				crossDomain: true,
				headers: {
					'Authorization': 'Bearer ' + accessToken
				}
			})
			.then((response) => {
				this.emrList = response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	},

	methods: {
		toggleAccordion(id, e) {
			document.querySelectorAll('.accordion').forEach((el) => {
				el.classList.add('hidden');
			});

			this.$refs[id].classList.toggle('hidden');
			e.currentTarget.children[1].classList.toggle('rotate-180');
		},

		showEmrData(idx) {
			this.openEmrContainer()

			this.targetEmrIdx = idx

			// FIXME 이걸 그냥 emr 불러올 때 같이 가져와버리는게 나아보여
			const docIdx = this.emrList[idx].doctorIdx;
			const accessToken = Cookies.get('access');

			axios.post('/auth/api/user/info/',
				{
					userIdx: docIdx
				}, {
				withCredentials: true,
				crossDomain: true,
				headers: {
					'Authorization': 'Bearer ' + accessToken
				}
			})
				.then((response) => {
					this.emrList[idx].doctorName = response.data.name;
				})
				.catch((error) => {
					console.log(error);
				});
		},

		openEmrContainer() {
			this.$refs.emrContainer.classList.remove('hidden')
		},
		closeEmrContainer() {
			this.$refs.emrContainer.classList.add('hidden')
		}
	}
}

</script>

<style lang="scss">

</style>