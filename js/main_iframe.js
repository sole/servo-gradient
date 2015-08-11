window.onload = function() {
	console.log('iframe is ready', window.location.hash);

	window.start = function(arg) {
		console.log('start with', arg);
	};
};
