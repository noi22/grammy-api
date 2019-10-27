
const grammy_data = require("./data/grammy_data.js");
exports.seed = function(knex, Promise) {
  return knex("grammy_info")
    .del()
    .then(() => {
      return knex("grammy_info").insert(grammy_data);
    });
};