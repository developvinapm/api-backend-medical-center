const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        // Connect to the MongoDB cluster
         await mongoose.connect(
          process.env.URL_DB_CONNECTION,
          { useNewUrlParser: true, useUnifiedTopology: true },
          () => console.log("Connect to database")
        );
    
      } catch (e) {
        console.log(`Error to connect database:  ${e}`);
      }
}

module.exports = dbConnection