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
      let newListing = new Object();
      newListing.code = $scope.newCode;
      newListing.name = $scope.newBuildingName;
      newListing.coordinates = new Object();
      newListing.coordinates.latitude = $scope.newLatitude;
      newListing.coordinates.longitude = $scope.newLongitude;
      newListing.address = $scope.newAddress;

      Listings.push(newListing);

      // Clear input fields after push
      $scope.newCode = "";
      $scope.newBuildingName = "";
      $scope.newLatitude = "";
      $scope.newLongitude = "";
      $scope.newAddress = "";
    };
    $scope.deleteListing = function(item) {
      var index = Listings.indexOf(item);
      Listings.splice(index, 1);
    };
    $scope.showDetails = function(item) {
      let index = Listings.indexOf(item);
      var thisListing = Listings[index];
      $scope.code = thisListing.code;
      $scope.name = thisListing.name;
      $scope.address = thisListing.address;
      $scope.latitude = thisListing.coordinates.latitude;
      $scope.longitude = thisListing.coordinates.longitude;
    };
  }
]);
