<template>
  <transition-group tag="ul" :name="transition"  class="blog__feed">
    <li v-for="post in feed" class="preview" :key="post.id" @mouseover="sendPostBg(post.featured_media_url)">
      <figure class="preview__figure" :class="figureClass">
        <transition name="v--fade">
          <figcaption v-if="!reading || $device.phone" class="preview__details">
            <router-link class="preview__title"
              :to="`/read/${post.id}`"
              @click.native="scrollTo(0, 220, scrollDelay)">
              {{ post.title.rendered }}
            </router-link>

            <div class="preview__meta">
              <time class="preview__published">
                {{ prettyDate(post.date) }}
              </time>
            </div>
          </figcaption>
        </transition>
      </figure>
    </li>
  </transition-group>
</template>

<script>
import { scrollTo, kebabify, prettyDate } from '../helpers'

export default {
  name: 'blog-feed',
  resource: 'BlogFeed',

  props: {
    filters: {
      type: Object,
      default: () => {}
    },
    postBackgroundUrl: String
  },

  data() {
    return {
      posts: [],
      writer: 'Neirene',
      transition: 'preview-appear'
    }
  },

  computed: {
    reading() { return this.filters.post },
    scrollDelay() { return (this.$device.phone) ? 0 : 560 },
    figureClass() {
      return { 'preview__figure--mobile': this.$device.phone && this.reading }
    },
    feed() {
      const filterBy = {
        post: (filter, { id }) => filter === id,
        author: (filter, { author }) => filter === author
      }

      if (!Object.keys(this.filters).length) return this.posts

      return this.posts.filter(post => {
        return Object.keys(this.filters).every(filter => {
          return filterBy[filter](this.filters[filter], post)
        })
      })
    }
  },

  methods: {
    scrollTo,
    kebabify,
    prettyDate,
    getBgImg(src) {
      return { backgroundImage: `url(${src})` }
    },
    sendPostBg(url) {
      let postBgUrl = url;
      this.$parent.$emit('post-background-url', postBgUrl)
      // return postBgUrl = this.postBackgroundUrl;
    },
    stackPosts(posts) {
      let interval
      const stack = () => {
        this.posts.push(posts.shift())

        if (!posts.length) {
          this.transition = 'preview'
          clearInterval(interval)
        }
      }

      interval = setInterval(stack, 125)
    }
  },

  beforeMount() {
    this.$getResource('feed') // ( ..)φメモメモ
      .then(posts => {
        if (!Object.keys(this.filters).length) {
          this.stackPosts(posts)
        } else {
          this.posts = posts
          this.transition = 'preview'
        }
      })
  }
}
</script>
