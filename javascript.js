var userCollection = [];
var selectedUserIndex;

$(document).ready(function() {

	$('#one, #two, #three, #four, #five, #six, #seven')
		.keyup(function() {
			makeBold($(this).attr('id'));
 	})

	$('#one, #two, #three, #four, #five, #six, #seven')
		.focusout(function() {
	 		makeUnBold($(this).attr('id'));
	 })

 	$('#one, #two, #three, #four, #five, #six, #seven')
	 	.focusin(function() {
	 		$(this).removeClass('make-red');
	 		makeBold($(this).attr('id'));
	 })

	$('.rectangle-button.submit-button').on("click", function() {
		if (validateForm() === false) {
			$('h2.message-title').text("required fields blank");
			$('p.modal-message').html("Please fill in the red fields. <br> Thank you!")
			modalOn();
		} else {
			// adding new user to userCollections array
			userCollection.push(objectifyUserData());
			// displaying all users' names
			displayUserName(userCollection);
			$('h2.message-title').text("ha ha ha");
			$('p.modal-message').html("We now have all the info we want! <br> So long, sucker!")
			modalOn();
		}		
	});

	// turn modal off
	$('.rectangle-button.modal-button').on("click", function() {
    	modalOff();
	});

	$('.modal-background').on("click", function() {
    	modalOff();
	});

	// toggle between "submit-user" and "view-users"
	$('.rectangle-button.view-users-button').on("click", function() {
    	$('.view-users').toggleClass('hide');
	});
	$('.rectangle-button.go-back-button').on("click", function() {
    	$('.view-users').toggleClass('hide');
	});

	// clicking dynamically created <li>'s 
	// I set the <li> class to a number contained in a string i.e. "0".
	// This apparently can be passed into an array as an index and work as an actual number.
	// Actually, regarding the last statement, the console will give a numeric value for
	// for liClass. Which is odd, since the numeric value is actually the class of the clicked <li>,
	// so you'd expect console to log a string i.e. "0". I must not understand how these things work.
	$('.display-name').on('click', 'li', function() {
		// setting liClass to clicked <li> class which will give a number
   		var liClass = $(this).attr("class");
   		selectedUserIndex = liClass;
   		// displaying selected user's info on the right by passing <li> class number as argument
   		displayActiveUserInfo(userCollection[liClass]);
   		// removing <strong> tags from previously selected <li>
   		// by simply reloading the 
   		displayUserName(userCollection);
		// tried to use $(this) but that wasn't working so used
		// $($('li')[selectedUserIndex]) instead
		$($('li')[selectedUserIndex]).html('<strong>' + userCollection[selectedUserIndex].name + '</strong>');
	});

	// click remove-user-button and remove current user
	$('.rectangle-button.remove-user-button').click(function() {
		// pass in global variable for the currently selected user 
		// so that that user may be removed
		removeUser(selectedUserIndex);
		// visually update user names on left
		displayUserName(userCollection);
		// clear info of removed user
		clearInfo();
	});
});

function makeBold(origin) {
	var id = '#' + origin;
	var klass = '.' + origin;

	var originText = $(id).val();	
	var firstLetters = originText.slice(0, -1);	 
	var lastLetter = originText.slice(-1);
	$(klass + '.first-letters').text(firstLetters);
	$(klass + '.last-letter').text(lastLetter)
}

function makeUnBold(origin) {
	var id = '#' + origin;
	var klass = '.' + origin;

	originText = $(id).val();	
	$(klass + '.first-letters').text(originText);
	$(klass + '.last-letter').text("");
}

// function to turn modal on
function modalOn() {
	$('.modal-background').addClass('modal-background-active');
	$('.modal-box').addClass('modal-box-active');
};

// function to turn modal off
function modalOff() {
	$('.modal-background').removeClass('modal-background-active');
	$('.modal-box').removeClass('modal-box-active');
};

// function for checkking for content insied the inputs. Will be implemented after
// the submit button is clicked. Could have used the .forEach here,
// but at the time I made this function, I didn't know about that method.

// returns true for var valid if all inputs have value, otherwise returns false.
function validateForm() {
	var allInputs = $(":input");
	var valid = true;
	for (i=0; i<allInputs.length; i++) {
		var whatID = "#" + $(allInputs[i]).attr("id")
		var value = $(whatID).val();
		if (value === "") {
			$(whatID).addClass('make-red');
			valid = false;
		};
	};	
	return valid;
};

// function for taking input values and placing them inside an object to be pushed
// to the userCollection array
function objectifyUserData() {
	var nameVal = $('#one').val();
	var emailVal = $('#two').val();
	var cellVal = $('#three').val();
	var occupationVal = $('#four').val();
	var hobbyVal = $('#five').val();
	var greatestAchievementVal = $('#six').val();
	var bucketListVal = $('#seven').val();

	var userData = {
		name: nameVal,
		email: emailVal,
		cell: cellVal,
		occupation: occupationVal,
		hobby: hobbyVal,
		greatestAchievement: greatestAchievementVal,
		bucketList: bucketListVal
	}

	return userData;
};

// list names on the left
function displayUserName(list) {
	var ul = $('.display-name ul');
	ul.html('');

	list.forEach(function(user, index) {
		console.log(user.name);
		var text = "<li class='" + index +"'>" + user.name + "</li>";
		ul.append(text);
	});
};

// display user info on right of selected user
function displayActiveUserInfo(user) {
	$('.name').text(user.name);
	$('.email').text(user.email);
	$('.cell').text(user.cell);
	$('.occupation').text(user.occupation);
	$('.hobby').text(user.hobby);
	$('.greatest-achievement').text(user.greatestAchievement);
	$('.bucket-list').text(user.bucketList);
};

// function for removing selected user when remove button is clicked
// must pass in selectedUserIndex for user
function removeUser(user) {
	userCollection.splice(user, 1);
};

// function for clearing right side of info after user has been removed
function clearInfo() {
	$('.name').text("");
	$('.email').text("");
	$('.cell').text("");
	$('.occupation').text("");
	$('.hobby').text("");
	$('.greatest-achievement').text("");
	$('.bucket-list').text("");
};

// function to be defined for moving user
// up or down in the list/in the userCollection array.
function moveUserUp() {

};

// for testing purposes onlyz:
var fakeUserCollection = [
	{
		name: "Joe",
		email: "JOE emailVal",
		cell: "JOE cellVal",
		occupation: "JOE occupationVal",
		hobby: "JOEh obbyVal",
		greatestAchievement: "JOE greatestAchievementVal",
		bucketList: "JOE bucketListVal"	
	},
	{
		name: "Amy",
		email: "AMY emailVal",
		cell: "AMY cellVal",
		occupation: "AMY occupationVal",
		hobby: "AMY hobbyVal",
		greatestAchievement: "AMY greatestAchievementVal",
		bucketList: "AMY bucketListVal"	
	},
	{
		name: "CrazyGuy",
		email: "CRAZYGUY emailVal",
		cell: "CRAZYGUY cellVal",
		occupation: "CRAZYGUY occupationVal",
		hobby: "CRAZYGUY hobbyVal",
		greatestAchievement: "CRAZYGUY greatestAchievementVal",
		bucketList: "CRAZYGUY bucketListVal"	
	},
	{
		name: "MasonGenius",
		email: "MASONGENIUS emailVal",
		cell: "MASONGENIUS cellVal",
		occupation: "MASONGENIU SoccupationVal",
		hobby: "MASONGENIU ShobbyVal",
		greatestAchievement: "MASONGENIUS greatestAchievementVal",
		bucketList: "MASONGENIUS bucketListVal"	
	}
];

function clearLeftNameDisplay() {
	var ul = $('.display-name ul');
	ul.html('');
}










