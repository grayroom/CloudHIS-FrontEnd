<template>
  <div id="helper-container" ref="helperContainer">
    <div class="border-l border-gray-600 h-full" v-show="toggle_helper">
      <div id="prescript-helper" ref="helper"
        class="flex flex-col gap-5 p-4 ml-10 min-w-[16rem] dark:text-white break-all dark:bg-gray-900 m-0 overflow-clip flex-1 rounded-lg">
        <div v-if="loading" class="py-4">
          <div role="status" class="max-w-sm animate-pulse py-4">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div v-for="i in 20" v-bind:key="i"
              class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div v-else class="flex flex-col gap-5">
          <div id="tr" v-if="key_factor_list.pr.keyword.length != 0">
            <h1 class="text-lg font-bold text-gray-900 dark:text-gray-300 mb-2">
              Problem
            </h1>
            <ul class="p-2 space-y-4 text-left text-gray-900 dark:text-white rounded-lg overscroll-none 
							scrollbar-hide overflow-y-scroll shadow-inner">
              <li class="group flex flex-col cursor-pointer select-none	text-sm"
                v-for="i in key_factor_list.pr.keyword.length" v-bind:key="i">
                <div class="flex items-center space-x-3 cursor-pointer select-none	text-sm">
                  <svg v-if="banned_list.pr.includes(key_factor_list.pr.keyword[i - 1])"
                    class="text-red-600 dark:text-red-500" fill="currentColor" height="14px" width="20px" version="1.1"
                    id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 460.775 460.775" xml:space="preserve"
                    v-on:click="addToBannedList(key_factor_list.pr.keyword[i - 1], 'pr')">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z">
                      </path>
                    </g>
                  </svg>
                  <svg v-else class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                    v-on:click="addToBannedList(key_factor_list.pr.keyword[i - 1], 'pr')">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span>
                    {{ key_factor_list.pr.keyword[i - 1] }}
                  </span>
                </div>
                <div id="menu-dropdown"
                  class="flex flex-col justify-end hidden group-hover:block py-2 space-y-2 shadow-sm border-t border-gray-600 mt-2">
                  <ul class="text-sm text-gray-500 dark:text-gray-300 space-y-2">
                    <li>
                      <label for="newKeyword" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                        Keyword
                      </label>
                      <input type="text" id="newKeyword" v-model="key_factor_list.pr.keyword[i - 1]"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </li>
                    <li>
                      <label for="newKeyword" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                        Severity
                      </label>
                      <select id="newKeyword" v-model="key_factor_list.pr.severity[i - 1]"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="0" selected disabled>--select severity--</option>
                        <option value="severe">severe</option>
                        <option value="moderate">moderate</option>
                        <option value="mild">mild</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div id="te" v-if="key_factor_list.te.keyword.length != 0">
            <h1 class="text-lg font-bold text-gray-900 dark:text-gray-300 mb-2">
              Test
            </h1>
            <ul class="p-2 space-y-4 text-left text-gray-900 dark:text-white rounded-lg border border-gray-600 overscroll-none 
                scrollbar-hide overflow-y-scroll shadow-inner">
              <li class="flex items-center space-x-3 cursor-pointer select-none	text-sm"
                v-for="i in key_factor_list.te.keyword.length" v-bind:key="i">
                <svg v-if="banned_list.te.includes(key_factor_list.te.keyword[i - 1])"
                  class="text-red-600 dark:text-red-500" fill="currentColor" height="14px" width="20px" version="1.1"
                  id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 460.775 460.775" xml:space="preserve"
                  v-on:click="addToBannedList(key_factor_list.te.keyword[i - 1], 'te')">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z">
                    </path>
                  </g>
                </svg>
                <svg v-else class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                  v-on:click="addToBannedList(key_factor_list.te.keyword[i - 1], 'te')">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <span>{{ key_factor_list.te.keyword[i - 1] }}</span>
              </li>
            </ul>
          </div>
          <div id="tr" v-if="key_factor_list.tr.keyword.length != 0">
            <h1 class="text-lg font-bold text-gray-900 dark:text-gray-300 mb-2">
              Treatment
            </h1>
            <ul class="p-2 space-y-4 text-left text-gray-900 dark:text-white rounded-lg overscroll-none 
							scrollbar-hide overflow-y-scroll shadow-inner">
              <li class="group flex flex-col cursor-pointer select-none	text-sm"
                v-for="i in key_factor_list.tr.keyword.length" v-bind:key="i">
                <div class="flex items-center space-x-3 cursor-pointer select-none	text-sm">
                  <svg v-if="banned_list.tr.includes(key_factor_list.tr.keyword[i - 1])"
                    class="text-red-600 dark:text-red-500" fill="currentColor" height="14px" width="20px" version="1.1"
                    id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 460.775 460.775" xml:space="preserve"
                    v-on:click="addToBannedList(key_factor_list.tr.keyword[i - 1], 'tr')">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z">
                      </path>
                    </g>
                  </svg>
                  <svg v-else class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                    v-on:click="addToBannedList(key_factor_list.tr.keyword[i - 1], 'tr')">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span>{{ key_factor_list.tr.keyword[i - 1] }}</span>
                </div>
                <div id="menu-dropdown"
                  class="flex flex-col justify-end hidden group-hover:block py-2 space-y-2 shadow-sm border-t border-gray-600 mt-2">
                  <ul class="text-sm text-gray-500 dark:text-gray-300 space-y-2">
                    <li>
                      <label for="newKeyword" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                        Keyword
                      </label>
                      <input type="text" id="newKeyword" v-model="key_factor_list.tr.keyword[i - 1]"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </li>
                    <li>
                      <label for="quantity" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                        Quantity
                      </label>
                      <input type="text" id="quantity" v-model="key_factor_list.tr.quantity[i - 1]"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div id="helper-btn-container" class="flex flex-row space-x-4">
      <div id="update-btn" class="helper-btn drop-shadow-lg" v-show="toggle_helper" ref="update" @click="updateHelper">
        <i class="fa-solid fa-rotate-right"></i>
      </div>
      <div id="toggle-btn" class="helper-btn drop-shadow-lg" ref="toggle" @click="toggleHelper">
        <i class="fas fa-rocket"></i>
      </div>
    </div>

  </div>
</template>

<script>
import Cookies from "js-cookie";
import axios from "axios";


axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default {
  name: "EmrNlpHelper",

  data() {
    return {
      is_first_open: true,
      toggle_helper: false,
      loading: true,

      key_factor_list: {
        pr: [],
        te: [],
        tr: [],
      },

      banned_list: {
        pr: [],
        te: [],
        tr: [],
      }
    }
  },

  mounted() {
    window.addEventListener('click', this.onClick);
  },

  methods: {
    onClick(e) {
      if (!this.$refs.helper.contains(e.target) && !this.$refs.update.contains(e.target) && !this.$refs.toggle.contains(e.target)) {
        this.toggle_helper = false;
      }
    },

    addToBannedList(keyword, type) {
      if (this.banned_list[type].includes(keyword)) {
        this.banned_list[type] = this.banned_list[type].filter((item) => item !== keyword);
      } else {
        this.banned_list[type].push(keyword);
      }
    },


    toggleHelper() {
      this.toggle_helper = !this.toggle_helper;

      if (this.is_first_open && this.toggle_helper) {
        this.is_first_open = false
        this.updateHelper()
      }
    },

    updateHelper() {
      const accessToken = Cookies.get('access')

      this.loading = true
      axios.post('/emr/api/issueEMR/',
        {
          "preliminary": this.$parent.pre_editor.getHTML(),
          "comment": this.$parent.cur_editor.getHTML(),
          "patient_id": this.$parent.p_id,
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
          this.key_factor_list = {
            pr: {
              keyword: [].concat(JSON.parse(res.data)[0].key_factor_list.pr).concat(JSON.parse(res.data)[1].key_factor_list.pr),
              severity: [],
              onset: []
            },
            te: {
              keyword: [].concat(JSON.parse(res.data)[0].key_factor_list.te).concat(JSON.parse(res.data)[1].key_factor_list.te),
            },
            tr: {
              keyword: [].concat(JSON.parse(res.data)[0].key_factor_list.tr).concat(JSON.parse(res.data)[1].key_factor_list.tr),
              quantity: [],
              begin_time: []
            }
          }

          this.key_factor_list.pr.keyword.map(() => {
            this.key_factor_list.pr.severity.push('mild')
            this.key_factor_list.pr.onset.push(new Date())
          })
          this.key_factor_list.te.keyword.map(() => {
          })
          this.key_factor_list.tr.keyword.map(() => {
            this.key_factor_list.tr.quantity.push(1)
            this.key_factor_list.tr.begin_time.push(new Date())
          })

          this.$emit("new-text", JSON.parse(res.data)[0].html, JSON.parse(res.data)[1].html);
          this.loading = false
          this.$forceUpdate()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
#helper-btn-container {
  position: fixed;
  right: 20px;
  bottom: 20px;
}

.helper-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.15s ease-out;

  &#update-btn {
    background-color: #2a8600;

    &:hover {
      cursor: pointer;
      background-color: #1f6a00;
    }
  }

  &#toggle-btn {
    background-color: #e1ab00;

    &:hover {
      cursor: pointer;
      background-color: #bc9005;
    }
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
</style>