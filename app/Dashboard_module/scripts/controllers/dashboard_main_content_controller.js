


angular.module('currentPtojectApp')
  .controller('mainContentCtrl', function ($scope,$interval) {
  
$scope.year = new Date().getFullYear();  
$scope.productBgImg = ["Dashboard_module/images/product1.png","Dashboard_module/images/product2.png","Dashboard_module/images/product3.png"];
var backgroundImages = ["Dashboard_module/images/wallpaper2.jpg","Dashboard_module/images/wallpaper1.jpg","Dashboard_module/images/wallpaper3.jpeg","Dashboard_module/images/wallpaper4.jpeg","Dashboard_module/images/wallpaper5.jpeg","Dashboard_module/images/wallpaper6.jpeg","Dashboard_module/images/wallpaper7.jpg"]; 

  var currentIndex = 0;
$scope.backgroundImage =  backgroundImages[currentIndex++];
$interval(function(){
   
   if (currentIndex == backgroundImages.length) {
                        currentIndex = 0;
      }

   $scope.backgroundImage = backgroundImages[currentIndex++];

}, 3000);

  });