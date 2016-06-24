'use strict';

function MainController($scope, SharedService, ngDialog, StorageService) {

  $scope.account_type_selected = "Checking";
  $scope.sharedService = SharedService;

  $scope.showAccounts = "All";

  $scope.filterAccounts = function(type) {
    $scope.showAccounts = type;
  }


  $scope.getAccounts = function() {
    $scope.accounts = StorageService.getAccounts();
    console.log($scope.accounts);
  }

  $scope.getAccounts();

  $scope.getBalance = function() {
    var balance = 0;
    angular.forEach($scope.accounts,function(key,value){
      balance = balance+Number(key.amount);
    });
    $scope.balance = balance;
    console.log(balance)
  }

  $scope.getBalance();


  $scope.saveAccounts = function () {
    var newAccount = {};
    if ($scope.sharedService.accountType === "Savings") {
      newAccount = {
        "account_type": $scope.sharedService.accountType,
        "amount": $scope.sharedService.amount,
        "date": $scope.sharedService.date,
        "maturity": $scope.sharedService.maturity
      };
      $scope.showAccounts = "All";
      StorageService.addAccount(newAccount);
      $scope.getBalance();

    } else {
      newAccount = {
        "account_type": $scope.sharedService.accountType,
        "amount": $scope.sharedService.amount,
        "bic": $scope.sharedService.BIC,
        "iban": $scope.sharedService.IBAN
      };
      $scope.showAccounts = "All";
      StorageService.addAccount(newAccount);
      $scope.getBalance();

    }
    ngDialog.close();

  };


  $scope.deleteAccount = function(item) {
    StorageService.deleteAccount(item);
    $scope.getBalance();
  }

  $scope.closeDialog = function () {
    ngDialog.close();
  };

  $scope.accountTypeModel = [];

  $scope.prop = {
    "type": "select",
    "name": "account_type",
    "value": $scope.sharedService.accountType,
    "accountTypeData": ["Savings", "Checkings"]
  };

}