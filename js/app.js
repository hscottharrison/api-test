angular.module('api-test', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
         .otherwise('/');
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/home.html",
                controller: 'mainCtrl'
            })
            //I am adding a state param of title to this URL in order to pull the title over
            //to give context on the comments page
            .state('comments',{
                url:'/comments/:id/:title',
                templateUrl: "../views/comments.html",
                controller: 'mainCtrl'
            })
})
