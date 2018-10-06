angular.module('video-player')


.component('app', {
  controller: function($window){
      this.videos=$window.exampleVideoData;
  },
  templateUrl:'src/templates/app.html'
  //controller:'videoContrl'
});


