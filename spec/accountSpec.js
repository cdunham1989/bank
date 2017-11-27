'use strict';

describe ('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account(1000);
  });

  it('creates an account with the given balance', function() {
    expect(account.getBalance()).toEqual(1000);
  });

  it ('can credit the account with a given amount', function() {
    account.creditAccount(100);
    expect(account.getBalance()).toEqual(1100);
  });

  it ('can debit the account with a given amount', function() {
    account.debitAccount(100);
    expect(account.getBalance()).toEqual(900);
  });
});
