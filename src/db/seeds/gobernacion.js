exports.seed = async function (knex) {
  await knex('gobernacion').del()

  await knex.schema.raw(`
  insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('C.P. Martín Orozco Sandoval', 'Gubernatura por el estado de AGUASCALIENTES en período [12-01-2016, 09-30-2022]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/MartinOrozcoSandoval.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[12-01-2016, 09-30-2022]'::daterange, 1
from actores_politicos where nombre_formatted = lower(unaccent('C.P. Martín Orozco Sandoval')) and puesto = 'Gubernatura por el estado de AGUASCALIENTES en período [12-01-2016, 09-30-2022]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Ing. Jaime Bonilla Valdez', 'Gubernatura por el estado de BAJA CALIFORNIA en período [11-01-2019, 10-31-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/jaime-bonilla-valdez-baja-california.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[11-01-2019, 10-31-2021]'::daterange, 2
from actores_politicos where nombre_formatted = lower(unaccent('Ing. Jaime Bonilla Valdez')) and puesto = 'Gubernatura por el estado de BAJA CALIFORNIA en período [11-01-2019, 10-31-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Mtro. Carlos Mendoza Davis', 'Gubernatura por el estado de BAJA CALIFORNIA SUR en período [09-10-2015, 09-09-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/CarlosMendozaDavis.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[09-10-2015, 09-09-2021]'::daterange, 3
from actores_politicos where nombre_formatted = lower(unaccent('Mtro. Carlos Mendoza Davis')) and puesto = 'Gubernatura por el estado de BAJA CALIFORNIA SUR en período [09-10-2015, 09-09-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Lic. Carlos Miguel Aysa González', 'Gubernatura por el estado de CAMPECHE en período [06-13-2019, 09-15-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/CarlosMiguelAysaGonzalez.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[06-13-2019, 09-15-2021]'::daterange, 4
from actores_politicos where nombre_formatted = lower(unaccent('Lic. Carlos Miguel Aysa González')) and puesto = 'Gubernatura por el estado de CAMPECHE en período [06-13-2019, 09-15-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Ing. Miguel Ángel Riquelme Solís', 'Gubernatura por el estado de COAHUILA en período [12-01-2017, 11-30-2023]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/Miguel-Angel-Riquelme-Solis.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[12-01-2017, 11-30-2023]'::daterange, 5
from actores_politicos where nombre_formatted = lower(unaccent('Ing. Miguel Ángel Riquelme Solís')) and puesto = 'Gubernatura por el estado de COAHUILA en período [12-01-2017, 11-30-2023]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Mtro. José Ignacio Peralta Sánchez', 'Gubernatura por el estado de COLIMA en período [02-11-2016, 10-31-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/JoseIgnacioPeraltaSanchez.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[02-11-2016, 10-31-2021]'::daterange, 6
from actores_politicos where nombre_formatted = lower(unaccent('Mtro. José Ignacio Peralta Sánchez')) and puesto = 'Gubernatura por el estado de COLIMA en período [02-11-2016, 10-31-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Dr. Rutilio Cruz Escandón Cadenas', 'Gubernatura por el estado de CHIAPAS en período [12-08-2018, 12-07-2024]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/Chiapas_RutilioEscandonCruzCadena.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[12-08-2018, 12-07-2024]'::daterange, 7
from actores_politicos where nombre_formatted = lower(unaccent('Dr. Rutilio Cruz Escandón Cadenas')) and puesto = 'Gubernatura por el estado de CHIAPAS en período [12-08-2018, 12-07-2024]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Lic. Javier Corral Jurado', 'Gubernatura por el estado de CHIHUAHUA en período [10-04-2016, 09-07-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/JavierCorralJurado.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[10-04-2016, 09-07-2021]'::daterange, 8
from actores_politicos where nombre_formatted = lower(unaccent('Lic. Javier Corral Jurado')) and puesto = 'Gubernatura por el estado de CHIHUAHUA en período [10-04-2016, 09-07-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Dra. Claudia Sheinbaum Pardo', 'Gubernatura por el estado de CIUDAD DE MEXICO en período [12-05-2018, 10-04-2024]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/CDMX_claudiasheinbaumpardo.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[12-05-2018, 10-04-2024]'::daterange, 9
from actores_politicos where nombre_formatted = lower(unaccent('Dra. Claudia Sheinbaum Pardo')) and puesto = 'Gubernatura por el estado de CIUDAD DE MEXICO en período [12-05-2018, 10-04-2024]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Dr. José Rosas Aispuro Torres', 'Gubernatura por el estado de DURANGO en período [09-15-2016, 09-14-2022]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/JoseRosasAispuroTorres.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[09-15-2016, 09-14-2022]'::daterange, 10
from actores_politicos where nombre_formatted = lower(unaccent('Dr. José Rosas Aispuro Torres')) and puesto = 'Gubernatura por el estado de DURANGO en período [09-15-2016, 09-14-2022]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Lic. Diego Sinhue Rodríguez Vallejo', 'Gubernatura por el estado de GUANAJUATO en período [09-26-2018, 09-25-2024]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/GTO_Diegosinhuerodriguezvallejo.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[09-26-2018, 09-25-2024]'::daterange, 11
from actores_politicos where nombre_formatted = lower(unaccent('Lic. Diego Sinhue Rodríguez Vallejo')) and puesto = 'Gubernatura por el estado de GUANAJUATO en período [09-26-2018, 09-25-2024]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Lic. Héctor Antonio Astudillo Flores', 'Gubernatura por el estado de GUERRERO en período [10-27-2015, 10-26-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/HectorAstudilloFlores.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[10-27-2015, 10-26-2021]'::daterange, 12
from actores_politicos where nombre_formatted = lower(unaccent('Lic. Héctor Antonio Astudillo Flores')) and puesto = 'Gubernatura por el estado de GUERRERO en período [10-27-2015, 10-26-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Lic. Omar Fayad Meneses', 'Gubernatura por el estado de HIDALGO en período [09-05-2016, 09-04-2022]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/OmarFayadMeneses.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[09-05-2016, 09-04-2022]'::daterange, 13
from actores_politicos where nombre_formatted = lower(unaccent('Lic. Omar Fayad Meneses')) and puesto = 'Gubernatura por el estado de HIDALGO en período [09-05-2016, 09-04-2022]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Ing. Enrique Alfaro Ramírez', 'Gubernatura por el estado de JALISCO en período [12-06-2018, 12-05-2024]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/JAL_EnriqueAlfaroRamirez.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[12-06-2018, 12-05-2024]'::daterange, 14
from actores_politicos where nombre_formatted = lower(unaccent('Ing. Enrique Alfaro Ramírez')) and puesto = 'Gubernatura por el estado de JALISCO en período [12-06-2018, 12-05-2024]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Lic. Alfredo Del Mazo Maza', 'Gubernatura por el estado de MEXICO en período [09-16-2017, 09-15-2023]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/Alfredo-Del-Mazo-Maza.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[09-16-2017, 09-15-2023]'::daterange, 15
from actores_politicos where nombre_formatted = lower(unaccent('Lic. Alfredo Del Mazo Maza')) and puesto = 'Gubernatura por el estado de MEXICO en período [09-16-2017, 09-15-2023]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Ing. Silvano Aureoles Conejo', 'Gubernatura por el estado de MICHOACAN en período [10-01-2015, 09-30-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/SilvanoAureolesConejo.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[10-01-2015, 09-30-2021]'::daterange, 16
from actores_politicos where nombre_formatted = lower(unaccent('Ing. Silvano Aureoles Conejo')) and puesto = 'Gubernatura por el estado de MICHOACAN en período [10-01-2015, 09-30-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('C. Cuauhtémoc Blanco Bravo', 'Gubernatura por el estado de MORELOS en período [10-01-2018, 09-30-2024]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/MOR_CuauhtemocBlancoBravo.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[10-01-2018, 09-30-2024]'::daterange, 17
from actores_politicos where nombre_formatted = lower(unaccent('C. Cuauhtémoc Blanco Bravo')) and puesto = 'Gubernatura por el estado de MORELOS en período [10-01-2018, 09-30-2024]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('C.P. Antonio Echevarría García', 'Gubernatura por el estado de NAYARIT en período [09-19-2017, 09-18-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/Antonio-Echevarria-Garcia.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[09-19-2017, 09-18-2021]'::daterange, 18
from actores_politicos where nombre_formatted = lower(unaccent('C.P. Antonio Echevarría García')) and puesto = 'Gubernatura por el estado de NAYARIT en período [09-19-2017, 09-18-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Ing. Jaime Heliodoro Rodríguez Calderón', 'Gubernatura por el estado de NUEVO LEON en período [07-03-2018, 10-03-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/JaimeHeliodoroRodriguezCalderon.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[07-03-2018, 10-03-2021]'::daterange, 19
from actores_politicos where nombre_formatted = lower(unaccent('Ing. Jaime Heliodoro Rodríguez Calderón')) and puesto = 'Gubernatura por el estado de NUEVO LEON en período [07-03-2018, 10-03-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Mtro. Alejandro Ismael Murat Hinojosa', 'Gubernatura por el estado de OAXACA en período [12-01-2016, 11-30-2022]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/AlejandroIsmaelMuratHinojosa.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[12-01-2016, 11-30-2022]'::daterange, 20
from actores_politicos where nombre_formatted = lower(unaccent('Mtro. Alejandro Ismael Murat Hinojosa')) and puesto = 'Gubernatura por el estado de OAXACA en período [12-01-2016, 11-30-2022]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Lic. Luis Miguel Gerónimo Barbosa Huerta', 'Gubernatura por el estado de PUEBLA en período [08-01-2019, 12-13-2024]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/MiguelBarbosaHuerta.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[08-01-2019, 12-13-2024]'::daterange, 21
from actores_politicos where nombre_formatted = lower(unaccent('Lic. Luis Miguel Gerónimo Barbosa Huerta')) and puesto = 'Gubernatura por el estado de PUEBLA en período [08-01-2019, 12-13-2024]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('M.V.Z. Francisco Domínguez Servién', 'Gubernatura por el estado de QUERETARO en período [10-01-2015, 09-30-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/FranciscoDominguezServien.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[10-01-2015, 09-30-2021]'::daterange, 22
from actores_politicos where nombre_formatted = lower(unaccent('M.V.Z. Francisco Domínguez Servién')) and puesto = 'Gubernatura por el estado de QUERETARO en período [10-01-2015, 09-30-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('C.P. Carlos Manuel Joaquín González', 'Gubernatura por el estado de QUINTANA ROO en período [09-25-2016, 09-24-2022]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/CarlosManuelJoaquinGonzalez.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[09-25-2016, 09-24-2022]'::daterange, 23
from actores_politicos where nombre_formatted = lower(unaccent('C.P. Carlos Manuel Joaquín González')) and puesto = 'Gubernatura por el estado de QUINTANA ROO en período [09-25-2016, 09-24-2022]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Dr. Juan Manuel Carreras López', 'Gubernatura por el estado de SAN LUIS POTOSI en período [09-26-2015, 09-25-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/JuanManuelCarrerasLopez.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[09-26-2015, 09-25-2021]'::daterange, 24
from actores_politicos where nombre_formatted = lower(unaccent('Dr. Juan Manuel Carreras López')) and puesto = 'Gubernatura por el estado de SAN LUIS POTOSI en período [09-26-2015, 09-25-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Mtro. Quirino Ordaz Coppel', 'Gubernatura por el estado de SINALOA en período [01-01-2017, 10-31-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/QuirinoOrdazCoppel.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[01-01-2017, 10-31-2021]'::daterange, 25
from actores_politicos where nombre_formatted = lower(unaccent('Mtro. Quirino Ordaz Coppel')) and puesto = 'Gubernatura por el estado de SINALOA en período [01-01-2017, 10-31-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Lic. Claudia Artemiza Pavlovich Arellano', 'Gubernatura por el estado de SONORA en período [09-13-2015, 09-12-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/ClaudiaPavlovichArellano.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[09-13-2015, 09-12-2021]'::daterange, 26
from actores_politicos where nombre_formatted = lower(unaccent('Lic. Claudia Artemiza Pavlovich Arellano')) and puesto = 'Gubernatura por el estado de SONORA en período [09-13-2015, 09-12-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Lic. Adán Augusto López Hernández', 'Gubernatura por el estado de TABASCO en período [01-01-2019, 09-30-2024]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/TAB_AdanAugustoLopezHernandez.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[01-01-2019, 09-30-2024]'::daterange, 27
from actores_politicos where nombre_formatted = lower(unaccent('Lic. Adán Augusto López Hernández')) and puesto = 'Gubernatura por el estado de TABASCO en período [01-01-2019, 09-30-2024]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Lic. Francisco Javier García Cabeza de Vaca', 'Gubernatura por el estado de TAMAULIPAS en período [10-01-2016, 09-30-2022]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/FranciscoJavierGarciaCabezaDeVaca.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[10-01-2016, 09-30-2022]'::daterange, 28
from actores_politicos where nombre_formatted = lower(unaccent('Lic. Francisco Javier García Cabeza de Vaca')) and puesto = 'Gubernatura por el estado de TAMAULIPAS en período [10-01-2016, 09-30-2022]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Mtro. Marco Antonio Mena Rodríguez', 'Gubernatura por el estado de TLAXCALA en período [01-01-2017, 08-30-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/MarcoAntonioMenaRodriguez.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[01-01-2017, 08-30-2021]'::daterange, 29
from actores_politicos where nombre_formatted = lower(unaccent('Mtro. Marco Antonio Mena Rodríguez')) and puesto = 'Gubernatura por el estado de TLAXCALA en período [01-01-2017, 08-30-2021]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Mtro. Cuitláhuac García Jiménez', 'Gubernatura por el estado de VERACRUZ en período [12-01-2018, 11-30-2024]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/VER_CuitlahuacGarciaJimenez2.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[12-01-2018, 11-30-2024]'::daterange, 30
from actores_politicos where nombre_formatted = lower(unaccent('Mtro. Cuitláhuac García Jiménez')) and puesto = 'Gubernatura por el estado de VERACRUZ en período [12-01-2018, 11-30-2024]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('Mtro. Mauricio Vila Dosal', 'Gubernatura por el estado de YUCATAN en período [10-01-2018, 09-30-2024]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/YUC_MauricioVilaDosal.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[10-01-2018, 09-30-2024]'::daterange, 31
from actores_politicos where nombre_formatted = lower(unaccent('Mtro. Mauricio Vila Dosal')) and puesto = 'Gubernatura por el estado de YUCATAN en período [10-01-2018, 09-30-2024]' ON CONFLICT  DO NOTHING;

insert into actores_politicos (nombre, puesto, img_url, created_at) 
values ('L.C. Alejandro Tello Cristerna', 'Gubernatura por el estado de ZACATECAS en período [09-12-2016, 09-11-2021]', 'https://envios.conago.org.mx/uploads/imagenes/gobernadores/AlejandroTelloCristerna.jpg', '2021-04-29 13:00:00') ON CONFLICT (nombre_formatted, puesto) 
DO UPDATE SET img_url = EXCLUDED.img_url;

insert into gobernacion(actor_politico_id, periodo, estado)
select id, '[09-12-2016, 09-11-2021]'::daterange, 32
from actores_politicos where nombre_formatted = lower(unaccent('L.C. Alejandro Tello Cristerna')) and puesto = 'Gubernatura por el estado de ZACATECAS en período [09-12-2016, 09-11-2021]' ON CONFLICT  DO NOTHING;

  `)
}
