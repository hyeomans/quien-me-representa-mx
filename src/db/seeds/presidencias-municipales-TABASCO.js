exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 27).del()
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
        'Saul Plancarte Torres',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.balancan.gob.mx',
        1,
        27
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
        'Marco Antonio Gomez Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.balancan.gob.mx',
        1,
        27
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
        'María Eugenia Martinez Arechiga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.balancan.gob.mx',
        1,
        27
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
        'Pedro Montuy Nahuatl',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.balancan.gob.mx',
        1,
        27
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
        'Nazaret Gonzalez Abreu',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.balancan.gob.mx',
        1,
        27
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
        'Ramon Silvan Moralez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.balancan.gob.mx',
        1,
        27
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
        'Minerva Rocio Zacariaz Zacariaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.balancan.gob.mx',
        1,
        27
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
        'Jose Rony Bautista Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.balancan.gob.mx',
        1,
        27
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
        'Bella Aurora Cabrales Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.balancan.gob.mx',
        1,
        27
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
        'Elisbeti Balan Ehuan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.balancan.gob.mx',
        1,
        27
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
        'Salvador Hernandez Paris',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.balancan.gob.mx',
        1,
        27
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
        'Armando Beltran Tenorio',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cardenas.gob.mx',
        2,
        27
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
        'Edith Del Carmen Garcia Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cardenas.gob.mx',
        2,
        27
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
        'Rimi Sanders Cornelio Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cardenas.gob.mx',
        2,
        27
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
        'Esmeralda Ovando Cordova',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cardenas.gob.mx',
        2,
        27
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
        'Leopoldo Jimenez Valenzuela',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cardenas.gob.mx',
        2,
        27
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
        'Maria Victoria Martinez Caraveo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cardenas.gob.mx',
        2,
        27
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
        'Alipio Ortiz Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cardenas.gob.mx',
        2,
        27
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
        'Maribel Montiel Broca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cardenas.gob.mx',
        2,
        27
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
        'Alma Lila Caudillo Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cardenas.gob.mx',
        2,
        27
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
        'Lidia Cordova Montejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cardenas.gob.mx',
        2,
        27
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
        'Francisco Jimenez Escalante',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cardenas.gob.mx',
        2,
        27
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
        'Alfredo Mena Mayo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cardenas.gob.mx',
        2,
        27
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
        'Guadalupe Cruz Izquierdo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.centla.gob.mx',
        3,
        27
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
        'Eulalio Mendez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.centla.gob.mx',
        3,
        27
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
        'Maria Guadalupe Perez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.centla.gob.mx',
        3,
        27
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
        'Juan Sanchez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.centla.gob.mx',
        3,
        27
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
        'Isabel Yazmin Orueta Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.centla.gob.mx',
        3,
        27
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
        'Alfonso Velazquez Damian',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.centla.gob.mx',
        3,
        27
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
        'Yanett De La Cruz Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.centla.gob.mx',
        3,
        27
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
        'Genaro Mendoza Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.centla.gob.mx',
        3,
        27
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
        'Sandra Bribiesca Cifuentes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.centla.gob.mx',
        3,
        27
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
        'Lorena Alejandra Rodriguez Calderon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.centla.gob.mx',
        3,
        27
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
        'Rebeca Del Carmen Avalos Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.centla.gob.mx',
        3,
        27
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
        'Eligio Zurita Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.centla.gob.mx',
        3,
        27
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
        'Evaristo Hernandez Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.villahermosa.gob.mx',
        4,
        27
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
        'Jacquelin Torres Mora',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.villahermosa.gob.mx',
        4,
        27
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
        'Mauricio Harvey Priego Uicab',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.villahermosa.gob.mx',
        4,
        27
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
        'Anahi Suarez Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.villahermosa.gob.mx',
        4,
        27
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
        'Cirilo Cruz Dionisio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.villahermosa.gob.mx',
        4,
        27
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
        'Ileana Kristell Carrera Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.villahermosa.gob.mx',
        4,
        27
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
        'Mario Ramirez Cardenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.villahermosa.gob.mx',
        4,
        27
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
        'Maria De Lourdes Morales Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.villahermosa.gob.mx',
        4,
        27
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
        'Janet Hernandez De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.villahermosa.gob.mx',
        4,
        27
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
        'Teresa Patiño Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.villahermosa.gob.mx',
        4,
        27
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
        'Cloris Huerta Pablo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.villahermosa.gob.mx',
        4,
        27
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
        'Melba Rivera Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.villahermosa.gob.mx',
        4,
        27
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
        'Lorena Mendez Denis',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.comalcalco.gob.mx/',
        5,
        27
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
        'Mario Humberto Broca Lazaro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.comalcalco.gob.mx/',
        5,
        27
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
        'Ma. Angela Fleites Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.comalcalco.gob.mx/',
        5,
        27
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
        'Jesus Rodriguez Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.comalcalco.gob.mx/',
        5,
        27
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
        'Indira Graciela Jimenez Ricardez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.comalcalco.gob.mx/',
        5,
        27
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
        'Felipe Valenzuela Vera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.comalcalco.gob.mx/',
        5,
        27
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
        'Maria Elena Cordova Cordova',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.comalcalco.gob.mx/',
        5,
        27
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
        'Alciviadez De La Cruz Izquierdo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.comalcalco.gob.mx/',
        5,
        27
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
        'Marisol Rodriguez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.comalcalco.gob.mx/',
        5,
        27
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
        'Raul Olive Alamilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.comalcalco.gob.mx/',
        5,
        27
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
        'Estrella Fleites Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.comalcalco.gob.mx/',
        5,
        27
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
        'Claudia Cancino Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.comalcalco.gob.mx/',
        5,
        27
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
        'Nydia Naranjo Cobian',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cunduacan.gob.mx',
        6,
        27
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
        'Diego Arturo Escayola Zardoni',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cunduacan.gob.mx',
        6,
        27
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
        'Reyna Guillermina Soberano Peralta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cunduacan.gob.mx',
        6,
        27
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
        'Carlos Cesar Valenzuela Leyva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cunduacan.gob.mx',
        6,
        27
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
        'Rosa Elvira Gonzalez Villalobos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cunduacan.gob.mx',
        6,
        27
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
        'Antonio Martinez Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cunduacan.gob.mx',
        6,
        27
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
        'Xochilt Maria Del Rayo Melgar Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cunduacan.gob.mx',
        6,
        27
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
        'Rafael De La Cruz Madrigal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cunduacan.gob.mx',
        6,
        27
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
        'Aura Vanessa Flores Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cunduacan.gob.mx',
        6,
        27
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
        'Cindy Del Carmen Alejandro Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cunduacan.gob.mx',
        6,
        27
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
        'Pedro Suarez Cordova',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cunduacan.gob.mx',
        6,
        27
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
        'Maribel Abalos Leon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.cunduacan.gob.mx',
        6,
        27
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
        'Carlos Alberto Pascual Perez Jasso',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://emilianozapatatabasco.gob.mx/',
        7,
        27
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
        'Roman Daniel Lopez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://emilianozapatatabasco.gob.mx/',
        7,
        27
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
        'Adriana Concepcion Jimenez Govea',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://emilianozapatatabasco.gob.mx/',
        7,
        27
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
        'David Enrique Cruz Marin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://emilianozapatatabasco.gob.mx/',
        7,
        27
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
        'Ana Imelda Marin Cortes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://emilianozapatatabasco.gob.mx/',
        7,
        27
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
        'Gregorio Marenco Aguirre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://emilianozapatatabasco.gob.mx/',
        7,
        27
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
        'Wendolyne Maria Esteban Cabrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://emilianozapatatabasco.gob.mx/',
        7,
        27
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
        'Juan Jesus Arellano Correa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://emilianozapatatabasco.gob.mx/',
        7,
        27
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
        'Olia Del Carmen Díaz Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://emilianozapatatabasco.gob.mx/',
        7,
        27
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
        'Jose Eduardo Arceo Trujillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://emilianozapatatabasco.gob.mx/',
        7,
        27
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
        'Maria Guadalupe Rodriguez Gaona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://emilianozapatatabasco.gob.mx/',
        7,
        27
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
        'Jose Del Carmen Torruco Jimenez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.huimanguillo.gob.mx',
        8,
        27
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
        'Jovita Gomez Valencia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.huimanguillo.gob.mx',
        8,
        27
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
        'Manuel Antonio Herrera Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.huimanguillo.gob.mx',
        8,
        27
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
        'Nury Garduza De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.huimanguillo.gob.mx',
        8,
        27
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
        'Rafael Del Carmen Cundafe Concepcion',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.huimanguillo.gob.mx',
        8,
        27
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
        'Maribel Morales Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.huimanguillo.gob.mx',
        8,
        27
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
        'Juan Carlos Palma Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.huimanguillo.gob.mx',
        8,
        27
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
        'Silvia Salinas Palacios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.huimanguillo.gob.mx',
        8,
        27
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
        'Ruth Palma Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.huimanguillo.gob.mx',
        8,
        27
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
        'Karla Chable Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.huimanguillo.gob.mx',
        8,
        27
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
        'Sergio Sanchez Guzman',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.huimanguillo.gob.mx',
        8,
        27
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
        'Nelson Valencia Cano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.huimanguillo.gob.mx',
        8,
        27
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
        'Maria Asuncion Silvan Mendez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalapatabasco.gob.mx/',
        9,
        27
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
        'Marisela Mendez Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalapatabasco.gob.mx/',
        9,
        27
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
        'Julio Cesar Delgado Mayo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalapatabasco.gob.mx/',
        9,
        27
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
        'Maria Fernanda Moreno Evoli',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalapatabasco.gob.mx/',
        9,
        27
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
        'Elio Guzman Magaña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalapatabasco.gob.mx/',
        9,
        27
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
        'Norma Patricia Castro Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalapatabasco.gob.mx/',
        9,
        27
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
        'Wilmert Fulgencio Almeyda Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalapatabasco.gob.mx/',
        9,
        27
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
        'Elva Noemis Perez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalapatabasco.gob.mx/',
        9,
        27
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
        'Auterive Hernandez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalapatabasco.gob.mx/',
        9,
        27
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
        'Silvia Villegas Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalapatabasco.gob.mx/',
        9,
        27
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
        'Maria Del Rosario Morales Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalapatabasco.gob.mx/',
        9,
        27
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
        'Jesus Selvan Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalpademendez.gob.mx/',
        10,
        27
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
        'Antonio De La O Peralta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalpademendez.gob.mx/',
        10,
        27
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
        'Rita Del Carmen Tosca Madrigal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalpademendez.gob.mx/',
        10,
        27
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
        'Trinidad Cupil Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalpademendez.gob.mx/',
        10,
        27
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
        'Teresa Ricardez Javier',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalpademendez.gob.mx/',
        10,
        27
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
        'Pedro Magaña Cerino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalpademendez.gob.mx/',
        10,
        27
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
        'Maria Del Carmen Leon Falcon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalpademendez.gob.mx/',
        10,
        27
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
        'Joaquin Perez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalpademendez.gob.mx/',
        10,
        27
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
        'Maribel Hernandez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalpademendez.gob.mx/',
        10,
        27
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
        'Darinel Madrigal De La O',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalpademendez.gob.mx/',
        10,
        27
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
        'Claudia Hernandez Arellano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jalpademendez.gob.mx/',
        10,
        27
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
        'Francisco Alfonso Filigrana Castro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jonuta.gob.mx/',
        11,
        27
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
        'Alejandro Leon Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jonuta.gob.mx/',
        11,
        27
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
        'Lili Lopez Chan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jonuta.gob.mx/',
        11,
        27
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
        'David Manuel Estrada Chan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jonuta.gob.mx/',
        11,
        27
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
        'Rosa Del Carmen Metelin Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jonuta.gob.mx/',
        11,
        27
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
        'Antonio Perez Campo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jonuta.gob.mx/',
        11,
        27
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
        'Karla Erandy Zurita Zamacona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jonuta.gob.mx/',
        11,
        27
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
        'Atilano Gutierrez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jonuta.gob.mx/',
        11,
        27
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
        'Flor Del Cristhell Hernandez Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jonuta.gob.mx/',
        11,
        27
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
        'Carlos Mario Obrador Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jonuta.gob.mx/',
        11,
        27
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
        'Nalda Cruz Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.jonuta.gob.mx/',
        11,
        27
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
        'Mauro Winzing Negrin',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-09-05, 2021-10-04)'::daterange,
        'http://www.macuspana.gob.mx',
        12,
        27
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
        'Maria De Los Angeles Hernandez Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-09-05, 2021-10-04)'::daterange,
        'http://www.macuspana.gob.mx',
        12,
        27
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
        'Apolinar Geronimo Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-09-05, 2021-10-04)'::daterange,
        'http://www.macuspana.gob.mx',
        12,
        27
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
        'Olga Lidia Perez Veles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-09-05, 2021-10-04)'::daterange,
        'http://www.macuspana.gob.mx',
        12,
        27
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
        'Abel Antonio Falcon Falcon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-09-05, 2021-10-04)'::daterange,
        'http://www.macuspana.gob.mx',
        12,
        27
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
        'Yuliana Escalante Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-09-05, 2021-10-04)'::daterange,
        'http://www.macuspana.gob.mx',
        12,
        27
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
        'Alberto Corrigeux Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-09-05, 2021-10-04)'::daterange,
        'http://www.macuspana.gob.mx',
        12,
        27
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
        'Maria Guadalupe Garcia Alamilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-09-05, 2021-10-04)'::daterange,
        'http://www.macuspana.gob.mx',
        12,
        27
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
        'Miriam Del Carmen Montejo Alvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-09-05, 2021-10-04)'::daterange,
        'http://www.macuspana.gob.mx',
        12,
        27
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
        'Leydy Cristhell Alvarez Vasconcelos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-09-05, 2021-10-04)'::daterange,
        'http://www.macuspana.gob.mx',
        12,
        27
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
        'Deyanira Jimenez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-09-05, 2021-10-04)'::daterange,
        'http://www.macuspana.gob.mx',
        12,
        27
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
        'Alexandra Del Carmen Perez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-09-05, 2021-10-04)'::daterange,
        'http://www.macuspana.gob.mx',
        12,
        27
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
        'Janicie Contreras Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.nacajuca.gob.mx/',
        13,
        27
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
        'Belizario Lopez Almeyda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.nacajuca.gob.mx/',
        13,
        27
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
        'Sonia Perez Tosca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.nacajuca.gob.mx/',
        13,
        27
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
        'Marco Antonio Falcon Ocaña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.nacajuca.gob.mx/',
        13,
        27
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
        'Adriana Robles Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.nacajuca.gob.mx/',
        13,
        27
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
        'Ernesto Hernandez Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.nacajuca.gob.mx/',
        13,
        27
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
        'Alejandra De Los Santos De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.nacajuca.gob.mx/',
        13,
        27
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
        'Jose Luis Hernandez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.nacajuca.gob.mx/',
        13,
        27
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
        'Yuli Del Carmen Jimenez De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.nacajuca.gob.mx/',
        13,
        27
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
        'Lili Del Carmen Concepcion Ocaña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.nacajuca.gob.mx/',
        13,
        27
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
        'Francisco Donaldo Lopez Chaires',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.nacajuca.gob.mx/',
        13,
        27
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
        'Elda Viviana Peña Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.nacajuca.gob.mx/',
        13,
        27
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
        'Antonio Alejandro Almeida',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://paraiso.gob.mx/',
        14,
        27
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
        'Santiago Perez Uscanga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://paraiso.gob.mx/',
        14,
        27
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
        'Hilda Ileana Izquierdo Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://paraiso.gob.mx/',
        14,
        27
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
        'Hernan Guillermo De La Cruz Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://paraiso.gob.mx/',
        14,
        27
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
        'Cecileyvis Perez Portela',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://paraiso.gob.mx/',
        14,
        27
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
        'Raul Enrique Palma Falconi',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://paraiso.gob.mx/',
        14,
        27
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
        'Marivel Rodriguez Peres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://paraiso.gob.mx/',
        14,
        27
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
        'Jesus Trinidad Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://paraiso.gob.mx/',
        14,
        27
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
        'María Eugenia Hernandez Magaña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://paraiso.gob.mx/',
        14,
        27
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
        'Jose Enrique Morales Gil',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://paraiso.gob.mx/',
        14,
        27
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
        'Maria Dolores Martinez Cordova',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://paraiso.gob.mx/',
        14,
        27
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
        'Tomiris Dominguez Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://tacotalpa.gob.mx/pot/',
        15,
        27
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
        'Fanny Aide Hernandez Barajas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://tacotalpa.gob.mx/pot/',
        15,
        27
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
        'Efrain Vazquez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://tacotalpa.gob.mx/pot/',
        15,
        27
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
        'Otilia Antonia Cruz Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://tacotalpa.gob.mx/pot/',
        15,
        27
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
        'Joaquin Cordero Solis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://tacotalpa.gob.mx/pot/',
        15,
        27
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
        'Severiana Alonso Chavez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://tacotalpa.gob.mx/pot/',
        15,
        27
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
        'Encarnacion Sanchez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://tacotalpa.gob.mx/pot/',
        15,
        27
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
        'Reina Francisca Castro Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://tacotalpa.gob.mx/pot/',
        15,
        27
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
        'Jose Alonso Reyes Alvarado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://tacotalpa.gob.mx/pot/',
        15,
        27
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
        'Ana Maria Hernandez Potenciano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://tacotalpa.gob.mx/pot/',
        15,
        27
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
        'Gabriela Coutiño Balboa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://tacotalpa.gob.mx/pot/',
        15,
        27
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
        'Tey Mollinedo Cano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.teapa.gob.mx',
        16,
        27
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
        'Maria Josefina Falcon Cano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.teapa.gob.mx',
        16,
        27
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
        'Abel Antulio Salazar Tapia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.teapa.gob.mx',
        16,
        27
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
        'Imelda Chable Alvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.teapa.gob.mx',
        16,
        27
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
        'Joacim Chimal Dominguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.teapa.gob.mx',
        16,
        27
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
        'Alma Rosa Garibay Carrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.teapa.gob.mx',
        16,
        27
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
        'Mario Alberto Gomez Valencia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.teapa.gob.mx',
        16,
        27
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
        'Bellaney Dominguez Muñoz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.teapa.gob.mx',
        16,
        27
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
        'Melecio Cornelio Muñoz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.teapa.gob.mx',
        16,
        27
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
        'Adriana Guadalupe Alvarez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.teapa.gob.mx',
        16,
        27
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
        'Roberto Andrade Díaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.teapa.gob.mx',
        16,
        27
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
        'Raul Gustavo Gutierrez Cortes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.tenosique.gob.mx',
        17,
        27
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
        'Raymundo Rosado Ortega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.tenosique.gob.mx',
        17,
        27
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
        'Magdalena Ramirez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.tenosique.gob.mx',
        17,
        27
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
        'Joaquin Baños Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.tenosique.gob.mx',
        17,
        27
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
        'Martha Patricia Vela Suarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.tenosique.gob.mx',
        17,
        27
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
        'Lenin Gutierrez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.tenosique.gob.mx',
        17,
        27
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
        'Sarahi Marlene Maldonado Juarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.tenosique.gob.mx',
        17,
        27
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
        'Gabriel Gutierrez Brito',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.tenosique.gob.mx',
        17,
        27
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
        'Maria Del Carmen May Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.tenosique.gob.mx',
        17,
        27
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
        'Olga Patricia Castellanos Pacheco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.tenosique.gob.mx',
        17,
        27
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
        'Arnaldo Elias Jimenez Pozo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-05, 2021-10-04)'::daterange,
        'http://www.tenosique.gob.mx',
        17,
        27
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
              `)
}
