export default {
  blog() {
    return {
      path: '',
      resolve: (response, mappers) => {
        // let blog = response.results[0]
        return mappers.merge({
          title: 'nei.moe',
          labels: {
            post: 'Exit reading mode',
            author: 'View all authors'
          }
        })
      }
    }
  },
  pages() {
    return {
      path: '/pages',
      resolve: (response, mappers) => {
        let pageTitle = [];

        for (var i = 0; i < response.length; i++) {
          pageTitle.push(response[i].title.rendered);
        }

        // console.log(pageTitle);
        return mappers.merge({ pageTitle })
      }
    }
  }
}
