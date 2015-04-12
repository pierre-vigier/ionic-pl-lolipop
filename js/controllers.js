angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, playlists) {
  $scope.playlists = playlists.list;
})
.controller('AllPLCtrl', function( $scope, playlists ) {
  $scope.playlists = playlists.list;
})

.controller('PlaylistCtrl', function($scope, $stateParams, playlists) {
  $scope.playlist = playlists.get( $stateParams.playlistId );
})
.factory('playlists', [ function( ) {
    var playlists = [
        { title: 'Reggae', id: 1 },
        { title: 'Chill', id: 2 },
        { title: 'Dubstep', id: 3 },
        { title: 'Indie', id: 4 },
        { title: 'Rap', id: 5 },
        { title: 'Cowbell', id: 6 },
        { title: 'Rock', id: 7 },
        { title: 'Metal', id: 8 },
        { title: 'Country', id: 9 },
        { title: 'House', id: 10 },
        { title: 'Tango', id: 11 },
        { title: 'Classical', id: 12 },
        { title: 'Funk', id: 13 },
        { title: 'Jazz', id: 14 },
        { title: 'Electro', id: 15 },
        { title: 'Salsa', id: 16 },
        { title: 'J-Pop', id: 17 },
        { title: 'Death metal', id: 18 }
    ];
    return {
        list: playlists,
        get: function(id) {
            var pl;
            angular.forEach( playlists, function( obj ) {
                if( obj.id == id )
                    pl = obj;
            });
            return pl;
        }

    };
}])
;
