// Bill

let pname, price, qty, total, dispercentage, disamt, nettotal;

pname = 'Chair';
price = 1200;
qty = 20;

total = price * qty;

if (total >= 15000) {
    dispercentage = '20%';
    disamt = total * 0.2;
} else if (total >= 10000) {
    dispercentage = '15%';
    disamt = total * 0.15;
} else if (total >= 5000) {
    dispercentage = '5%';
    disamt = total * 0.05;
} else {
    dispercentage = '0%';
    disamt = 0;
}

nettotal = total - disamt;

console.log('Invoice');
console.log('---------------');
console.log(`Product Name : ${pname}`);
console.log(`Product Price : ₹ ${price}`);
console.log(`Quantity : ${qty}`);
console.log(`Discount Rate : ${dispercentage}`);
console.log('---------------');
console.log(`Total : ₹ ${total}`);
console.log(`Discount Amount : ₹ ${disamt}`);
console.log('---------------');
console.log(`Net Total : ₹ ${nettotal}`);