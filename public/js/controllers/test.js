angular.module('WhereTweet', ['ngResource']);

function TwitterCtrl($scope, $resource) {
  $scope.twitter = $resource('http://search.twitter.com/:action',
    {action: 'search.json', q: 'angularjs', callback: 'JSON_CALLBACK'},
    {get: {method: 'JSONP'}});

  $scope.doSearch = function () {
    $scope.twitterResult = $scope.twitter.get({ q: $scope.searchTerm});

  };
}

////DATA I NEED TO IMPLEMENT TO THE BACK END AND REQEST IT FROM ANGULAR TWEET.CONTROLLER!!!
https://dev.twitter.com/rest/reference/get/search/tweets
