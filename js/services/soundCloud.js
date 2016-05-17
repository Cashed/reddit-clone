(function() {
  'use strict';

  angular
    .module('RedditApp')
    .factory('soundcloud', soundcloud);

  soundcloud.$inject = ['$http'];

  function soundcloud($http) {
    var searchSC = function(artist) {
      return $http.get(`https://api.soundcloud.com/users/${artist}/tracks?client_id=7b9c5b47c81e949b866695aaee59f001`, { limit: 5 }).then(function(tracks) {
        return tracks.data;
      });
    }
    return {
      searchSC: searchSC
    }
  }

})();
