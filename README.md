# Bank Tech Test

This is my first practice tech test. Undertaken with a single day to complete as much as possible. It is designed to test and practice my ability code using OO design and TDD skills. I completed it alone and conducted a code review on it at the end of the day, reflecting on my process to improve my work

## Thought process

I decided to write this app using JavaScript. I decided this as I felt my knowledge in JavaScript fit this challenge well and I had done similar things before using Ruby and wanted to see how I would get on with writing a simple app using JavaScript.

When initially creating the app I planned to store an array of transactions inside the account object. But when it came to creating this object it felt that this should be handled by more of a controller class such as a Bank. At this point I decided to break a new object out of the account 'class' within which I could keep a log of the transactions related to the account.

## Running the app locally

* Clone the repository
* Operate the program using the Console in Chrome:

*


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
