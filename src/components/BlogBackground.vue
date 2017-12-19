<template>
  <div class="bg-picture">{{ background }}{{ fillScreen }}{{ hideBackdrop }}}</div>
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
      console.log('MIMIMIMIMIMIMIMIMI');
    },
    navBack() {
      if (this.navs && !this.filters.author) this.$router.go(-1)
      else this.$router.push('/')
    }
  }
}
</script>
