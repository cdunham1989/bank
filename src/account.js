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

    return {
      getBalance: getBalance,
      getTransactionHistory: getTransactionHistory
    };
  };
})(this);
