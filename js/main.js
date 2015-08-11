window.onload = function() {

	var h1 = document.querySelector('h1');
	h1.textContent = document.title;
	console.log('hey');

	var iframes = [];
	var num = 3;

	for(var i = 0; i < num; i++) {
		var fr = document.createElement('iframe');
		var src = 'iframe.html#' + i;
		fr.src = src;
		
		console.log(src);
		document.body.appendChild(fr);

		iframes.push(fr);

		var frameid = i;

		// workaround for https://github.com/servo/servo/issues/7162
		fr.onload = function() {
			this.contentWindow.start('aaa');
		};
	}

	console.log('pfff', iframes);
};
