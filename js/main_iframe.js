window.onload = function() {
	console.log('iframe is ready', window.location.hash);

	window.addEventListener('message', function(ev) {
		console.log(ev);
	});

	window.start = function(arg) {
		console.log('start with', arg);
	};
};
