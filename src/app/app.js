angular
  .module('angularChallenge', [
    'ngRoute', 'ngDialog'
  ]).service('HttpService',HttpService)
  .controller('MainController', MainController)
  .service('SharedService', SharedService)
  .directive('includeTemplate', includeTemplate)
  .config(['$routeProvider', function($routeProvider
      ) {
        $routeProvider
      .when('/', {
        templateUrl: 'app/views/todo.html',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
    
  }]);

