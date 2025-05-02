class BankAccount {
    #balance;
    constructor(entireBalance) {
        this.#balance = entireBalance;
        this.transactions = [
            {
                date: this.getDate(),
                type: "EntireBalance",
                amount: entireBalance,
                balance: entireBalance,
            },
        ];
    }
    getBalance() {
        return this.#balance;
    }

    getDate() {
        const date = new Date();
        return date.toLocaleString("default", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        });
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            this.transactions.push({
                date: this.getDate(),
                type: "Deposit",
                amount,
                balance: this.#balance,
            });
        } else {
            console.log("Deposit amount must be positive");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            this.transactions.push({
                date: this.getDate(),
                type: "Withdrawal",
                amount,
                balance: this.#balance,
            });
        } else {
            console.log(
                "Withdrawal amount must be positive and less than or equal to the balance"
            );
        }
    }
    getTransactionHistory() {
        return this.transactions;
    }
}

const account1 = new BankAccount(1000);
console.log(account1.getBalance()); // 1000
account1.deposit(500);
console.log(account1.getBalance()); // 1500
account1.withdraw(200);
console.log(account1.getBalance()); // 1300
console.log(account1.getTransactionHistory());
