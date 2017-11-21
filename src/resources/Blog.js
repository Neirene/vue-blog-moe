export default {
  blog() {
    return {
      path: '',
      resolve: (response, mappers) => {
        // let blog = response.results[0]
        return mappers.merge({
          title: 'In Plain Vue ASDF',
          labels: {
            post: 'Exit reading mode',
            author: 'View all authors'
          }
        })
      }
    }
  }
}
