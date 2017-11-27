(function(exports) {
  exports.Account = function(balance) {
    var _balance = balance;
    var _transactionHistory = [];

    getBalance = function() {
      return _balance;
    };

    getTransactionHistory = function() {
      return _transactionHistory;
    };

    creditAccount = function(amount) {
      _balance += amount;
    };

    return {
      getBalance: getBalance,
      getTransactionHistory: getTransactionHistory,
      creditAccount: creditAccount
    };
  };
})(this);
