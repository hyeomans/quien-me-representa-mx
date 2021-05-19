exports.up = async function (knex) {
  await knex.schema.raw(`
    alter table estados drop constraint if exists estados_pkey;
    drop index if exists estados_pkey;
    alter table estados drop column if exists id;
    alter table estados drop constraint if exists estados_pk;
    alter table estados add constraint estados_pk primary key (numero_entidad);
    alter table estados add if not exists created_at timestamptz default CURRENT_TIMESTAMP not null;
  `)
}

exports.down = function () {
  //No hay vuelta atrás
  // eslint-disable-next-line no-undef
  return Promise.resolve()
}
