// Import the Business model
const Business = require("../models").Business;

module.exports = {
  // Register a business in the database
  saveBusiness(business, result) {
      //Validation to be added
    if(Object.keys(business).length === 0){
        result({error: "name and account needed"},null)
    }
    Business.findOne({
      where: {
        business_name: business.business_name,
      },
    })
      .then((data) => {
        if (data !== null) {
          result({ error: "Business Exists" }, null);
        } else {
          Business.create({
            business_name: business.business_name,
            business_account: business.business_account,
            location: business.location,
            user_id: business.user_id
          })
            .then(() => {
              result(null, { message: "Business Registered" });
            })
            .catch((error) => {
              result(error, null);
            });
        }
      })
      .catch((error) => {
        result(error, null);
      });
  },

};