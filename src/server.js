const express = require("express");
const config = require("../config");
const knex = require("knex")(config.db);


const setupServer = () => {
  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

  app.get("/api/grammy/", (req, res) => {
    knex("grammy_info")
      .select()
      .then(result => {
        res.send(result);
      });
  });


  app.get("/api/grammy/:name", (req, res) => {
    let { name } = req.params;
    knex("grammy_info")
    .where({"name": name})
    .select()
    .then(result => {
      res.send(result);
    });    
  });


  app.post("/api/grammy/", (req, res) => {
    const newEntry = req.body;

    knex("grammy_info")
      .insert(newEntry, ["category", "annualGrammy", "awardType", "name", "awardFor"])
      .then(result => {
        res.send(result);
      });
  });

  app.delete("/api/grammy/:name", (req, res) => {
    const { name } = req.params;

    knex("grammy_info")
      .where({ "name": name })
      .del()
      .then(() => res.send(name));
  });

  app.patch("/api/grammy/:name", (req, res) => {
    const { name } = req.params;
    const newEntry = req.body;

    knex("grammy_info")
      .where({ "name": name })
      .update(newEntry)
      .then(() => res.send(newEntry));
  });

  return app;
};

module.exports = { setupServer };