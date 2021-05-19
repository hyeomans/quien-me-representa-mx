exports.up = async function (knex) {
  await knex.schema.raw(`
    alter table secciones add if not exists updated_at timestamptz default CURRENT_TIMESTAMP not null;
    alter table estados add if not exists updated_at timestamptz default CURRENT_TIMESTAMP not null;
  `)
}

exports.down = function () {
  //No hay vuelta atrás
  // eslint-disable-next-line no-undef
  return Promise.resolve()
}
