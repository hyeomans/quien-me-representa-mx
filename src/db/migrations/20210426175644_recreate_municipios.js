exports.up = async function (knex) {
  await knex.schema.raw(`
  create table municipios
  (
    id integer not null constraint municipios_pkey primary key,
    geom geometry(MultiPolygon,4326),
    gid integer not null,
    numero_entidad integer not null constraint municipios_estados_numero_entidad_fk references estados (numero_entidad) on delete cascade,
    numero_municipio integer not null,
    nombre varchar(50) not null
  );

  create index sidx_municipios_geom on municipios using gist (geom);
  create unique index municipios_gid_uindex on municipios (gid);  
  `)
}

exports.down = async function (knex) {
  await knex.schema.raw(`
    drop index municipios_gid_uindex;
    drop index sidx_municipios_geom;
    drop table municipios;
  `)
}
