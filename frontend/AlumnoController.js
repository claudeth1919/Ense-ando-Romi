
app.controller('AlumnoController', function($scope, $http) {
  $scope.saludos="Hola mundo Angularjs!!";
  $http({
  method: 'GET',
  url: 'http://127.0.0.1/backend/Alumno.php',
  headers: 'Content-Type: application/json'
}).then(function successCallback(response) {
    console.log(response);
    $scope.alumnos = response.data;
  }, function errorCallback(response) {
    alert("Error");
  });
});
