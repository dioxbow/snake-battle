function Segment(x, y, type, size, dir, speed) {
	this.x = x;
	this.y = y;
	
	var _dir = dir;
	var _dirMapArrow = {0: "up", 1: "right", 2: "down", 3: "left"};
	var _dirMapWASD = {0: "w", 1: "d", 2: "s", 3: "a"};
	var _speed = speed;
	var _size = size;
	var _color;

	if (type == "player") {
		_color = "#ffffff";
	} else if (type == "enemy") {
		_color = "#ff0000";
	}

	this.setSize = function(size) {
		_size = size;
	};

	this.getSize = function() {
		return _size;
	};

	this.updateHead = function() {
		if (!input.getKey(_dirMapArrow[_dir]) && !input.getKey(_dirMapWASD[_dir])) {
			if (input.getKey("up") || input.getKey("w")) _dir = 0;
			else if (input.getKey("right") || input.getKey("d")) _dir = 1;
			else if (input.getKey("down") || input.getKey("s")) _dir = 2;
			else if (input.getKey("left") || input.getKey("a")) _dir = 3;
		}
		var x0 = this.x + _size/2;
		var y0 = this.y + _size/2;
		var x1;
		var y1;
		if (_dir == 0) {
			x1 = x0;
			y1 = 0;
		}
		else if (_dir == 1) {
			x1 = WIDTH;
			y1 = y0;
		}
		else if (_dir == 2) {
			x1 = x0;
			y1 = HEIGHT;
		}
		else if (_dir == 3) {
			x1 = 0;
			y1 = y0;
		}

		var theta = Math.atan2((y1 - y0), (x1 - x0))
		var xvel = _speed * Math.cos(theta);
		var yvel = _speed * Math.sin(theta);
		this.x += xvel;
		this.y += yvel;

		if (this.x > WIDTH - _size) this.x = WIDTH - _size;
		if (this.x < 0) this.x = -0;
		if (this.y > HEIGHT - _size) this.y = HEIGHT - _size;
		if (this.y < 0) this.y = 0;
	}

	this.updateTail = function(xtarget, ytarget, targetSize) {
		xtarget += targetSize/2;
		ytarget += targetSize/2;
		var x0 = this.x + _size/2;
		var y0 = this.y + _size/2;
		var theta = Math.atan2((ytarget - y0), (xtarget - x0))
		var xvel = _speed * Math.cos(theta);
		var yvel = _speed * Math.sin(theta);
		if (Math.sqrt(Math.pow(xtarget-x0,2) + Math.pow(ytarget-y0,2)) >= 10+(_size+targetSize)/2) {
			this.x += xvel;
			this.y += yvel;
		}

		if (this.x > WIDTH - _size) this.x = WIDTH - _size;
		if (this.x < 0) this.x = -0;
		if (this.y > HEIGHT - _size) this.y = HEIGHT - _size;
		if (this.y < 0) this.y = 0;
	};

	this.draw = function() {
		ctx.save();
		ctx.fillStyle = _color;
		ctx.fillRect(this.x, this.y, _size, _size);
		ctx.restore();
	};
}
