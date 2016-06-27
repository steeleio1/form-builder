import $ from 'jquery';

// ======short version of lines 8-17=====
// $.ajax("https://json-data.herokuapp.com/forms").then(function(response){
// 	console.log(response)
// });

var datasearch = $.ajax({
  url: "http://json-data.herokuapp.com/forms",
  dataType: 'json',
  success: function (success_res) {
    console.log(success_res);
  },
  error: function (error_res) {
    console.log(error_res);
  }
});



