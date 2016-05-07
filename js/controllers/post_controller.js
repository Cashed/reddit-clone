'use strict'

app.controller('PostController', ['$scope', 'posts', ($scope, posts) => {
  $scope.posts = posts.getPosts();
}]);
