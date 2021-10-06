exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 22).del()
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
        'Rene Mejia Montoya',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        1,
        22
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ofelia Del Castillo Guillen',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.arroyoseco.gob.mx',
        2,
        22
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Martinez Peñaloza Peñaloza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        3,
        22
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leopoldo Barcenas Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.colon.gob.mx',
        4,
        22
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Sosa Pichardo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.corregidora.gob.mx/',
        5,
        22
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Vega Carriles',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.elmarques.gob.mx',
        10,
        22
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Magda Guadalupe Perez Montes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.ezequielmontes.gob.mx/',
        6,
        22
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Guzman Cabrera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.huimilpan.gob.mx',
        7,
        22
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efrain Muñoz Cosme',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.municipiodejalpan.gob.mx/',
        8,
        22
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marina Ponce Camacho',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.landadematamorosqro.gob.mx',
        9,
        22
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isidro Amarildo Barcenas Resendiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.pedroescobedo.gob.mx',
        11,
        22
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Linares Aguilar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.penamiller.gob.mx',
        12,
        22
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Guadalupe Ramirez Plaza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.pinaldeamoles.gob.mx',
        13,
        22
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Bernardo Nava Guerrero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.municipiodequeretaro.gob.mx/',
        14,
        22
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Manuel Ledesma Robles',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.sanjoaquin.gob.mx',
        15,
        22
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Carlos Cabrera Valencia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.sanjuandelrio.gob.mx',
        16,
        22
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Antonio Mejia Lira',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.municipiodetequisquiapan.net/',
        17,
        22
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Guadalupe Alcantara De Santiago',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.toliman.gob.mx',
        18,
        22
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

              `)
}
