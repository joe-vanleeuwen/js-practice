$(document).ready(function() {

	var originText = "";
	var lastLetter = "";
	var firstLetters = "";

	function makeBold(origin) {
		var id = '#' + origin;
		var klass = '.' + origin;

		originText = $(id).val();	
		firstLetters = originText.slice(0, -1);	 
		lastLetter = originText.slice(-1);
		// $(origin + '.first-letters').html(firstLetters + "<strong>" + lastLetter + "<strong>");
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

	// turn modal on

	function modalOn() {
		$('.modal, .modal-box, .placement').removeClass('modal-fade-out');
    	$('.modal, .modal-box, .placement').addClass('modal-fade-in');
		$('.modal').toggleClass('modal-active');
		$('.modal-box').toggleClass('modal-box-active');
		$('.modal, .placement').addClass('index-ten');
	};

	function modalOff() {
		$('.modal, .modal-box, .placement').removeClass('modal-fade-in');
    	$('.modal, .modal-box, .placement').addClass('modal-fade-out');
    	$('.modal').toggleClass('modal-active');
		$('.modal-box').toggleClass('modal-box-active');
		$('.modal, .placement').removeClass('index-ten');
	}

	function makeRed() {
		var allInputs = $(":input");
		var red = false;
		for (i=0; i<allInputs.length; i++) {
			var whatID = "#" + $(allInputs[i]).attr("id")
			var value = $(whatID).val();
			if (value === "") {
				$(whatID).addClass('make-red');
				red = true;
			};
		};	
		return red;
	};

	$('.rectangle-button.submit-button').on("click", function() {
		console.log(makeRed());
		if (makeRed() === true) {
			$('h2.message-title').text("required fields blank");
			$('p.modal-message').html("Please fill in the red fields. <br> Thank you!")
			modalOn();
		} else {
			$('h2.message-title').text("ha ha ha");
			$('p.modal-message').html("We now have all the info we want! <br> So long, sucker!")
			modalOn();
		}
		
	});

	// turn modal off

	$('.rectangle-button.modal-button').on("click", function() {
    	modalOff();
	});
});









