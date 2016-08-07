angular.module('currentPtojectApp')
  .controller('loginCtrl', function ($scope,$timeout,$location,Restangular,$rootScope) {





  $rootScope.showLogin = true;

  $scope.authenticate = function(){

  



var data = new FormData();
data.append('email_login', 'c@d');
data.append('email_pwd', $scope.password);




 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var response = xhttp.responseText;
      if(response == 'Success'){
      
         document.getElementById('login').click();
         $location.path('/dashboard');
         $rootScope.showLogin = false;  
                
       }  else {
          alert("Invalid Login");
       }
    }
  };
  xhttp.open("POST", "http://192.168.7.3:3002/login", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send('email_login='+$scope.username+'&email_pwd=password');




/*

  Restangular.all("login").post('user', user).then(function(postedUser) {
    alert(postedUser);
});
 
   

  
   Login.one($scope.username).get().then( function(data){

        
      if(data.password == $scope.password){
      

       $location.path('/dashboard');
          
      	      	
      }
      
    }, function(error){
    	 
        $scope.invalidLogin = true;
    }).finally(function(){
 
         
         $scope.isAuthenticating=false;
    });

*/
   
    
    

      

        



}//authenticate function






  });