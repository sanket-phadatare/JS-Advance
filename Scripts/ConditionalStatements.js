let i = prompt("Enter a number: ");

if(i > 0) {
  document.write("The number is positive.");
} else {
    document.write("The number is not positive.");
}


//ternary operator

let result = (i > 0) ? "The number is positive." : "The number is not positive.";

document.write(result);

//switch statement

let day = prompt("Enter a day of the week: ");
switch(day.toLowerCase()) {
    case "monday":
        document.write("It's Monday.");
        break;
    case "tuesday":
        document.write("It's Tuesday.");
        break;  
    case "wednesday":
        document.write("It's Wednesday.");
        break;
    case "thursday":
        document.write("It's Thursday.");
        break;  
    case "friday":
        document.write("It's Friday.");
        break;
    case "saturday":
        document.write("It's Saturday.");
        break;
    case "sunday":
        document.write("It's Sunday.");
        break;
    default:
        document.write("Invalid day.");
}