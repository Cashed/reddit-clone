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
      templateUrl: 'app/posts/posts.html',
      controller: function($scope) {
      }
    }
  }
})();
