window.onload = function() {
	var h1 = document.querySelector('h1');
	h1.textContent = document.title;
	console.log('hey');

	var num = 3;

	for(var i = 0; i < num; i++) {
		var fr = document.createElement('iframe');
		var src = 'iframe.html#' + i;
		fr.src = src;
		console.log(src);
		document.body.appendChild(fr);

		fr.contentWindow.addEventListener('load', function() {
			fr.contentWindow.postMessage('hey', '*');
		});
	}
};
