const sum = (array) => {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const product = (array) => {
    return array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};
var num = [1, 2, 3, 4];

const calsum = sum(num);
const calproduct = product(num);

console.log('Sum of the array:',calsum);
console.log('product of the array:',calproduct); 