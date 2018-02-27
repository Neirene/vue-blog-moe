export default {
  post(slug) {
    return {
      path: `/posts/?slug=${slug}`,
      resolve: (response, mappers) => {
        let {title, content, description, published, author, excerpt, date} = response[0]

        title = title.rendered;
        content = content.rendered;
        description = excerpt.rendered;
        published = date;
        author = 'Neirene';

        return mappers.merge({ title, content, description, published, author })
      }
    }
  }
}
