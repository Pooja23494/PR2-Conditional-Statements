// Simple Interest

let P, R, T, SI, amt;

P = 20000;
T = 5;

if (P >= 500000 && T >= 10) {
    R = 9.5;
} else if (P >= 300000 && T >= 5) {
    R = 7.5;
} else if (P >= 150000 && T >= 3) {
    R = 4.5;
} else {
    R = 2.5;
}

SI = P * R * T / 100;
amt = P + SI;

console.log('Simple Interest');
console.log('-----------------');
console.log(`Principle Amount : ${P}`);
console.log(`Rate of interest : ${R} %`);
console.log(`Time period : ${T}`);
console.log(`Simple Interest : ${SI}`);
console.log('-----------------');
console.log(`Mutual Amount : ${amt}`);