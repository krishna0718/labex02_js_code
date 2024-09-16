/*function gretter(myArray,counter){
    var greetText = 'Hello ';
    for (var index = 0;index <myArray.length;index++){
        console.log(greetText + myArray[index]);
    }
}
gretter(['Randy savage','Ric Flair','Hulk hogan'],3)*/
//Rewritten the code in ES6 syntax
const greeter = (myArray, counter) => {
    const greetText = 'Hello My Name is  ';
    for (const index of myArray) {
        console.log(greetText + index);

    }
};

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);
