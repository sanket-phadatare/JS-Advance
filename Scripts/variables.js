var s= 10;
document.writeln(`var i : ${s} <br/>`);

s = 20;
document.writeln(`var i : ${s} <br/>`);

s = "Hello";
document.writeln(`var i : ${s} <br/>`);

let j =29;
document.writeln(`let j : ${j} <br/>`);

j ='Sanket';
document.writeln(`let j : ${j} <br/>`);

const k = 100;
document.writeln(`const k : ${k} <br/>`);

// k = 200; // This will cause an error because 'k' is a constant
// document.writeln(`const k : ${k} <br/>`);

function Print(a){
    if(a==10){
        // var b = a;
        // document.writeln(`var b : ${b} <br/>`);

        let  b = a;
        // document.writeln(`let b : ${b} <br/>`);
    }
     document.writeln(`Let b : ${b} <br/>`);
}

Print(10);