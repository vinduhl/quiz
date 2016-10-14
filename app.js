var app = angular.module("quizApp", ["ui.router"]);

app.config( function( $stateProvider, $urlRouterProvider ) {

  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "./components/home/homeView.html",
      controller: "homeCtrl",
      resolve: {
        quizzes: function($stateParams, quizService) {
          return quizService.getQuizNames();
        }
        // pastQuizzes: function($stateParams, quizService) {
        //   return quizService.getAllQuizzes();
        // }
      }
    })

  $stateProvider
    .state("quiz", {
      url: "/quiz/:quizName",
      templateUrl: "./components/quiz/views/quizContainerView.html",
      controller: "quizCtrl",
      resolve: {
        questions: function($stateParams, quizService) {
          console.log($stateParams.quizName);
          return quizService.getQuestions($stateParams.quizName);
        }
      }
    })

})
