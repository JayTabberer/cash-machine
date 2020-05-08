// Declaring variables
let accountBalance = 200;
let accountNumber = 9999;
let accountPin = 1234;
let pinAttempts = 0;

const blockFunction = () => {
    alert("You have exceeded thr amount of tries, please contact your bank");
}

const depositCash = () => {
    userInput = prompt("how much would you like to deposit...")
   if (userInput > 5 ) {
       let newBalance = +accountBalance + +userInput;
       alert(`your new balance is ${newBalance}`);
       optionsMenu();
   }else{
       alert("Please enter a valid amount")
   }

}
const checkBalance = () => {
    alert(`Your current balance is ${accountBalance}`)
    userInput = prompt("would you like to make another selection?: \n1. Yes\n2. No")
    if (userInput == 1) {
        optionsMenu();
    }
    if (userInput == 2) {
        alert("Thank you for using one ker bank, have a great day");
    }

}

const optionsMenu = () => {
    userInput = prompt("Please select from the following options:\n1.Check balance\n2.deposit cash. ")
    if (userInput == 1) {
        checkBalance();
    }
    if (userInput == 2) {
        depositCash();
    }else{
        alert("Please make another selection");
    }
}


const pinCheckFunction = (accountPin) => {
    userInput = prompt("Please enter your pin number")
    if (userInput == accountPin) {
        alert("Welcome to one ker bank");
        optionsMenu();
    }else if (userInput != accountPin && pinAttempts < 3) {
        pinAttempts++
        alert("You have entered a wrong pin, please try again");
    }else{
        alert("This is not a valid request")
    }
}
  
pinCheckFunction(1234);


