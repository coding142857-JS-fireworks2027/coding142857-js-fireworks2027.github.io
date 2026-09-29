let dots = [];
for (let index = 0; index < 10000; index++) {
    dots.push(new obj('dot', { pos: { x: Math.random() * 200 - 100, y: Math.random() * 200 - 100, z: 100 } }));
    dots[index].draw();
}

function update() {
    resize();
    for (let index = 0; index < 10000; index++) {
        dots[index].draw();
    }
    requestAnimationFrame(update);
}

function getTime() {
    deltaTime = time - Date.now();
    time = Date.now();
}

function resize() {
    paint.width = window.innerWidth;
    paint.height = window.innerHeight;
}

update();

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            dy += 5;
            break;
        case 'ArrowDown':
            dy -= 5;
            break;
        case 'ArrowLeft':
            dx += 5;
            break;
        case 'ArrowRight':
            dx -= 5;
            break;
    }
    console.log(e.key);

})