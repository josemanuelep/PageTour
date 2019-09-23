const mongoose = require('mongoose');
const URI = 'mongodb://pagetour-shard-00-00-ucdqg.mongodb.net';

mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;
