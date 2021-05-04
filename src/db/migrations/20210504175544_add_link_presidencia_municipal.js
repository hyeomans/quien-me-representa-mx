exports.up = async function (knex) {
  await knex.schema.raw(`
    alter table presidencia_municipal add link text;
  `)
}

exports.down = async function (knex) {
  await knex.schema.raw(`
  alter table presidencia_municipal drop column link;
  `)
}
