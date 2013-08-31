describe("Form", function() {

	describe("objectifyUserData()", function() {

		beforeEach(function() {
			$('input').val('');
		});

		// #1
		it("should return the object\'s assigned input name value", function() {
			$('#one').val("Joe");
			$('#two').val("jvnlwn@gmail.com");

			expect(objectifyUserData().name).toBe("Joe");
		});
	});

	describe("validateForm()", function() {

		beforeEach(function() {
			$('input').val('');
		});

		// #2 checking validation form for any value
		it("should return true if any input has no value", function() {
			$('#one').val("Joe");
			$('#two').val("jvnlwn@gmail.com");
			$('#five').val("soccer");
			$('#six').val("50 miler");

			expect(validateForm()).toBe(false);
		});

		// #3 checking validation form for input class
		it("should add class 'red' to input with value of empty string", function() {
			$('#one').val("Joe");
			$('#two').val("jvnlwn@gmail.com");
			$('#three').val("");
			$('#four').val("");
			$('#five').val("soccer");
			$('#six').val("50 miler");
			$('#seven').val("");

			validateForm()
			expect($('#three').hasClass('make-red')).toBe(true);
		});
	});

	describe("displayUserName(user)", function() {

		beforeEach(function() {
			userCollection = fakeUserCollection.slice();
		});

		// #4
		it("should add an <li> containing the object\'s name to the ul", function() {

			displayUserName(userCollection);

			expect($('.display-name ul li').last().text()).toContain("MasonGenius");
		});

		it("should add as many <li>\'s to the ul as there are users in userCollection", function() {

			displayUserName(userCollection);
			// find comment in displayUserName(user) to fix !!!
			expect($('.display-name ul li').length).toEqual(userCollection.length);
		});
	});

	describe("displayActiveUserInfo(user)", function() {

		beforeEach(function() {
			userCollection = fakeUserCollection.slice();
		});

		it("should display selected user's info", function() {
			selectedUserIndex = 1;
			displayActiveUserInfo(userCollection[selectedUserIndex])

			// find comment in displayActiveUserInfo(user) function to fix
			expect($('.name').text()).toBe(userCollection[selectedUserIndex].name);
		});
	});

	describe("FunctionComingSoon()", function() {

		beforeEach(function() {
			userCollection = fakeUserCollection.slice();
		});

		// #6 this functionality is to be created later
		it("should move selected user up one position on the list/in the userCollection array", function() {
			// setting variable to selectedUserIndex for record
			var position = selectedUserIndex;
			// running funciton to adjust user position
			moveUserUp(userCollection[selectedUserIndex]);
			// displaying updated positioning of userCollection array
			displayUserName(userCollection)

			expect(selectedUserIndex).toEqual(position - 1);
		});
	});

	describe("improvisation of the .on('click') of a dynamic element . . clicking an <li>", function() {

		beforeEach(function() {
			userCollection = fakeUserCollection.slice();
			displayUserName(userCollection)
		});

		// #7 just to verify that the names can be given strong tags
		it("should make the names\' in the ul to have strong tags by adding adding them with .html()", function() {
			// this function used to be a modified verstion of changeNameFontWeight()
			function addStrongTags() {
				var names = $('li');
				var x = names.length
				for (i = 0; i <= 3; i++) {
					$(names[i]).html('<strong>' + userCollection[i].name + '</strong>');
				};
			};
			// add strong tags so we know it's removable
			addStrongTags();
			expect($('li').first().html()).toBe('<strong>' + userCollection[0].name + '</strong>');
		});

		// #8 now to verify the names can have their bold-name class removed
		it("should remove the strong tags from any non-current user and add them only to current user", function() {
			// this function used to be a modified verstion of changeNameFontWeight()
			function addStrongTags() {
				var names = $('li');
				var x = names.length
				for (i = 0; i <= 3; i++) {
					$(names[i]).html('<strong>' + userCollection[i].name + '</strong>');
				};
			};
			// add strong tags so we know it's removable
			addStrongTags();
			// removing strong tags
			displayUserName(userCollection);
			// add strong tags to currently selected user
			selectedUserIndex = 1;
			$($('li')[selectedUserIndex]).html('<strong>' + userCollection[selectedUserIndex].name + '</strong>');

			expect($($('li')[selectedUserIndex]).html()).toBe('<strong>' + userCollection[selectedUserIndex].name + '</strong>');
		});
	});

	describe("removeUser()", function() {

		beforeEach(function() {
			userCollection = fakeUserCollection.slice();
			displayUserName(userCollection);
		});
		// #9 test for clicking active user again. consoles an error of undefined
		it("should clear user info form of any content", function () {
			selectedUserIndex = 0;
			// display active user info
			displayActiveUserInfo(userCollection[selectedUserIndex]);
			// clearing form
			$('.rectangle-button.remove-user-button').click();

			expect($('.name').val()).toBe("");
		});

		// #10 test for removing user
		it("should remove selected user from userCollection array", function () {
			selectedUserIndex = 1;
			var length = userCollection.length;
			// removing selected user
			$('.rectangle-button.remove-user-button').click();

			expect(userCollection.length).toBe(length - 1);
		});

		it("should inhibit deletion of unselected users by setting selectedUserIndex to userCollection.length", function () {
			selectedUserIndex = 1;
			// removing selected user
			$('.rectangle-button.remove-user-button').click();
			var length = userCollection.length;
			$('.rectangle-button.remove-user-button').click();

			// find comment in $('.rectangle-button.remove-user-button').click() . . to fix
			expect(userCollection.length).toBe(length);
		});
	});
});





