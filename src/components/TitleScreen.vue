<template>
<section class="title">

  <div class="title__3dvisual">
<!--
     <a-scene>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
 -->
  </div>
  
  <div class="title__logo">
    <svg class="logo-visual" id="main-logo" data-name="main logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1412.62 248.13">
  <g>
    <g>
      <polygon class="logo-visual-path-1" points="1069.42 12.7 1069.42 45.28 1031.09 45.28 1031.09 58.32 979.99 58.32 979.99 45.28 837.68 45.28 837.68 58.32 786.93 58.32 786.93 45.28 745.41 45.28 745.41 12.7 786.93 12.7 786.93 1.83 837.68 1.83 837.68 12.7 979.99 12.7 979.99 0.75 1031.09 0.75 1031.09 12.7 1069.42 12.7" />
      <path class="logo-visual-path-2" d="M974.87,65.69H908.51V210.15q0,8.23-10.29,8.24H892.9v27.88h15.61q49.32,0,49.33-37.44V197.14h51.46v13c0,3.55-3.79,5.31-11.36,5.31H985.17v29.75H1015q44,0,44-26.82V65.69Zm34.43,103.2H957.84V149.34h51.46Zm0-51.33H957.84V98.28h51.46Z" transform="translate(0.5 0.5)" />
      <path class="logo-visual-path-3" d="M1411.62,245.2h-104q-26.27,0-36.91-6.52-11.7-7.87-12.06-28l-.36-30.14q0-12.76-11.35-12.77-6,0-18.46,10.59l-60.68,47.53q-14.91,11.4-22,13.85-12.06,4.06-38.68,4.07H1089V207.18h15.62a52.71,52.71,0,0,0,22-4.35q7.1-3.26,20.23-13l119.95-91.52H1104.65V62.16h249.48V94.48q-14.19,6.26-67.78,40.73,15.62,1.9,20.58,9.51,2.83,4.89,2.84,16V196q0,8.7,7.45,10.87,4.6,1.35,20.59,1.35h73.81Z" transform="translate(0.5 0.5)" />
      <rect class="logo-visual-path-4" x="1126.8" y="0.77" width="214.35" height="38.54" />
    </g>
    <g>
      <path class="logo-visual-path-5" d="M305.66,246.64h-33.2q-31.74,0-43-11.72-10.74-11.71-10.74-45.9V50.84H62V247.13H0V1H62V39.61Q77.15,1,117.68,1H208.5q73.23,0,73.24,75.19V196.84h23.92Z" transform="translate(0.5 0.5)" />
      <path class="logo-visual-path-6" d="M619.63,138.24H408.2V198.3l211.19,0-55.91,48.37H396q-31.26,0-45.41-14.16-13.18-14.16-13.19-45.41V64q0-63,64-63H573.24q23.93,0,34.67,13.18Q619.63,28.86,619.63,64Zm-54.2-27.83V50.84H408.2v59.57Z" transform="translate(0.5 0.5)" />
    </g>
    <g>

      <path class="logo-visual-path-9" d="M753.78,102.34a40,40,0,0,1,0,73.86v70.07H854.57q34.06,0,34.07-24.27V65.67H753.78Zm46.85.29h41.16v35.84H800.63Zm0,67.07h41.16v31.72q0,7.4-11.35,7.39H800.63Z" transform="translate(0.5 0.5)" />
      <path class="logo-visual-path-10" d="M652.34,246.29h70.8v-70a40,40,0,0,1,0-74V0h-70.8Z" transform="translate(0.5 0.5)" />
    </g>
  </g>
  <circle class="logo-visual-path-11" id="Center_Circle" data-name="Center Circle" cx="738.89" cy="139.77" r="30" />
</svg>

  </div>
  <h2 class="title__start" @click = "switchPage">
    
 <svg class="start-visual" id="start-caption" data-name="startcaption" xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 1450 100">

 <defs>
      <!-- We set the filter effect area to be really big to guarantee we see it all... -->
      <filter id="blue-glow" x="-5000%" y="-5000%" width="10000%" height="10000%">
          <feFlood result="flood" flood-color="#00baff" flood-opacity="1"></feFlood>
          <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
          <feMorphology in="mask" result="dilated" operator="dilate" radius="4"></feMorphology>
          <feGaussianBlur in="dilated" result="blurred" stdDeviation="12"></feGaussianBlur>
          <feMerge>
              <feMergeNode in="blurred"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
      </filter>
      <filter id="pink-glow" x="-5000%" y="-5000%" width="10000%" height="10000%">
          <feFlood result="flood" flood-color="#ff2cd0" flood-opacity="1"></feFlood>
          <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
          <feMorphology in="mask" result="dilated" operator="dilate" radius="4"></feMorphology>
          <feGaussianBlur in="dilated" result="blurred" stdDeviation="12"></feGaussianBlur>
          <feMerge>
              <feMergeNode in="blurred"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
      </filter>

      </defs>
  <g>
    <path d="M64.86,26.77q0,4.36-2.73,6.47t-8.74,2h-37V53.61H0V0H52.73q6.67,0,9.4,2T64.86,9.1ZM48.22,25.72V11H16V25.72Z"/>
    <path d="M134.41,53.61H118.53v-21H85.06v21H69V0h51q8,0,11.19,2.11t3.2,6.84v7.59q0,3.76-1.13,5.41-2.16,3-8.83,4.51,6.67,1.35,8.83,4.51a10.56,10.56,0,0,1,1.13,5.49ZM118.34,23.08V11H85.06V23.08Z"/>
    <path d="M196.54,11H155.18V22h41.17v9.47H155.18v11.2h41.08v11H138.55V0h58Z"/>
    <path d="M265.35,46q0,7.6-13.07,7.59H198.89V42.56h50.76V31.66H214.4q-7.52,0-11-1.88a7.18,7.18,0,0,1-3.95-6.84V8.5a6.86,6.86,0,0,1,4.23-6.62Q207.82,0,218.54,0h42V11H215.34V22.11H252q13.35,0,13.35,9.25Z"/>
    <path d="M334,46q0,7.6-13.07,7.59H267.51V42.56h50.76V31.66H283q-7.52,0-11-1.88a7.18,7.18,0,0,1-3.95-6.84V8.5a6.86,6.86,0,0,1,4.23-6.62Q276.44,0,287.15,0h42V11H284V22.11h36.66q13.35,0,13.35,9.25Z"/>
    <path d="M431.81,11H408.69V53.61H391V11H367V0h64.86Z"/>
    <path d="M503.81,53.61H487.17V30.68H452V53.61H435.47V0H452V21.13h35.15V0h16.64Z"/>
    <path d="M567.72,11H526.37V22h41.17v9.47H526.37v11.2h41.08v11H509.73V0h58Z"/>
    <path d="M667.83,46q0,7.6-13.07,7.59H601.37V42.56h50.76V31.66H616.88q-7.52,0-11-1.88a7.18,7.18,0,0,1-3.95-6.84V8.5a6.86,6.86,0,0,1,4.23-6.62Q610.3,0,621,0h42V11H617.82V22.11h36.66q13.35,0,13.35,9.25Z"/>
    <path d="M734.38,11H711.25V53.61H693.58V11H669.52V0h64.86Z"/>
    <path d="M803,53.61H786.73V30.23H751.86V53.61H735.6V9.17Q735.6,0,749.13,0h40.51Q803,0,803,9.17ZM786.73,22.78V11H751.86V22.78Z"/>
    <path d="M872.08,53.61H856.19v-21H822.73v21H806.66V0h51q8,0,11.19,2.11t3.2,6.84v7.59q0,3.76-1.13,5.41-2.16,3-8.83,4.51,6.67,1.35,8.83,4.51a10.56,10.56,0,0,1,1.13,5.49ZM856,23.08V11H822.73V23.08Z"/>
    <path d="M938.62,11H915.5V53.61H897.83V11H873.77V0h64.86Z"/>
    <path d="M1041.08,43.31q0,5.57-2.91,8t-9.68,2.33H973.59V0h55.17q6.86,0,9.59,2t2.73,6.69v8.42q0,5.49-7.52,9,4.89,1.05,6.58,3.61.94,1.51.94,5.11ZM1025,22.78V11H989.76V22.78Zm0,19.85V30.23H989.76V42.64Z"/>
    <path d="M1112.51,44.52q0,9.1-13.35,9.1h-40.61q-6.58,0-10.06-2.48a7.8,7.8,0,0,1-3.38-6.62V0h16.36V42.64h34.87V0h16.17Z"/>
    <path d="M1180.85,11h-23.12V53.61h-17.67V11H1116V0h64.86Z"/>
    <path d="M1246.92,11H1223.8V53.61h-17.67V11h-24.06V0h64.86Z"/>
    <path d="M1315.73,40.61q0,6.77-3.67,9.93t-11.28,3.08H1264.6q-14.95,0-14.95-13V13q0-6.92,3.67-10t11.28-3h36.19q7.9,0,11.47,3t3.48,10Zm-16.26,2V11H1266.1V42.64Z"/>
    <path d="M1388.86,53.61h-17l-27.63-32.56a21.11,21.11,0,0,1-2.26-3.38q-1.69-3.16-1.88-3.46l-5.92,2a58.09,58.09,0,0,1,1.79,11.2V53.61H1320.8V0h23.69l20,23.76q0,.08,4.89,7.52l6-1.58a35.46,35.46,0,0,1-1.79-10.08V0h15.23Z"/>
  </g>
</svg>


  </h2>
  <h4 class="title__copy">Licensed by MOGURA, Copyright Nei Softworks 2000-2018 <br><br><b>DevBuildRev.00089 - 2018/02/05 - WORK IN PROGRESS</b></h4>

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
