(function(exports) {
  exports.Account = function(balance) {
    var _balance = balance;

    getBalance = function() {
      return _balance;
    };

    creditAccount = function(amount) {
      _balance += amount;
    };

    debitAccount = function(amount) {
      if (_balance - amount < 0) {
        throw new Error('You have insufficient funds');
      } else {
        _balance -= amount;
      }
    };

    return {
      getBalance: getBalance,
      creditAccount: creditAccount,
      debitAccount: debitAccount
    };
  };
})(this);
