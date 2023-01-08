import inquirer from "inquirer";
let input = await inquirer.prompt([
    {
        type: "number",
        name: "userid",
        message: "Enter your UserID"
    },
    {
        type: "number",
        name: "pin",
        message: "Enter your pin",
        when(answers) {
            return answers.userid;
        }
    },
    {
        type: "list",
        name: "acctype",
        choices: ["Current Account", "Saving Account"],
        message: "Choose the Account type",
        when(answers) {
            return answers.pin;
        }
    },
    {
        type: "list",
        name: "options",
        choices: ["Fast Cash", "Get Loan", "Withdrawal"],
        message: "Choose from options",
        when(answers) {
            return answers.acctype;
        }
    },
    {
        type: "list",
        name: "cash",
        choices: [10000, 20000, 30000],
        message: "Choose Amount",
        when(answers) {
            return answers.options === "Fast Cash";
        }
    },
    {
        type: "number",
        name: "cashAmount",
        message: "Enter your Withdrawal",
        when(answers) {
            return answers.options === "Withdrawal";
        }
    },
    {
        type: "number",
        name: "loan",
        message: "Enter the loan ammount you want",
        when(answers) {
            return answers.options === "Get Loan";
        }
    }
]);
const { userid, pin, acctype, options, cash, cashAmount, loan } = input;
const Balance = Math.floor(Math.random() * 100000);
console.log("Your current balance" + Balance);
let CurrentBalance = Balance - cashAmount;
if (userid && pin && cashAmount) {
    console.log(`Your current balance is ${CurrentBalance}`);
    if (Balance < cashAmount) {
        console.log("Insufficient Balance");
    }
}
if (userid && pin && loan) {
    console.log(`Congratulation on getting your loan, The Interest would be ${loan * 0.16}`);
}
//console.log(input.userid, input.pin, input.options, input.acctype, input.cash,input.cashAmount,input.loan);
