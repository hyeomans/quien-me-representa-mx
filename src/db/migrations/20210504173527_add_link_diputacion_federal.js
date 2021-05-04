exports.up = async function (knex) {
  await knex.schema.raw(`
    alter table diputacion_federal add link text;
  `)
}

exports.down = async function (knex) {
  await knex.schema.raw(`
  alter table diputacion_federal drop column link;
  `)
}
