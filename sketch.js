let t = 0;
const scale = 100;

function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(0, 30);
	stroke(0, floor(random() * 256), floor(random() * 256));
	strokeWeight(4);
	translate(width / 2, height / 2);

	const [a1, b1] = eq6(t);
	const [a2, b2] = eq5(t);
	line(a1, b1, a2, b2);
	t += 0.1;
}

// parametric equations
// constant 0 equation
const eq1 = t => {
	return [0, 0];
};

const eq2 = t => {
	const x1 = t => {
		return cos(t) * cos(t) * cos(t) * scale;
	};

	const y1 = t => {
		return sin(t) * sin(t) * sin(t) * scale;
	};

	const a1 = x1(t);
	const b1 = y1(t);

	return [a1, b1];
};

const eq3 = t => {
	const x2 = t => {
		return scale * sin(5 * t + 0.5);
	};

	const y2 = t => {
		return scale * sin(t);
	};

	const a2 = x2(t);
	const b2 = y2(t);

	return [a2, b2];
};

const eq4 = t => {
	let a = 5;
	let b = 11;
	let c = 3;
	const x = t => {
		return 0.1 * scale * (a + b) * cos(t) - c * cos((a / b + t) * t);
	};
	const y = t => {
		return 0.1 * scale * (a + b) * sin(t) - c * sin((a / b + t) * t);
	};
	return [x(t), y(t)];
};

const eq5 = t => {
	let a = 12;
	let b = 13;
	const x = t => {
		return 4 * sin((a / b) * t);
	};
	const y = t => {
		return 3 * sin(t);
	};
	return [x(t) * scale * 0.5, y(t) * scale * 0.5];
};

const eq6 = t => {
	const x = t => {
		return sin(3 * t + PI / 3);
	};
	const y = t => {
		return sin(t);
	};
	return [scale * x(t), scale * y(t)];
};
