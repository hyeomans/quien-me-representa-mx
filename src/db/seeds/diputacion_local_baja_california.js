exports.seed = async function (knex) {
  await knex.schema.raw(`
  insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Araceli Geraldo Núñez', 'Diputación Local Baja California por Distrito 14', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1621554225/diputacion_local/baja_california/legislatura_xxiii/araceli_geraldo_n%C3%BA%C3%B1ez.jpg', '2021-05-20 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 14, 2, 'https://www.congresobc.gob.mx/Contenido/Legislatura/Diputados/Perfil_Diputado.aspx?dip=203' from actores_politicos where nombre_formatted = lower(unaccent('Araceli Geraldo Núñez')) and puesto = 'Diputación Local Baja California por Distrito 14' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Eva Gricelda Rodríguez', 'Diputación Local Baja California por Distrito 4', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1621554226/diputacion_local/baja_california/legislatura_xxiii/eva_gricelda_rodr%C3%ADguez.jpg', '2021-05-20 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 4, 2, 'https://www.congresobc.gob.mx/Contenido/Legislatura/Diputados/Perfil_Diputado.aspx?dip=205' from actores_politicos where nombre_formatted = lower(unaccent('Eva Gricelda Rodríguez')) and puesto = 'Diputación Local Baja California por Distrito 4' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Evangelina Moreno Guerra', 'Diputación Local Baja California por Distrito 9', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1621554228/diputacion_local/baja_california/legislatura_xxiii/evangelina_moreno_guerra.jpg', '2021-05-20 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 9, 2, 'https://www.congresobc.gob.mx/Contenido/Legislatura/Diputados/Perfil_Diputado.aspx?dip=214' from actores_politicos where nombre_formatted = lower(unaccent('Evangelina Moreno Guerra')) and puesto = 'Diputación Local Baja California por Distrito 9' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Gloria Arcelia Miramontes Plantillas', 'Diputación Local Baja California por Distrito 13', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1621554229/diputacion_local/baja_california/legislatura_xxiii/gloria_arcelia_miramontes_plantillas.jpg', '2021-05-20 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 13, 2, 'https://www.congresobc.gob.mx/Contenido/Legislatura/Diputados/Perfil_Diputado.aspx?dip=218' from actores_politicos where nombre_formatted = lower(unaccent('Gloria Arcelia Miramontes Plantillas')) and puesto = 'Diputación Local Baja California por Distrito 13' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Juan Manuel Molina García', 'Diputación Local Baja California por Distrito 5', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1621554230/diputacion_local/baja_california/legislatura_xxiii/juan_manuel_molina_garc%C3%ADa.jpg', '2021-05-20 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 5, 2, 'https://www.congresobc.gob.mx/Contenido/Legislatura/Diputados/Perfil_Diputado.aspx?dip=143' from actores_politicos where nombre_formatted = lower(unaccent('Juan Manuel Molina García')) and puesto = 'Diputación Local Baja California por Distrito 5' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Juan Melendrez Espinoza', 'Diputación Local Baja California por Distrito 1', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1621554231/diputacion_local/baja_california/legislatura_xxiii/juan_melendrez_espinoza.jpg', '2021-05-20 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 1, 2, 'https://www.congresobc.gob.mx/Contenido/Legislatura/Diputados/Perfil_Diputado.aspx?dip=208' from actores_politicos where nombre_formatted = lower(unaccent('Juan Melendrez Espinoza')) and puesto = 'Diputación Local Baja California por Distrito 1' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Julia Andrea González Quiroz', 'Diputación Local Baja California por Distrito 10', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1621554233/diputacion_local/baja_california/legislatura_xxiii/julia_andrea_gonz%C3%A1lez_quiroz.jpg', '2021-05-20 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 10, 2, 'https://www.congresobc.gob.mx/Contenido/Legislatura/Diputados/Perfil_Diputado.aspx?dip=204' from actores_politicos where nombre_formatted = lower(unaccent('Julia Andrea González Quiroz')) and puesto = 'Diputación Local Baja California por Distrito 10' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('María Luisa Villalobos Ávila', 'Diputación Local Baja California por Distrito 3', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1621554234/diputacion_local/baja_california/legislatura_xxiii/mar%C3%ADa_luisa_villalobos_%C3%A1vila.jpg', '2021-05-20 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 3, 2, 'https://www.congresobc.gob.mx/Contenido/Legislatura/Diputados/Perfil_Diputado.aspx?dip=211' from actores_politicos where nombre_formatted = lower(unaccent('María Luisa Villalobos Ávila')) and puesto = 'Diputación Local Baja California por Distrito 3' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Miriam Elizabeth Cano Núñez', 'Diputación Local Baja California por Distrito 17', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1621554235/diputacion_local/baja_california/legislatura_xxiii/miriam_elizabeth_cano_n%C3%BA%C3%B1ez.jpg', '2021-05-20 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 17, 2, 'https://www.congresobc.gob.mx/Contenido/Legislatura/Diputados/Perfil_Diputado.aspx?dip=201' from actores_politicos where nombre_formatted = lower(unaccent('Miriam Elizabeth Cano Núñez')) and puesto = 'Diputación Local Baja California por Distrito 17' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Ramón Vázquez Valadez', 'Diputación Local Baja California por Distrito 12', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1621554236/diputacion_local/baja_california/legislatura_xxiii/ram%C3%B3n_v%C3%A1zquez_valadez.jpg', '2021-05-20 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 12, 2, 'https://www.congresobc.gob.mx/Contenido/Legislatura/Diputados/Perfil_Diputado.aspx?dip=212' from actores_politicos where nombre_formatted = lower(unaccent('Ramón Vázquez Valadez')) and puesto = 'Diputación Local Baja California por Distrito 12' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Rosina Del Villar Casas', 'Diputación Local Baja California por Distrito 15', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1621554237/diputacion_local/baja_california/legislatura_xxiii/rosina_del_villar_casas.jpg', '2021-05-20 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 15, 2, 'https://www.congresobc.gob.mx/Contenido/Legislatura/Diputados/Perfil_Diputado.aspx?dip=202' from actores_politicos where nombre_formatted = lower(unaccent('Rosina Del Villar Casas')) and puesto = 'Diputación Local Baja California por Distrito 15' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Víctor Hugo Navarro Gutiérrez', 'Diputación Local Baja California por Distrito 2', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1621554238/diputacion_local/baja_california/legislatura_xxiii/v%C3%ADctor_hugo_navarro_guti%C3%A9rrez.jpg', '2021-05-20 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 2, 2, 'https://www.congresobc.gob.mx/Contenido/Legislatura/Diputados/Perfil_Diputado.aspx?dip=92' from actores_politicos where nombre_formatted = lower(unaccent('Víctor Hugo Navarro Gutiérrez')) and puesto = 'Diputación Local Baja California por Distrito 2' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Víctor Manuel Moran Hernández', 'Diputación Local Baja California por Distrito 8', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1621554240/diputacion_local/baja_california/legislatura_xxiii/v%C3%ADctor_manuel_moran_hern%C3%A1ndez.jpg', '2021-05-20 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 8, 2, 'https://www.congresobc.gob.mx/Contenido/Legislatura/Diputados/Perfil_Diputado.aspx?dip=176' from actores_politicos where nombre_formatted = lower(unaccent('Víctor Manuel Moran Hernández')) and puesto = 'Diputación Local Baja California por Distrito 8' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Claudia Josefina Agatón Muñiz', 'Diputación Local Baja California por Distrito 16', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1621554241/diputacion_local/baja_california/legislatura_xxiii/claudia_josefina_agat%C3%B3n_mu%C3%B1iz.jpg', '2021-05-20 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 16, 2, 'https://www.congresobc.gob.mx/Contenido/Legislatura/Diputados/Perfil_Diputado.aspx?dip=115' from actores_politicos where nombre_formatted = lower(unaccent('Claudia Josefina Agatón Muñiz')) and puesto = 'Diputación Local Baja California por Distrito 16' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Julio César Vázquez Castillo', 'Diputación Local Baja California por Distrito 7', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1621554242/diputacion_local/baja_california/legislatura_xxiii/julio_c%C3%A9sar_v%C3%A1zquez_castillo.jpg', '2021-05-20 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 7, 2, 'https://www.congresobc.gob.mx/Contenido/Legislatura/Diputados/Perfil_Diputado.aspx?dip=137' from actores_politicos where nombre_formatted = lower(unaccent('Julio César Vázquez Castillo')) and puesto = 'Diputación Local Baja California por Distrito 7' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Efren Enrique Moreno Rivera', 'Diputación Local Baja California por Distrito 11', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1621554243/diputacion_local/baja_california/legislatura_xxiii/efren_enrique_moreno_rivera.jpg', '2021-05-20 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 11, 2, 'https://www.congresobc.gob.mx/Contenido/Legislatura/Diputados/Perfil_Diputado.aspx?dip=213' from actores_politicos where nombre_formatted = lower(unaccent('Efren Enrique Moreno Rivera')) and puesto = 'Diputación Local Baja California por Distrito 11' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Fausto Gallardo García', 'Diputación Local Baja California por Distrito 6', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1621554244/diputacion_local/baja_california/legislatura_xxiii/fausto_gallardo_garc%C3%ADa.jpg', '2021-05-20 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 6, 2, 'https://www.congresobc.gob.mx/Contenido/Legislatura/Diputados/Perfil_Diputado.aspx?dip=140' from actores_politicos where nombre_formatted = lower(unaccent('Fausto Gallardo García')) and puesto = 'Diputación Local Baja California por Distrito 6' ON CONFLICT  DO NOTHING;
  `)
}
