'use strict';

describe('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account(1000);
  });

  it('creates an account with the given balance', function() {
    expect(account.getBalance()).toEqual(1000);
  });

  describe('Crediting the account', function() {
    it('can credit the account with a given amount', function() {
      account.creditAccount(100);
      expect(account.getBalance()).toEqual(1100);
    });

    it('can not credit the account with a string value', function() {
      expect(function() { account.creditAccount('Orange'); }).toThrowError('Amount credited must be an integer');
      expect(account.getBalance()).toEqual(1000);
    });

    it('can not credit the account with a negative integer', function() {
      expect(function() { account.creditAccount(-300); }).toThrowError('Amount credited cannot be a negative integer');
      expect(account.getBalance()).toEqual(1000);
    });
  });

  describe('Debiting the account', function() {
    it('can debit the account with a given amount', function() {
      account.debitAccount(100);
      expect(account.getBalance()).toEqual(900);
    });

    it('can not have a balance below £0', function() {
      expect(function(){ account.debitAccount(1001); }).toThrowError('You have insufficient funds');
      expect(account.getBalance()).toEqual(1000);
    });
  });
});
