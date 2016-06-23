'use strict';

function StorageService($localStorage) {
	var storageService = {};

	$localStorage = $localStorage.$default({
		accounts: [{
			"account_type": "Savings",
			"id": "1",
			"amount": "1500",
			"date": "22/06/2016",
			"maturity": "1 year"
		},
		{
			"account_type": "Checkings",
			"id": "2",
			"amount": "2650",
			"BIC": "DEBXHM",
			"IBAN": "GFBSDF 51351 ASDFAS 84513 WEFAS 549DSF"
		}]
	});

	storageService.getAccounts = function() {
		return $localStorage.accounts;
	}

	// storageService.getSavings = function() {
	// 	return $localStorage.savingsMain
	// };

	// storageService.getCheckings = function() {
	// 	return $localStorage.checkingsMain
	// };

	// storageService.addSavings = function(savings) {
	// 	$localStorage.savingsMain.push(savings)
	// };

	// storageService.addCheckings = function(checkings) {
	// 	$localStorage.checkingsMain.push(checkings)
	// };

	storageService.deleteAccount = function(item) {
		console.log(item);
		//if(item.account_type == "savings")
			//console.log($localStorage.savingsMain[item]);
	}

	//console.log($localStorage);

	return storageService;
}