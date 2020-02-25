var app = angular.module("myapp",[]);
app.controller('myctrl',function($scope){

  $scope.txtresult='';

  $scope.fun=function(a)
  {
  	 if(a !='=')
  	 {
  	 	$scope.txtresult +=a;
  	 }
  	 else
  	 {
  	 	$scope.txtresult = eval($scope.txtresult);
  	 }
  	
  	
  
  }

});