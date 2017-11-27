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

    creditAccountBalance = function(amount) {
      account.creditAccount(amount);
      
    };

    debitAccountBalance = function(amount) {
      account.debitAccount(amount);
    };

    return {
      getAccountBalance: getAccountBalance,
      getTransactionHistory: getTransactionHistory,
      creditAccountBalance: creditAccountBalance,
      debitAccountBalance: debitAccountBalance
    };
  };
})(this);
