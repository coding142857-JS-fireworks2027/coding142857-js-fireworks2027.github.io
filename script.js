const paint = document.getElementById('paint');
const ctx = paint.getContext('2d');

var dx, dy;
const dv = 120;
const dz = (window.innerWidth / 2) / tan(dv / 2);

var time = Date.now();
var deltaTime = 0;