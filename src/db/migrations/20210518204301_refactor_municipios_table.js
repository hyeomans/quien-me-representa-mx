exports.up = async function (knex) {
  await knex.schema.raw(`
    alter table municipios drop constraint if exists municipios_pkey;
    drop index if exists municipios_pkey;
    drop index if exists municipios_gid_uindex;
    alter table municipios drop column if exists gid;
    alter table municipios drop column if exists id;
    
    alter table municipios drop constraint if exists municipios_numero_entidad_numero_municipio_pk;
    alter table municipios add constraint municipios_numero_entidad_numero_municipio_pk primary key (numero_entidad, numero_municipio);
    
    alter table municipios add if not exists created_at timestamptz default CURRENT_TIMESTAMP not null;
    alter table municipios add if not exists updated_at timestamptz default CURRENT_TIMESTAMP not null;
  `)
}

exports.down = function () {
  //No hay vuelta atrás
  // eslint-disable-next-line no-undef
  return Promise.resolve()
}
