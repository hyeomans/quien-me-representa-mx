exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 25).del()
  await knex.schema.raw(`
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Guillermo Chapman Moreno',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        null,
        1,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Vicente Lopez Fuentes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        null,
        1,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ariana Sulaee Castro Bojorquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        null,
        1,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raymundo Simons Cazarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        null,
        1,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Socorro Calderon Guillen',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        null,
        1,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramon Lopez Felix',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        null,
        1,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Maria Ramos Solorzano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        null,
        1,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Amado Alvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        null,
        1,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfonso Pinto Galicia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        null,
        1,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Arce Gaxiola',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        null,
        1,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Genesis Paola Pineda Valdez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        null,
        1,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Cota Murillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        null,
        1,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Maria Lopez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        null,
        1,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aglaee Montoya Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.angostura.gob.mx',
        2,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Helen Angulo Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.angostura.gob.mx',
        2,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Sotelo Camacho',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.angostura.gob.mx',
        2,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Neyma Adamaris Garcia Gerardo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.angostura.gob.mx',
        2,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Beltran Astorga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.angostura.gob.mx',
        2,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Iris Carolina Bojórquez Bojórquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.angostura.gob.mx',
        2,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maricela De Jesus Lopez Higuera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.angostura.gob.mx',
        2,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Lorena Perez Olivas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.badiraguato.gob.mx',
        3,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Elena Quintero Felix',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.badiraguato.gob.mx',
        3,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Sanchez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.badiraguato.gob.mx',
        3,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Antonia Aguilar Payan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.badiraguato.gob.mx',
        3,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dora Alicia Rivera Germán',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.badiraguato.gob.mx',
        3,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Manuel Lopez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.badiraguato.gob.mx',
        3,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oner Gonzalo Lazcano Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.badiraguato.gob.mx',
        3,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Ruben Gil Santini',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.choix.gob.mx',
        7,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Macario Osornio Valenzuela',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.choix.gob.mx',
        7,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Miguel Cota Padilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.choix.gob.mx',
        7,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adrian Roman Gutierres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.choix.gob.mx',
        7,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lidia Villalba Cota',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.choix.gob.mx',
        7,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Baldemar Valdez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.choix.gob.mx',
        7,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricarda Del Carmen Perez Atondo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.choix.gob.mx',
        7,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Felipe Garzon Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.concordia.gob.mx',
        4,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Eusebio Garzon Padilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.concordia.gob.mx',
        4,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yanira Paulette Tirado Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.concordia.gob.mx',
        4,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Alberto Ornelas Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.concordia.gob.mx',
        4,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Carmen Reyes Tisnado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.concordia.gob.mx',
        4,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tania Patricia Barrón Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.concordia.gob.mx',
        4,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eyleen Abbigail Garzon Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.concordia.gob.mx',
        4,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Griselda Quintana Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cosala.gob.mx',
        5,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ofelia Esceverre Ontiveros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cosala.gob.mx',
        5,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Marti Navarro Aragon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cosala.gob.mx',
        5,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Aimee Avendaño Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cosala.gob.mx',
        5,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Giovanni Verenice Mendoza Aguirre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cosala.gob.mx',
        5,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jonathan Saucedo Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cosala.gob.mx',
        5,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Socorro Martinez Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cosala.gob.mx',
        5,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Estrada Ferreiro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        'http://www.culiacan.gob.mx/',
        6,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Manuel Uribe Padilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        'http://www.culiacan.gob.mx/',
        6,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adriana Yareli Sanchez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        'http://www.culiacan.gob.mx/',
        6,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Beltran Coronel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        'http://www.culiacan.gob.mx/',
        6,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angelina Maricela Gutierrez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        'http://www.culiacan.gob.mx/',
        6,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Gonzalez Cervantes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        'http://www.culiacan.gob.mx/',
        6,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Valle Camacho',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        'http://www.culiacan.gob.mx/',
        6,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Santiago Vidrio Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        'http://www.culiacan.gob.mx/',
        6,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eusebio Manuel Telles Molina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        'http://www.culiacan.gob.mx/',
        6,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Robespierre Lizarraga Otero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        'http://www.culiacan.gob.mx/',
        6,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Elisa Palazuelos Arenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        'http://www.culiacan.gob.mx/',
        6,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Alfonso Garcia Calderon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        'http://www.culiacan.gob.mx/',
        6,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Antonia Sarabia Ibarra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-11-01, 2021-09-30)'::daterange,
        'http://www.culiacan.gob.mx/',
        6,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nubia Xiclali Ramos Carbajal',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.elfuerte.gob.mx/index.php',
        10,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jocelyn Paola Peraza Chavarin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.elfuerte.gob.mx/index.php',
        10,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marte Velazquez Quiñonez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.elfuerte.gob.mx/index.php',
        10,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Celida Vega Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.elfuerte.gob.mx/index.php',
        10,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adrian Jimenez Conde',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.elfuerte.gob.mx/index.php',
        10,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Trinidad Gamez Vea',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.elfuerte.gob.mx/index.php',
        10,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Eloy Manzanarez Gastelum',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.elfuerte.gob.mx/index.php',
        10,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yuniva Guadalupe Camargo Sandoval',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.elfuerte.gob.mx/index.php',
        10,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Javier Flores López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.elfuerte.gob.mx/index.php',
        10,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Maria Martinez Cañedo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.elfuerte.gob.mx/index.php',
        10,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angel Geovani Escobar Manjarrez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.elota.gob.mx',
        8,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tomas Ramirez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.elota.gob.mx',
        8,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Graciela Alvarez Fregoso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.elota.gob.mx',
        8,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Alfredo Gaxiola Vega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.elota.gob.mx',
        8,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olga Lidia Garcia Gastelum',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.elota.gob.mx',
        8,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramón Quintero Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.elota.gob.mx',
        8,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Viridiana Camacho Millan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.elota.gob.mx',
        8,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emmett Soto Grave',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.escuinapa.gob.mx',
        9,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Fernando Ibarra Corona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.escuinapa.gob.mx',
        9,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Elena Lopez Corona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.escuinapa.gob.mx',
        9,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alberto Ramos Corona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.escuinapa.gob.mx',
        9,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Minerva Guadalupe Garate Huerta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.escuinapa.gob.mx',
        9,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santiago Lora Oliva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.escuinapa.gob.mx',
        9,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayra Guadalupe Andrade Padilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.escuinapa.gob.mx',
        9,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santos De Jesus Gomez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.escuinapa.gob.mx',
        9,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lizbeht Medina Tiznado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.escuinapa.gob.mx',
        9,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramon Gaspar Sarabia Toledo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.escuinapa.gob.mx',
        9,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Aurelia Leal Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.guasave.gob.mx/',
        11,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Yolanda Dagnino Camacho',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.guasave.gob.mx/',
        11,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Heriberto Castañeda Valerio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.guasave.gob.mx/',
        11,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Evangelina Llanes Carreon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.guasave.gob.mx/',
        11,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodrigo Margarito Miranda Olguin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.guasave.gob.mx/',
        11,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Dolores Franco Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.guasave.gob.mx/',
        11,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Ayala León',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.guasave.gob.mx/',
        11,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuela Rebeca Bañuelos Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.guasave.gob.mx/',
        11,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nidia Gaxiola Gutiérrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.guasave.gob.mx/',
        11,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reynaldo Castro Angulo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.guasave.gob.mx/',
        11,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Ramon Lopez Graciano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.guasave.gob.mx/',
        11,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leonila Elizabeth Ordorica Rabago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.guasave.gob.mx/',
        11,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Antonio Figueroa Batiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.guasave.gob.mx/',
        11,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Guillermo Benitez Torres',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mazatlan.gob.mx/',
        12,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Manuel Villalobos Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mazatlan.gob.mx/',
        12,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paulina Guadalupe Osuna Castañeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mazatlan.gob.mx/',
        12,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodolfo Cardona Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mazatlan.gob.mx/',
        12,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santa Del Carmen Tirado Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mazatlan.gob.mx/',
        12,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Alberto Lizarraga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mazatlan.gob.mx/',
        12,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Elizabeth Rios Peña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mazatlan.gob.mx/',
        12,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adalberto Valle Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mazatlan.gob.mx/',
        12,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Aguilar Soto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mazatlan.gob.mx/',
        12,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Teresa Nuñez Millan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mazatlan.gob.mx/',
        12,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Michel Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mazatlan.gob.mx/',
        12,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Isabel Gamboa Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mazatlan.gob.mx/',
        12,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe De Jesus Velarde Sandoval',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mazatlan.gob.mx/',
        12,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Guillermo Galindo Castro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mocorito.gob.mx/',
        13,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Valerio Guadalupe Cervantez Gastelum',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mocorito.gob.mx/',
        13,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dalila Alondra Felix Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mocorito.gob.mx/',
        13,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Medardo Serrano Soto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mocorito.gob.mx/',
        13,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tamara Gil Chairez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mocorito.gob.mx/',
        13,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Daniel Robles Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mocorito.gob.mx/',
        13,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudio Lopez Camacho',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mocorito.gob.mx/',
        13,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ahymara Karina Lora Ibarra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mocorito.gob.mx/',
        13,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Alonso Belmontes Rubio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mocorito.gob.mx/',
        13,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Heidy Dannel Sillas Lara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.mocorito.gob.mx/',
        13,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eliazar Gutierrez Angulo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.navolato.gob.mx/',
        18,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eleazar Zazueta Camargo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.navolato.gob.mx/',
        18,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Macrina Espinoza Salmoran',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.navolato.gob.mx/',
        18,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Carlos Trujillo Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.navolato.gob.mx/',
        18,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Obdulia González Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.navolato.gob.mx/',
        18,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Santana Palma Leon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.navolato.gob.mx/',
        18,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Luz Cuevas López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.navolato.gob.mx/',
        18,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leonel Aguirre Meza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.navolato.gob.mx/',
        18,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Trapero Rojo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.navolato.gob.mx/',
        18,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adilene Zavala Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.navolato.gob.mx/',
        18,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Antonio Pineda Domínguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rosario.gob.mx',
        14,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santos Cruz Alcaraz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rosario.gob.mx',
        14,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Yolanda Gutiérrez Montoya',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rosario.gob.mx',
        14,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Nuñez Ríos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rosario.gob.mx',
        14,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gloria Margarita Santos Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rosario.gob.mx',
        14,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Rogelio Lizárraga Ontiveros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rosario.gob.mx',
        14,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Carmen Moreno Rios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rosario.gob.mx',
        14,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Salvador Guerra Anguiano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rosario.gob.mx',
        14,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Osmara Karimme Herrera Paredes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rosario.gob.mx',
        14,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Manuel Martinez Madrigal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rosario.gob.mx',
        14,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- - - -',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-10-09, 2021-09-30)'::daterange,
        'http://www.salvadoralvarado.gob.mx',
        15,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Lopez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-10-09, 2021-09-30)'::daterange,
        'http://www.salvadoralvarado.gob.mx',
        15,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Del Rocio Chimal Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-10-09, 2021-09-30)'::daterange,
        'http://www.salvadoralvarado.gob.mx',
        15,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Manuel Lopez Miramontes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-10-09, 2021-09-30)'::daterange,
        'http://www.salvadoralvarado.gob.mx',
        15,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nora Sosa Valencia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-10-09, 2021-09-30)'::daterange,
        'http://www.salvadoralvarado.gob.mx',
        15,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Everardo Melendrez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-10-09, 2021-09-30)'::daterange,
        'http://www.salvadoralvarado.gob.mx',
        15,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Patricia Dautt Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-10-09, 2021-09-30)'::daterange,
        'http://www.salvadoralvarado.gob.mx',
        15,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gilberto Lugo Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-10-09, 2021-09-30)'::daterange,
        'http://www.salvadoralvarado.gob.mx',
        15,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Romeo Gelinec Galindo Inzunza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-10-09, 2021-09-30)'::daterange,
        'http://www.salvadoralvarado.gob.mx',
        15,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz Zita Vizcarra Burvoa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-10-09, 2021-09-30)'::daterange,
        'http://www.salvadoralvarado.gob.mx',
        15,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ivan Ernesto Baez Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanignacio.gob.mx',
        16,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Giovanni Garcia Camacho',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanignacio.gob.mx',
        16,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Guadalupe Sicairos Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanignacio.gob.mx',
        16,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Trinidad Rios Vega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanignacio.gob.mx',
        16,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Astorga Covarrubias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanignacio.gob.mx',
        16,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yanira Elizabeth Arellano Manjarrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanignacio.gob.mx',
        16,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joaquin Larrañaga Zuñiga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanignacio.gob.mx',
        16,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Beatrizleon Leon Rubio',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        17,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Los Angeles Lugo Cardenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        17,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Adrian Llanes Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        17,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Guadalupe Muñoz Ibarra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        17,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cristian Josue Rodriguez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        17,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Rosio Verduzco Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        17,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Roman Rubio Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        17,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oralia Valdez Bojórquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        17,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abel De Jesus Camacho Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        17,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nadia López Bojorquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        17,
        25
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
              `)
}
