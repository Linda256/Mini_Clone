angular.module('video-player')

.component('videoList', {
  // controller:function($window){
  //   this.videos=$window.exampleVideoData;
  // },
  bindings:{
    videos: "<"
  },
  templateUrl:'src/templates/videoList.html'
  // TODO
});
