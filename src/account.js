(function(exports) {
  exports.Account = function(balance) {
    var _balance = balance;

    getBalance = function() {
      return _balance;
    };

    creditAccount = function(amount) {
      if (typeof amount === "string") {
        throw new Error('Amount credited must be an integer');
      } else if (amount < 0){
      throw new Error('Amount credited cannot be a negative integer');
      } else {
        _balance += amount;
      }
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
