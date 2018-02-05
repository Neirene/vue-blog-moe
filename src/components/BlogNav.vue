<template>
  <nav class="nav">
    <h1 class="nav__title">
      <router-link to="/">

    <svg class="logo-menu" id="main-logo" data-name="main logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1412.62 248.13">
  <g>
    <g>
      <polygon class="logo-menu-path-1 final-fill" points="1069.42 12.7 1069.42 45.28 1031.09 45.28 1031.09 58.32 979.99 58.32 979.99 45.28 837.68 45.28 837.68 58.32 786.93 58.32 786.93 45.28 745.41 45.28 745.41 12.7 786.93 12.7 786.93 1.83 837.68 1.83 837.68 12.7 979.99 12.7 979.99 0.75 1031.09 0.75 1031.09 12.7 1069.42 12.7" />
      <path class="logo-menu-path-2 final-fill" d="M974.87,65.69H908.51V210.15q0,8.23-10.29,8.24H892.9v27.88h15.61q49.32,0,49.33-37.44V197.14h51.46v13c0,3.55-3.79,5.31-11.36,5.31H985.17v29.75H1015q44,0,44-26.82V65.69Zm34.43,103.2H957.84V149.34h51.46Zm0-51.33H957.84V98.28h51.46Z" transform="translate(0.5 0.5)" />
      <path class="logo-menu-path-3 final-fill" d="M1411.62,245.2h-104q-26.27,0-36.91-6.52-11.7-7.87-12.06-28l-.36-30.14q0-12.76-11.35-12.77-6,0-18.46,10.59l-60.68,47.53q-14.91,11.4-22,13.85-12.06,4.06-38.68,4.07H1089V207.18h15.62a52.71,52.71,0,0,0,22-4.35q7.1-3.26,20.23-13l119.95-91.52H1104.65V62.16h249.48V94.48q-14.19,6.26-67.78,40.73,15.62,1.9,20.58,9.51,2.83,4.89,2.84,16V196q0,8.7,7.45,10.87,4.6,1.35,20.59,1.35h73.81Z" transform="translate(0.5 0.5)" />
      <rect class="logo-menu-path-4 final-fill" x="1126.8" y="0.77" width="214.35" height="38.54" />
    </g>
    <g>
      <path class="logo-menu-path-5 final-fill" d="M305.66,246.64h-33.2q-31.74,0-43-11.72-10.74-11.71-10.74-45.9V50.84H62V247.13H0V1H62V39.61Q77.15,1,117.68,1H208.5q73.23,0,73.24,75.19V196.84h23.92Z" transform="translate(0.5 0.5)" />
      <path class="logo-menu-path-6 final-fill" d="M619.63,138.24H408.2V198.3l211.19,0-55.91,48.37H396q-31.26,0-45.41-14.16-13.18-14.16-13.19-45.41V64q0-63,64-63H573.24q23.93,0,34.67,13.18Q619.63,28.86,619.63,64Zm-54.2-27.83V50.84H408.2v59.57Z" transform="translate(0.5 0.5)" />
    </g>
    <g>
      <path class="logo-menu-path-7" d="M841.79,201.42V169.7H800.63v39.11h29.81Q841.8,208.81,841.79,201.42Z" transform="translate(0.5 0.5)" />
      <rect class="logo-menu-path-8" x="801.13" y="103.13" width="41.17" height="35.85" />
      <path class="logo-menu-path-9 final-fill" d="M753.78,102.34a40,40,0,0,1,0,73.86v70.07H854.57q34.06,0,34.07-24.27V65.67H753.78Zm46.85.29h41.16v35.84H800.63Zm0,67.07h41.16v31.72q0,7.4-11.35,7.39H800.63Z" transform="translate(0.5 0.5)" />
      <path class="logo-menu-path-10 final-fill" d="M652.34,246.29h70.8v-70a40,40,0,0,1,0-74V0h-70.8Z" transform="translate(0.5 0.5)" />
    </g>
  </g>
  <circle class="logo-menu-path-11 final-fill" id="Center_Circle" data-name="Center Circle" cx="738.89" cy="139.77" r="30" />
</svg>

      </router-link>
    </h1>
    <transition-group tag="menu" name="nav__item" class="nav__menu">
      <li v-for="label in labels" class="nav__item" :key="label" @click="navBack">
        <i class="nav__item--icon"></i>
        <span class="nav__item--label">{{ label }}</span>
      </li>
    </transition-group>
  </nav>
</template>

<script>
import { scrollTo } from '../helpers'
export default {
  name: 'blog-nav',
  props: {
    navs: Number,
    content: Object,
    filters: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    scrollDelay() { return (this.$device.phone) ? 0 : 560 },
    labels() {
      return Object.keys(this.filters)
        .map(filter => this.content.labels[filter])
    }
  },

  methods: {
    scrollTo,
    navBack() {
      if (this.navs && !this.filters.author) this.$router.go(-1)
      else this.$router.push('/')
    }
  }
}
</script>
