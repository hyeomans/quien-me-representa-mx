exports.up = async function (knex) {
  await knex.schema.raw(`
    drop index if exists secciones_gid_uindex; -- gid era una columna que estaba en el shape inicial pero ya no esta.
    alter table secciones drop column if exists gid; -- gid era una columna que estaba en el shape inicial pero ya no esta.
    alter table secciones drop constraint if exists secciones_pkey; -- los id's son secuenciales y no sirven para identificar 'uniqueness'
    alter table secciones drop column if exists id; -- los id's son secuenciales y no sirven para identificar 'uniqueness'
    alter table secciones add constraint secciones_pk primary key (numero_entidad, seccion); -- Entidad + Seccion nos da un row único.
    alter table secciones add if not exists created_at timestamptz default CURRENT_TIMESTAMP not null;
  `)
}

exports.down = function () {
  //No hay vuelta atrás
  // eslint-disable-next-line no-undef
  return Promise.resolve()
}
