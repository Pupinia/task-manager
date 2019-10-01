const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  // const task = await Task.findById("5d9310b51e835b5e0524d907");
  // await task.populate("owner").execPopulate();
  // console.log(task.owner);

  const user = await User.findById("5d930fd89d0c5959bc19a8fc");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};
main();
