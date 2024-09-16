const filterLessThan = (array) => {
    return array.filter(value => value < 20);
};


var num = [1, 20, 30, 40, 50, 60, 5];
const filteredNum = filterLessThan(num);

console.log('Using array proto fliter getting fliter lessthan 20: ',filteredNum);