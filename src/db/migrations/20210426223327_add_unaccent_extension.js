exports.up = async function (knex) {
  await knex.schema.raw(`
    CREATE EXTENSION unaccent;
  `)
}

exports.down = async function (knex) {
  await knex.schema.raw(`
    DROP EXTENSION unaccent;
  `)
}
