(function() {
  'use strict';

  SC.initialize({
    client_id: '7b9c5b47c81e949b866695aaee59f001'
  });

  angular
    .module('RedditApp', [
      // angular
      'ngAnimate',
      'ngMessages',
      'angularMoment',
      'ngSanitize',
      // custom
      'userPost'
    ]
  );
})();
