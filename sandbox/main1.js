
const PI = 3.14;
const radius = 3;
let area = 0;
area = radius * radius * PI;
area = radius * radius * PI;

function AreaCalc (radius) {

    area = (radius ** 2) * Math.PI
    return area
}

console.log(AreaCalc(3));