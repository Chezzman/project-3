/* global firebase */

function AuthRun(){

  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyBi-UB-Zfzu_keZZlx9aQjOHu6Tp16kEg4',
    authDomain: 'sg-project-3-tweet.firebaseapp.com',
    databaseURL: 'https://sg-project-3-tweet.firebaseio.com',
    projectId: 'sg-project-3-tweet',
    storageBucket: 'sg-project-3-tweet.appspot.com',
    messagingSenderId: '573032009231'
  };
  firebase.initializeApp(config);
}
function AuthFactory($firebaseAuth){
  return $firebaseAuth();
}

AuthFactory.$inject = ['$firebaseAuth'];

angular
  .module('WhereTweet')
  .run(AuthRun)
  .factory('AuthFactory', AuthFactory);
