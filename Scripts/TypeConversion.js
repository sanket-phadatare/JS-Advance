//string to number

let str = "123445";
let num = Number(str);

document.writeln(
  `string to number is ${num} and it's type is ${typeof num}<br/>`,
);

//using unrary operator

let str1 = "34534";
let str2 = +str1;

document.writeln(`string to number is ${str2} and it's type is ${typeof str2}`);

//using parseInt
let str3 = "34534";
let num3 = parseInt(str3);

document.writeln(
  `string to number is ${num3} and it's type is ${typeof num3}<br/>`,
);

//using parseFloat
let str4 = "34534.567";
let num4 = parseFloat(str4);

document.writeln(
  `string to number is ${num4} and it's type is ${typeof num4}<br/>`,
);

//string to boolean

let str5 = "sanket";
let bool1 = Boolean(str5);
document.writeln(
  `string to boolean is ${bool1} and it's type is ${typeof bool1}<br/>`,
);

let str6 = "false";
let bool2 = Boolean(str6);
document.writeln(
  `string to boolean is ${bool2} and it's type is ${typeof bool2}<br/>`,
);

//using json.parse  used to convert string to boolean if the string is "true" or "false"

let str7 = "true";
let bool3 = JSON.parse(str7);
document.writeln(
  `string to boolean is ${bool3} and it's type is ${typeof bool3}<br/>`,
);

//number to string

let num5 = 345446534;
let str8 = String(num5);
document.writeln(
  `number to string is ${str8} and it's type is ${typeof str8}<br/>`,
);
