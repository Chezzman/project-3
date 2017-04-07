function TweetController(TweetFactory) {
  var controller = this;


  // controller.getGeo = function () {
  //   TweetFactory.searchTwitter().then(
  //     function success(response){
  //       controller.geoTweets = response.data;
  //     }, function error(error){
  //     console.warn('Not getting geoTweets', error);
  //   }
  //   );
  // };

  // controller.populateTweets = function () {
  //   TweetFactory.getAll().then(
  //     function success(response){
  //       controller.allTweets = response.data;
  //       console.log('data from back end', response.data);
  //     },
  //     function error(error){
  //       console.warn('Error retrieving tweets', error);
  //     }
  //   );
  // };
  

  function init(){
    controller.allTweets = [];
    controller.geoTweets = undefined;
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

TweetController.$inject = ['TweetFactory'];

angular
  .module('WhereTweet')
  .controller('TweetController', TweetController);
