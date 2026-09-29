const sin = Math.sin;
const cos = Math.cos;
const abs = Math.abs;

function drawScreenPos(pos) {
    const posCopy = {};
    posCopy.x = cos(dx) * pos.x + sin(dx) * pos.z;
    posCopy.z = cos(dx) * pos.z - sin(dx) * pos.x;
    posCopy.y = cos(dy) * pos.y + sin(dy) * pos.z;
    posCopy.z = cos(dy) * pos.z - sin(dy) * pos.y;
    return posCopy;
}

class Object {
    constructor(type, data) {

    }
}