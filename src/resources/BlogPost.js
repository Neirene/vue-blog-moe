export default {
  post(id) {
    return {
      path: '/posts',
      resolve: (response, mappers) => {
        return mappers.pipe(response[id])
      }
    }
  }
}
