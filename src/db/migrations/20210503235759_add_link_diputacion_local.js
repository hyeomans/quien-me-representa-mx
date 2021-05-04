exports.up = async function (knex) {
  await knex.schema.raw(`
    alter table diputacion_local add link text;
  `)
}

exports.down = async function (knex) {
  await knex.schema.raw(`
  alter table diputacion_local drop column link;
  `)
}
