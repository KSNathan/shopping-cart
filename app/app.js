'use strict';

/**
 * @ngdoc overview
 * @name currentPtojectApp
 * @description
 * # currentPtojectApp
 *
 * Main module of the application.
 */
angular
  .module('currentPtojectApp', [
    'ngRoute','ui.bootstrap','duScroll','restangular','rzModule'
  ])
  .config(function ($routeProvider,RestangularProvider) {
   

   RestangularProvider.setBaseUrl('http://192.168.7.3:3002');

  

    $routeProvider
      .when('/', {
      
               templateUrl: 'Dashboard_module/views/dashboard_module.html',
        controller: 'DashboardCtrl'

      })
      .when('/forget-Password', {
        templateUrl: 'Login_module/views/forget_password.html',
        controller: 'forgetPasswordCtrl'
     
      })
      .when('/registration',{

       templateUrl: 'Login_module/views/Register.html'
 


      })

      .when('/dashboard',{

       templateUrl: 'Dashboard_module/views/dashboard_module.html',
        controller: 'DashboardCtrl'


      })
     .when('/shop',{

       templateUrl: 'shop_module/views/shop_main.html'
       


      })
      .otherwise({
        redirectTo: '/dashboard'
      });
  })
  
  .factory('LoginRestangular', function(Restangular){
  
   return Restangular.withConfig(function(RestangularConfig){
   
  

    RestangularConfig.setRestangularFields({
    id:"id"
   }) ;

    //RestangularConfig.setFullResponse(true);

   });

  })
  

.factory("Login",function(LoginRestangular){ //servie for login

  return LoginRestangular.service('login');
})

.factory("Messages",function(Restangular){ //service for message

return Restangular.service('Messages');

})
.factory("Notification", function(Restangular){ //service for Notification

return Restangular.service('Notification');

})
.factory("Task", function(Restangular){ //service for task

return Restangular.service("Task");
})
.factory("sideMenu", function(Restangular){ //for side menu

return Restangular.service("side-menu");
}).factory("subscribedModule", function(Restangular){

return Restangular.service("module-suscribed");
});

