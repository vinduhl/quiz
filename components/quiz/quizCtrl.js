app.controller("quizCtrl", function($scope, $stateParams, questions) {
  $scope.quizName = $stateParams.quizName;
  $scope.questions = questions;
});
