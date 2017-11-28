'use strict';

describe ('Bank', function() {
  var bank;
  var account;

  beforeEach(function() {
    bank = new Bank(account = new Account(1000))
  });

  it('creates a bank to manage the account', function() {
    expect(bank.getAccountBalance()).toEqual(1000);
  });

  it('has space to store the transaction history inside itself', function() {
    expect(bank.getTransactionHistory()).toEqual([]);
  });

  describe('Account Management', function() {
    it('can credit the balance of the account', function() {
      bank.creditAccountBalance(100);
      expect(bank.getAccountBalance()).toEqual(1100);
    });

    it('stores credit transactions in the transaction history', function() {
      bank.creditAccountBalance(100);
      expect(bank.getTransactionHistory()).toEqual([{date: "28/11/2017", credit: 100, debit: " ", balance: 1100}]);
    });

    it('can debit the balance of the account', function() {
      bank.debitAccountBalance(100);
      expect(bank.getAccountBalance()).toEqual(900);
    });

    it('stores debit transactions in the transaction history', function() {
      bank.debitAccountBalance(100);
      expect(bank.getTransactionHistory()).toEqual([{date: "28/11/2017", credit: " ", debit: 100, balance: 900}]);
    });
  });
  describe('Transactions', function() {
    it('can print out a bank statement showing all transactions', function() {
      bank.creditAccountBalance(100);
      bank.debitAccountBalance(100);
      expect(bank.printStatement()).toEqual("date || credit || debit || balance \n28/11/2017 || 100 ||   || 1100\n28/11/2017 ||   || 100 || 1000");
    })
  });
});
