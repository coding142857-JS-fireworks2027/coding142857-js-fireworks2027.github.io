function drawScreenPos(pos) {
    const posCopy = {};
    [posCopy.x, posCopy.z] = [
        cos(dx) * pos.x + sin(dx) * pos.z,
        cos(dx) * pos.z - sin(dx) * pos.x
    ];
    [posCopy.y, posCopy.z] = [
        cos(dy) * pos.y + sin(dy) * posCopy.z,
        cos(dy) * posCopy.z - sin(dy) * pos.y
    ];
    if (posCopy.z <= 0) return null;
    return { x: posCopy.x / posCopy.z * dz, y: posCopy.y / posCopy.z * dz };
}

class obj {
    constructor(type, data) {
        this.type = type;
        this.data = data;
    }
    draw() {
        let pos2d = drawScreenPos(this.data.pos);
        if (pos2d === null) return;
        ctx.beginPath();
        ctx.fillStyle = '#ffffff';
        ctx.arc(pos2d.x + paint.width / 2, pos2d.y + paint.height / 2, 2, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.closePath();
    }
}