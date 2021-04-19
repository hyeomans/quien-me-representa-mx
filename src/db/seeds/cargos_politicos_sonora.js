exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('actores_politicos').del()
  await knex('senadurias').del()
  await knex('presidencia_municipal').del()
  await knex('gobernacion').del()
  await knex('diputacion_local').del()
  await knex('diputacion_federal').del()

  await knex.schema.raw(`
  insert into actores_politicos (nombre, puesto, img_url, created_at)
  values  
    ('María Wendy Briceño Zuloaga', 'Diputada federal distrito 5', 'http://sil.gobernacion.gob.mx/Archivos/Fotos/9223273.jpg', '2021-04-20 20:17:41.460496'),
    ('Heriberto Marcelo Aguilar Castillo', 'Diputado federal distrito 4', 'http://sil.gobernacion.gob.mx/Archivos/Fotos/9223271.jpg', '2021-04-20 20:17:41.460496'),
    ('Yumiko Yerania Palomarez Herrera', 'Diputada local distrito 10 Hermosillo', 'http://www.congresoson.gob.mx/Images/fotos_dip/dip_229.jpg', '2021-04-20 20:24:23.681184'),
    ('Fermín González Gaxiola', 'Presidente municipal Hermosillo', 'http://directorio.sonora.gob.mx/uploads/fotos/SIND._HILLO.jpg', '2021-04-20 20:24:23.681184'),
    ('Claudia Artemiza Pavlovich Arellano', 'Gobernadora de Sonora', 'https://www.sonora.gob.mx/media/zoo/images/gobernadora-pavlovich_9bccf1d3159617ad264d09762a0e613f.png', '2021-04-20 20:24:23.681184'),
    ('Arturo Bours Griffith', 'Senador Sonora', 'https://www.senado.gob.mx/64/images/senadores/64/1184-bours_griffith_arturo-20181108-141650.jpg', '2021-04-20 20:26:39.890457'),
    ('Lilly Téllez', 'Senadora Sonora', 'https://www.senado.gob.mx/64/images/senadores/64/1187-tellez_garcia_maria_lilly_del_carmen-20180824-095507.jpg', '2021-04-20 20:26:39.890457'),
    ('Sylvana Beltrones Sánchez', 'Senadora Sonora', 'https://www.senado.gob.mx/64/images/senadores/64/1189-beltrones_sanchez_sylvana-20180828-191841.jpg', '2021-04-20 20:26:39.890457');
  `)

  await knex.schema.raw(`
    insert into presidencia_municipal(actor_politico_id, periodo, municipio_id, estado_id)
    select id, '[2021-04-08,2021-11-16)'::daterange, 49, 26
    from actores_politicos
    where nombre_formatted = 'fermin gonzalez gaxiola';
    
    insert into diputacion_federal(actor_politico_id, periodo, distrito_federal)
    select id, '[2018-11-01,2021-09-01)'::daterange, 5
    from actores_politicos
    where nombre_formatted = 'maria wendy briceno zuloaga';
    
    insert into diputacion_local(actor_politico_id, periodo, distrito_local, estado)
    select id, '[2018-12-01,2021-12-02)'::daterange, 10, 26 from actores_politicos
    where nombre_formatted = 'yumiko yerania palomarez herrera';
    
    insert into senadurias(actor_politico_id, periodo, estado)
    select id, '[2018-11-01, 2024-9-1)'::daterange, 26 from actores_politicos
    where nombre_formatted = 'lilly tellez';
    
    insert into senadurias(actor_politico_id, periodo, estado)
    select id, '[2018-11-01, 2024-9-1)'::daterange, 26 from actores_politicos
    where nombre_formatted = 'sylvana beltrones sanchez';
    
    insert into senadurias(actor_politico_id, periodo, estado)
    select id, '[2020-10-28, 2024-9-1)'::daterange, 26 from actores_politicos
    where nombre_formatted = 'arturo bours griffith';
    
    insert into gobernacion(actor_politico_id, periodo, estado)
    select id, '[2015-11-13,2021-11-14)'::daterange, 26 from actores_politicos
    where nombre_formatted = 'claudia artemiza pavlovich arellano';
  `)
}
