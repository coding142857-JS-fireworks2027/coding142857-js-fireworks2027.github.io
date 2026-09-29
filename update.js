function update() {
    resize();
    let dot1 = obj('dot', { pos: { x: 0, y: 0, z: 100 } });
    dot1.draw();
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