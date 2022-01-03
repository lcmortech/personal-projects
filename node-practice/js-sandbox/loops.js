const cars = ['Benz', 'Camry', 'Beetle', 'Sonata'];

console.log('1:')
cars.forEach(car => console.log(car));

console.log('2:')
cars.forEach((car, i ) => console.log(car[i]))

console.log('3:')
for (let car in cars) {
    console.log(car);
}

console.log('4:')
for (let car in cars) {
    console.log(cars[car])
}

console.log('5:')
for (let car of cars) {
    console.log(car)
}

console.log('6:')
for (let i = 0; i < cars.length; i++){
    console.log(i);
}

console.log('7:')
for (let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

//Notes
//forEach grabs the value
//for in grabs the index/key/property
// for in when using array[index], grabs the value
//for of grabs the value
//classic for loop grabs the index/key/property
//classic for loop when using array[index], grabs the value
//Conclusion:
//for in can be used in place of classic loop for time to retrieve index/property
//for of can be used in place of forEach for time to retrieve value/item in array
//for in is the most useful here, as it can also be used to retrieve the value with array[index]