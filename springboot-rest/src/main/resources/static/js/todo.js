
angular.module('todo', []).controller("TodoCtrl", function($scope, $http) {

$(document).ready(function () {

    $("#btnSubmit").click(function (event) {

        //stop submit the form, we will post it manually.
        event.preventDefault();

        fire_ajax_submit();

    });

});
function fire_ajax_submit() {

    // Get form
    var form = $('#fileUploadForm')[0];

    var data = new FormData(form);

    data.append("CustomField", "This is some extra data, testing");

    $("#btnSubmit").prop("disabled", true);

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "/api/upload/multi",
        data: data,
        //http://api.jquery.com/jQuery.ajax/
        //https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
        processData: false, //prevent jQuery from automatically transforming the data into a query string
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {

            $("#result").text(data);
            console.log("SUCCESS : ", data);
            $("#btnSubmit").prop("disabled", false);

        },
        error: function (e) {

            $("#result").text(e.responseText);
            console.log("ERROR : ", e);
            $("#btnSubmit").prop("disabled", false);

        }
    });

  $scope.load = function ()  {
    $http.get('todo').
      success(function(data, status, headers, config) {
        $scope.todos = data;
      }).
      error(function(data, status, headers, config) {
        // log error
      });
  };

  $scope.save = function ()  {
    $http.post('todo', angular.toJson($scope.todo)).success(function () { 
    	
    	console.log("hallo");
    	$scope.load();
    });
  };

  $scope.delete = function (id)  {
    $http.delete("todo/" + id).success(function () { 
    	$scope.load();
    });
  };
});
