<template>
  <div class="bg-container" >
    <div class="bg-visual" :style="updateBackground()"></div>
  </div>
</template>

<script>
export default {
  name: 'blog-background',
  props: {
    background: String,
    fillScreen: Boolean,
    hideBackdrop: Boolean
  },

  data () {
    return {
      backgroundPicture: ''
    }
  },

  computed: {
    scrollDelay() { return (this.$device.phone) ? 0 : 560 }
  },

  methods: {
    updateBackground() {
      return { backgroundImage: 'url(' + this.background + ')' }
    },
    navBack() {
      if (this.navs && !this.filters.author) this.$router.go(-1)
      else this.$router.push('/')
    }
  }
}
</script>
