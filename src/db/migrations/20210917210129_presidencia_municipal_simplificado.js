exports.up = async function (knex) {
  await knex.schema.raw(`
  create table presidencia_municipal_simplificado
  (
    id                serial not null constraint presidencia_municipal_simplificado_pk primary key,
    nombre            text not null,
    nombre_formatted  text not null,
    puesto            text not null,
    img_url           text,
    periodo           daterange not null,
    link              text,
    municipio_id      integer not null,
    estado_id         integer not null,
    created_at        timestamp with time zone default CURRENT_TIMESTAMP not null,
    updated_at        timestamp with time zone default CURRENT_TIMESTAMP not null,
    CONSTRAINT fk_ps_municipio_id FOREIGN KEY(municipio_id,estado_id) REFERENCES municipios(numero_municipio,numero_entidad)
  );

  create unique index 
    presidencia_municipal_simplificado_nombre_formatted_puesto_uindex 
  on presidencia_municipal_simplificado 
    (nombre_formatted, puesto);

  create or replace function presidencia_municipal_simplificado_insert() returns trigger as'
    begin
        new.nombre_formatted := lower(unaccent(new.nombre));
        return new;
    end;
  ' language plpgsql;

  create trigger presidencia_municipal_simplificado_insert
    before insert or update
    on presidencia_municipal_simplificado
    for each row
    execute procedure presidencia_municipal_simplificado_insert();

  `)
}

exports.down = async function (knex) {
  await knex.schema.raw(`
    drop index    if exists presidencia_municipal_simplificado_nombre_formatted_puesto_uindex;
    drop trigger  if exists presidencia_municipal_simplificado_insert on presidencia_municipal_simplificado;
    drop function if exists presidencia_municipal_simplificado_insert();
  `)
  await knex.schema.dropTable('presidencia_municipal_simplificado')
}
