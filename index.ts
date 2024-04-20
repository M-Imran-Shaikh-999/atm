#! usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin",
    type: "number",
  },
]);
if (pinAnswer.pin === myPin) {
  console.log("Your Pin Number Is Correct");
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);
  console.log(operationAns);

  if (operationAns.operation === "withdraw") {
    let amountANS = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);
    myBalance -= amountANS.amount;
    console.log("your remaining balance is: " + myBalance);
  } else if (operationAns.operation === "check balance") {
    console.log("your balance is:" + myBalance);
  }
} else {
  console.log("Your Pin number is wrong");
}
