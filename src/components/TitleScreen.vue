<template>
<section class="title-area">
  
  <h1>THIS VERSION IS UNDER CONSTRUCTION<img src="../assets/logo.svg"></h1>
  <h2 class="start-bt" @click = "switchPage">PRESS THE START BUTTON<img src="../assets/start.svg"></h2>
  <h4>Licensed by MOGURA, Copyright Nei Softworks 2000-2018 <br><br><b>DevBuildRev.00056 - 2017/12/19 - WORK IN PROGRESS</b></h4>
  <div class="video-bg"><youtube :video-id="videoId" :mute="true" :player-vars="{ autoplay: 1 }" @ready="ready"></youtube></div>
</section>
</template>

<script>

export default {
  name: 'title-screen',
  components: {},
  resource: 'title',
  props: {
    post: String,
    author: String
  },

  data() {
    return {
      videoId: 'y6mLbZMIt_Q'
    }
  },

  computed: {
    content() {
    },
    filters() {
    }
  },

  watch: {
    '$route.name' (to, from) {
      if (to !== from) this.navs++
    }
  },

  methods: {
    ready (player) {
      this.player = player;
      this.player.startVideo();
    },

    switchPage() {
      console.log('bt bt bt bt bt ');
      this.$router.push('home')
    }
  },

  beforeMount() {
    this.$getResource('blog')
  }
}
</script>
