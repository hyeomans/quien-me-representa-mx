exports.up = async function (knex) {
  await knex.schema.raw(`
    alter table gobernacion add link text;
  `)
}

exports.down = async function (knex) {
  await knex.schema.raw(`
  alter table gobernacion drop column link;
  `)
}
