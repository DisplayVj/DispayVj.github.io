

function copyToClipboard(text) {
	navigator.clipboard.writeText(text);
}


// called when document is ready
$(function() {
	$("#slide-show-container > div:gt(0)").hide();

	setInterval(function() { 
		$('#slide-show-container > div:first')
			.hide()
			.next()
			.fadeIn(1000)
			.end()
			.appendTo('#slide-show-container');
	}, 5000);
})
