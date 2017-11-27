'use strict';

describe ('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account(1000);
  });

  it('creates an account with the given balance', function() {
    expect(account.getBalance()).toEqual(1000);
  });

  it ('can store the transaction history inside itself', function() {
    expect(account.getTransactionHistory()).toEqual([]);
  });

  it ('can credit the account with a given amount', function() {
    account.creditAccount(100);
    expect(account.getBalance()).toEqual(1100);
  });
});
