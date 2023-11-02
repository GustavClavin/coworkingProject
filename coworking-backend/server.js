const dotenv = require('dotenv')
dotenv.config()
const app = require('./app')
const mongoose = require('mongoose');

const PORT = process.env.PORT || 9999
const mongoURI = process.env.MONGO_URI

app.listen(PORT, () => console.log('Server running on port ' + PORT));




mongoose.connect(mongoURI)
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error('Error connecting to DB:', err.message))