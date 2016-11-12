(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject= ['MenuService','SignupService'];

function SignupController(MenuService,SignupService) {
  var $ctrl = this;
  $ctrl.validShortName = true;
  $ctrl.completed = false;
  $ctrl.user = {};
  $ctrl.submit = function(){

    if($ctrl.user.shortname){
      var promise = MenuService.getFavoriteMenuItems($ctrl.user.shortname);
      promise.then(function(data){
        if(data.short_name && (data.short_name == $ctrl.user.shortname)){
          $ctrl.validShortName = true;
          $ctrl.user.itemname = data.name;
          $ctrl.user.description = data.description;
          SignupService.saveProfile($ctrl.user);
          $ctrl.completed = true;
        }else{
          $ctrl.validShortName = false;
          $ctrl.completed = false;
        }
      });
    }


  }
  $ctrl.reset = function(){
    console.log('in the reset method');
  }
}


})();
