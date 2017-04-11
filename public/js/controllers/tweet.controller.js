function TweetController(TweetFactory) {
  var controller = this;

  controller.getTweets = function() {
    TweetFactory.searchTweets(controller.tweetSearch).then(
      function success(response) {
        controller.allTweets = response.data;
        controller.markers = controller.allTweets.statuses.map(function(tweet, i) {
          return {
            location: {
              latitude: tweet.place.bounding_box.coordinates[0][0][1],
              longitude: tweet.place.bounding_box.coordinates[0][0][0]
            },
            id: i
          };
        });
        console.log('twitter response: ', response.data);
        console.log(controller.markers);
      },
      function error(error) {
        console.warn('Error getting tweets:', error);
      }
    );
  };

  controller.getTweetsLocation = function(){

  };

  function init(){
    controller.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    controller.markers = [];
    controller.tweetSearch = '';
    controller.allTweets = [];
  }
  init();
}

TweetController.$inject = ['TweetFactory'];

angular
  .module('WhereTweet')
  .controller('TweetController', TweetController);
