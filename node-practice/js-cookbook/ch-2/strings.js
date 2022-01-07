//If you want to make sure that your variable is a string:

let unknownVar = '9';
if (typeof  unknownVar === 'string'){
    console.log('true');
} else {
console.log('false');
}

//If you want to make sure that have a nonempty string
if (typeof  unknownVar === 'string' && unknownVar.length > 0){
    console.log('true');
} else {
console.log('false');
}

//If you want to check for blank strings (whitespace):
if(typeof unknownVar === 'string' && unknownVar.trim().length > 0){
    console.log('true');
} else {
    console.log('false');
}

//If you either have a string primitive or an object that has the same prototype as string:
if (typeof unknownVar === 'string' || String.prototype.isPrototypeOf(unknownVar)){ 
    console.log('true');
} else {
    console.log('false');
}