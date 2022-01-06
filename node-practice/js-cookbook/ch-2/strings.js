//If you want to make sure that your variable is a string:

let unknownVar = '9';
if (typeof  unknownVar === 'string'){
    console.log('true')
}
else{
console.log('false');
}

//If you want to make sure that have a nonempty string
if (typeof  unknownVar === 'string' && unknownVar.length > 0){
    console.log('true')
}
else{
console.log('false');
}