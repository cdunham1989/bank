(function(exports) {
  exports.Account = function(balance) {
    var _balance = balance;
    var _transactionHistory = [];

    getBalance = function() {
      return _balance;
    };

    creditAccount = function(amount) {
      _balance += amount;
    };

    return {
      getBalance: getBalance,
      creditAccount: creditAccount
    };
  };
})(this);
