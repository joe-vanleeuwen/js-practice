$(document).ready(function() {

	var originText = "";
	var lastLetter = "";
	var firstLetters = "";

	function makeBold(origin) {
		 originText = $(origin).val();	
		 firstLetters = originText.slice(0, originText.length - 1);	 
		 lastLetter = originText.slice(originText.length - 1);
		$(origin + '.first-letters').text(firstLetters);
		$(origin + '.last-letter').text(lastLetter);
	}

	function makeUnBold(origin) {
		 originText = $(origin).val();	
		$(origin + '.first-letters').text(originText);
		$(origin + '.last-letter').text("");
	}

	$('.one').keyup(function() {
		 makeBold('.one');
 	})

	$('.one').focusout(function() {
 		makeUnBold('.one');
 	})

 	$('.one').focusin(function() {
 		makeBold('.one');
 	})

 	$('.two').keyup(function() {
		 makeBold('.two');
 	})

	$('.two').focusout(function() {
 		makeUnBold('.two');
 	})

 	$('.two').focusin(function() {
 		makeBold('.two');
 	})

 	$('.three').keyup(function() {
		 makeBold('.three');
 	})

	$('.three').focusout(function() {
 		makeUnBold('.three');
 	})

 	$('.three').focusin(function() {
 		makeBold('.three');
 	})

 	$('.four').keyup(function() {
		 makeBold('.four');
 	})

	$('.four').focusout(function() {
 		makeUnBold('.four');
 	})

 	$('.four').focusin(function() {
 		makeBold('.four');
 	})

 	$('.five').keyup(function() {
		 makeBold('.five');
 	})

	$('.five').focusout(function() {
 		makeUnBold('.five');
 	})

 	$('.five').focusin(function() {
 		makeBold('.five');
 	})

 	$('.six').keyup(function() {
		 makeBold('.six');
 	})

	$('.six').focusout(function() {
 		makeUnBold('.six');
 	})

 	$('.six').focusin(function() {
 		makeBold('.six');
 	})

 	$('.seven').keyup(function() {
		 makeBold('.seven');
 	})

	$('.seven').focusout(function() {
 		makeUnBold('.seven');
 	})

 	$('.seven').focusin(function() {
 		makeBold('.seven');
 	})
})









