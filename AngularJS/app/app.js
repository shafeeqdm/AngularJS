var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "viewshome.html",
      })
      .when("/directory", {
        templateUrl: "viewsdirectory.html",
        controller: "myAppController",
      })
      .otherwise({
        redirectTo: "/home",
      });
  },
]);

myApp.run(function () {});

myApp.controller("myAppController", [
  "$scope",
  function ($scope) {
    $scope.message = "Hi";

    $scope.addDev = function () {
      $scope.devs.push({
        name: $scope.newdev.name,
        prg: $scope.newdev.prg,
        rate: parseInt($scope.newdev.rate),
        available: true,
      });

      $scope.newdev.name = "";
      $scope.newdev.prg = "";
      $scope.newdev.rate = "";
    };

    $scope.devs = [
      {
        name: "chaps1",
        prg: "dev1",
        rate: 100,
        available: true,
      },
      {
        name: "chaps",
        prg: "dev",
        rate: 50,
        available: true,
      },
      {
        name: "chaps2",
        prg: "dev2",
        rate: 200,
        available: true,
      },
    ];
  },
]);
