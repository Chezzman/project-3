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
        

      },
      function error(error) {
        console.warn('Error getting tweets:', error);
      }
    );
  };

  controller.getTweetsLocation = function(){

  };

  function init(){
    controller.map = { center: { latitude: 45.0792, longitude: 23.8859 }, zoom: 2 };
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
