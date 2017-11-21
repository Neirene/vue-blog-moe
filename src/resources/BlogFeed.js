export default {
  feed() {
    return {
      path: '/posts',
      resolve: (response, mappers) => mappers.pipe(response)
    }
  }
}
