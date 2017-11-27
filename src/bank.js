(function(exports) {
  exports.Bank = function(account = new Account(amount)) {
    var _account = account;
    var _transactionHistory = [];

    getAccountBalance = function() {
      return account.getBalance();
    };

    getTransactionHistory = function() {
      return _transactionHistory;
    };

    return {
      getAccountBalance: getAccountBalance,
      getTransactionHistory: getTransactionHistory
    };
  };
})(this);
