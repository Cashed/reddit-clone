(function() {
  'use strict';

  angular
    .module('RedditApp')
    .factory('posts', posts);

  posts.$inject = ['$sce'];

  function posts($sce) {

    var posts = [
      {
        title: 'The Morgue',
        img: 'http://i42.tinypic.com/2ujtkpl.jpg',
        author: 'J. Armitage',
        description: 'Woke up in the strangest of places. Everyone was trying to kill me. I got a gun off this dreg\'s body. Oh, and a dog talked to me...',
        points: 5,
        time: moment(new Date()).subtract(10, 'days').calendar(),
        player_html: $sce.trustAsHtml('<iframe width="100%" height="60" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/27336298&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'),
        comments: [
          {
            name: 'Jake',
            img: 'http://img2-ak.lst.fm/i/u/avatar170s/eedaae176bbf4329b506b0ddeeaa8bb5.gif',
            comment: '=('
          }
        ]
      },
      {
        title: 'The Cage',
        img: 'https://i.ytimg.com/vi/LrxvXMBUXC8/hqdefault.jpg',
        author: 'J. Armitage',
        description: 'Got some tickets to some slummy gig.  Found someone who was finally willing to talk about Glutman, that asshole, and then woke up in junkyard.  On the plus side - Maria Mercurial.',
        time: moment(new Date()).subtract(8, 'hours'),
        player_html: $sce.trustAsHtml('<iframe width="100%" height="60" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/26891776&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'),
        points: 3,
        comments: [
          {
            name: 'Dwarf',
            img: 'http://shrines.rpgclassics.com/snes/shadowrun/images/norbertprofile.jpg',
            comment: 'Har har, tee hee, PUPPIES!!'
          },
          {
            name: 'Some Kid',
            img: 'http://www.shadowrun.com/forums/uploads/userpics/2594/ned037c3cb53f50a87ef896762ba41078-bpfull.jpg',
            comment: 'Get lost, chummer!'
          }
        ]
      },
      {
        title: 'The Matrix',
        img: 'http://i304.photobucket.com/albums/nn195/dosboot1/LP7_shadowrun055.png',
        author: 'J. Armitage',
        description: 'Hacked the matrix and uploaded some info into my datajack. Barely made it out alive. The cyberdeck from Glutman really came in handy.',
        time: moment(new Date()).subtract(40, 'hours'),
        player_html: $sce.trustAsHtml('<iframe width="100%" height="60" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/27334936&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'),
        points: -2,
        comments: [
          {
            name: 'Neo',
            img: 'images/whoa.gif',
            comment: 'whoa'
          }
        ]
      }
    ];

    var addPost = function(newPost) {
      posts.push(newPost);
    };

    var getPosts = function() {
      return posts;
    };

    return {
      addPost: addPost,
      getPosts: getPosts
    };
  }
})();
