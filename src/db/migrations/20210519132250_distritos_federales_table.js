exports.up = async function (knex) {
  await knex.schema.raw(`
  create table distritos_federales
  (
    numero_entidad int not null,
    distrito_federal int not null,
    tipo int not null,
    geom geometry(MultiPolygon,4326),
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    constraint distritos_federales_pk primary key (numero_entidad, distrito_federal)
  );
  
  create index if not exists sidx_distritos_federales_geom on distritos_federales using gist (geom);
  `)
}

exports.down = async function (knex) {
  await knex.schema.raw(`drop index if exists sidx_distritos_federales_geom`)
  await knex.schema.dropTable('distritos_federales')
}
