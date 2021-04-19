exports.up = function (knex) {
  return knex.schema.raw(`
  create table if not exists municipios
  (
    id        integer not null constraint municipios_pkey primary key,
    geom      geometry(MultiPolygon,4326),
    estado    integer constraint municipios_estados_id_fk references estados on delete cascade,
    municipio integer not null,
    nombre    varchar(50)
  );
  `)
}

exports.down = function (knex) {
  return knex.schema.raw('drop table municipios cascade')
}
