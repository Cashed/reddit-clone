(function() {
  'use strict';

  angular
    .module('RedditApp')
    .controller('PostController', PostController);

  PostController.$inject = ['$scope', '$sce', '$q', 'posts', 'soundcloud', '$http'];

  function PostController($scope, $sce, $q, posts, soundcloud, $http) {
    var vm = this;
    vm.postForm = {};
    vm.postForm.tracks = [];
    vm.comment = {};
    vm.sortBy = '-points';

    vm.posts = posts.getPosts();

    vm.searchSC = function(artist) {
      soundcloud.searchSC(artist)
        .then(function(tracks){
          vm.postForm.tracks = tracks;
        });
    };

    vm.submitPost = function() {
      if (vm.postForm.songSelect) {
        soundcloud.getOembed(vm.postForm.songSelect)
          .then(function(oEmbed) {
            vm.postForm.comments = [];
            vm.postForm.points = 0;
            vm.postForm.time = new Date();
            vm.postForm.player_html = $sce.trustAsHtml(oEmbed.html);

            posts.addPost(vm.postForm);
            vm.postForm = {};
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
