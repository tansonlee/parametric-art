# Parametric Art

These designs are created using a pair of parametric equations.



<img src="./assets/example.gif" width="600px>

The parametric equations used for this example are:

```javascript
let a = 12;
let b = 13;

const x = t => {
	return 4 * sin((a / b) * t);
};

const y = t => {
	return 3 * sin(t);
};
```

```javascript
const x = t => {
	return sin(3 * t + Math.PI / 3);
};

const y = t => {
	return sin(t);
};
```