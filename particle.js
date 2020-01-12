class Particle {
	constructor(x, y, speed, direction, size = this.randomRange(3, 10), gravity = new Vector(0, 0)) {
		this.position = new Vector(x, y);
		this.velocity = new Vector(0, 0);
		this.velocity.length = speed;
		this.velocity.angle = direction;
		this.gravity = gravity;
		this.size = size;
		this.mass = 1;
		this.friction = 1;
	}

	// GETTERS
	get position() {
		return this._position;
	}

	get velocity() {
		return this._velocity;
	}

	get gravity() {
		return this._gravity;
	}

	get size() {
		return this._size;
	}

	get mass() {
		return this._mass;
	}

	get friction() {
		return this._friction;
	}

	// SETTERS
	set position(p) {
		this._position = p;
	}

	set velocity(v) {
		this._velocity = v;
	}

	set gravity(g) {
		this._gravity = g;
	}

	set size(s) {
		this._size = s;
	}

	set mass(m) {
		this._mass = m;
	}

	set friction(f) {
		this._friction = f;
	}

	// METHODS
	update() {
		this._velocity.multiplyBy(this._friction);
		this._velocity.addTo(this._gravity);
		this._position.addTo(this._velocity);
	}

	getColor() {
		const red = this.randomRange(Math.abs(Math.floor(this._position.x / 2)), 255);
		const green = this.randomRange(Math.abs(Math.floor(this._position.y / 2)), 255);
		const blue = this.randomRange(Math.abs(Math.floor(this._position.x / 2)), 255);

		return `rgb(${Math.floor(red)}, ${Math.floor(green)}, ${Math.floor(blue)})`;
	}

	randomRange(min, max) {
		return (Math.random() * (max - min) + min);
	}

	accelerate(accel) {
		this._velocity.addTo(accel);
	}

	angleTo(p2) {
		const dx = p2.position.x - this._position.x;
		const dy = p2.position.y - this._position.y;
		return Math.atan2(dy, dx);
	}

	distanceTo(p2) {
		const dx = p2.position.x - this._position.x;
		const dy = p2.position.y - this._position.y;
		return Math.sqrt(square(dx) + square(dy));
	}

	gravitateTo(p2) {
		const grav = new Vector(0, 0);
		const distance = this.distanceTo(p2);

		grav.length = (p2.mass / square(distance));
		grav.angle = this.angleTo(p2);

		this._velocity.addTo(grav);
	}

	draw(context) {
		context.fillStyle = this.getColor();
		context.beginPath();
		context.arc(this._position.x, this._position.y, this._size, 0, Math.PI * 2, false);
		context.fill();
	}
}
