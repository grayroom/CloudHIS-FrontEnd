<template>
	<div id="helper-container pl-10">
		<div class="border-l border-gray-600 pl-10 h-full" v-if="toggle_helper">
			<div id="prescript-helper" class="p-4 mx-auto h-full min-w-[16rem] dark:text-white break-all 
						dark:bg-gray-900 m-0 overflow-clip flex-1 rounded-lg border border-gray-600">

				<div class="modal-header flex flex-shrink-0 items-center justify-between p-2 border-b border-gray-500
							rounded-t-md">
					<h5 class="text-xl font-medium leading-normal text-gray-800 dark:text-white" id="exampleModalLabel">
						Key Factors
					</h5>

					<button @click="toggleHelper" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5
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
				<div class="py-4">
          <div role="status" class="max-w-sm animate-pulse py-4">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span class="sr-only">Loading...</span>
          </div>
          <div role="status" class="max-w-sm animate-pulse py-4">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span class="sr-only">Loading...</span>
          </div>
          <div role="status" class="max-w-sm animate-pulse py-4">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span class="sr-only">Loading...</span>
          </div>
				</div>
			</div>
		</div>

		<div id="helper-toggle-btn" v-else class="drop-shadow-lg" @click="toggleHelper">
			<i class="fas fa-rocket"></i>
		</div>
	</div>
</template>

<script>
import Cookies from "js-cookie";
import axios from "axios";

export default {
	name: "EmrNlpHelper",

	data() {
		return {
			toggle_helper: false,
		}
	},

  methods: {
    sibal() {
      this.$emit("new-text", 'test dummy text');
    },

    toggleHelper() {
      this.toggle_helper = !this.toggle_helper;
      if(this.toggle_helper) {
        const accessToken = Cookies.get('access')
        console.log(this.$parent.pre_editor.getHTML())

        axios.post('/emr/api/issueEMR/',
            {
              "emr": this.$parent.pre_editor.getHTML(),
            }, {
              withCredentials: true,
              crossDomain: true,
              credentials: "access",
              headers: {
                Authorization: "Bearer " + accessToken,
                ContentType: "application/json"
              }
            })
            .then((res) => {
              console.log(res.data)
              this.$emit("new-text", res.data);
            })
            .catch((error) => {
              console.log(error)
            })
      }
    },
  }
}
</script>

<style lang="scss" scoped>
#helper-toggle-btn {
	position: fixed;
	right: 20px;
	bottom: 20px;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #e1ab00;
	transition: all 0.15s ease-out;

	&:hover {
		cursor: pointer;
		background-color: #bc9005;
	}

	i {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 20px;
		color: #fff;
	}
}

#prescript-helper {
	transition: all 0.15s cubic-bezier(0.4, 0, 1, 1);
}

.helper-fade-enter-active,
.helper-fade-leave-active {}


</style>