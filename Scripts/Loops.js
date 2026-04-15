//while loop

let i = 1 ;

while(i<=10){
    document.writeln(`i: ${i}<br>`);
    i++;
}


//do while loop

let j = 1;

do{
    document.writeln(`j: ${j}<br>`);
    j++;
}
while(j<=10){
    
}


//for loop

for(let k = 1 ; k<=10 ; k++){
    document.writeln(`k: ${k}<br>`);
}


//for in loop   it gives the keys of the object not the values

let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for(let key in person){
    document.writeln(`${key}: ${person[key]}<br>`);
}


let arr = [1, 2, 3, 4, 5];

for(let index in arr){
    document.writeln(`index: ${index}, value: ${arr[index]}<br>`);
}



//For of Loop  it gives the values of the object not the keys

let person2 = ['John', 30, 'New York'];

for (let value of person2){
    document.writeln(`value: ${value}<br>`);
    
}

//ARRAYs in js 

let array = [345,'art',true,654645,6547674,'t6y5345yt' ];
document.writeln(`array: ${array}<br>`);

array.at(2); //true


let numberarray =array.filter((item) => typeof item === 'number'); // [345, 654645, 6547674]
document.writeln(`numberarray: ${numberarray}<br>`);

array.find((item) => typeof item === 'string'); // 'art'
document.writeln(`first string in array: ${array.find((item) => typeof item === 'string')}<br>`);

let mappedArray = array.map((item) => {
    if(typeof item === 'number'){
        return item * 2;
    }
    return item;
}); // [690, 'art', true, 1309290, 13095348, 't6y5345yt']

document.writeln(`mappedArray: ${mappedArray}<br>`);


let lengthOfArray = array.length; // 6
document.writeln(`length of array: ${lengthOfArray}<br>`);

let arrrrr = array.push('new item'); // 7   //last la item add krt 
document.writeln(`array after push: ${array}<br>`);

let popfun = array.pop(); // 'new item'  //last la item remove krt ani retuen krt nantr
document.writeln(`popped item: ${popfun}<br>`);
document.writeln(`array after pop: ${array}<br>`);

let unshiftfun = array.unshift('first item'); // 7  //first la item add krt
document.writeln(`array after unshift: ${array}<br>`);

let shiftfun = array.shift(); // 'first item'  //first la item remove krt ani return krt nantr
document.writeln(`shifted item: ${shiftfun}<br>`);
document.writeln(`array after shift: ${array}<br>`);


//Splice method

let spliceArray = [1, 2, 3, 4, 5];
spliceArray.splice(2, 1, 'new item'); // [1, 2, 'new item', 4, 5]   //2nd index varun 1 item remove krun tyach jagi 'new item' add krto   // ith 3 parameters ahet 1st index, 2nd remove kraycha item count, 3rd add kraycha item
document.writeln(`spliceArray after splice: ${spliceArray}<br>`);

spliceArray.splice(2, 0, 'another item'); // [1, 2, 'another item', 'new item', 4, 5]   //2nd index varun 0 item remove krun tyach jagi 'another item' add krto
document.writeln(`spliceArray after second splice: ${spliceArray}<br>`);

spliceArray.splice(2, 1); // [1, 2, 'new item', 4, 5]   //2nd index varun 1 item remove krun tyach jagi kahi add nahi krto
document.writeln(`spliceArray after third splice: ${spliceArray}<br>`);








