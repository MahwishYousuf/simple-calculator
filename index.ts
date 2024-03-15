import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Enter first number",
    type: "number",
    name: "firstNumber",
  },
  {
    message: "Enter first number",
    type: "number",
    name: "secondNumber",
  },
  {message: "Select one of the operators to perform action",
    type: "list",
    name: "operators",
    choices: ["Addition","Subtraction", "Multiplication","Division"]
  },
]);
 
//conditional Statement 
if (answer.operators ==="Addition")
{
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators ==="Subtraction")
{
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators ==="Multiplication")
{
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operators ==="division")
{
    console.log(answer.firstNumber / answer.secondNumber);
}
else{
    console.log("Please select valid operators")
}
