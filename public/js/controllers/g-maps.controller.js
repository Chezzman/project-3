//WARNING COMMENTED OUT CODE FOR UPCOMING FEATURES


// function MapsController(){
//   var controller = this;
//
//   controller.setMapMarkerLocation = function(tweet) {
//     controller.map = {
//       center: {
//         latitude: 51.5074,
//         longitude: 0.1278
//       },
//       zoom: 12
//     };
//     controller.marker = {
//       coords: {
//         latitude: tweet.coordinates.latitude,
//         longitude: tweet.coordinates.longitude
//       },
//       options: {
//         icon: '../images/red-marker.png'
//       }
//     };
//   };
//
//   controller.gMaps = function() {
//
//
//     controller.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
//
//     uiGmapGoogleMapApi.then(function(maps) {
//
//     });
//   };
// }
//
//
// angular
//   .module('WhereTweet')
//   .controller('MapsController', MapsController)
//   .config(function(uiGmapGoogleMapApiProvider) {
//     uiGmapGoogleMapApiProvider.configure({
//       key: AIzaSyBBhh8JGDICwolgjstUcPjcIgr1PKoA6QE,
//       v: '3.20',
//       libraries: 'weather,geometry,visualization'
//     });
//   });
