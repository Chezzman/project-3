function TweetController(TweetFactory) {
  var controller = this;

  function init(){
    controller.allTweets = [];
    controller.geoTweets = undefined;
    TweetFactory.getAll().then(
    function success(response) {
      controller.allTweets = response.data;
      console.log('twitter response: ', response.data);
    },
    function error(error) {
      console.warn('Error getting tweets:', error);
    }
  );
  }
  init();
}

TweetController.$inject = ['TweetFactory'];

angular
  .module('WhereTweet')
  .controller('TweetController', TweetController);
