exports.up = async function (knex) {
  await knex.schema.raw(`
    drop table if exists secciones;
    drop table if exists municipios;
    drop table if exists estados;

    create table estados
    (
      id integer not null constraint estados_pkey primary key,
      geom geometry(MultiPolygon,4326),
      numero_entidad integer not null,
      nombre varchar(20) not null,
      circunscripcion integer not null
    );

    create index sidx_estados_geom on estados using gist (geom);

    create unique index estados_numero_entidad_uindex on estados (numero_entidad);
  `)
}

exports.down = async function () {}
