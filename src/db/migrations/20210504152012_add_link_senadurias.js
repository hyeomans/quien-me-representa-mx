exports.up = async function (knex) {
  await knex.schema.raw(`
    alter table senadurias add link text;
  `)
}

exports.down = async function (knex) {
  await knex.schema.raw(`
  alter table senadurias drop column link;
  `)
}
