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
      _transactionHistory.push({date: self.getDate(), credit: amount, debit: " ", balance: self.getAccountBalance()});
    };

    debitAccountBalance = function(amount) {
      account.debitAccount(amount);
      _transactionHistory.push({date: self.getDate(), credit: " ", debit: amount, balance: self.getAccountBalance()});
    };

    printStatement = function(amount) {
      var line1 = "date || credit || debit || balance \n";
      var otherlines = _transactionHistory.map(function(transaction) {
        return [transaction.date, transaction.credit, transaction.debit, transaction.balance].join(" || ");
      });
      return line1 + otherlines.join("\n");
    };

    getDate = function() {
      var dateObj = new Date();
      var day = dateObj.getUTCDate();
      var month = dateObj.getUTCMonth() + 1;
      var year = dateObj.getUTCFullYear();
      newdate = day + "/" + month + "/" + year;
      return newdate;
    };

    return {
      getAccountBalance: getAccountBalance,
      getTransactionHistory: getTransactionHistory,
      creditAccountBalance: creditAccountBalance,
      debitAccountBalance: debitAccountBalance,
      printStatement: printStatement
    };
  };
})(this);
