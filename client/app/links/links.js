angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {};

  $scope.signout = function () {
    Auth.signout();
  };

  var initialize = function () {
    Links.getAll()
    .then(function (links){
      $scope.data.links = links;
    })
    .catch(function (err){
      console.error('Error while loading initial links from LinksController ', err);
    });
  };
  //console.log($scope.data);
  initialize();
});
