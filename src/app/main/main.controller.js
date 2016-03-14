(function() {
  'use strict';

  angular
    .module('angularChallenge')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.title = "Welcome to the AngularJS Code Challenge";
    vm.description = "This is the boilerplate project for the Angular JS challenge";
  }
})();
