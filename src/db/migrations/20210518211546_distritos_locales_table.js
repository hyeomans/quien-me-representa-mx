exports.up = async function (knex) {
  await knex.schema.raw(`
  create table distritos_locales
  (
    numero_entidad int not null,
    distrito_local int not null,
    geom geometry(MultiPolygon,4326),
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    constraint distritos_locales_pk primary key (numero_entidad, distrito_local)
  );
  
  create index if not exists sidx_distritos_locales_geom on distritos_locales using gist (geom);
  `)
}

exports.down = async function (knex) {
  await knex.schema.raw(`drop index if exists sidx_distritos_locales_geom`)
  await knex.schema.dropTable('distritos_locales')
}
