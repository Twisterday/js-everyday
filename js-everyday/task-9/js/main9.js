// p1
$(document).ready(function () {
	$('h2.head').css('background-color', 'green');
	$('h2.head').find('.inner').css('font-size', '35px');
});

// p2
$(document).ready(function () {
	$('a[href^="https://"]').attr('target', '_blank');
});

// p3
$("h3").each(function () {
	var div = $(this).next("div");
	if (div.length) {
		$(this).before(div);
	}
});

// p4
$(document).ready(function () {
	var checkboxes = $('input[type="checkbox"]');
	checkboxes.change(function () {
		var checkedCount = checkboxes.filter(':checked').length;
		if (checkedCount == 3) {
			checkboxes.not(':checked').prop('disabled', true);
		}
	});
});
