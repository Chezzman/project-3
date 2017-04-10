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
    // searchTwitter: function () {
    //   return $http({
    //     method: 'GET',
    //     url: `/api/tweets/search`
    //   });
    // }
    // getOne: function (tweetId){
    //   return $http({
    //     method: 'GET',
    //     url: `${API_URL}/tweets/${tweetId}`
    //   });
    // },
    // createOne: function (newTweet) {
    //   return $http({
    //     method: 'POST',
    //     url: `${API_URL}/tweets`,
    //     data: newTweet
    //   });
    // },
    // deleteOne: function (tweetId) {
    //   return $http({
    //     method: 'DELETE',
    //     url: `${API_URL}/tweets/${tweetId}`
    //   });
    // },
    // updateOne: function (editedTweet) {
    //   return $http({
    //     method: 'PATCH',
    //     url: `${API_URL}/tweets/${editedTweet._id}`,
    //     data: editedTweet
    //   });
  };
}

//factory makes the reguest to server side




angular
  .module('WhereTweet')
  .factory('TweetFactory', TweetFactory);
