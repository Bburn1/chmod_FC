let num = Number(prompt("Enter the number please: "))
let res

switch(num){
    case 0:
        res = "No rights"
    break;
    case 1:
        res = "Execution only"
    break;
    case 2:
        res = "Record only"
    break;
    case 3:
        res = "Execution and recording"
    break;
    case 4:
        res = "Only reading"
    break;
    case 5:
        res = "Reading and executing"
    break;
    case 6:
        res = "Read and write"
    break;
    case 7:
        res = "Read write and execute"
    break;
    default:
        res = "Undefind number, please only 0-7 numbers"
}

console.log(res);
