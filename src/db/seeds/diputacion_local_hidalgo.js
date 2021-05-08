exports.seed = async function (knex) {
  await knex('diputacion_local').del()
  await knex.schema.raw(`
  insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Víctor Osmind Guerrero Trejo', 'Diputación Local Hidalgo por Distrito 1', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620448254/diputacion_local/hidalgo/legislatura_lxiv/v%C3%ADctor_osmind_guerrero_trejo.png', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-11-05)'::daterange, 1, 13, 'http://www.congreso-hidalgo.gob.mx/LXIV%20LEGISLATURA/1.-%20Victor-Osmind-Guerrero-Trejo.php' from actores_politicos where nombre_formatted = lower(unaccent('Víctor Osmind Guerrero Trejo')) and puesto = 'Diputación Local Hidalgo por Distrito 1' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Rosalba Calva García', 'Diputación Local Hidalgo por Distrito 2', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620448255/diputacion_local/hidalgo/legislatura_lxiv/rosalba_calva_garc%C3%ADa.png', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-11-05)'::daterange, 2, 13, 'http://www.congreso-hidalgo.gob.mx/LXIV%20LEGISLATURA/2.-%20Rosalba-Calva-Garcia.php' from actores_politicos where nombre_formatted = lower(unaccent('Rosalba Calva García')) and puesto = 'Diputación Local Hidalgo por Distrito 2' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Miriam del Carmen Candelaria García', 'Diputación Local Hidalgo por Distrito 3', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620450246/diputacion_local/hidalgo/legislatura_lxiv/miriam_del_carmen_candelaria_garc%C3%ADa.png', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-11-05)'::daterange, 3, 13, 'http://www.congreso-hidalgo.gob.mx/LXIV%20LEGISLATURA/3.-Miriam%20del%20Carmen%20Candelaria%20Garcia.php' from actores_politicos where nombre_formatted = lower(unaccent('Miriam del Carmen Candelaria García')) and puesto = 'Diputación Local Hidalgo por Distrito 3' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Doralicia Martínez Bautista', 'Diputación Local Hidalgo por Distrito 4', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620450248/diputacion_local/hidalgo/legislatura_lxiv/doralicia_mart%C3%ADnez_bautista.png', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-11-05)'::daterange, 4, 13, 'http://www.congreso-hidalgo.gob.mx/LXIV%20LEGISLATURA/4.-%20Doralicia-Martinez-Bautista.php' from actores_politicos where nombre_formatted = lower(unaccent('Doralicia Martínez Bautista')) and puesto = 'Diputación Local Hidalgo por Distrito 4' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Lucero Ambrocio Cruz', 'Diputación Local Hidalgo por Distrito 5', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620448257/diputacion_local/hidalgo/legislatura_lxiv/lucero_ambrocio_cruz.png', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-11-05)'::daterange, 5, 13, 'http://www.congreso-hidalgo.gob.mx/LXIV%20LEGISLATURA/5.-Lucero-Ambrocio-Cruz-Ixmiquilpan.php' from actores_politicos where nombre_formatted = lower(unaccent('Lucero Ambrocio Cruz')) and puesto = 'Diputación Local Hidalgo por Distrito 5' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Armando Quintanar Trejo', 'Diputación Local Hidalgo por Distrito 6', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620448258/diputacion_local/hidalgo/legislatura_lxiv/armando_quintanar_trejo.png', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-11-05)'::daterange, 6, 13, 'http://www.congreso-hidalgo.gob.mx/LXIV%20LEGISLATURA/6.-Armando-Quintanar-Trejo.php' from actores_politicos where nombre_formatted = lower(unaccent('Armando Quintanar Trejo')) and puesto = 'Diputación Local Hidalgo por Distrito 6' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Lisset Marcelino Tovar', 'Diputación Local Hidalgo por Distrito 7', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620450250/diputacion_local/hidalgo/legislatura_lxiv/lisset_marcelino_tovar.png', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-11-05)'::daterange, 7, 13, 'http://www.congreso-hidalgo.gob.mx/LXIV%20LEGISLATURA/7.-%20Lisset-Marcelino-Tovar.php' from actores_politicos where nombre_formatted = lower(unaccent('Lisset Marcelino Tovar')) and puesto = 'Diputación Local Hidalgo por Distrito 7' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Jazmín Calva López', 'Diputación Local Hidalgo por Distrito 8', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620450251/diputacion_local/hidalgo/legislatura_lxiv/jazm%C3%ADn_calva_l%C3%B3pez.png', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-11-05)'::daterange, 8, 13, 'http://www.congreso-hidalgo.gob.mx/LXIV%20LEGISLATURA/8.-Jazmin%20Calva%20Lopez.php' from actores_politicos where nombre_formatted = lower(unaccent('Jazmín Calva López')) and puesto = 'Diputación Local Hidalgo por Distrito 8' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Distrito IX Metepec', 'Diputación Local Hidalgo por Distrito 9', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620450252/diputacion_local/hidalgo/legislatura_lxiv/distrito_ix_metepec.png', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-11-05)'::daterange, 9, 13, 'http://www.congreso-hidalgo.gob.mx/LXIV%20LEGISLATURA/integrantes-lxiv-legislatura.html#' from actores_politicos where nombre_formatted = lower(unaccent('Distrito IX Metepec')) and puesto = 'Diputación Local Hidalgo por Distrito 9' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Rafael Garnica Alonso', 'Diputación Local Hidalgo por Distrito 10', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620448259/diputacion_local/hidalgo/legislatura_lxiv/rafael_garnica_alonso.png', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-11-05)'::daterange, 10, 13, 'http://www.congreso-hidalgo.gob.mx/LXIV%20LEGISLATURA/10.-%20Rafael-Garnica-Alonso.php' from actores_politicos where nombre_formatted = lower(unaccent('Rafael Garnica Alonso')) and puesto = 'Diputación Local Hidalgo por Distrito 10' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Salvador Sosa Arroyo', 'Diputación Local Hidalgo por Distrito 11', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620450254/diputacion_local/hidalgo/legislatura_lxiv/salvador_sosa_arroyo.png', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-11-05)'::daterange, 11, 13, 'http://www.congreso-hidalgo.gob.mx/LXIV%20LEGISLATURA/11.-%20Salvador%20Sosa%20Arroyo.php' from actores_politicos where nombre_formatted = lower(unaccent('Salvador Sosa Arroyo')) and puesto = 'Diputación Local Hidalgo por Distrito 11' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('María Corina Martínez García', 'Diputación Local Hidalgo por Distrito 12', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620450256/diputacion_local/hidalgo/legislatura_lxiv/mar%C3%ADa_corina_mart%C3%ADnez_garc%C3%ADa.png', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-11-05)'::daterange, 12, 13, 'http://www.congreso-hidalgo.gob.mx/LXIV%20LEGISLATURA/12.-%20Maria-Corina-Martinez-Garcia.php' from actores_politicos where nombre_formatted = lower(unaccent('María Corina Martínez García')) and puesto = 'Diputación Local Hidalgo por Distrito 12' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Raymundo Lazcano Mejía', 'Diputación Local Hidalgo por Distrito 13', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620448261/diputacion_local/hidalgo/legislatura_lxiv/raymundo_lazcano_mej%C3%ADa.png', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-11-05)'::daterange, 13, 13, 'http://www.congreso-hidalgo.gob.mx/LXIV%20LEGISLATURA/13.-Raymundo%20Lazcano%20Mejia.php' from actores_politicos where nombre_formatted = lower(unaccent('Raymundo Lazcano Mejía')) and puesto = 'Diputación Local Hidalgo por Distrito 13' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Miguel Reyes López', 'Diputación Local Hidalgo por Distrito 14', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620450257/diputacion_local/hidalgo/legislatura_lxiv/miguel_reyes_l%C3%B3pez.png', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-11-05)'::daterange, 14, 13, 'http://www.congreso-hidalgo.gob.mx/LXIV%20LEGISLATURA/integrantes-lxiv-legislatura.html#' from actores_politicos where nombre_formatted = lower(unaccent('Miguel Reyes López')) and puesto = 'Diputación Local Hidalgo por Distrito 14' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Noemí Zitle Rivas', 'Diputación Local Hidalgo por Distrito 15', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620450259/diputacion_local/hidalgo/legislatura_lxiv/noem%C3%AD_zitle_rivas.png', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-11-05)'::daterange, 15, 13, 'http://www.congreso-hidalgo.gob.mx/LXIV%20LEGISLATURA/15.-Noemi-Zitle-Rivas.php' from actores_politicos where nombre_formatted = lower(unaccent('Noemí Zitle Rivas')) and puesto = 'Diputación Local Hidalgo por Distrito 15' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values (' Margarita Evelyn Leonel Cruz', 'Diputación Local Hidalgo por Distrito 16', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620450259/diputacion_local/hidalgo/legislatura_lxiv/_margarita_evelyn_leonel_cruz.png', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-11-05)'::daterange, 16, 13, 'http://www.congreso-hidalgo.gob.mx/LXIV%20LEGISLATURA/integrantes-lxiv-legislatura.html#' from actores_politicos where nombre_formatted = lower(unaccent(' Margarita Evelyn Leonel Cruz')) and puesto = 'Diputación Local Hidalgo por Distrito 16' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Roxana Montealegre Salvador', 'Diputación Local Hidalgo por Distrito 17', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620448263/diputacion_local/hidalgo/legislatura_lxiv/roxana_montealegre_salvador.png', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-11-05)'::daterange, 17, 13, 'http://www.congreso-hidalgo.gob.mx/LXIV%20LEGISLATURA/17.-%20Roxana-Montealegre-Salvador.php' from actores_politicos where nombre_formatted = lower(unaccent('Roxana Montealegre Salvador')) and puesto = 'Diputación Local Hidalgo por Distrito 17' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Jorge Mayorga Olvera', 'Diputación Local Hidalgo por Distrito 18', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620448264/diputacion_local/hidalgo/legislatura_lxiv/jorge_mayorga_olvera.png', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-11-05)'::daterange, 18, 13, 'http://www.congreso-hidalgo.gob.mx/LXIV%20LEGISLATURA/18.-Jorge-Mayorga-Olvera.php' from actores_politicos where nombre_formatted = lower(unaccent('Jorge Mayorga Olvera')) and puesto = 'Diputación Local Hidalgo por Distrito 18' ON CONFLICT  DO NOTHING;
  `)
}
