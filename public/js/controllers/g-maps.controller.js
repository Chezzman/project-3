function MapsController(){
  var controller = this;

  // create map start point and map marker position for use in the spots and my spots html states
  controller.setMapMarkerLocation = function() {
    controller.map = {
      center: {
        latitude: 51.5074,
        longitude: 0.1278
      },
      zoom: 12
    };
    controller.marker = {
      coords: {
        latitude: 51.5074,
        longitude: 0.1278
      },
      options: {
        icon: '../images/red-marker.png'
      }
    };
  };

//user $stateParams to get the geo coords from the twitter post to the marker....
  console.log('MapsController() here: ', controller);
}

angular
  .module('WhereTweet')
  .controller('MapsController', MapsController);
