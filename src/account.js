(function(exports) {
  exports.Account = function(balance) {
    var _balance = balance;

    getBalance = function() {
      return _balance;
    };

    return {
      getBalance: getBalance
    };
  };
})(this);
