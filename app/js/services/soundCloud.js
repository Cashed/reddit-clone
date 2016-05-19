(function() {
  'use strict';

  angular
    .module('RedditApp')
    .factory('soundcloud', soundcloud);

  soundcloud.$inject = ['$q'];

  function soundcloud($q) {
    var searchSC = function(artist) {
      return $q(function(resolve, reject) {
        SC.get(`/users/${artist}/tracks`, { limit: 5 }, function(tracks) {
          resolve(tracks);
        });
      })
      .then(function(tracks) {
        return tracks;
      })
      .catch(function(error) {
        console.log(error);
      });
    }

    var getOembed = function(trackLink) {
      return $q(function(resolve, reject) {
        SC.oEmbed(trackLink, { maxheight: 60 }, function(oEmbed) {
          resolve(oEmbed);
        });
      })
      .then(function(oEmbed) {
        return oEmbed;
      })
      .catch(function(error) {
        console.log(error);
      });
    }

    return {
      searchSC: searchSC,
      getOembed: getOembed
    }
  }

})();
