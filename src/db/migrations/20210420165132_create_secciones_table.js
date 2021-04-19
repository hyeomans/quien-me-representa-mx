exports.up = async function (knex) {
  await knex.schema.raw(`
    create table if not exists secciones
    (
      id               double precision not null constraint secciones_pkey primary key,
      geom             geometry(MultiPolygon,4326),
      estado           integer constraint secciones_estados_id_fk references estados on delete cascade,
      distrito_federal integer,
      distrito_local   integer,
      municipio        integer,
      seccion          integer,
      tipo             integer
    );
  `)
}

exports.down = function (knex) {
  return knex.schema.raw('drop table secciones cascade')
}
