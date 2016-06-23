angular
  .module('angularChallenge', [
    'ngRoute', 'ngDialog', 'ngStorage'
  ])
  .controller('MainController', MainController)
  .service('SharedService', SharedService)
  .service('StorageService', StorageService)
  .directive('includeTemplate', includeTemplate)
  .config(['$routeProvider', function($routeProvider
      ) {
        $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
    
  }]);

