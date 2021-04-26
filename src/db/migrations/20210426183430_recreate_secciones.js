exports.up = async function (knex) {
  await knex.schema.raw(`
  create table secciones
  (
    id integer not null constraint secciones_pkey primary key,
    geom geometry(MultiPolygon,4326),
    gid integer not null,
    numero_entidad integer not null,
    distrito_federal integer not null,
    distrito_local integer not null,
    numero_municipio integer not null,
    seccion integer not null,
    tipo integer not null
  );
  
  create index sidx_secciones_geom on secciones using gist (geom);
  create unique index secciones_gid_uindex on secciones (gid);
  `)
}

exports.down = function (knex) {
  return knex.schema.dropTable('secciones')
}
