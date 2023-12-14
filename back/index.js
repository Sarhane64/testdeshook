const fs = require("fs");
const { faker } = require("@faker-js/faker");

function createUser() {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
  };
}

const USERS = faker.helpers.multiple(createUser, {
  count: 7,
});

console.log({ users: USERS });
fs.writeFileSync("./db.json", JSON.stringify({ users: USERS }));
