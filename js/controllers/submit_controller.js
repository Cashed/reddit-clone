'use strict'

app.controller('SubmitFormController', [ '$scope', 'posts', ($scope, posts) => {
  $scope.form = {};
  $scope.form.time = new Date();
  $scope.submit = () => {
    posts.addPost($scope.form);
    $scope.form = {};
  };
}]);
