function InputManager() {

	var focus = false;
	var mouse = {down: false, x: null, y: null};
	var keystate = {};
	var keys = {
		backspace:8,
		tab:9,
		enter:13,
		shift:16,
		ctrl:17,
		alt:18,
		left:37,
		up:38,
		right:39,
		down:40,
		0:48,
		1:49,
		2:50,
		3:51,
		4:52,
		5:53,
		6:54,
		7:55,
		8:56,
		9:57,
		a:65,
		b:66,
		c:67,
		d:68,
		e:69,
		f:70,
		g:71,
		h:72,
		i:73,
		j:74,
		k:75,
		l:76,
		m:77,
		n:78,
		o:79,
		p:80,
		q:81,
		r:82,
		s:83,
		t:84,
		u:85,
		v:86,
		w:87,
		x:88,
		y:89,
		z:90
	};

	$(function() {
		$(document)
			.mouseup(function() {
				mouse.down = false;
			}).mousemove(function(event) {
				mouse.x = event.clientX - canvas.getBoundingClientRect().left;
				mouse.y = event.clientY - canvas.getBoundingClientRect().top;
			}).mousedown(function(event) {
				focus = true;
				mouse.down = true;
				mouse.x = event.clientX;
				mouse.y = event.clientY;
				keystate = {};
			}).keydown(function(event) {
				keystate[event.keyCode] = true;
			}).keyup(function(event) {
				delete keystate[event.keyCode];
			});
		$(window)
			.blur(function() {
				focus = false;
				mouse.down = false;
				keystate = {};
			}).focus(function() {
				focus = true;
			});

	})

	this.getKey = function(keyName) {
		if (keystate[keys[keyName]]) return keystate[keys[keyName]];
		else return false;
	}

	this.getMouse = function(attributeName) {
		return mouse[attributeName];
	}

	this.getFocus = function() {
		return focus;
	}

}