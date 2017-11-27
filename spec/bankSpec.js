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

    it('can debit the balance of the account', function() {
      bank.debitAccountBalance(100);
      expect(bank.getAccountBalance()).toEqual(900);
    });
  });
});
