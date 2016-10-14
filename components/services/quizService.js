app.service("quizService", function($q) {

  var quizzes = {
        'html': {
            id: 1,
            name: 'HTML',
            questions: [{
                id: 1,
                title: 'Box-model order from outside in is: Content, Border, Margin, Padding (T/F)',
                qtype: 'multiple',
                choices: ['T', 'F'],
                correct: 1
            },
                {
                    id: 2,
                    title: 'Which is not a semantic html element?',
                    qtype: 'multiple',
                    choices: ['header', 'div', 'footer', 'article'],
                    correct: 1
                }]
        },
        'angular': {
            id: 2,
            name: 'Angular',
            questions: [{
                id: 1,
                title: 'DOM manipulation should be performed in an angular directive? (T/F)',
                qtype: 'multiple',
                choices: ['T', 'F'],
                correct: 0
            },
            {
                id: 2,
                title: 'Which is not a valid option for a directive?',
                qtype: 'multiple',
                choices: ['transclude', 'link', 'scope', 'raccoon'],
                correct: 3
            },
            {
                id: 3,
                title: 'ng-click is a built-in angular _____.',
                qtype: 'blank',
                correct: 'directive'
            },
            {
                id: 4,
                title: 'DOM manipulation should be performed in an angular directive? (T/F)',
                qtype: 'multiple',
                choices: ['T', 'F'],
                correct: 0
            },
            {
                id: 5,
                title: 'Which is not a valid option for a directive?',
                qtype: 'multiple',
                choices: ['transclude', 'link', 'scope', 'The frenzied scratching of a rabid badger'],
                correct: 3
            }]
        }
    };

  this.getQuizNames = function() {
    var defer = $q.defer();

    defer.resolve( [
      { name: quizzes.angular.name } ,
      { name: quizzes.html.name}
    ]);


    return defer.promise;
  }

  this.getAllQuizzes = function() {
    var defer = $q.defer();

    defer.resolve(quizzes);
    return defer.promise;
  }


  this.getQuestions = function(quizName) {
    var defer = $q.defer();
    var quiz = quizzes[quizName.toLowerCase()];
    if(quiz) {
        defer.resolve(quiz.questions);
    }
    return defer.promise;
  }
})
