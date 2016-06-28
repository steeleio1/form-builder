import $ from 'jquery';

// ======short version of lines 8-17=====
// $.ajax("https://json-data.herokuapp.com/forms").then(function(response){
// 	console.log(response)
// });

var datasearch = $.ajax({
  url: "http://json-data.herokuapp.com/forms",
  dataType: 'json',
  // success: function (data) {
  // 	buildForm(data);
  // },
  error: function (error_res) {
    console.log(error_res);
  }
});

datasearch.then(doStuffWithData);



function firstnameTemplate (data) {
	return `
    <div class="form-input">

    	<i class="fa fa-envelope-o"></i>
    	<label for="name">${data.label}</label>
      	<input type="${data.type}"
             	id="${data.id}"
             	>
	 </div>`;
};


function lastnameTemplate (data) {
	return `
    <div class="form-input">

    <i class="fa fa-envelope-o"></i>

      <input type="${data.type}"
             id="${data.id}">
      <label for="name">Last Name</label>

    </div>`;
};




function doStuffWithData (fields) {
	console.log(fields);

	fields.forEach(function (field) {
		if (field.label === "First Name") {
			var firstnamehtml = firstnameTemplate(field);
			$(".my-form").append(firstnamehtml);

		} else if (field.label === "Last Name") {
			var lastnamehtml = LastnameTemplate(field);
			$(".my-form").append(lastnamehtml);
		}

	});

	// console.log(textItems);
};








// var getfirstname = datasearch.map(function(){

// });


// function addfirstnamebox (data) {
//   console.log(data);
//   $(".firstnamebox").append(planetTemplate(data));
// };

// function firstnametemplate (first) {
//   return `<li class="planet">${first.name} is pretty ${first.climate}</li>`;
// };







// function addToPage (html) {
// 	return doStuffWithData
// 	`  <form>
//         <i class="fa fa-envelope-o"></i>
//         <input type="text" name="firstname"> 
//     </form>`
// };

// $(".firstnamebox").append(addToPage);
