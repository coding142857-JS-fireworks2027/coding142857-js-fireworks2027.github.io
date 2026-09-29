const sin = function(d) { return Math.sin(d / 180 * Math.PI) };
const cos = function(d) { return Math.cos(d / 180 * Math.PI) };
const tan = function(d) { return Math.tan(d / 180 * Math.PI) };
const abs = Math.abs;

const paint = document.getElementById('paint');
const ctx = paint.getContext('2d');

var dx = 0;
var dy = 0;
const dv = 120;
const dz = (window.innerWidth / 2) / tan(dv / 2);

var time = Date.now();
var deltaTime = 0;