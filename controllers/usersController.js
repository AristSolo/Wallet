// Import the User model
const User = require("../models").User;

module.exports = {
  // Register a user in the database
  saveUser(user, result) {
      //Validation to be added
    if(Object.keys(user).length === 0){
        result({error: "name and phone needed"},null)
    }
    User.findOne({
      where: {
        phone_no: user.phone_no,
      },
    })
      .then((data) => {
        if (data !== null) {
          result({ error: "User Exists" }, null);
        } else {
          User.create({
            first_name: user.first_name,
            last_name: user.last_name,
            phone_no: user.phone_no
          })
            .then(() => {
              result(null, { message: "User Registered" });
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