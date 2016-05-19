(function() {
  'use strict';

  angular
    .module('commentForm', [])
    .directive('commentForm', commentForm);

  function commentForm() {
    return {
      restrict: 'E',
      scope: {
        post: '='
      },
      replace: true,
      templateUrl: 'app/comments/comment_form.html',
      controller: function($scope) {
        console.log($scope);
        console.log('something');
      }
    };
  }
})();
