angular.module('CurrencyConverter')
.controller('CurrencyConverterCtrl', function ($scope) {
  $scope.currencies = [
    'USD',
    'ARS',
  ];
  $scope.selectedCurrency = $scope.currencies[0];
  $scope.convert = function (expression, selectedCurrency) {
    $scope.result = parseInt(expression) + ' ' + selectedCurrency;
  };
});
