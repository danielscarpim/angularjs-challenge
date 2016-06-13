'use strict';

function MainController($scope, $q, $compile, SharedService, $rootScope, ngDialog, $window, HttpService, $location) {

$scope.account_type_selected = "Savings";
$scope.sharedService = SharedService;
$scope.savingsMain = [];
$scope.checkingsMain = [];
$scope.addToCheckingsAccounts = {};
$scope.addToSavingsAccounts = {};

  $scope.init = function() {
      HttpService.load("http://0.0.0.0:3000/api/custdetails")
        .then(function(response) {
          if (response) {
            console.log(JSON.stringify(response.data));
            $scope.showAllData = response.data;
          }
        }, function(error) {
          console.log("Error occurred");
        });
    };

$scope.$watch('savingsMain', function($scope){
      // alert('hey, myVar has changed!'); 
        return $scope.savingsMain;
});

$scope.selectedAccountType = function(showAccount){
  console.log(showAccount);
  if(showAccount === "Savings"){
     $scope.sharedService.accountType = "Savings";
  }else{
    $scope.sharedService.accountType = "Checkings";
  }
};


$scope.saveAccounts = function(){
    if($scope.sharedService.accountType === "Savings"){
       $scope.addToSavingsAccounts = {
      "account_type": $scope.sharedService.accountType,
      "amount": $scope.sharedService.amount,
      "date": $scope.sharedService.date,
      "maturity": $scope.sharedService.maturity
    };
     
      $scope.savingsMain.push($scope.addToSavingsAccounts);
      
    }else{
       $scope.addToCheckingsAccounts = {
      "account_type": $scope.sharedService.accountType,
      "amount": $scope.sharedService.amount,
      "bic": $scope.sharedService.BIC,
      "iban": $scope.sharedService.IBAN
    };
    
      $scope.checkingsMain.push($scope.addToCheckingsAccounts);
    //  console.log($scope.checkingsMain);
      
    }
    
    ngDialog.close();
    
  
};

$scope.accountTypeModel = []; 
$scope.accountTypeData = {
      option1: "Checkings",
      option2: 'Savings'
   };
   
    $scope.prop = {   
    "type": "select", 
    "name": "account_type",
    "value": $scope.sharedService.accountType, 
    "accountTypeData": [ "Savings", "Checkings"] 
  };

$scope.data = {
    availableOptions: [
      {id: '1', name: 'Checkings'},
      {id: '2', name: 'Savings'}
    ],
    selectedOption: {id: '3', name: 'Option C'} //This sets the default value of the select in the ui
    };

$scope.updateData = function(){
  var data = {
    cust_name: $scope.custNameModel,
    phone_number: $scope.phoneNumberModel,
    id: $scope.idModel
  };

  HttpService.patch('http://0.0.0.0:3000/api/custdetails?', data);
  $scope.init();

};

$scope.deleteData = function(){
  console.log("ID defined is: "+$scope.idModel);
  HttpService.delete("http://0.0.0.0:3000/api/custdetails", $scope.idModel);
  $scope.init();

};





}
