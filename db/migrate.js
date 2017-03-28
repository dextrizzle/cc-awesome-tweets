const db = require('./conn');

db.query(`
  CREATE TABLE posts (
    id SERIAL,
    username VARCHAR(255),
    content TEXT,
    time timestamp DEFAULT current_timestamp
  )
`).then(function () {
  console.log('🛠 Created table posts!');
  process.exit();
}).catch(function (error) {
  console.error(error);
  process.exit();
})
