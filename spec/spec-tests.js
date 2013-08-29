describe("Complete Form", function() {

	describe("Left Side, Submit Page", function() {

		beforeEach(function() {
			$('input').val('');
		});

		// #1
		it("should return the object\'s assigned input name value", function() {
			$('#one').val("Joe");
			$('#two').val("jvnlwn@gmail.com");

			// change to "Joe" for green
			expect(objectifyUserData().name).toBe("Joe");
		});

		beforeEach(function() {
			$('input').val('');
		});

		// #2 checking validation form for any value
		it("should return true if any input has no value", function() {
			$('#one').val("Joe");
			$('#two').val("jvnlwn@gmail.com");
			$('#five').val("soccer");
			$('#six').val("50 miler");

			// expecting true to be true, so not sure if that's an accurate test.
			// change to false for green
			expect(validateForm()).toBe(false);
		});

		beforeEach(function() {
			$('input').val('');
		});

		// #3 checking validation form for input class
		it("should add class 'red' to input with no value", function() {
			$('#one').val("Joe");
			$('#two').val("jvnlwn@gmail.com");
			$('#three').val("");
			$('#four').val("");
			$('#five').val("soccer");
			$('#six').val("50 miler");
			$('#seven').val("");

			validateForm()
			// change to true for green
			expect($('#three').hasClass('make-red')).toBe(true);
		});


		beforeEach(function() {
			$('input').val('');
		});

	});

	describe("Left Side, View Users Page", function() {

		// #4
		it("should add an <li> containing the object\'s name to the ul", function() {
			$('#one').val("Joe");
			$('#two').val("jvnlwn@gmail.com");

			var name = objectifyUserData().name

			// adding new user to userCollections array
			userCollection.push(objectifyUserData());
			// displaying all users' names
			displayUserName(userCollection);

			// change to "Joe" for green
			expect($('.display-name ul li').last().text()).toContain("Joe");
		});

		beforeEach(function() {
			$('input').val('');
		});

		// #5
		it("should not remove any users since none are selected", function() {
			// setting the userCollection to the fakeUserCollection
			userCollection = fakeUserCollection.slice();
			// getting number of users
			var length = userCollection.length
			// displaying user names
			displayUserName(userCollection)
			// removing user with index of selectedUserIndex
			// who's value gets set to the mosrt recently 
			// selected user name.
			removeUser(selectedUserIndex);

			// must work this issue out
			// need to set a condition that will not allow
			// remove button to act in this way
			// since it removes unselected user at the moment.
			expect(userCollection.length).toEqual(length);

		});

		beforeEach(function() {
			$('input').val('');
		});

		// #6 this functionality is to be created later
		it("should move selected user up one position on the list/in the userCollection array", function() {
			// setting the userCollection to the fakeUserCollection
			userCollection = fakeUserCollection.slice();
			// setting variable to selectedUserIndex for record
			var position = selectedUserIndex;
			// running funciton to adjust user position
			moveUserUp(userCollection[selectedUserIndex]);
			// displaying updated positioning of userCollection array
			displayUserName(userCollection)

			expect(selectedUserIndex).toEqual(position - 1);
		});

		beforeEach(function() {
			$('input').val('');
		});

		// #7 just to verify that the names can be given strong tags
		it("should make the names\' have strong tags by adding adding them with .html()", function() {
			// setting the userCollection to the fakeUserCollection
			userCollection = fakeUserCollection.slice();
			// displaying user names
			displayUserName(userCollection)
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
			// change to '<strong>' + userCollection[0].name + '</strong>' to be green
			expect($('li').first().html()).toBe('<strong>' + userCollection[0].name + '</strong>');
		});

		beforeEach(function() {
			$('input').val('');
		});

		// #8 now to verify the names can have their bold-name class removed
		it("should remove the strong tags and add them only to current user", function() {
			// setting the userCollection to the fakeUserCollection
			userCollection = fakeUserCollection.slice();
			// displaying user names
			displayUserName(userCollection);
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

			// change to '<strong>' + userCollection[selectedUserIndex].name + '</strong>' for green
			expect($($('li')[selectedUserIndex]).html()).toBe('<strong>' + userCollection[selectedUserIndex].name + '</strong>');
		});

		beforeEach(function() {
			$('input').val('');
		});

		// #9 test for clicking active user again. consoles an error of undefined
		it("should clear user info form of any content", function () {
			// setting the userCollection to the fakeUserCollection
			userCollection = fakeUserCollection.slice();
			// displaying user names
			displayUserName(userCollection);
			// display active user info
			displayActiveUserInfo(userCollection[0]);
			// clearing form
			clearInfo();

			// change to "" for green
			expect($('.name').val()).toBe("");
		});

		beforeEach(function() {
			$('input').val('');
		});

		// #10 test for removing user
		it("should remove selected user from userCollection array", function () {
			// setting the userCollection to the fakeUserCollection
			userCollection = fakeUserCollection.slice();
			// displaying user names
			displayUserName(userCollection);
			selectedUserIndex = 1;
			// removing selected user
			$('.rectangle-button.remove-user-button').click();

			// change to "CrazyGuy" for green
			expect(userCollection[selectedUserIndex].name).toBe("CrazyGuy");
		});

		beforeEach(function() {
			$('input').val('');
		});

	});

});





