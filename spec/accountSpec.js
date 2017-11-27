'use strict';

describe ('Account', function() {
  var account;

  it('creates an account with the given balance', function() {
    account = new Account(1000);
    expect(account.getBalance()).toEqual(1000);
  });
});
