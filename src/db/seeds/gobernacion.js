exports.seed = async function (knex) {
  await knex('gobernacion').del()

  await knex('actores_politicos')
    .where('nombre_formatted', 'claudia artemiza pavlovich arellano')
    .del()

  await knex.schema.raw(`
  insert into actores_politicos (nombre, puesto, img_url, created_at)
  values ('C.P. Martín Orozco Sandoval', 'Gobierno AGUASCALIENTES en período 01-12-2016,30-09-2022', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/MartinOrozcoSandoval.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[12-01-2016, 09-30-2022]'::daterange, 1
  from actores_politicos where nombre_formatted = lower(unaccent('C.P. Martín Orozco Sandoval'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Ing. Jaime Bonilla Valdez', 'Gobierno BAJA CALIFORNIA en período 01-11-2019,31-10-2021', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/jaime-bonilla-valdez-baja-california.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[11-01-2019, 10-31-2021]'::daterange, 2
  from actores_politicos where nombre_formatted = lower(unaccent('Ing. Jaime Bonilla Valdez'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Mtro. Carlos Mendoza Davis', 'Gobierno BAJA CALIFORNIA SUR en período 10-09-2015,09-09-2021', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/CarlosMendozaDavis.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[09-10-2015, 09-09-2021]'::daterange, 3
  from actores_politicos where nombre_formatted = lower(unaccent('Mtro. Carlos Mendoza Davis'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Lic. Carlos Miguel Aysa González', 'Gobierno CAMPECHE en período 13-06-2019,15-09-2021', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/CarlosMiguelAysaGonzalez.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[06-13-2019, 09-15-2021]'::daterange, 4
  from actores_politicos where nombre_formatted = lower(unaccent('Lic. Carlos Miguel Aysa González'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Ing. Miguel Ángel Riquelme Solís', 'Gobierno COAHUILA en período 01-12-2017,30-11-2023', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/Miguel-Angel-Riquelme-Solis.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[12-01-2017, 11-30-2023]'::daterange, 5
  from actores_politicos where nombre_formatted = lower(unaccent('Ing. Miguel Ángel Riquelme Solís'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Mtro. José Ignacio Peralta Sánchez', 'Gobierno COLIMA en período 11-02-2016,31-10-2021', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/JoseIgnacioPeraltaSanchez.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[02-11-2016, 10-31-2021]'::daterange, 6
  from actores_politicos where nombre_formatted = lower(unaccent('Mtro. José Ignacio Peralta Sánchez'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Dr. Rutilio Cruz Escandón Cadenas', 'Gobierno CHIAPAS en período 08-12-2018,07-12-2024', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/Chiapas_RutilioEscandonCruzCadena.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[12-08-2018, 12-07-2024]'::daterange, 7
  from actores_politicos where nombre_formatted = lower(unaccent('Dr. Rutilio Cruz Escandón Cadenas'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Lic. Javier Corral Jurado', 'Gobierno CHIHUAHUA en período 04-10-2016,07-09-2021', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/JavierCorralJurado.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[10-04-2016, 09-07-2021]'::daterange, 8
  from actores_politicos where nombre_formatted = lower(unaccent('Lic. Javier Corral Jurado'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Dra. Claudia Sheinbaum Pardo', 'Gobierno CIUDAD DE MEXICO en período 05-12-2018,04-10-2024', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/CDMX_claudiasheinbaumpardo.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[12-05-2018, 10-04-2024]'::daterange, 9
  from actores_politicos where nombre_formatted = lower(unaccent('Dra. Claudia Sheinbaum Pardo'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Dr. José Rosas Aispuro Torres', 'Gobierno DURANGO en período 15-09-2016,14-09-2022', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/JoseRosasAispuroTorres.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[09-15-2016, 09-14-2022]'::daterange, 10
  from actores_politicos where nombre_formatted = lower(unaccent('Dr. José Rosas Aispuro Torres'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Lic. Diego Sinhue Rodríguez Vallejo', 'Gobierno GUANAJUATO en período 26-09-2018,25-09-2024', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/GTO_Diegosinhuerodriguezvallejo.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[09-26-2018, 09-25-2024]'::daterange, 11
  from actores_politicos where nombre_formatted = lower(unaccent('Lic. Diego Sinhue Rodríguez Vallejo'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Lic. Héctor Antonio Astudillo Flores', 'Gobierno GUERRERO en período 27-10-2015,26-10-2021', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/HectorAstudilloFlores.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[10-27-2015, 10-26-2021]'::daterange, 12
  from actores_politicos where nombre_formatted = lower(unaccent('Lic. Héctor Antonio Astudillo Flores'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Lic. Omar Fayad Meneses', 'Gobierno HIDALGO en período 05-09-2016,04-09-2022', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/OmarFayadMeneses.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[09-05-2016, 09-04-2022]'::daterange, 13
  from actores_politicos where nombre_formatted = lower(unaccent('Lic. Omar Fayad Meneses'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Ing. Enrique Alfaro Ramírez', 'Gobierno JALISCO en período 06-12-2018,05-12-2024', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/JAL_EnriqueAlfaroRamirez.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[12-06-2018, 12-05-2024]'::daterange, 14
  from actores_politicos where nombre_formatted = lower(unaccent('Ing. Enrique Alfaro Ramírez'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Lic. Alfredo Del Mazo Maza', 'Gobierno MEXICO en período 16-09-2017,15-09-2023', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/Alfredo-Del-Mazo-Maza.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[09-16-2017, 09-15-2023]'::daterange, 15
  from actores_politicos where nombre_formatted = lower(unaccent('Lic. Alfredo Del Mazo Maza'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Ing. Silvano Aureoles Conejo', 'Gobierno MICHOACAN en período 01-10-2015,30-09-2021', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/SilvanoAureolesConejo.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[10-01-2015, 09-30-2021]'::daterange, 16
  from actores_politicos where nombre_formatted = lower(unaccent('Ing. Silvano Aureoles Conejo'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('C. Cuauhtémoc Blanco Bravo', 'Gobierno MORELOS en período 01-10-2018,30-09-2024', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/MOR_CuauhtemocBlancoBravo.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[10-01-2018, 09-30-2024]'::daterange, 17
  from actores_politicos where nombre_formatted = lower(unaccent('C. Cuauhtémoc Blanco Bravo'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('C.P. Antonio Echevarría García', 'Gobierno NAYARIT en período 19-09-2017,18-09-2021', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/Antonio-Echevarria-Garcia.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[09-19-2017, 09-18-2021]'::daterange, 18
  from actores_politicos where nombre_formatted = lower(unaccent('C.P. Antonio Echevarría García'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Ing. Jaime Heliodoro Rodríguez Calderón', 'Gobierno NUEVO LEON en período 03-07-2018,03-10-2021', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/JaimeHeliodoroRodriguezCalderon.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[07-03-2018, 10-03-2021]'::daterange, 19
  from actores_politicos where nombre_formatted = lower(unaccent('Ing. Jaime Heliodoro Rodríguez Calderón'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Mtro. Alejandro Ismael Murat Hinojosa', 'Gobierno OAXACA en período 01-12-2016,30-11-2022', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/AlejandroIsmaelMuratHinojosa.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[12-01-2016, 11-30-2022]'::daterange, 20
  from actores_politicos where nombre_formatted = lower(unaccent('Mtro. Alejandro Ismael Murat Hinojosa'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Lic. Luis Miguel Gerónimo Barbosa Huerta', 'Gobierno PUEBLA en período 01-08-2019,13-12-2024', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/MiguelBarbosaHuerta.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[08-01-2019, 12-13-2024]'::daterange, 21
  from actores_politicos where nombre_formatted = lower(unaccent('Lic. Luis Miguel Gerónimo Barbosa Huerta'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('M.V.Z. Francisco Domínguez Servién', 'Gobierno QUERETARO en período 01-10-2015,30-09-2021', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/FranciscoDominguezServien.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[10-01-2015, 09-30-2021]'::daterange, 22
  from actores_politicos where nombre_formatted = lower(unaccent('M.V.Z. Francisco Domínguez Servién'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('C.P. Carlos Manuel Joaquín González', 'Gobierno QUINTANA ROO en período 25-09-2016,24-09-2022', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/CarlosManuelJoaquinGonzalez.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[09-25-2016, 09-24-2022]'::daterange, 23
  from actores_politicos where nombre_formatted = lower(unaccent('C.P. Carlos Manuel Joaquín González'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Dr. Juan Manuel Carreras López', 'Gobierno SAN LUIS POTOSI en período 26-09-2015,25-09-2021', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/JuanManuelCarrerasLopez.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[09-26-2015, 09-25-2021]'::daterange, 24
  from actores_politicos where nombre_formatted = lower(unaccent('Dr. Juan Manuel Carreras López'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Mtro. Quirino Ordaz Coppel', 'Gobierno SINALOA en período 01-01-2017,31-10-2021', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/QuirinoOrdazCoppel.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[01-01-2017, 10-31-2021]'::daterange, 25
  from actores_politicos where nombre_formatted = lower(unaccent('Mtro. Quirino Ordaz Coppel'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Lic. Claudia Artemiza Pavlovich Arellano', 'Gobierno SONORA en período 13-09-2015,12-09-2021', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/ClaudiaPavlovichArellano.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[09-13-2015, 09-12-2021]'::daterange, 26
  from actores_politicos where nombre_formatted = lower(unaccent('Lic. Claudia Artemiza Pavlovich Arellano'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Lic. Adán Augusto López Hernández', 'Gobierno TABASCO en período 01-01-2019,30-09-2024', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/TAB_AdanAugustoLopezHernandez.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[01-01-2019, 09-30-2024]'::daterange, 27
  from actores_politicos where nombre_formatted = lower(unaccent('Lic. Adán Augusto López Hernández'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Lic. Francisco Javier García Cabeza de Vaca', 'Gobierno TAMAULIPAS en período 01-10-2016,30-09-2022', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/FranciscoJavierGarciaCabezaDeVaca.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[10-01-2016, 09-30-2022]'::daterange, 28
  from actores_politicos where nombre_formatted = lower(unaccent('Lic. Francisco Javier García Cabeza de Vaca'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Mtro. Marco Antonio Mena Rodríguez', 'Gobierno TLAXCALA en período 01-01-2017,30-08-2021', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/MarcoAntonioMenaRodriguez.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[01-01-2017, 08-30-2021]'::daterange, 29
  from actores_politicos where nombre_formatted = lower(unaccent('Mtro. Marco Antonio Mena Rodríguez'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Mtro. Cuitláhuac García Jiménez', 'Gobierno VERACRUZ en período 01-12-2018,30-11-2024', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/VER_CuitlahuacGarciaJimenez2.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[12-01-2018, 11-30-2024]'::daterange, 30
  from actores_politicos where nombre_formatted = lower(unaccent('Mtro. Cuitláhuac García Jiménez'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('Mtro. Mauricio Vila Dosal', 'Gobierno YUCATAN en período 01-10-2018,30-09-2024', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/YUC_MauricioVilaDosal.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[10-01-2018, 09-30-2024]'::daterange, 31
  from actores_politicos where nombre_formatted = lower(unaccent('Mtro. Mauricio Vila Dosal'));


  insert into actores_politicos (nombre, puesto, img_url, created_at)
    values ('L.C. Alejandro Tello Cristerna', 'Gobierno ZACATECAS en período 12-09-2016,11-09-2021', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/AlejandroTelloCristerna.jpg', '2021-04-28 13:00:00') ON CONFLICT DO NOTHING;

  insert into gobernacion(actor_politico_id, periodo, estado)
  select id, '[09-12-2016, 09-11-2021]'::daterange, 32
  from actores_politicos where nombre_formatted = lower(unaccent('L.C. Alejandro Tello Cristerna'));
  `)
}
