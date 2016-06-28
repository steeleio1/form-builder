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
    	<i class="fa fa-user" aria-hidden"></i>
      <input class="inputstyle" type="text"
             id="${data.id} "placeholder="${data.label}"
             	>
	 </div>`;
};


function lastnameTemplate (data) {
	return `
    <div class="form-input">
    	<i class="fa fa-user" aria-hidden"></i>
      <input type="text"
             id="${data.id} "placeholder="${data.label}">
    </div>`;
};

function emailTemplate (data) {
	return `
    <div class="form-input">
    <i class="fa fa-envelope-o"></i>
      <input type="text"
             id="${data.id} "placeholder="${data.label}">
    </div>`;
};


function urlTemplate (data) {
	return `
    <div class="form-input">
    <i class="fa fa-globe" aria-hidden"></i>
      <input type="text"
             id="${data.id} "placeholder="${data.label}">
    </div>`;
};

function langTemplate (data) {
	return `
    <div class="lang-input">
     <label for="mail">${data.label}</label>
      <input type="${data.type}"
             id="${data.id}">
    </div>`;
};

function commentTemplate (data) {
	return `
    <div class="comment-input">
    <i class="fa fa-comments" aria-hidden="></i>
      <input class ="commentbox" type="text"
             id="${data.id} "placeholder="${data.label}">
    </div>`;
};

function mobileTemplate (data) {
	return `
    <div class="form-input">
    <i class="fa fa-mobile" aria-hidden="></i>
      <input type="text"
             id="${data.id} "placeholder="${data.label}">
    </div>`;
};

function homeTemplate (data) {
	return `
    <div class="form-input">
    <i class="fa fa-phone" aria-hidden"></i>
      <input type="text"
             id="${data.id} "placeholder="${data.label}">
    </div>`;
};



function doStuffWithData (fields) {
	console.log(fields);

	fields.forEach(function (field) {
		if (field.label === "First Name") {
			var firstnamehtml = firstnameTemplate(field);
			$(".my-form").append(firstnamehtml);

		} else if (field.label === "Last Name") {
			var lastnamehtml = lastnameTemplate(field);
			$(".my-form").append(lastnamehtml);

		} else if (field.type === "email") {
			var emailhtml = emailTemplate(field);
			$(".my-form").append(emailhtml);

		} else if (field.label === "Current website url") {
			var urlhtml = urlTemplate(field);
			$(".my-form").append(urlhtml);

		} else if (field.label === "Select Language") {
			var langhtml = urlTemplate(field);
			$(".my-form").append(langhtml);	

		} else if (field.label === "Your Comment") {
			var commenthtml = commentTemplate(field);
			$(".my-form").append(commenthtml);

		} else if (field.label === "Mobil Number") {
			var mobilehtml = mobileTemplate(field);
			$(".my-form").append(mobilehtml);

		} else if (field.label === "Home Number") {
			var homehtml = homeTemplate(field);
			$(".my-form").append(homehtml);

	};

	// console.log(textItems);
});

};







    // <i class="fa fa-envelope-o"></i>



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
