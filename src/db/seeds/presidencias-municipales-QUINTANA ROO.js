exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 23).del()
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
        'Jose Alfredo Contreras Mendez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://bacalar.gob.mx/index.html',
        10,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Elena Hermelinda Lezama Espinosa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://www.cancun.gob.mx',
        1,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juanita Obdulia Alonso Marrufo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://www.cozumel.gob.mx',
        2,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maricarmen Candelaria Hernandez Solis',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://www.felipecarrillopuerto.gob.mx',
        3,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teresa Atenea Gomez Ricalde',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://www.islamujeres.gob.mx',
        4,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erik Noe Borges Yam',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://josemariamorelos.gob.mx/index.php',
        5,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Orlando Emir Bellos Tun',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://www.lazarocardenas.gob.mx',
        6,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yensunni Idalia Martinez Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://www.opb.gob.mx',
        7,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Merali Tziu Munoz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://www.puertomorelos.gob.mx/',
        11,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roxana Lili Campos Miranda',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://gobiernodesolidaridad.gob.mx/',
        8,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marciano Dzul Caamal',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-30, 2024-09-29)'::daterange,
        'http://www.tulum.gob.mx/',
        9,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

              `)
}
