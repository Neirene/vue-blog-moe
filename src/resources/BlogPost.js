export default {
  post(id) {
    return {
      path: `/posts/${id}`,
      resolve: (response, mappers) => {
        let {title, content, description, published, author} = response

        title = title.rendered;
        content = content.rendered;
        description = response.excerpt.rendered;
        published = response.date;
        author = 'Neirene';

        return mappers.merge({ title, content, description, published, author })
      }
    }
  }
}
