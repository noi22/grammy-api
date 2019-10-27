
exports.up = function(knex) {
    return knex.schema.createTable("grammy_info", (t) => {
        t.increments().index();
        t.string("category").notNullable() 
        t.integer("annualGrammy").notNullable();
        t.string("awardType").notNullable();
        t.string("name").notNullable();
        t.string("awardFor").notNullable();
      });  
};

exports.down = function(knex) {
    return knex.schema.dropTable("grammy_info"); 
};
