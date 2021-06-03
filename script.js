$(".yes-button1").click(function() {
	$(".part-two-yes").show();
	$(".title").hide();
});

$(".no-button1").click(function() {
	$(".part-two-no").show();
    $(".title").hide();
});

$(".get-in").click(function() {
	$(".part-three-no").show();
    $(".part-two-no").hide();
});

$(".back-to-start").click(function() {
	$(".title").show();
    $(".part-three-no").hide();
    $(".final-scene").hide();
});

$(".yes-button-1").click(function() {
    $(".part-two-yes").show();
    $(".title").hide();
});

$(".fridge-slam").click(function() {
    $(".part-three-yes").show();
    $(".part-two-yes").hide();
});

$(".call-carm").click(function() {
    $(".part-four-yes").show();
    $(".part-three-yes").hide();
});

$(".dont-call").click(function() {
    $(".part-two-no").show();
    $(".part-three-yes").hide();
});

$(".yell").click(function() {
    $(".driveway").show();
    $(".part-four-yes").hide();
});

$(".reaction").click(function() {
    $(".final-scene").show();
    $(".driveway").hide();
});
