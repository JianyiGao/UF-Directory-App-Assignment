angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
     // To do: Showing new listing in listings in order by code/name
    $scope.addListing = function() {
      Listings.push({
        code: $scope.newCode,
        name: $scope.newBuildingName,
      });
      // Clear input fields after push
      $scope.newCode = "";
      $scope.newBuildingName = "";
    };
    $scope.deleteListing = function(index) {
      Listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
      var thisListing = Listings[index];
      $scope.code = thisListing.code;
      $scope.name = thisListing.name;
      $scope.address = thisListing.address;
      $scope.latitude = thisListing.coordinates.latitude;
      $scope.longitude = thisListing.coordinates.longitude;
    };
  }
]);
