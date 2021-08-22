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
};