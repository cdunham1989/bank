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

    getDate = function() {
      var dateObj = new Date();
      var day = dateObj.getUTCDate();
      var month = dateObj.getUTCMonth() + 1;
      var year = dateObj.getUTCFullYear();
      newdate = day + "/" + month + "/" + year;
      return newdate;
    };

    creditAccountBalance = function(amount) {
      account.creditAccount(amount);
      _transactionHistory.push({date: self.getDate(), credit: amount, debit: null, balance: self.getAccountBalance()});
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
