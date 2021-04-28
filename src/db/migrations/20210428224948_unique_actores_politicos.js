exports.up = async function (knex) {
  await knex.schema.raw(`
    create unique index actores_politicos_nombre_formatted_puesto_uindex on actores_politicos (nombre_formatted, puesto);
  `)
}

exports.down = async function (knex) {
  await knex.schema.raw(`
    drop index actores_politicos_nombre_formatted_puesto_uindex;
  `)
}
