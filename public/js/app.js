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

angular
  .module('WhereTweet', ['ui.router', 'firebase'])
  .config(MainRouter)
  .constant('API_URL', 'http://localhost:3000')
  .run(AuthCatcher);

//'uiGmapgoogle-maps'
