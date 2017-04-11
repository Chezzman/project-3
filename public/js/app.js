function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/states/home.html'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/states/login.html'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: '/states/signup.html'
  })
  .state('tweet', {
    url: '/tweet',
    templateUrl: '/states/tweets.html',
    resolve: {
      currentAuth: [
        'AuthFactory',
        (AuthFactory) => {
          return AuthFactory.$requireSignIn();
        }
      ]
    }
  });
  $urlRouterProvider.otherwise('/');
}
MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function AuthCatcher($rootScope, $state) {
  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    if (error === 'AUTH_REQUIRED'){
      $state.go('home');
    }
  });
}

function aGM(uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyBBhh8JGDICwolgjstUcPjcIgr1PKoA6QE',
    v: '3.4.1', 
    libraries: 'weather,geometry,visualization'
  });
}

angular
  .module('WhereTweet', ['ui.router', 'firebase', 'uiGmapgoogle-maps'])
  .config(MainRouter, aGM)
  .constant('API_URL', 'http://localhost:3000')
  .run(AuthCatcher);
