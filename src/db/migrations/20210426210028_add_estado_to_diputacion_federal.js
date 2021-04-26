exports.up = async function (knex) {
  await knex.schema.raw(`
    alter table diputacion_federal add numero_entidad int;
  `)
}

exports.down = async function (knex) {
  await knex.schema.raw(`
    alter table diputacion_federal drop column numero_entidad;
  `)
}
