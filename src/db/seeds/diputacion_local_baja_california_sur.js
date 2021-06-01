exports.seed = async function (knex) {
  await knex.schema.raw(`
  insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Héctor Manuel Ortega Pillado', 'Diputación Local Baja California Sur por Distrito 1', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1622513162/diputacion_local/baja_california_sur/legislatura_xv/h%C3%A9ctor_manuel_ortega_pillado.jpg', '2021-05-31 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 1, 3, 'https://www.cbcs.gob.mx/index.php/diputados-morena/xv-legislatura/dip-hector-manuel-ortega-pillado' from actores_politicos where nombre_formatted = lower(unaccent('Héctor Manuel Ortega Pillado')) and puesto = 'Diputación Local Baja California Sur por Distrito 1' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Ramiro Ruiz Flores', 'Diputación Local Baja California Sur por Distrito 2', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1622513163/diputacion_local/baja_california_sur/legislatura_xv/ramiro_ruiz_flores.jpg', '2021-05-31 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 2, 3, 'https://www.cbcs.gob.mx/index.php/diputados-sin-partido/xv-legislatura-sin-partido/dip-ramiro-ruiz-flores' from actores_politicos where nombre_formatted = lower(unaccent('Ramiro Ruiz Flores')) and puesto = 'Diputación Local Baja California Sur por Distrito 2' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Esteban Ojeda Ramírez', 'Diputación Local Baja California Sur por Distrito 3', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1622513164/diputacion_local/baja_california_sur/legislatura_xv/esteban_ojeda_ram%C3%ADrez.jpg', '2021-05-31 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 3, 3, 'https://www.cbcs.gob.mx/index.php/diputados-morena/xv-legislatura/dip-esteban-ojeda-ramirez' from actores_politicos where nombre_formatted = lower(unaccent('Esteban Ojeda Ramírez')) and puesto = 'Diputación Local Baja California Sur por Distrito 3' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Milena Paola Quiroga Romero', 'Diputación Local Baja California Sur por Distrito 4', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1622513165/diputacion_local/baja_california_sur/legislatura_xv/milena_paola_quiroga_romero.jpg', '2021-05-31 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 4, 3, 'https://www.cbcs.gob.mx/index.php/diputados-morena/xv-legislatura/dip-milena-paola-quiroga-romero' from actores_politicos where nombre_formatted = lower(unaccent('Milena Paola Quiroga Romero')) and puesto = 'Diputación Local Baja California Sur por Distrito 4' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Perla Guadalupe Flores Leyva', 'Diputación Local Baja California Sur por Distrito 5', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1622513166/diputacion_local/baja_california_sur/legislatura_xv/perla_guadalupe_flores_leyva.jpg', '2021-05-31 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 5, 3, 'https://www.cbcs.gob.mx/index.php/diputados-pes/xv-legislatura/dip-perla-guadalupe-flores-leyva' from actores_politicos where nombre_formatted = lower(unaccent('Perla Guadalupe Flores Leyva')) and puesto = 'Diputación Local Baja California Sur por Distrito 5' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Carlos José Van Wormer Ruiz', 'Diputación Local Baja California Sur por Distrito 6', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1622513168/diputacion_local/baja_california_sur/legislatura_xv/carlos_jos%C3%A9_van_wormer_ruiz.jpg', '2021-05-31 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 6, 3, 'https://www.cbcs.gob.mx/index.php/diputados-morena/xv-legislatura/dip-carlos-jose-van-wormer-ruiz' from actores_politicos where nombre_formatted = lower(unaccent('Carlos José Van Wormer Ruiz')) and puesto = 'Diputación Local Baja California Sur por Distrito 6' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('María Petra Juárez Maceda', 'Diputación Local Baja California Sur por Distrito 7', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1622513169/diputacion_local/baja_california_sur/legislatura_xv/mar%C3%ADa_petra_ju%C3%A1rez_maceda.jpg', '2021-05-31 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 7, 3, 'https://www.cbcs.gob.mx/index.php/diputados-morena/xv-legislatura/dip-maria-petra-juarez-maceda' from actores_politicos where nombre_formatted = lower(unaccent('María Petra Juárez Maceda')) and puesto = 'Diputación Local Baja California Sur por Distrito 7' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Homero González Medrano', 'Diputación Local Baja California Sur por Distrito 8', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1622513170/diputacion_local/baja_california_sur/legislatura_xv/homero_gonz%C3%A1lez_medrano.jpg', '2021-05-31 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 8, 3, 'https://www.cbcs.gob.mx/index.php/diputados-sin-partido/xv-legislatura-sin-partido/dip-homero-gonzalez-medrano' from actores_politicos where nombre_formatted = lower(unaccent('Homero González Medrano')) and puesto = 'Diputación Local Baja California Sur por Distrito 8' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('María Rosalba Rodríguez López', 'Diputación Local Baja California Sur por Distrito 9', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1622513172/diputacion_local/baja_california_sur/legislatura_xv/mar%C3%ADa_rosalba_rodr%C3%ADguez_l%C3%B3pez.jpg', '2021-05-31 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 9, 3, 'https://www.cbcs.gob.mx/index.php/diputados-morena/xv-legislatura/dip-maria-rosalba-rodriguez-lopez' from actores_politicos where nombre_formatted = lower(unaccent('María Rosalba Rodríguez López')) and puesto = 'Diputación Local Baja California Sur por Distrito 9' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Soledad Saldaña Bañalez', 'Diputación Local Baja California Sur por Distrito 10', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1622513172/diputacion_local/baja_california_sur/legislatura_xv/soledad_salda%C3%B1a_ba%C3%B1alez.jpg', '2021-05-31 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 10, 3, 'https://www.cbcs.gob.mx/index.php/diputados-sin-partido/xv-legislatura-sin-partido/dip-soledad-saldana-banalez' from actores_politicos where nombre_formatted = lower(unaccent('Soledad Saldaña Bañalez')) and puesto = 'Diputación Local Baja California Sur por Distrito 10' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Humberto Arce Cordero', 'Diputación Local Baja California Sur por Distrito 11', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1622513173/diputacion_local/baja_california_sur/legislatura_xv/humberto_arce_cordero.jpg', '2021-05-31 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 11, 3, 'https://www.cbcs.gob.mx/index.php/diputados-morena/xv-legislatura/dip-humberto-arce-cordero' from actores_politicos where nombre_formatted = lower(unaccent('Humberto Arce Cordero')) and puesto = 'Diputación Local Baja California Sur por Distrito 11' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Sandra Guadalupe Moreno Vázquez', 'Diputación Local Baja California Sur por Distrito 12', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1622513174/diputacion_local/baja_california_sur/legislatura_xv/sandra_guadalupe_moreno_v%C3%A1zquez.jpg', '2021-05-31 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 12, 3, 'https://www.cbcs.gob.mx/index.php/diputados-sin-partido/xv-legislatura-sin-partido/dip-sandra-guadalupe-moreno-vazquez' from actores_politicos where nombre_formatted = lower(unaccent('Sandra Guadalupe Moreno Vázquez')) and puesto = 'Diputación Local Baja California Sur por Distrito 12' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('José Luis Perpuli Drew', 'Diputación Local Baja California Sur por Distrito 13', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1622513175/diputacion_local/baja_california_sur/legislatura_xv/jos%C3%A9_luis_perpuli_drew.jpg', '2021-05-31 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 13, 3, 'https://www.cbcs.gob.mx/index.php/diputados/xv-legislatura/dip-jose-luis-perpuli-drew' from actores_politicos where nombre_formatted = lower(unaccent('José Luis Perpuli Drew')) and puesto = 'Diputación Local Baja California Sur por Distrito 13' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Marcelo Armenta', 'Diputación Local Baja California Sur por Distrito 14', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1622513176/diputacion_local/baja_california_sur/legislatura_xv/marcelo_armenta.jpg', '2021-05-31 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 14, 3, 'https://www.cbcs.gob.mx/index.php/diputados-morena/xv-legislatura/dip-marcelo-armenta' from actores_politicos where nombre_formatted = lower(unaccent('Marcelo Armenta')) and puesto = 'Diputación Local Baja California Sur por Distrito 14' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Rigoberto Murillo Aguilar', 'Diputación Local Baja California Sur por Distrito 15', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1622513177/diputacion_local/baja_california_sur/legislatura_xv/rigoberto_murillo_aguilar.jpg', '2021-05-31 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 15, 3, 'https://www.cbcs.gob.mx/index.php/diputados-pes/xv-legislatura/dip-rigoberto-murillo-aguilar' from actores_politicos where nombre_formatted = lower(unaccent('Rigoberto Murillo Aguilar')) and puesto = 'Diputación Local Baja California Sur por Distrito 15' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Lorenia Lineth Montaño Ruiz', 'Diputación Local Baja California Sur por Distrito 16', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1622513178/diputacion_local/baja_california_sur/legislatura_xv/lorenia_lineth_monta%C3%B1o_ruiz.jpg', '2021-05-31 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 16, 3, 'https://www.cbcs.gob.mx/index.php/diputados-pes/xv-legislatura/dip-lorenia-lineth-montano-ruiz' from actores_politicos where nombre_formatted = lower(unaccent('Lorenia Lineth Montaño Ruiz')) and puesto = 'Diputación Local Baja California Sur por Distrito 16' ON CONFLICT  DO NOTHING;
  `)
}
