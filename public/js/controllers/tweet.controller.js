function TweetController(TweetFactory) {
  var controller = this;

  controller.getTweets = function() {
    TweetFactory.searchTweets(controller.tweetSearch).then(
      function success(response) {
        controller.allTweets = response.data;
        console.log('twitter response: ', response.data);
      },
      function error(error) {
        console.warn('Error getting tweets:', error);
      }
    );
  };

  function init(){
    controller.tweetSearch = '';
    controller.allTweets = [];
  }
  init();
}

TweetController.$inject = ['TweetFactory'];

angular
  .module('WhereTweet')
  .controller('TweetController', TweetController);
