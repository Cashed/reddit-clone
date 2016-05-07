'use strict'

app.factory('posts', () => {
  const posts = [];

  const addPost = (newPost) => {
    posts.push(newPost);
  };

  const getPosts = () => {
    return posts;
  };

  return {
    addPost: addPost,
    getPosts: getPosts
  };
});
