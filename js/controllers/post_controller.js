(function() {
  'use strict';

  angular
    .module('RedditApp')
    .controller('PostController', PostController);

  PostController.$inject = ['$scope', '$sce', '$q', 'posts', 'soundcloud'];

  function PostController($scope, $sce, $q, posts, soundcloud) {
    var vm = this;
    vm.postForm = {};
    vm.postForm.tracks = [];
    vm.comment = {};
    vm.sortBy = '-points';

    vm.posts = posts.getPosts();

    vm.searchSC = function(artist) {
      return $q(function(resolve, reject) {
        resolve(soundcloud.searchSC(artist));
      })
      .then(function(tracks) {
        vm.postForm.tracks = tracks;
      })
      .catch(function(error) {
        console.log(error);
      });
    };

    vm.submitPost = () => {
      if (vm.postForm.songSelect) {
        $q(function(resolve, reject) {
          SC.oEmbed(vm.postForm.songSelect, { maxheight: 60 }, function(oEmbed) {
            resolve(oEmbed);
          });
        })
        .then((oEmbed) => {
          vm.postForm.comments = [];
          vm.postForm.points = 0;
          vm.postForm.time = new Date();
          vm.postForm.player_html = $sce.trustAsHtml(oEmbed.html);

          posts.addPost(vm.postForm);
          vm.postForm = {};
        })
        .catch((error) => {
          console.log(error);
        });
      }
      else {
        vm.postForm.comments = [];
        vm.postForm.points = 0;
        vm.postForm.time = new Date();

        posts.addPost(vm.postForm);
        vm.postForm = {};
      }
    };

    vm.submitComment = (post) => {
      post.comments.push(vm.comment);
      vm.comment = {};
    };

    vm.increasePoints = (post) => {
      post.points += 1;
    };

    vm.decreasePoints = (post) => {
      post.points -= 1;
    };

    vm.sortOrder = (sort) => {
      vm.sortBy = sort;
    };

  }

})();
