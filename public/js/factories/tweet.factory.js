function TweetFactory($http){
  return{
    searchTweets: function (query) {
      return $http({
        method: 'POST',
        url: '/api/twittersearchresults',
        data: {
          query: query
        }
      });
    }

  };
}






angular
  .module('WhereTweet')
  .factory('TweetFactory', TweetFactory);
