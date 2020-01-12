class Vector {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.angle = Math.atan2(y, x);
		this.length = Math.sqrt(x * x + y * y);
	}

	// GETTERS
	get x() {
		return this._x;
	}
	get y() {
		return this._y;
	}

	get length() {
		return Math.sqrt(this._x * this._x + this._y * this._y);
	}

	get angle() {
		return Math.atan2(this._y, this._x);
	}

	// SETTERS
	set x(x) {
		this._x = x;
	}

	set y(y) {
		this._y = y;
	}

	set length(l) {
		this._length = l;
		this._x = Math.cos(this._angle) * l;
		this._y = Math.sin(this._angle) * l;
	}

	set angle(a) {
		this._angle = a;
		this._x = Math.cos(a) * this._length;
		this._y = Math.sin(a) * this._length;
	}

	// METHODS
	updateAngle() {
		const length = this._length;
		this._x = Math.cos(this._angle) * length;
		this._y = Math.sin(this._angle) * length;
		this._angle = Math.atan2(this._y, this._x);
	}

	updateLength() {
		this._x = Math.cos(this._angle) * length;
		this._y = Math.sin(this._angle) * length;
		this._length = Math.sqrt(this._x * this._x + this._y * this._y);
	}

	add(v) {
		return new Vector(this._x + v.x, this._y + v.y);
	}

	addTo(v) {
		this._x += v.x;
		this._y += v.y;
	}

	subtract(v) {
		return new Vector(this._x - v.x, this._y - v.y);
	}

	subtractFrom(v) {
		this._x -= v.x;
		this._y -= v.y;
	}

	multiply(val) {
		return new Vector(this._x * val, this._y * val);
	}

	multiplyBy(val) {
		this._x *= val;
		this._y *= val;
	}

	divide(val) {
		return new Vector(this._x / val, this._y / val);
	}

	divideBy(val) {
		this._x /= val;
		this._y /= val;
	}
}
