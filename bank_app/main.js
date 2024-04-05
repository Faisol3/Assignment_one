class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;

    
  }

  deposit(amount) {
    this.balance += amount;
    return "Amount deposited to the account" + ":" + amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return "Amount withdraw from the account " + ":" + amount;
    } else {
      return "Insufficient funds";
    }
  }

  displaybalance() {
    return "The balance of the account is" + ":" + this.balance;
  }

  displayaccountinfo(){
   return["Account number :"+this.accountNumber,"Owner name:"+this.ownerName,"Opening balance:"+this.balance]
   

  }

 
    
  }




const acc = new BankAccount("3111", "jhon doe", 3000);


console.log(acc.displayaccountinfo());
console.log(acc.displaybalance());
console.log(acc.deposit(500));
console.log(acc.displaybalance());
console.log(acc.withdraw(200));



const acc1 = new BankAccount("3112", "Jowel barma", 2500);
console.log(acc1.displayaccountinfo());
console.log(acc1.deposit(500));
console.log(acc1.displaybalance());
console.log(acc1.withdraw(3200));
console.log(acc1.displaybalance());
