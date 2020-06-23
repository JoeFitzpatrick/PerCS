
$(function(){
	//define variables
	var $blurb = $("#blurb");
	var $dot = $(".dot");
	var $next = $(".next");
	var $continue = $("#continue");
	var $continue1 = $("#continue1");
	var $continue2 = $("#continue2");

	var $frequency = $("#frequency");
	var $loudness = $("#loudness");
	var $timbre = $("#timbre");
	var $space = $("#space");

	var $presentedText = $("#presentedText");
	var $presentedSpeech = $("#presentedSpeech");
	var $presentedVisual = $("#presentedVisual");
	var $freqTimeSec = $("#freqTimeSec");
	var $loudnessSec = $("#loudnessSec");
	var $spatialSec = $("#spatialSec");
	var $introduction = $("#introduction");
	var $sources = $("#sources");


	var freqTrigger = 0;
	var freqChosen = 0;
	var timbreTrigger = 0;
	var timbreChosen = 0;
	var loudnessTrigger = 0;
	var loudnessChosen = 0;
	var spaceTrigger = 0;
	var spaceChosen = 0;

	var presentedTextTrigger = 0;
	var presentedTextChosen = 0;
	var presentedSpeechTrigger = 0;
	var presentedSpeechChosen = 0;
	var presentedVisualTrigger = 0;
	var presentedVisualChosen = 0;

	var acc = document.getElementsByClassName("accordion");
	var i;

	//next to hide blurb
	$next.on("click", function() {
		$("#blurb").hide();
	});

	$dot.on("click", function() {
		$("#blurb").hide();
	});

	// Hiding elements
	$("#mappingsUsed").hide();
	$("#table1").hide();
	$("#table2").hide();
	$("#table3").hide();
	$("#modalitiesPresent").hide();
	$("#accordion").hide();
	$("#freqTimeSec").hide();
	$("#loudnessSec").hide();
	$("#spatialSec").hide();
	$("#introduction").hide();
	$("#sources").hide();


	// Continue button
	$continue.on("click", function() {
		$("#intro").hide();
		$("#mappingsUsed").show(1000);
		$("#table1").show(2500);
		$("#table2").show(2500);
		$("#table3").show(2500);
	});

	// Mappings Used page
	$frequency.on("click", function() {
		if (freqTrigger == 0){
			$("#frequency").css("outline", "3px solid #3393FF");
			freqTrigger = 1;
			freqChosen = 1;
		} else {
			$("#frequency").css("outline", "none");
			freqTrigger = 0;
			freqChosen = 0;
		}
		
	});

	$timbre.on("click", function() {
		if (timbreTrigger == 0){
			$("#timbre").css("outline", "3px solid #3393FF");
			timbreTrigger = 1;
			timbreChosen = 1;
		} else {
			$("#timbre").css("outline", "none");
			timbreTrigger = 0;
			timbreChosen = 0;
		}
		
	});

	$loudness.on("click", function() {
		if (loudnessTrigger == 0){
			$("#loudness").css("outline", "3px solid #3393FF");
			loudnessTrigger = 1;
			loudnessChosen = 1;
		} else {
			$("#loudness").css("outline", "none");
			loudnessTrigger = 0;
			loudnessChosen = 0;
		}
		
	});

	$space.on("click", function() {
		if (spaceTrigger == 0){
			$("#space").css("outline", "3px solid #3393FF");
			console.log("hi");
			spaceTrigger = 1;
			spaceChosen = 1;
		} else {
			$("#space").css("outline", "none");
			spaceTrigger = 0;
			spaceChosen = 0;
		}
		
	});

	$continue1.on("click", function() {
		$("#mappingsUsed").hide();
		$("#table1").hide();
		$("#table2").hide();
		$("#table3").hide();
		$("#modalitiesPresent").show(1000);
		
	});

	$presentedText.on("click", function() {
		if (presentedTextTrigger == 0){
			$("#presentedText").css("outline", "3px solid #3393FF");
			presentedTextTrigger = 1;
			presentedTextChosen = 1;
		} else {
			$("#presentedText").css("outline", "none");
			presentedTextTrigger = 0;
			presentedTextChosen = 0;
		}
		
	});

	$presentedVisual.on("click", function() {
		if (presentedVisualTrigger == 0){
			$("#presentedVisual").css("outline", "3px solid #3393FF");
			presentedVisualTrigger = 1;
			presentedVisualChosen = 1;
		} else {
			$("#presentedVisual").css("outline", "none");
			presentedVisualTrigger = 0;
			presentedVisualChosen = 0;
		}
		
	});

	$presentedSpeech.on("click", function() {
		if (presentedSpeechTrigger == 0){
			$("#presentedSpeech").css("outline", "3px solid #3393FF");
			presentedSpeechTrigger = 1;
			presentedSpeechChosen = 1;
		} else {
			$("#presentedSpeech").css("outline", "none");
			presentedSpeechTrigger = 0;
			presentedSpeechChosen = 0;
		}
		
	});

	$continue2.on("click", function() {
		$("#modalitiesPresent").hide();
		$("#introduction").show();
		$("#freqTimeSec").show();
		$("#sources").show();
		if (loudnessChosen == 1) {
			$("#loudnessSec").show();
		}
		if (spaceChosen == 1) {
			$("#spatialSec").show();
		}
	});
	

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}



});