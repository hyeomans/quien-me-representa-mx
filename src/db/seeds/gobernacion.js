exports.seed = async function (knex) {
  await knex('gobernacion').del()
  await knex.schema.raw(`
  insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('C.P. Martín Orozco Sandoval', 'Gubernatura por el estado de AGUASCALIENTES en período [12-01-2016, 09-30-2022]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/MartinOrozcoSandoval.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 1, 'https://www.conago.org.mx/miembros/detalle/martin-orozco-sandoval'
from actores_politicos where nombre_formatted = lower(unaccent('C.P. Martín Orozco Sandoval')) and puesto = 'Gubernatura por el estado de AGUASCALIENTES en período [12-01-2016, 09-30-2022]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Ing. Jaime Bonilla Valdez', 'Gubernatura por el estado de BAJA CALIFORNIA en período [11-01-2019, 10-31-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/jaime-bonilla-valdez-baja-california.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 2, 'https://www.conago.org.mx/miembros/detalle/Jaime-Bonilla-Valdez'
from actores_politicos where nombre_formatted = lower(unaccent('Ing. Jaime Bonilla Valdez')) and puesto = 'Gubernatura por el estado de BAJA CALIFORNIA en período [11-01-2019, 10-31-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Lic. Víctor Manuel Castro Cosío', 'Gubernatura por el estado de BAJA CALIFORNIA SUR en período [09-10-2021, 09-09-2027]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/victor-castro-cosio.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 3, 'https://www.conago.org.mx/miembros/detalle/Victor-Manuel-Castro-Cosio'
from actores_politicos where nombre_formatted = lower(unaccent('Lic. Víctor Manuel Castro Cosío')) and puesto = 'Gubernatura por el estado de BAJA CALIFORNIA SUR en período [09-10-2021, 09-09-2027]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Mtra. Layda Elena Sansores San Román', 'Gubernatura por el estado de CAMPECHE en período [09-16-2021, 09-15-2027]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/layda-elena-sansores-san-roman.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 4, 'https://www.conago.org.mx/miembros/detalle/Layda-Elena-Sansores-Sanroman'
from actores_politicos where nombre_formatted = lower(unaccent('Mtra. Layda Elena Sansores San Román')) and puesto = 'Gubernatura por el estado de CAMPECHE en período [09-16-2021, 09-15-2027]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Ing. Miguel Ángel Riquelme Solís', 'Gubernatura por el estado de COAHUILA en período [12-01-2017, 11-30-2023]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/Miguel-Angel-Riquelme-Solis.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 5, 'https://www.conago.org.mx/miembros/detalle/Miguel-Angel-Riquelme-Solis'
from actores_politicos where nombre_formatted = lower(unaccent('Ing. Miguel Ángel Riquelme Solís')) and puesto = 'Gubernatura por el estado de COAHUILA en período [12-01-2017, 11-30-2023]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Mtro. José Ignacio Peralta Sánchez', 'Gubernatura por el estado de COLIMA en período [02-11-2016, 10-31-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/JoseIgnacioPeraltaSanchez.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 6, 'https://www.conago.org.mx/miembros/detalle/jose-ignacio-peralta-sanchez'
from actores_politicos where nombre_formatted = lower(unaccent('Mtro. José Ignacio Peralta Sánchez')) and puesto = 'Gubernatura por el estado de COLIMA en período [02-11-2016, 10-31-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Dr. Rutilio Cruz Escandón Cadenas', 'Gubernatura por el estado de CHIAPAS en período [12-08-2018, 12-07-2024]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/Chiapas_RutilioEscandonCruzCadena.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 7, 'https://www.conago.org.mx/miembros/detalle/Rutilio-Cruz-Escandon-Cadenas'
from actores_politicos where nombre_formatted = lower(unaccent('Dr. Rutilio Cruz Escandón Cadenas')) and puesto = 'Gubernatura por el estado de CHIAPAS en período [12-08-2018, 12-07-2024]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Mtra. María Eugenia Campos Galván', 'Gubernatura por el estado de CHIHUAHUA en período [09-08-2021, 09-07-2027]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/maria-eugenia-campos-galvan.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 8, 'https://www.conago.org.mx/miembros/detalle/Maria-Eugenia-Campos-Galvan'
from actores_politicos where nombre_formatted = lower(unaccent('Mtra. María Eugenia Campos Galván')) and puesto = 'Gubernatura por el estado de CHIHUAHUA en período [09-08-2021, 09-07-2027]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Dra. Claudia Sheinbaum Pardo', 'Gubernatura por el estado de CIUDAD DE MEXICO en período [12-05-2018, 10-04-2024]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/CDMX_claudiasheinbaumpardo.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 9, 'https://www.conago.org.mx/miembros/detalle/Claudia-Sheinbaum-Pardo'
from actores_politicos where nombre_formatted = lower(unaccent('Dra. Claudia Sheinbaum Pardo')) and puesto = 'Gubernatura por el estado de CIUDAD DE MEXICO en período [12-05-2018, 10-04-2024]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Dr. José Rosas Aispuro Torres', 'Gubernatura por el estado de DURANGO en período [09-15-2016, 09-14-2022]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/JoseRosasAispuroTorres.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 10, 'https://www.conago.org.mx/miembros/detalle/jose-rosas-aispuro-torres'
from actores_politicos where nombre_formatted = lower(unaccent('Dr. José Rosas Aispuro Torres')) and puesto = 'Gubernatura por el estado de DURANGO en período [09-15-2016, 09-14-2022]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Lic. Diego Sinhue Rodríguez Vallejo', 'Gubernatura por el estado de GUANAJUATO en período [09-26-2018, 09-25-2024]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/GTO_Diegosinhuerodriguezvallejo.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 11, 'https://www.conago.org.mx/miembros/detalle/diego-sinhue-rodriguez-vallejo'
from actores_politicos where nombre_formatted = lower(unaccent('Lic. Diego Sinhue Rodríguez Vallejo')) and puesto = 'Gubernatura por el estado de GUANAJUATO en período [09-26-2018, 09-25-2024]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Lic. Héctor Antonio Astudillo Flores', 'Gubernatura por el estado de GUERRERO en período [10-27-2015, 10-14-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/HectorAstudilloFlores.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 12, 'https://www.conago.org.mx/miembros/detalle/hector-antonio-astudillo-flores'
from actores_politicos where nombre_formatted = lower(unaccent('Lic. Héctor Antonio Astudillo Flores')) and puesto = 'Gubernatura por el estado de GUERRERO en período [10-27-2015, 10-14-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Lic. Omar Fayad Meneses', 'Gubernatura por el estado de HIDALGO en período [09-05-2016, 09-04-2022]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/OmarFayadMeneses.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 13, 'https://www.conago.org.mx/miembros/detalle/omar-fayad-meneses'
from actores_politicos where nombre_formatted = lower(unaccent('Lic. Omar Fayad Meneses')) and puesto = 'Gubernatura por el estado de HIDALGO en período [09-05-2016, 09-04-2022]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Ing. Enrique Alfaro Ramírez', 'Gubernatura por el estado de JALISCO en período [12-06-2018, 12-05-2024]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/JAL_EnriqueAlfaroRamirez.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 14, 'https://www.conago.org.mx/miembros/detalle/Enrique-Alfaro-Ramirez'
from actores_politicos where nombre_formatted = lower(unaccent('Ing. Enrique Alfaro Ramírez')) and puesto = 'Gubernatura por el estado de JALISCO en período [12-06-2018, 12-05-2024]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Lic. Alfredo Del Mazo Maza', 'Gubernatura por el estado de MEXICO en período [09-16-2017, 09-15-2023]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/Alfredo-Del-Mazo-Maza.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 15, 'https://www.conago.org.mx/miembros/detalle/Alfredo-Del-Mazo-Maza'
from actores_politicos where nombre_formatted = lower(unaccent('Lic. Alfredo Del Mazo Maza')) and puesto = 'Gubernatura por el estado de MEXICO en período [09-16-2017, 09-15-2023]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Ing. Silvano Aureoles Conejo', 'Gubernatura por el estado de MICHOACAN en período [10-01-2015, 09-30-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/SilvanoAureolesConejo.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 16, 'https://www.conago.org.mx/miembros/detalle/silvano-aureoles-conejo'
from actores_politicos where nombre_formatted = lower(unaccent('Ing. Silvano Aureoles Conejo')) and puesto = 'Gubernatura por el estado de MICHOACAN en período [10-01-2015, 09-30-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('C. Cuauhtémoc Blanco Bravo', 'Gubernatura por el estado de MORELOS en período [10-01-2018, 09-30-2024]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/MOR_CuauhtemocBlancoBravo.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 17, 'https://www.conago.org.mx/miembros/detalle/cuauhtemoc-blanco-bravo'
from actores_politicos where nombre_formatted = lower(unaccent('C. Cuauhtémoc Blanco Bravo')) and puesto = 'Gubernatura por el estado de MORELOS en período [10-01-2018, 09-30-2024]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Med. Miguel Ángel Navarro Quintero', 'Gubernatura por el estado de NAYARIT en período [09-19-2021, 09-18-2027]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/miguel-angel-navarro-quintero.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 18, 'https://www.conago.org.mx/miembros/detalle/Miguel-Angel-Navarro-Quintero'
from actores_politicos where nombre_formatted = lower(unaccent('Med. Miguel Ángel Navarro Quintero')) and puesto = 'Gubernatura por el estado de NAYARIT en período [09-19-2021, 09-18-2027]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Ing. Jaime Heliodoro Rodríguez Calderón', 'Gubernatura por el estado de NUEVO LEON en período [07-03-2018, 10-03-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/JaimeHeliodoroRodriguezCalderon.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 19, 'https://www.conago.org.mx/miembros/detalle/jaime-rodriguez-calderon'
from actores_politicos where nombre_formatted = lower(unaccent('Ing. Jaime Heliodoro Rodríguez Calderón')) and puesto = 'Gubernatura por el estado de NUEVO LEON en período [07-03-2018, 10-03-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Mtro. Alejandro Ismael Murat Hinojosa', 'Gubernatura por el estado de OAXACA en período [12-01-2016, 11-30-2022]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/AlejandroIsmaelMuratHinojosa.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 20, 'https://www.conago.org.mx/miembros/detalle/alejandro-ismael-murat-hinojosa'
from actores_politicos where nombre_formatted = lower(unaccent('Mtro. Alejandro Ismael Murat Hinojosa')) and puesto = 'Gubernatura por el estado de OAXACA en período [12-01-2016, 11-30-2022]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Lic. Luis Miguel Gerónimo Barbosa Huerta', 'Gubernatura por el estado de PUEBLA en período [08-01-2019, 12-13-2024]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/MiguelBarbosaHuerta.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 21, 'https://www.conago.org.mx/miembros/detalle/Luis-Miguel-Geronimo-Barbosa-Huerta'
from actores_politicos where nombre_formatted = lower(unaccent('Lic. Luis Miguel Gerónimo Barbosa Huerta')) and puesto = 'Gubernatura por el estado de PUEBLA en período [08-01-2019, 12-13-2024]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('M.V.Z. Francisco Domínguez Servién', 'Gubernatura por el estado de QUERETARO en período [10-01-2015, 09-30-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/FranciscoDominguezServien.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 22, 'https://www.conago.org.mx/miembros/detalle/francisco-dominguez-servien'
from actores_politicos where nombre_formatted = lower(unaccent('M.V.Z. Francisco Domínguez Servién')) and puesto = 'Gubernatura por el estado de QUERETARO en período [10-01-2015, 09-30-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('C.P. Carlos Manuel Joaquín González', 'Gubernatura por el estado de QUINTANA ROO en período [09-25-2016, 09-24-2022]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/CarlosManuelJoaquinGonzalez.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 23, 'https://www.conago.org.mx/miembros/detalle/carlos-manuel-joaquin-gonzalez'
from actores_politicos where nombre_formatted = lower(unaccent('C.P. Carlos Manuel Joaquín González')) and puesto = 'Gubernatura por el estado de QUINTANA ROO en período [09-25-2016, 09-24-2022]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Dr. Juan Manuel Carreras López', 'Gubernatura por el estado de SAN LUIS POTOSI en período [09-26-2015, 09-25-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/JuanManuelCarrerasLopez.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 24, 'https://www.conago.org.mx/miembros/detalle/juan-manuel-carreras-lopez'
from actores_politicos where nombre_formatted = lower(unaccent('Dr. Juan Manuel Carreras López')) and puesto = 'Gubernatura por el estado de SAN LUIS POTOSI en período [09-26-2015, 09-25-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Mtro. Quirino Ordaz Coppel', 'Gubernatura por el estado de SINALOA en período [01-01-2017, 10-31-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/QuirinoOrdazCoppel.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 25, 'https://www.conago.org.mx/miembros/detalle/quirino-ordaz-coppel'
from actores_politicos where nombre_formatted = lower(unaccent('Mtro. Quirino Ordaz Coppel')) and puesto = 'Gubernatura por el estado de SINALOA en período [01-01-2017, 10-31-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Dr. Francisco Alfonso Durazo Montaño', 'Gubernatura por el estado de SONORA en período [09-13-2021, 09-12-2027]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/alfonso-durazo-montano.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 26, 'https://www.conago.org.mx/miembros/detalle/Francisco-Alfonso-Durazo-Montano'
from actores_politicos where nombre_formatted = lower(unaccent('Dr. Francisco Alfonso Durazo Montaño')) and puesto = 'Gubernatura por el estado de SONORA en período [09-13-2021, 09-12-2027]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Lic. Carlos Manuel Merino Campos', 'Gubernatura por el estado de TABASCO en período [08-27-2021, undefined-(por definir)-undefined]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/TAB_CarlosManuelMerinoCampos.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 27, 'https://www.conago.org.mx/miembros/detalle/Carlos-Manuel-Merino-Campos'
from actores_politicos where nombre_formatted = lower(unaccent('Lic. Carlos Manuel Merino Campos')) and puesto = 'Gubernatura por el estado de TABASCO en período [08-27-2021, undefined-(por definir)-undefined]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Lic. Francisco Javier García Cabeza de Vaca', 'Gubernatura por el estado de TAMAULIPAS en período [10-01-2016, 09-30-2022]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/FranciscoJavierGarciaCabezaDeVaca.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 28, 'https://www.conago.org.mx/miembros/detalle/francisco-javier-garcia-cabeza-de-vaca'
from actores_politicos where nombre_formatted = lower(unaccent('Lic. Francisco Javier García Cabeza de Vaca')) and puesto = 'Gubernatura por el estado de TAMAULIPAS en período [10-01-2016, 09-30-2022]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Lic. Lorena Cuéllar Cisneros', 'Gubernatura por el estado de TLAXCALA en período [08-31-2021, 08-30-2027]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/lorena-cuellar-cisneros.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 29, 'https://www.conago.org.mx/miembros/detalle/Lorena-Cuellar-Cisneros'
from actores_politicos where nombre_formatted = lower(unaccent('Lic. Lorena Cuéllar Cisneros')) and puesto = 'Gubernatura por el estado de TLAXCALA en período [08-31-2021, 08-30-2027]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Mtro. Cuitláhuac García Jiménez', 'Gubernatura por el estado de VERACRUZ en período [12-01-2018, 11-30-2024]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/VER_CuitlahuacGarciaJimenez2.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 30, 'https://www.conago.org.mx/miembros/detalle/Cuitlahuac-Garcia-Jimenez'
from actores_politicos where nombre_formatted = lower(unaccent('Mtro. Cuitláhuac García Jiménez')) and puesto = 'Gubernatura por el estado de VERACRUZ en período [12-01-2018, 11-30-2024]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Mtro. Mauricio Vila Dosal', 'Gubernatura por el estado de YUCATAN en período [10-01-2018, 09-30-2024]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/YUC_MauricioVilaDosal.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 31, 'https://www.conago.org.mx/miembros/detalle/mauricio-vila-dosal'
from actores_politicos where nombre_formatted = lower(unaccent('Mtro. Mauricio Vila Dosal')) and puesto = 'Gubernatura por el estado de YUCATAN en período [10-01-2018, 09-30-2024]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Lic. David Monreal Ávila', 'Gubernatura por el estado de ZACATECAS en período [09-12-2021, 09-11-2027]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/david-monreal-avila.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado, link)
select id, '[2021-11-01,2024-09-01)'::daterange, 32, 'https://www.conago.org.mx/miembros/detalle/David-Monreal-Avila'
from actores_politicos where nombre_formatted = lower(unaccent('Lic. David Monreal Ávila')) and puesto = 'Gubernatura por el estado de ZACATECAS en período [09-12-2021, 09-11-2027]' ON CONFLICT  DO NOTHING;

  `)
}
