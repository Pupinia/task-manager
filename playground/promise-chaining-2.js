require("../src/db/mongoose");

const Task = require("../src/models/task");

const deleteTaskAndCount = async (id, completed) => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed });

  return count;
};

deleteTaskAndCount("5d8b4aa605ad085365f470dd", false)
  .then(count => console.log(count))
  .catch(e => console.log(e));
