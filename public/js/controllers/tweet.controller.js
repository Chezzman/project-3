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
    controller.map = {
      center: { latitude: 45.0792, longitude: 23.8859 },
      zoom: 2,
      options: {
        styles: [
          {
            'featureType': 'all',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'weight': '2.00'
              }
            ]
          },
          {
            'featureType': 'all',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#9c9c9c'
              }
            ]
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text',
            'stylers': [
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'landscape',
            'elementType': 'all',
            'stylers': [
              {
                'color': '#f2f2f2'
              }
            ]
          },
          {
            'featureType': 'landscape',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#ffffff'
              }
            ]
          },
          {
            'featureType': 'landscape.man_made',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#ffffff'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'all',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'all',
            'stylers': [
              {
                'saturation': -100
              },
              {
                'lightness': 45
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#eeeeee'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#7b7b7b'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'labels.text.stroke',
            'stylers': [
              {
                'color': '#ffffff'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'all',
            'stylers': [
              {
                'visibility': 'simplified'
              }
            ]
          },
          {
            'featureType': 'road.arterial',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'transit',
            'elementType': 'all',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'all',
            'stylers': [
              {
                'color': '#46bcec'
              },
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#c8d7d4'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#070707'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'labels.text.stroke',
            'stylers': [
              {
                'color': '#ffffff'
              }
            ]
          }
        ]
      }
    };
    console.log(controller.map.styles);
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
