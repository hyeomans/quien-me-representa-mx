exports.up = async function (knex) {
  await knex.schema.raw(`
    create table if not exists estados
    (
        id              integer     not null constraint estados_pk primary key,
        nombre          varchar(20) not null,
        circunscripcion integer     not null,
        geom            geometry(MultiPolygon, 4326)
    );

    create unique index if not exists estados_id_uindex on estados (id);
  `)
}

exports.down = function (knex) {
  return knex.schema.raw('drop table estados cascade')
}
