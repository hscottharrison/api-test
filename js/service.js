angular.module('api-test').service('postService', function($http){

  this.getPosts = function(){
    return $http.get('https://jsonplaceholder.typicode.com/posts');
  }

  this.getComments = function(){
    return $http.get('https://jsonplaceholder.typicode.com/comments');
  }




})
