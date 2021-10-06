exports.seed = async function (knex) {
            await knex('presidencia_municipal_simplificado').where('estado_id', 4).del()
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
        'Luis Enrique Alvarado Moo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.calakmul.gob.mx',
        11,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juanita Del Rosario Cortes Moo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.calkini.gob.mx',
        2,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Biby Karen Rabelo De La Torre',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.municipiocampeche.gob.mx/',
        1,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Javier Farias Bailon',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.candelaria.gob.mx/',
        10,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Gutierrez Lazarus',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.carmen.gob.mx/home/',
        3,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudeth Sarricolea Castillejo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.champoton.gob.mx/transparencia3/index.php/es/',
        4,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Herrera Maas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'undefined',
        12,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvestre Lemus Orozco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.escarcega.gob.mx',
        9,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Dolores Brito Pech',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.hecelchakan.gob.mx',
        5,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emilio Lara Calderon',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.hopelchen.gob.mx',
        6,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angela Del Carmen Camara Damas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.palizada.gob.mx',
        7,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Magdalena Del Socorro Jimenez Pacheco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'undefined',
        13,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karla Del Rosario Uc Tuz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        8,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

              `)
            }
            