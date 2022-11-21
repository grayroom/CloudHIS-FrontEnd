<template>
	<div class="gap-10 max-w-[64rem] sticky top-0">
		<div class="text-gray-900 dark:text-gray-300 mb-5 pb-5
						border-gray-600 border-b ">
			<p class="text-3xl font-bold">New Appointment</p>
		</div>
		<div class="flex flex-col-reverse md:flex-row gap-10 overflow-y-scroll scrollbar-hide">
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
							<option v-for="patient in patientList" :value="patient.patient_id" :key="patient.patient_id">
								{{patient.name}}
							</option>
						</select>
					</div>
				</div>

				<label for="pre_script" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">preliminary</label>
				<textarea id="pre_script" rows="4" v-model="preliminary"
					class="block p-2.5 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
					placeholder="preliminary examination"></textarea>

				<label for="cur_script" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">comment</label>
				<textarea id="cur_script" rows="4" v-model="comment"
					class="block p-2.5 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
					placeholder="comment"></textarea>
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

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default {

	data() {
		return {
			category: "clinic",
			patient_id: 0,
			preliminary: "",
			comment: "",

			// NOTE: patient in charge
			patientList: [
				{
					patient_id: 0,
					name: "test"
				},
				{
					patient_id: 1,
					name: "test2"
				}
			]
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
		}).catch((err) => {
			console.log('i fucked up')
			console.log(err);
		});
	},

	methods: {
		submitAppointment() {
			const accessToken = Cookies.get('access');
			const accessTokenJSON = JSON.parse(atob(accessToken.split('.')[1]));

			axios.post('/auth/api/appointment/',
				{
					"doctor_idx": accessTokenJSON.user_id,
					"patient_idx": this.patient_id,
					"category": this.category,
					"preliminary": this.preliminary,
					"comment": this.comment
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
			}).catch((err) => {
				console.log('i fucked up')
				console.log(err);
			});
		}	
	}
}

</script>

<style lang="scss">

</style>