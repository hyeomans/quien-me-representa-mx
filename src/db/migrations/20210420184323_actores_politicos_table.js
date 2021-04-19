exports.up = function (knex) {
  return knex.schema.raw(`
  create table actores_politicos
  (
    id uuid default gen_random_uuid() not null constraint actores_politicos_pkey primary key,
    nombre varchar not null,
    nombre_formatted varchar not null,
    puesto varchar not null,
    img_url varchar,
    created_at timestamp with time zone default CURRENT_TIMESTAMP not null
  );
  
  comment on column actores_politicos.puesto is 
    'El puesto público al momento 
    de ser dado de alta en la base 
    de datos. 
    Sirve para diferenciar a 
    personas con el mismo nombre 
    pero no es un histórico.';
  
  create or replace function actores_politicos_insert() returns trigger as'
    begin
        new.nombre_formatted := lower(unaccent(new.nombre));
        return new;
    end;
  ' language plpgsql;

  create trigger actores_politicos_insert
    before insert or update
    on actores_politicos
    for each row
    execute procedure actores_politicos_insert();
  
  
  `)
}

exports.down = function (knex) {
  return knex.schema.raw(`
    drop trigger if exists actores_politicos_insert on actores_politicos;
    drop function if exists actores_politicos_insert();
    drop table actores_politicos;
  `)
}
