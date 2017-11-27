# Bank Tech Test

This is my first practice tech test. Undertaken with a single day to complete as much as possible. It is designed to test and practice my ability code using OO design and TDD skills. I completed it alone and conducted a code review on it at the end of the day, reflecting on my process to improve my work

## Thought process

I decided to write this app using JavaScript. I decided this as I felt my knowledge in JavaScript fit this challenge well and I had done similar things before using Ruby and wanted to see how I would get on with writing a simple app using JavaScript.

When initially creating the app I planned to store an array of transactions inside the account object. But when it came to creating this object it felt that this should be handled by more of a controller class such as a Bank. At this point I decided to break a new object out of the account 'class' within which I could keep a log of the transactions related to the account.

I then began to add in the basic functionality for crediting and debiting the account. Bringing in functionality to work against edge cases. At this point I added context sections for debit and credit to the account spec file to make them more readable.

At this point I decided to make the Bank class the controlling object. It manages account credit, debit and transaction history. It can be used to print a statement of the transactions too.

## Things to Work on

As it stands my final test is not passing for an unknown reason. The printBalance method produces a statement that looks like it matches what I have provided in the test but it does not see it as the same. I would like to figure out what the issue is here and fix this problem.

I would also like to give the numbers in my transactions more of a currency style. So giving them two decimal places and also a £ symbol next to them.

I would like to add in a feature test for the app to show how the app works and ensure that the methods work when used in series and not just on their own.

Finally I would like to have the chance to further refactor my code. To extract from some of the cumbersome methods and maybe create a transaction history object which would store transactions and also produce the statements for the bank class.

## Running the app locally

* Clone the repository.
* Operate the program using the Console in Chrome:

```
> bank = new Bank(account = new Account(1000))
{getAccountBalance: ƒ, getTransactionHistory: ƒ, creditAccountBalance: ƒ, debitAccountBalance: ƒ, printStatement: ƒ}
> bank.creditAccountBalance(200)
undefined
> bank.getAccountBalance()
1200
> bank.debitAccountBalance(300)
undefined
> bank.printStatement()
"date || credit || debit || balance
27/11/2017 || 200 ||   || 1200
27/11/2017 ||   || 300 || 900
"
```
* Run `open SpecRunner.html` to run tests.


## Specification

**Requirements**

* You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

**User Stories**

```
As an account holder
So that I can use my account
I would like to deposit money into my account

As an account holder
So that I can access my money
I would like to withdraw money from my account

As an account holder
So that I know how much money I have
I would like to see my current balance

As an account holder
So that I can keep on top of my finances
I would like to be able to see a bank statement of my transactions
```
