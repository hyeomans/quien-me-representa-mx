exports.up = async function (knex) {
  await knex.schema.raw(`
  CREATE EXTENSION IF NOT EXISTS btree_gist;
  ALTER TABLE diputacion_federal ADD CONSTRAINT unique_diputado_federal_per_periodo_distrito_entidad EXCLUDE using gist(
    distrito_federal WITH =,
    numero_entidad WITH =,
    periodo WITH &&);
  `)
}

exports.down = async function (knex) {
  await knex.schema.raw(`
    ALTER TABLE diputacion_federal DROP CONSTRAINT IF EXISTS unique_diputado_federal_per_periodo_distrito_entidad;
  `)
}
