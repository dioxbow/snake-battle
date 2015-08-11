function InputManager() {
	var _focus = false;
	var _mouse = {down: false, x: null, y: null};
	var _keystate = {};
	var _keys = {
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
				_mouse.down = false;
			}).mousemove(function(event) {
				_mouse.x = event.clientX - canvas.getBoundingClientRect().left;
				_mouse.y = event.clientY - canvas.getBoundingClientRect().top;
			}).mousedown(function(event) {
				_focus = true;
				_mouse.down = true;
				_mouse.x = event.clientX;
				_mouse.y = event.clientY;
				_keystate = {};
			}).keydown(function(event) {
				_keystate[event.keyCode] = true;
			}).keyup(function(event) {
				delete _keystate[event.keyCode];
			});
		$(window)
			.blur(function() {
				_focus = false;
				_mouse.down = false;
				_keystate = {};
			}).focus(function() {
				_focus = true;
			});
	})

	this.getKey = function(keyName) {
		if (_keystate[_keys[keyName]]) return _keystate[_keys[keyName]];
		else return false;
	}

	this.getMouse = function(attributeName) {
		return _mouse[attributeName];
	}

	this.getFocus = function() {
		return _focus;
	}
}
