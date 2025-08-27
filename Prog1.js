// Marksheet

let sid, sname, coursename, HTML_mark, DSA_mark, BOOTSTRAP_mark, total, avg, grade;

sid = 9893;
sname = "Pooja Patel";
coursename = 'Master in Front-end Development';
HTML_mark = 88;
DSA_mark = 95;
BOOTSTRAP_mark = 91;

total = HTML_mark + DSA_mark + BOOTSTRAP_mark;
avg = total / 3;

if (avg >= 90) {
    grade = 'A+';
} else if (avg >= 80 && avg <= 90) {
    grade = 'A';
} else if (avg >= 70 && avg <= 80) {
    grade = 'B+';
} else if (avg >= 60 && avg <= 70) {
    grade = 'B';
} else {
    grade = 'Not Eligible';
}

console.log('Marksheet');
console.log('----------------');
console.log(`Student Id : ${sid}`);
console.log(`Student Name : ${sname}`);
console.log(`Course Name : ${coursename}`);
console.log(`HTML Mark : ${HTML_mark}`);
console.log(`DSA Mark : ${DSA_mark}`);
console.log(`BOOTSTRAP Mark : ${BOOTSTRAP_mark}`);
console.log(`Total : ${total}`);
console.log(`Average : ${avg} %`);
console.log(`Status : ${grade}`);