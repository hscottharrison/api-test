angular.module('api-test').controller('mainCtrl', function($scope, postService, $stateParams){
  $scope.test = 'This is a test'
  //functions will invoke immediately when the view is opened.
  postService.getPosts()
  .then(function(response){
    $scope.messages = response.data
  })

  postService.getComments()
  .then(function(response){
    var comments = response.data;
    var commentsArr = []
    for(var i = 0; i < comments.length; i++){
      if(comments[i].postId == $stateParams.id){
        commentsArr.push(comments[i]);
      }
    }
    $scope.comments = commentsArr;
    //simply extracting the title
    $scope.title = $stateParams.title;
  })





})
