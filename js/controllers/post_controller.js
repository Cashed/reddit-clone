'use strict'

app.controller('PostController', ['$scope', 'posts', ($scope, posts) => {
  $scope.postForm = {};
  $scope.comment = {};
  $scope.sortBy = '';

  $scope.posts = posts.getPosts();


  $scope.submitPost = () => {
    $scope.postForm.comments = [];
    $scope.postForm.points = 0;
    $scope.postForm.time = new Date();
    $scope.postForm.song = 

    posts.addPost($scope.postForm);

    $scope.postForm = {};
  };

  $scope.submitComment = (post) => {
    post.comments.push($scope.comment);

    $scope.comment = {};
  };

  $scope.increasePoints = (post) => {
    post.points += 1;
  };

  $scope.decreasePoints = (post) => {
    post.points -= 1;
  };

  $scope.sortOrder = (sort) => {
    $scope.sortBy = sort;
  };

}]);
