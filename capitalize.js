//Exercise 2 
const capitalize = (str) => {
    if (str.length === 0) return str;

    const [char, ...rest] = [...str];

    const lower = rest.join('').toLowerCase();

    return [char.toUpperCase(), lower].join('');
};

//console.log(capitalize('nodeJs')); 
//console.log(capitalize('foodBar')); 

// Exercise 3
const colors = ['red', 'green', 'blue'];

const capitalizedColors = colors.map(capitalize);

console.log(capitalizedColors);

