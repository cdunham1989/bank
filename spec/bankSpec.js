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

  it ('can store the transaction history inside itself', function() {
    expect(bank.getTransactionHistory()).toEqual([]);
  });
});
