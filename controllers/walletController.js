// Import the Wallet model
const Wallet = require("../models").Wallet;

module.exports = {
  // Register a wallet in the database
  saveWallet(wallet, result) {
      //Validation to be added
    if(Object.keys(wallet).length === 0){
        result({error: "no empty fields allowed"},null)
    }
    Wallet.create({
        name: wallet.name,
        income: wallet.income,
        expense: wallet.expense,
        user_id: wallet.user_id,
        business_id: wallet.business_id
      })
        .then(() => {
          result(null, { message: "Wallet Registered" });
        })
        .catch((error) => {
          result(error, null);
        });
    },
  //Create functionality to update wallet details
  updateWallet(wallet, result) {
    Wallet.findOne({
      where: { id: wallet.id },
    })
      .then((data) => {
        if (data !== null) {
          Wallet.update(
            {
              name: wallet.name,
              expense: wallet.expense,
              income: wallet.income,
              business_id: wallet.business
            },
            { where: { id: wallet.id } }
          ).then(() => {
            result(null, { message: "Wallet updated!" });
          });
        } else {
          result({ error: "No Wallet found by the given id" });
        }
      })
      .catch((error) => {
        result({ error: "Something went wrong" }, null);
      });
  },
  //Create a functinality to get wallet details of a specific user
  getUserTransactions(userId, result) {
    Wallet.findAll({
      where: {user_id: userId}
    })
      .then((wallets) => {
        let filterRecords = wallets.map(wallet=>{
          return {walletName: wallet.name, walletExpense: wallet.expense,
            walletIncome: wallet.income, walletBalance: wallet.income - wallet.expense}
        })
        result(null, filterRecords);
      })
      .catch((error) => result(error, null));
  },
  getWalletBalances(userId, result) {
   
    Wallet.findAll({
      where: {user_id: userId}
    })
      .then((wallets) => {
        let filterRecords = wallets.map(wallet=>{
          return {walletName: wallet.name, walletExpense: wallet.expense,
            walletIncome: wallet.income, walletBalance: wallet.income - wallet.expense}
        })

        let walletsExpense = filterRecords.reduce((a,b)=>
          +a + +b.walletExpense, 0
        )
        let walletsIncome = filterRecords.reduce((a,b)=>
          +a + +b.walletIncome, 0
        )
        let walletsBalance = filterRecords.reduce((a,b)=>
          +a + +b.walletBalance, 0
        ) 
        let data = {TotalExpenses : walletsExpense, TotalIncome: walletsIncome, TotalBalance: walletsBalance}

        result(null, data);
      })
      .catch((error) =>{ 
      result(error, null)});
  },
};