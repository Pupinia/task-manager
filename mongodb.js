//CRUD (create read update delete)

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    // db.collection("users").findOne(
    //   { _id: ObjectID("5d8a095e525ce554f0e2560d") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("unable to fetch");
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ age: 27 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ age: 27 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    db.collection("tasks").findOne(
      { _id: ObjectID("5d8a05a7cded4d4efe41ae47") },
      (error, task) => {
        console.log(task);
      }
    );
    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });
  }
);
