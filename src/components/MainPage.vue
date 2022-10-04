<template>
	<div>
		<div class="max-w-[64rem] mx-auto">
			<h1 class="text-3xl font-bold text-gray-900 dark:text-gray-300 mb-5 pb-5
					border-gray-600 border-b">
				전자의무기록
			</h1>
			<div class="flex gap-10 justify-between">
				<!-- main -->
				<div class="flex-1 min-w-[18rem] max-h-[42rem] border-r border-gray-600 pr-10 
				text-gray-900 dark:text-gray-300 flex flex-col gap-5">
					<nav id="mainNav" class="flex items-center bg-gray-900 rounded-xl p-1 
												border border-gray-600">
						<button outlined class="text-white bg-blue-700 hover:bg-blue-800 
								focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
								rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 
								dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							신규예약 생성
						</button>
					</nav>
					<div class="bg-gray-900 rounded-lg text-gray-900 border 
									border-gray-600 dark:text-gray-300 shadow-inner overflow-y-scroll  
									overscroll-none scrollbar-hide relative">
						<div class="text-xl font-semibold text-gray-900 dark:text-white sticky top-0 p-2
								bg-[#303030A0]">
							{{selectedDate.getMonth() + 1}}월 {{selectedDate.getDate()}}일 진료일정
						</div>
						<div class="p-5 m-5 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
							<time class="text-lg font-semibold text-gray-900 dark:text-white">
								오전
							</time>
							<ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
								<li v-for="appo in appoList" :key="appo.id" @mouseleave="closePopup" @mousedown="mouseDown">
									<a href="#" class="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
										<div class="text-gray-600 dark:text-gray-400">
											<div class="text-base font-normal">
												<span class="font-bold rounded text-gray-900 dark:text-white bg-green-800 p-1">
													{{appo.p_name}}</span>
												님의
												<span class="font-medium text-gray-900 dark:text-white">
													{{appo.kind}}</span>
												(이)가
												<span class="font-medium text-gray-900 dark:text-white">
													{{appo.time_at}}</span>
												에 예정되어 있습니다.
											</div>
											<div class="text-sm font-normal">{{appo.room}} / {{appo.time_at}} ~ {{appo.time_at}}</div>
											<span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
												{{appo.time_at}}</span>
										</div>
									</a>
								</li>
							</ol>
						</div>
						<div class="p-5 m-5 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
							<time class="text-lg font-semibold text-gray-900 dark:text-white">
								오후
							</time>
							<ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
								<li>
									<a href="#" class="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
										<div class="text-gray-600 dark:text-gray-400">
											<div class="text-base font-normal">
												<span class="font-bold rounded text-gray-900 dark:text-white bg-green-800 p-1">
													{환자명}</span>
												님의
												<span class="font-medium text-gray-900 dark:text-white">
													{항목명}</span>
												(이)가
												<span class="font-medium text-gray-900 dark:text-white">
													{시간}</span>
												에 예정되어 있습니다.
											</div>
											<div class="text-sm font-normal">OOO호 병동 / 오전 10시 00분 ~ 오전 10시 20분</div>
											<span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
												1시간 후</span>
										</div>
									</a>
								</li>
							</ol>
						</div>
					</div>
				</div>
				<!-- sidebar -->
				<div class="flex flex-col gap-5 max-h-[42rem]">
					<vc-date-picker v-model='selectedDate' title-position="left" is-dark />
					<div class="overflow-y-scroll scrollbar-hide overscroll-none w-[250px] text-gray-900 
							dark:text-gray-300 border-r border-gray-600 border rounded-lg">
						<div class="text-sm font-semibold text-gray-900 dark:text-white sticky top-0 p-2
														bg-[#303030A0]">
							{{selectedDate.getMonth() + 1}}월 담당 환자목록
						</div>
						<div class="flex flex-col max-w-md m-4 divide-gray-200 dark:divide-gray-700 gap-4">
							<div v-for="patient in patientList" :key="patient.id"
								class="flex items-center space-x-4 border-b border-gray-600 pb-4">
								<div class="flex-1 min-w-0">
									<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
										{{patient.name}} ({{patient.age}}세)
									</p>
									<p class="text-sm text-gray-500 truncate dark:text-gray-400">
										{{patient.symptom}}
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
import axios from 'axios'
import Cookies from 'js-cookie'


// https://vcalendar.io/installation.html
export default {
	data() {
		return {
			selectedDate: new Date(),
			patientList: [
				{
					name: '김철수',
					age: 30,
					symptom: '피로, 두통, 발열',
				},
				{
					name: '이영희',
					age: 40,
					symptom: '피로, 두통, 발열',
				}
			],
			appoList: [
				{
					p_name: '김철수',
					kind: '진료(초진)',
					time_at: '오전 10시 00분',
					room: '412호 병동',
				},
				{
					p_name: '이영희',
					kind: '진료(재진)',
					time_at: '오전 10시 30분',
					room: '412호 병동',
				}
			],
			popupLeft: 0,
			popupTop: 0,
			popupDisp: false,
		}
	},

	setup() {
		// function hi(e) {
		// 	//TODO: https://leestrument.tistory.com/entry/%ED%81%B4%EB%A6%AD%ED%95%9C-%EC%9C%84%EC%B9%98%EC%97%90-%EC%9A%94%EC%86%8C-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0
		// }
	},

	methods: {
		mouseDown() {
			//TODO: 팝업메뉴를 띄워줌
		},

		closePopup() {
			//TODO: 팝업메뉴를 닫아줌
		}
	},

	watch: {
		selectedDate: {
			function() {
				const accessToken = Cookies.get('access');

				axios.post('emr/api/appointments',
					{
						"selectedDate": this.selectedDate
					},
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
						//TODO: 진료일정 정보를 {환자명}/{항목명}/{시간}/{장소}/{시각} 형식으로 받아옴
					})
					.catch(error => {
						console.log(error)
					})
			}
		}
	}
};
</script>
  
<style lang="scss" scoped>
#box {

	position: absolute;
	left: 20px;
	top: 20px;
	width: 80%;
	height: 80%;
	background-color: darkgreen;
	overflow: hidden;

}

.box-child {

	box-sizing: border-box;
	position: absolute;
	background-color: red;

}

.box-child:hover {

	border: 2px solid white;

}
</style>
  