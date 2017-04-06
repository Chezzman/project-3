function TweetController(TweetFactory) {
  var controller = this;

  function init(){
    controller.allTweets = [];
    TweetFactory.getAll().then(
    function success(response) {
      controller.allTweets = response.data;
    },
    function error(error) {
      console.warn('Error getting tweets:', error);
    }
  );
  }
  init();
}

angular
  .module('WhereTweet')
  .controller('TweetController', TweetController);
