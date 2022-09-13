<template>
  <div id="helper-container">
      <div id="prescript-helper" v-if="toggle_helper" class="p-5 h-full w-[16rem] dark:text-white break-all dark:bg-gray-700 border border-gray-500 rounded-lg m-0 overflow-clip">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ornare ligula. Ut vel nisi ornare lectus varius pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis facilisis justo. Nullam lacinia vitae dui vel lacinia. Etiam pellentesque lorem quis eros placerat, in vehicula tortor elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus a aliquet leo, et tincidunt nibh. Fusce consectetur lectus ipsum, vel condimentum massa tristique nec. Vivamus ullamcorper at nibh vel lacinia. Cras condimentum mauris lacus, lobortis sodales quam molestie et. Nunc imperdiet erat a massa maximus euismod. Phasellus facilisis neque mauris, quis ornare dolor dignissim ac. Suspendisse mollis felis ultricies, pellentesque risus vel, finibus urna.</p>
      </div>

      <div id="helper-toggle-btn" v-else class="drop-shadow-lg" @click="toggle_helper = !toggle_helper">
        <i class="fas fa-rocket"></i>
      </div>
  </div>
</template>

<script>
export default {
  name: "EmrNlpHelper",

  data() {
    return {
      toggle_helper: false,
    }
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
  .helper-fade-leave-active {
  }
</style>