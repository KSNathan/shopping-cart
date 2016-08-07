angular.module('currentPtojectApp')
  .controller('shopCtrl', function ($scope,$rootScope) {

$scope.addToCart = function(){

  $rootScope.noOfItems++;
  
}

 $scope.products = [
 {
 picture:"shop_module/images/shop1.jpg",
 name : "Mexi Dress",
 price: "200"

 },
 {
 picture:"shop_module/images/shop2.jpg",
 name : "Clubwear",
 price: "1300"

 },
  {
 picture:"shop_module/images/shop3.jpg",
 name : "Jumpsuits",
 price: "250"

 },
  {
 picture:"shop_module/images/shop4.jpg",
 name : "Mini Dress",
 price: "1400"

 },
  {
 picture:"shop_module/images/shop5.jpg",
 name : "A Line Dress",
 price: "500"

 },
  {
 picture:"shop_module/images/shop6.jpg",
 name : "Gowns",
 price: "450"

 },
  {
 picture:"shop_module/images/shop7.jpg",
 name : "Skater Dress",
 price: "2000"

 },
  {
 picture:"shop_module/images/shop8.jpg",
 name : "Bodycon Dress",
 price: "1200"

 },
  {
 picture:"shop_module/images/shop9.jpg",
 name : "Peplum Dress",
 price: "600"

 },
  {
 picture:"shop_module/images/shop10.jpg",
 name : "Skirt Set",
 price: "750"

 },
  {
 picture:"shop_module/images/shop11.jpg",
 name : "Plus Size",
 price: "260"

 },
  {
 picture:"shop_module/images/shop12.jpg",
 name : "Neck Clinched Waist",
 price: "1500"

 },
  {
 picture:"shop_module/images/shop13.jpg",
 name : "Midi Casual Dress",
 price: "670"

 },
  {
 picture:"shop_module/images/shop14.jpg",
 name : "Neck Summer Maxi",
 price: "200"

 },
  {
 picture:"shop_module/images/shop15.jpg",
 name : "Tribal Aztec",
 price: "999"

 },
  {
 picture:"shop_module/images/shop16.jpg",
 name : "Scalloped LacePlus",
 price: "890"

 }


 ];



})
 .filter('priceFilter', function($rootScope) {

      return function(products) {
     
        var result = [];     

        for (var i=0; i<products.length; i++){
            if(products[i].price>$rootScope.slider.minValue && products[i].price<$rootScope.slider.maxValue ) result.push(products[i])
        }            
        return result;
  };

})
 .filter('nameFilter', function($rootScope) {

      return function(products) {
     
        var result = [];     

        for (var i=0; i<products.length; i++){
            if(products[i].name.toLowerCase().indexOf($rootScope.productName.toLowerCase()) > -1 ) result.push(products[i])
        }            
        return result;
  };

});



   