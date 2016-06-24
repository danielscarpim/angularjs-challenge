'use strict';

function StorageService($localStorage) {
	var storageService = {};

	$localStorage.$reset();

	$localStorage = $localStorage.$default({
		accounts: [{
			"account_type": "Savings",
			"amount": 1500,
			"date": "22/06/2016",
			"maturity": "1 year"
		},
		{
			"account_type": "Checking",
			"amount": 2650,
			"BIC": "DEBXHM",
			"IBAN": "GFBSDF 51351 ASDFAS 84513 WEFAS 549DSF"
		}]
	});

	storageService.getAccounts = function() {
		return $localStorage.accounts;
	}

	storageService.addAccount = function(account) {
		$localStorage.accounts.push(account)
	};

	storageService.deleteAccount = function(account) {
	    $localStorage.accounts.splice($localStorage.accounts.indexOf(account), 1);
	}

	return storageService;
}