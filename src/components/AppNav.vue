<template>
  <div>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <router-link to="./" class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          CloudHIS - 전자의무기록
        </router-link>
        <div class="flex items-center md:order-2">
          <button type="button"
            class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button" @click="toggleUserMenu">
            <span class="sr-only">Open user menu</span>
            <img class="w-8 h-8 rounded-full" src="" alt="user photo">
          </button>
          <!-- Dropdown menu -->
          <div
            class="z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 hidden"
            id="user-dropdown" ref="userMenu" aria-hidden="true">
            <div class="py-3 px-4">
              <span class="block text-sm text-gray-900 dark:text-white">유저이름</span>
              <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">유저정보</span>
            </div>
            <ul class="py-1" aria-labelledby="user-menu-button">
              <li>
                <router-link to="/login"
                  class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  로그인
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2" ref="mainMenu">
          <ul
            class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page">메인페이지</a>
            </li>
            <li>
              <router-link to="/emr"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                EMR
              </router-link>
            </li>
            <li>
              <a href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                일정
              </a>
            </li>
            <li>
              <a href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                메신저
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="bg-gray-50 dark:bg-gray-700">
      <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
        <div class="flex items-center">
          <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
            <li>
              <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">의무기록</a>
            </li>
            <li>
              <router-link to="/emr/template" class="text-gray-900 dark:text-white hover:underline">
                서식생성기
              </router-link>
            </li>
            <li>
              <a href="#" class="text-gray-900 dark:text-white hover:underline">진찰</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

</template>

<script>
export default {
  name: 'AppNav',

  methods: {
    toggleMainMenu() {
      this.$refs.mainMenu.toggleAttribute('aria-hidden')
      this.$refs.mainMenu.classList.toggle('hidden')
    },

    toggleUserMenu() {
      this.$refs.userMenu.toggleAttribute('aria-hidden')
      this.$refs.userMenu.classList.toggle('hidden')
    }
  }
}
</script>

<style>
#user-dropdown {
  position: absolute;
  inset: 0px auto auto 0px;
  margin: 0px;
  width: 170px;
  transform: translate3d(calc(100vw - 200px), 82px, 0px);
}
</style>