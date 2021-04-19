exports.up = function (knex) {
  return knex.schema.raw(`
  create table diputacion_federal
  (
    id serial not null
      constraint diputacion_federal_pk
        primary key,
    actor_politico_id uuid not null,
    periodo daterange not null,
    distrito_federal integer not null
  );
  
  create table diputacion_local
  (
    id serial not null
      constraint diputacion_local_pk
        primary key,
    actor_politico_id uuid not null,
    periodo daterange not null,
    distrito_local integer not null,
    estado integer not null
  );

  create table if not exists gobernacion
  (
    id serial not null,
    estado integer not null,
    actor_politico_id uuid not null,
    periodo daterange not null
  );

  create table presidencia_municipal
  (
    id serial not null
      constraint table_name_pk
        primary key,
    actor_politico_id uuid not null,
    periodo daterange not null,
    municipio_id integer not null,
    estado_id integer not null
  );

  create table if not exists senadurias
  (
    id serial not null
      constraint senadurias_pk
        primary key,
    actor_politico_id uuid not null,
    periodo daterange not null,
    estado integer not null
  );
  
  `)
}

exports.down = function (knex) {
  return knex.schema
    .dropTable('senadurias')
    .dropTable('presidencia_municipal')
    .dropTable('gobernacion')
    .dropTable('diputacion_local')
    .dropTable('diputacion_federal')
}
