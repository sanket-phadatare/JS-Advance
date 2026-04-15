document.writeln(`stringfunctions js file loaded successfully! <br/>`);

let s = 'Sanket Phadatare';

document.writeln(`Length of string s is: ${s.length} <br/>`);
document.writeln(`s.toUpperCase() is: ${s.toUpperCase()} <br/>`);
document.writeln(`s.toLowerCase() is: ${s.toLowerCase()} <br/>`);
document.writeln(`s.charAt(0) is: ${s.charAt(0)} <br/>`);
document.writeln(`s.charAt(1) is: ${s.charAt(1)} <br/>`);
document.writeln(`index position of 'P' is: ${s.indexOf('P')} <br/>`);

//Lasr index 

let s1 = 'Sanket Phadatare Sanket';

document.writeln(`Last index position of 'S' is: ${s1.lastIndexOf('S')} <br/>`);

//search
document.writeln(`Search for 'P' is: ${s.search('P')} <br/>`);

//replace
document.writeln(`Replace 'Sanket' with 'Sanket Phadatare' is: ${s.replace('Sanket', 'Sanket Phadatare')} <br/>`);

//trim
let s2 = '   Sanket Phadatare   ';
document.writeln(`Trimmed string is: ${s2.trim()} <br/>`);

let email ="Sanket";

if(email.includes('@')){
    document.writeln(`Email is valid <br/>`);
}else{
    document.writeln(`Email is invalid <br/>`);
}


let name = 'Sanket ';

let newname = name.replace('Sanket', 'Sanket Phadatare');

document.writeln(`New name is: ${newname} <br/>`);









