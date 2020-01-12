window.onload = () => {
	const canvas = document.getElementById('canvas');
	const context = canvas.getContext("2d");
	const width = canvas.width = window.innerWidth;
	const height = canvas.height = window.innerHeight;
	const particles = [];
	const numParticles = 75;
	let angle = 2;
	let dx = 0;
	let dy = 0;

	const randomRange = (min, max) => (Math.random() * (max - min) + min);

	const createParticle = () => new Particle(randomRange(-1, 0), randomRange(-1, 0), randomRange(25, 40), randomRange(1, angle), randomRange(3, 10));

	for (let i = 0; i < numParticles; i++) {
		particles[i] = createParticle();
	}
	
	const render = () => {
		context.clearRect(0, 0, width, height);
		context.fillStyle = '#000000';
		context.fillRect(0, 0, width, height);

		particles.map(p => {
				p.update();
				p.draw(context);
				if (p.position.x > width || p.position.y > height) {
						const index = particles.indexOf(p);
						particles.splice(index, 1);
						particles.push(createParticle());
				}
		});

		requestAnimationFrame(render);
	};

	render();

	document.body.addEventListener('mousemove', e => {
		dx = e.clientX;
		dy = e.clientY;
		angle = Math.atan2(dy, dx);
	});
};
