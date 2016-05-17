(function() {
  'use strict';

  angular
    .module('userPost', [])
    .directive('userPost',userPost);

  function userPost() {
    return {
      restrict: 'E',
      scope: {
        post: '='
      },
      replace: true,
      templateUrl: 'posts/posts.html',
      controller: function($scope) {
        console.log($scope.post);
      }
    }
  }
})();
