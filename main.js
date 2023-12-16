import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberone",
        message: "Enter your first number",
    },
    {
        type: "number",
        name: "numbertwo",
        message: "Enter your second number",
    },
    {
        type: "list",
        name: "select",
        choices: ["+", "-", "*", "/"]
    }
]);
let numberone = answer.numberone;
let numbertwo = answer.numbertwo;
let result = 0;
if (answer.select === "+") {
    result = numberone + numbertwo;
}
else if (answer.select === "-") {
    result = numberone - numbertwo;
}
else if (answer.select === "*") {
    result = numberone * numbertwo;
}
else if (answer.select === "/") {
    result = numberone / numbertwo;
}
console.log("Your result is", result);
