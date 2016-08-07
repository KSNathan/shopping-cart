angular.module('currentPtojectApp')
  .controller('reg_val_ctrl', function ($scope,$timeout,$location,Login, $rootScope) {

$scope.isPswdMtch = true;
$scope.confirmPassword = function(){

	if($scope.pwd_reenter!=$scope.pwd){
     $scope.isPswdMtch = false;
	}
}

$scope.register = function(){

  


 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var response = xhttp.responseText;

      if(response == 'Success'){
         document.getElementById('register').click();
        // document.getElementById('  login').click();
         $rootScope.showLogin = false; 
         $location.path('/dashboard');
         

                
       }  else {
          alert("User Already Existed");
       }
    }
  };

  xhttp.open("POST", "http://192.168.7.3:3002/submit", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send('fname='+$scope.fname+'&lname='+$scope.lname+'&email='+$scope.email+'&pwd='+$scope.pwd+'&mobile='+$scope.mobile);

}//end of function





 });