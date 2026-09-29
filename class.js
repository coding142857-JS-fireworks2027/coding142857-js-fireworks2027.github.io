const sin = Math.sin;
const cos = Math.cos;
const tan = Math.tan;
const abs = Math.abs;

function drawScreenPos(pos) {
    const posCopy = {};
    [posCopy.x, posCopy.z] = [
        cos(dx) * pos.x + sin(dx) * pos.z,
        cos(dx) * pos.z - sin(dx) * pos.x
    ];
    posCopy.y, posCopy.z = [
        cos(dy) * posCopy.y + sin(dy) * posCopy.z,
        cos(dy) * posCopy.z - sin(dy) * posCopy.y
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
        ctx.beginPath();
        ctx.fillStyle = '#ffffff';
        ctx.arc(pos2d.x, pos2d.y, 2, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.closePath();
    }
}