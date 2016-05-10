'use strict'

app.controller('PostController', ['$scope', '$sce', '$q', 'posts',($scope, $sce, $q, posts) => {
  $scope.postForm = {};
  $scope.postForm.tracks = [];
  $scope.comment = {};
  $scope.sortBy = '-points';

  $scope.posts = posts.getPosts();

  $scope.searchSC = (artist) => {
    $q((resolve, reject) => {
      SC.get(`/users/${artist}/tracks`, { limit:5, height:"60px" }, (tracks) => {
        resolve(tracks);
      });
    })
    .then((tracks) => {
      $scope.postForm.tracks = tracks;
    })
    .catch((error) => {
      console.log(error);
    });
  };
  $scope.submitPost = () => {
    if ($scope.postForm.songSelect) {
      $q((resolve, reject) => {
        SC.oEmbed($scope.postForm.songSelect, { maxheight: 60 }, (oEmbed) => {
          resolve(oEmbed);
        });
      })
      .then((oEmbed) => {
        $scope.postForm.comments = [];
        $scope.postForm.points = 0;
        $scope.postForm.time = new Date();
        $scope.postForm.player_html = $sce.trustAsHtml(oEmbed.html);

        posts.addPost($scope.postForm);
        $scope.postForm = {};
      })
      .catch((error) => {
        console.log(error);
      });
    }
    else {
      $scope.postForm.comments = [];
      $scope.postForm.points = 0;
      $scope.postForm.time = new Date();

      posts.addPost($scope.postForm);
      $scope.postForm = {};
    }
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
