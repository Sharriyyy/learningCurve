const bannk = [
  ['name', 'account_number', 2000], // [name, age, balance]
  ['name', 'account_number', 2000], // [name, age, balance]
  ['name', 'account_number', 2000], // [name, age, balance]
];

// function transfer(
//   sender_account_number,
//   recievers_account_number,
//   revievers_name
// ) {
  // code to send money


/**
 * This is a small application to transfer money to other people account
 *
 * 1. Make a bank array in a template shown above, where each element is a user account [name, age, balance]
 * 2. Make a function to transfer money from one account to another account with account number. Confirm if the name is the same as user provided
 * 3. Make a function to send money. Before sending money, check if the user has enough money in his account
 * 4. Make a function which will simulate the scenario where people send money to other accounts.
 * 5. In the end of the function, check if the total money in the bank is the same as it was in the beginning.
 */


const bank = [
  ['Sharry', 'account_number_1', 1000],
  ['Faiz', 'account_number_2', 500],
  ['Batman', 'account_number_3', 2000]
];

function transferMoney(senderAccNum, receiverAccNum, receiverName) {
  let sender = bank[senderAccNum];
  let receiver = bank[receiverAccNum];

  let senderName = prompt("Enter your name: ");

  if (sender[0] === senderName) {
    let amount = (prompt("Enter the amount to transfer: "));
    if (sender[2] >= amount) {
      sender[2] -= amount;
      receiver[2] += amount;
      console.log("Money transferred successfully.");
    } else {
      console.log("Insufficient balance.");
    }
  } else {
    console.log("Sender's name does not match.");
  }
}

function sendMoney(senderAccNum, receiverName) {
  let sender = bank[senderAccNum];
  let senderName = prompt("Enter your name: ");
  let amount = parseFloat(prompt("Enter the amount to send: "));

  if (sender[0] === senderName) {
    if (sender[2] >= amount) {
      let receiver = bank.find(account => account[0] === receiverName);
      if (receiver) {
        sender[2] -= amount;
        receiver[2] += amount;
        console.log("Money sent successfully.");
      } else {
        console.log("Receiver not found.");
      }
    } else {
      console.log("Insufficient balance.");
    }
  } else {
    console.log("Sender's name does not match.");
  }
}

function simulateTransactions() {
  let initialTotalBalance = bank.reduce((total, account) => total + account[2], 0);

  
  transferMoney(0, 1); 
  sendMoney(2, "Batman");
  sendMoney(3, "Sharry")

  let finalTotalBalance = bank.reduce((total, account) => total + account[2], 0);

  if (initialTotalBalance === finalTotalBalance) {
    console.log("Total money in the bank is the same as before.");
  } else {
    console.log("Total money in the bank has changed.");
  }
}


simulateTransactions();



