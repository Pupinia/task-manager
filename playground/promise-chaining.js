require("../src/db/mongoose");

const User = require("../src/models/user");

// User.findByIdAndUpdate("5d8b4a8905ad085365f470db", {
//   age: 1
// })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => console.log(e));

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });

  return count;
};

updateAgeAndCount("5d8b4a8905ad085365f470db", 2)
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
