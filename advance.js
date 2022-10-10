const calculateHalts = (halts, totalDistance) => {
    let haltsCovered = 0, i = 0;
    while (i < halts.length) {
        if (halts[i] < totalDistance) {
            totalDistance = totalDistance - halts[i];
            haltsCovered += 1;
        }
        else {
            break;
        }
        i++;
    }
    return haltsCovered;
}
let halts = [40, 98, 134, 179, 211, 248];
let X = 8;
let K = 30;
let totalDistanceByA = X * K;
let Y = 7;
let L = 40;
let totalDistanceByB = Y * L;

console.log(`Halts covered A is ${calculateHalts(halts, totalDistanceByA)}`);
console.log(`Halts covered B is ${calculateHalts(halts, totalDistanceByB)}`);
halts = [10, 12]
console.log(`Halts covered A is ${calculateHalts(halts, totalDistanceByA)}`);
console.log(`Halts covered B is ${calculateHalts(halts, totalDistanceByB)}`);
halts = [20, 15]
console.log(`Halts covered A is ${calculateHalts(halts, totalDistanceByA)}`);
console.log(`Halts covered B is ${calculateHalts(halts, totalDistanceByB)}`);
