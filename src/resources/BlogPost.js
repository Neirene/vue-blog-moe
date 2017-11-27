export default {
  post(id) {
    return {
      path: '/posts/' + id,
      resolve: (response, mappers) => {
        return mappers.pipe(response)
      }
    }
  }
}
