exports.seed = async function (knex) {
  await knex.schema.raw(`
  insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Ismael Álvarez Ruelas', 'Diputación Local Sinaloa por Distrito 1', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620397867/diputacion_local/sinaloa/legislatura_lxiii/ismael_%C3%A1lvarez_ruelas.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 1, 25, 'https://www.congresosinaloa.gob.mx/diputado63/ismael-alvarez-ruelas/' from actores_politicos where nombre_formatted = lower(unaccent('Ismael Álvarez Ruelas')) and puesto = 'Diputación Local Sinaloa por Distrito 1' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Abraham lsui Vázquez Apodaca', 'Diputación Local Sinaloa por Distrito 2', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620397868/diputacion_local/sinaloa/legislatura_lxiii/abraham_lsui_v%C3%A1zquez_apodaca.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 2, 25, 'https://www.congresosinaloa.gob.mx/diputado63/abraham-lsui-vazquez-apodaca/' from actores_politicos where nombre_formatted = lower(unaccent('Abraham lsui Vázquez Apodaca')) and puesto = 'Diputación Local Sinaloa por Distrito 2' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Juan Ramón Torres Navarro', 'Diputación Local Sinaloa por Distrito 3', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620397869/diputacion_local/sinaloa/legislatura_lxiii/juan_ram%C3%B3n_torres_navarro.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 3, 25, 'https://www.congresosinaloa.gob.mx/diputado63/juan-ramon-torres-navarro/' from actores_politicos where nombre_formatted = lower(unaccent('Juan Ramón Torres Navarro')) and puesto = 'Diputación Local Sinaloa por Distrito 3' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Rosa Inés López Castro', 'Diputación Local Sinaloa por Distrito 4', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620397872/diputacion_local/sinaloa/legislatura_lxiii/rosa_in%C3%A9s_l%C3%B3pez_castro.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 4, 25, 'https://www.congresosinaloa.gob.mx/diputado63/rosa-ines-lopez-castro/' from actores_politicos where nombre_formatted = lower(unaccent('Rosa Inés López Castro')) and puesto = 'Diputación Local Sinaloa por Distrito 4' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Mirtha Yesenia Rivera Ruelas', 'Diputación Local Sinaloa por Distrito 5', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620397873/diputacion_local/sinaloa/legislatura_lxiii/mirtha_yesenia_rivera_ruelas.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 5, 25, 'https://www.congresosinaloa.gob.mx/diputado63/mirtha-yesenia-rivera-ruelas/' from actores_politicos where nombre_formatted = lower(unaccent('Mirtha Yesenia Rivera Ruelas')) and puesto = 'Diputación Local Sinaloa por Distrito 5' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Ana Cecilia Moreno Romero', 'Diputación Local Sinaloa por Distrito 6', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620397874/diputacion_local/sinaloa/legislatura_lxiii/ana_cecilia_moreno_romero.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 6, 25, 'https://www.congresosinaloa.gob.mx/diputado63/ana-cecilia-moreno-romero/' from actores_politicos where nombre_formatted = lower(unaccent('Ana Cecilia Moreno Romero')) and puesto = 'Diputación Local Sinaloa por Distrito 6' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('José Luis Durán Salazar', 'Diputación Local Sinaloa por Distrito 7', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620397875/diputacion_local/sinaloa/legislatura_lxiii/jos%C3%A9_luis_dur%C3%A1n_salazar.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 7, 25, 'https://www.congresosinaloa.gob.mx/diputado63/jose-luis-duran-salazar/' from actores_politicos where nombre_formatted = lower(unaccent('José Luis Durán Salazar')) and puesto = 'Diputación Local Sinaloa por Distrito 7' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Flora Isela Miranda Leal', 'Diputación Local Sinaloa por Distrito 8', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620397876/diputacion_local/sinaloa/legislatura_lxiii/flora_isela_miranda_leal.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 8, 25, 'https://www.congresosinaloa.gob.mx/diputado63/flora-isela-miranda-leal/' from actores_politicos where nombre_formatted = lower(unaccent('Flora Isela Miranda Leal')) and puesto = 'Diputación Local Sinaloa por Distrito 8' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Gonzalo Camacho Angulo', 'Diputación Local Sinaloa por Distrito 9', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620397877/diputacion_local/sinaloa/legislatura_lxiii/gonzalo_camacho_angulo.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 9, 25, 'https://www.congresosinaloa.gob.mx/diputado63/gonzalo-camacho-angulo/' from actores_politicos where nombre_formatted = lower(unaccent('Gonzalo Camacho Angulo')) and puesto = 'Diputación Local Sinaloa por Distrito 9' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Yuriel Karely Gámez Peñuñuri', 'Diputación Local Sinaloa por Distrito 10', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620397878/diputacion_local/sinaloa/legislatura_lxiii/yuriel_karely_g%C3%A1mez_pe%C3%B1u%C3%B1uri.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 10, 25, 'https://www.congresosinaloa.gob.mx/diputado63/yuriel-karely-gamez-penunuri/' from actores_politicos where nombre_formatted = lower(unaccent('Yuriel Karely Gámez Peñuñuri')) and puesto = 'Diputación Local Sinaloa por Distrito 10' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Andrés Gilberto Rodelo Cárdenas', 'Diputación Local Sinaloa por Distrito 11', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620397879/diputacion_local/sinaloa/legislatura_lxiii/andr%C3%A9s_gilberto_rodelo_c%C3%A1rdenas.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 11, 25, 'https://www.congresosinaloa.gob.mx/diputado63/andres-gilberto-rodelo-cardenas/' from actores_politicos where nombre_formatted = lower(unaccent('Andrés Gilberto Rodelo Cárdenas')) and puesto = 'Diputación Local Sinaloa por Distrito 11' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Francisca Abelló Jordá', 'Diputación Local Sinaloa por Distrito 12', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620397881/diputacion_local/sinaloa/legislatura_lxiii/francisca_abell%C3%B3_jord%C3%A1.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 12, 25, 'https://www.congresosinaloa.gob.mx/diputado63/francisca-abello-jorda/' from actores_politicos where nombre_formatted = lower(unaccent('Francisca Abelló Jordá')) and puesto = 'Diputación Local Sinaloa por Distrito 12' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('José Rosario Romero López', 'Diputación Local Sinaloa por Distrito 13', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620397882/diputacion_local/sinaloa/legislatura_lxiii/jos%C3%A9_rosario_romero_l%C3%B3pez.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 13, 25, 'https://www.congresosinaloa.gob.mx/diputado63/jose-rosario-romero-lopez/' from actores_politicos where nombre_formatted = lower(unaccent('José Rosario Romero López')) and puesto = 'Diputación Local Sinaloa por Distrito 13' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Karla de Lourdes Montero Alatorre', 'Diputación Local Sinaloa por Distrito 14', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620397883/diputacion_local/sinaloa/legislatura_lxiii/karla_de_lourdes_montero_alatorre.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 14, 25, 'https://www.congresosinaloa.gob.mx/diputado63/karla-de-lourdes-montero-alatorre/' from actores_politicos where nombre_formatted = lower(unaccent('Karla de Lourdes Montero Alatorre')) and puesto = 'Diputación Local Sinaloa por Distrito 14' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Graciela Grijalva Castro', 'Diputación Local Sinaloa por Distrito 15', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620398050/diputacion_local/sinaloa/legislatura_lxiii/graciela_grijalva_castro.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 15, 25, 'https://www.congresosinaloa.gob.mx/diputado63/graciela-grijalva-castro/' from actores_politicos where nombre_formatted = lower(unaccent('Graciela Grijalva Castro')) and puesto = 'Diputación Local Sinaloa por Distrito 15' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Jesús Víctor Manuel Calderón Cabanillas', 'Diputación Local Sinaloa por Distrito 16', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620398052/diputacion_local/sinaloa/legislatura_lxiii/jes%C3%BAs_v%C3%ADctor_manuel_calder%C3%B3n_cabanillas.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 16, 25, 'https://www.congresosinaloa.gob.mx/diputado63/jesus-victor-manuel-calderon-cabanillas/' from actores_politicos where nombre_formatted = lower(unaccent('Jesús Víctor Manuel Calderón Cabanillas')) and puesto = 'Diputación Local Sinaloa por Distrito 16' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Fernando Mascareño Duarte', 'Diputación Local Sinaloa por Distrito 17', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620398053/diputacion_local/sinaloa/legislatura_lxiii/fernando_mascare%C3%B1o_duarte.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 17, 25, 'https://www.congresosinaloa.gob.mx/diputado63/fernando-mascareno-duarte/' from actores_politicos where nombre_formatted = lower(unaccent('Fernando Mascareño Duarte')) and puesto = 'Diputación Local Sinaloa por Distrito 17' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Jesús Ramón Monreal Cázares', 'Diputación Local Sinaloa por Distrito 18', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620398054/diputacion_local/sinaloa/legislatura_lxiii/jes%C3%BAs_ram%C3%B3n_monreal_c%C3%A1zares.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 18, 25, 'https://www.congresosinaloa.gob.mx/diputado63/jesus-ramon-monreal-cazares/' from actores_politicos where nombre_formatted = lower(unaccent('Jesús Ramón Monreal Cázares')) and puesto = 'Diputación Local Sinaloa por Distrito 18' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Jorge Rodríguez Ayala', 'Diputación Local Sinaloa por Distrito 19', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620398055/diputacion_local/sinaloa/legislatura_lxiii/jorge_rodr%C3%ADguez_ayala.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 19, 25, 'https://www.congresosinaloa.gob.mx/diputado63/jorge-rodriguez-ayala/' from actores_politicos where nombre_formatted = lower(unaccent('Jorge Rodríguez Ayala')) and puesto = 'Diputación Local Sinaloa por Distrito 19' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Delia Esmeralda López Altamirano', 'Diputación Local Sinaloa por Distrito 20', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620398056/diputacion_local/sinaloa/legislatura_lxiii/delia_esmeralda_l%C3%B3pez_altamirano.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 20, 25, 'https://www.congresosinaloa.gob.mx/diputado63/delia-esmeralda-lopez-altamirano/' from actores_politicos where nombre_formatted = lower(unaccent('Delia Esmeralda López Altamirano')) and puesto = 'Diputación Local Sinaloa por Distrito 20' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Merced Rojas Luna', 'Diputación Local Sinaloa por Distrito 21', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620398057/diputacion_local/sinaloa/legislatura_lxiii/merced_rojas_luna.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 21, 25, 'https://www.congresosinaloa.gob.mx/diputado63/merced-rojas-luna/' from actores_politicos where nombre_formatted = lower(unaccent('Merced Rojas Luna')) and puesto = 'Diputación Local Sinaloa por Distrito 21' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Ana Hermelinda Noverola Rendón', 'Diputación Local Sinaloa por Distrito 22', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620398059/diputacion_local/sinaloa/legislatura_lxiii/ana_hermelinda_noverola_rend%C3%B3n.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 22, 25, 'https://www.congresosinaloa.gob.mx/diputado63/ana-hermelinda-noverola-rendon/' from actores_politicos where nombre_formatted = lower(unaccent('Ana Hermelinda Noverola Rendón')) and puesto = 'Diputación Local Sinaloa por Distrito 22' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('José Antonio Crespo López', 'Diputación Local Sinaloa por Distrito 23', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620398060/diputacion_local/sinaloa/legislatura_lxiii/jos%C3%A9_antonio_crespo_l%C3%B3pez.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 23, 25, 'https://www.congresosinaloa.gob.mx/diputado63/jose-antonio-crespo-lopez/' from actores_politicos where nombre_formatted = lower(unaccent('José Antonio Crespo López')) and puesto = 'Diputación Local Sinaloa por Distrito 23' ON CONFLICT  DO NOTHING;
insert into actores_politicos (nombre, puesto, img_url, created_at) values ('Edgar Augusto González Zatarain', 'Diputación Local Sinaloa por Distrito 24', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620398061/diputacion_local/sinaloa/legislatura_lxiii/edgar_augusto_gonz%C3%A1lez_zatarain.jpg', '2021-05-07 13:00:00') ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado, link) select id, '[2018-10-01,2021-12-01)'::daterange, 24, 25, 'https://www.congresosinaloa.gob.mx/diputado63/edgar-augusto-gonzalez-zatarain/' from actores_politicos where nombre_formatted = lower(unaccent('Edgar Augusto González Zatarain')) and puesto = 'Diputación Local Sinaloa por Distrito 24' ON CONFLICT  DO NOTHING;
  `)
}
