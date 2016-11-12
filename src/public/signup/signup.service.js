(function () {
"use strict";

angular.module('public')
.service('SignupService', SignupService);

function SignupService() {
  var service = this;
  service.profile = {};

  service.saveProfile = function(user){  
      service.profile  = user;
      console.log(service.profile,'Saved the profile information');
    }

  service.getProfile = function(){
    console.log(service.profile);
    return service.profile;
  }



}



})();
