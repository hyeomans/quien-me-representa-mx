exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 12).del()
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
        'Abelina López Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Romoaldo Díaz Rosas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://acatepec.guerrero.gob.mx/',
        76,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Glorinda Casarrubias Nava',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        2,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Hugo Vega Hernández',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://ajuchitlandelprogreso.gob.mx/',
        3,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sebastián Ortiz Sayaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        4,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nelson García Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        5,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Manjarrez Miranda',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://apaxtladecastrejon.gob.mx/',
        6,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bulmaro Torres Berrum',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        7,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jonathan Moises Ensaldo Muñoz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        8,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Camilo Cano Guzmán',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://atlamajalcingodelmonte.gob.mx/',
        9,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leonardo Muñoz Tapia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        10,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Clara Elizabeth Bello Ríos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        11,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://www.ayutla.gob.mx/',
        12,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Justo Bautista',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        13,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Glafira Meraza Prudente',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://benitojuarezgro.gob.mx/',
        14,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rubén Salgado Alemán',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://buenavistadecuellar.guerrero.gob.mx/',
        15,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aldy Estebán Román',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://chilapa.guerrero.gob.mx/',
        28,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Otilia Hernández Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://www.chilpancingo.gob.mx',
        29,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Martinez Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        16,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bernardo Ponce García',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        79,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Duarte Bahena',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://cocula.gob.mx/',
        17,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe García Villalva',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        18,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julián Castro Santos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        19,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eleuterio Reyes Calleja',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        20,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ossiel Pachecho Salas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        21,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eusebio Echeverria Tabares',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        22,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgardo Miguel Paz Rojas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://ayuntamientocuajinicuilapa.gob.mx/',
        23,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hazael Aburto Ortega',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        24,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'César Iván Pérezvargas Ríos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        25,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elizabeth Mendoza Damacio',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        26,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Jaimes López',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        27,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sara Salinas Bravo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        30,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodrigo Pavón Gallardo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        31,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zesar Ortiz Torres',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        32,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Serafín Hernández Landa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        33,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aurelio Méndez Rosales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://www.huamuxtitlangro.gob.mx',
        34,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eder Nájera Nájera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        35,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Gama Pérez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://iguala.gob.mx/',
        36,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar González Álvarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        37,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eric Sandro Leal Cantú',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://iliatenco.guerrero.gob.mx/',
        78,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Naucelia Castillo Bautista',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://www.ixcateopandecuauhtemoc.gob.mx/',
        38,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Orquidia Hernández Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        77,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Carolina Costilla Villanueva',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://www.juan-rescudero.gob.mx/',
        40,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Antonio Moctezuma Flores',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://juchitan.gob.mx/',
        81,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Crescencio Reyes Torres',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://launiondeisidoromontesdeoca.gob.mx/',
        69,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Saúl Villa Adame',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        41,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Acasio Flores Guerrero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://www.malinaltepec.gob.mx/',
        42,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lincer Casiano Clemente',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        80,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jenny González Ocampo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        43,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Idelfonso Montealegre Vázquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        44,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Mosso López',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://www.ayuntamientmochitlan.gob.mx/',
        45,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Reyes Patrón',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://olinala.gob.mx/',
        46,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efrén Adame Montalván',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        47,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Austreberta López Rogel',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://ixcapuzalco.guerrero.gob.mx/',
        48,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Perfecto Javier Aguilar Silva',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://petatlan.guerrero.gob.mx/',
        49,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Velázquez Lara',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://www.pilcaya.gob.mx/',
        50,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cuauhtémoc Mastachi Aguario',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://www.pungarabato.gob.mx',
        51,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Crisoforo Castro Castro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://sites.google.com/site/quechultenangogro/home',
        52,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adair Hernández Martínez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        53,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tomás Hernández Palma',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://sanmarcos.guerrero.gob.mx/',
        54,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Conrado Mendoza Almeda',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        55,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Figueroa Mundo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://www.taxco.gob.mx',
        56,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carmen Iliana Castillo Ávila',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        57,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Yasir Deloya Díaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        58,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Homero Hurtado Flores',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        59,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Félix López Olivares',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        60,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bárbara Mercado Arce',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://www.tetipac.gob.mx/',
        61,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Moises Antonio González Cabañas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        62,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yareth Sarai Pineda Arce',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        63,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amado Basurto Gálvez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://tlacoapa.gob.mx/',
        64,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tania Mora Eguiluz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        65,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raquel García Orduño',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        66,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gilberto Solano Arreaga',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        67,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Antunez Goicochea',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        68,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Selene Sotelo Maldonado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        70,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosembert Ponciano Venegas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://xochihuehuetlan.guerrero.gob.mx/',
        71,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aceadeth Rocha Ramírez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        72,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joaquín Rosendo Luciano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        73,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Sanchéz Allec',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://zihuatanejodeazueta.gob.mx/',
        39,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tania Guadalupe Pacheco Duarte',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://www.zirandaroalavanguardia.com/',
        74,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Ramos Tecorral',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        null,
        75,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

              `)
}
