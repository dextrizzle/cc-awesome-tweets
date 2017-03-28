const db = require('./conn');
const faker = require('faker');

for (let i = 0; i < 20; i += 1) {
  db.query(`
    INSERT INTO posts (username, content, time) VALUES ($<username>, $<content>, $<time>)
  `, {
    username: faker.internet.userName(),
    content: faker.hacker.phrase(),
    time: faker.date.recent()
  }).then(function () {
    console.log(`🔨 Create post`);

    // only exit node on the last insert
    if (i === 19) process.exit();
  })
}
