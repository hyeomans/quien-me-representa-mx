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
        'Luisa Del Carmen Camara Cabrales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-05, 2024-10-04)'::daterange,
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
        'Maria Esther Zapata Zapata',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-05, 2024-10-04)'::daterange,
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
        'Lluvia Salas Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-05, 2024-10-04)'::daterange,
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
        'Yolanda Del Carmen Osuna Huerta',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-05, 2024-10-04)'::daterange,
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
        'Gregorio Efrain Espadas Mendez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-05, 2024-10-04)'::daterange,
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
        'Jesus Abraham Cano Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-05, 2024-10-04)'::daterange,
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
        'Jose Armin Marin Saury',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-05, 2024-10-04)'::daterange,
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
        'Oscar Ferrer Abalos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-05, 2024-10-04)'::daterange,
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
        'Fernando Emilio Priego Zurita',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-05, 2024-10-04)'::daterange,
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
        'Nuris Lopez Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-05, 2024-10-04)'::daterange,
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
        'Eric Robert Garrido Argaez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-05, 2024-10-04)'::daterange,
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
        'Julio Ernesto Gutierrez Bocanegra',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-05, 2024-10-04)'::daterange,
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
        'Sheila Darlin Alvarez Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-05, 2024-10-04)'::daterange,
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
        'Ana Luisa Castellanos Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-05, 2024-10-04)'::daterange,
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
        'Ricki Antonio Arcos Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-05, 2024-10-04)'::daterange,
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
        'Alma Rosa Espadas Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-05, 2024-10-04)'::daterange,
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
        'Jorge Suarez Moreno',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-05, 2024-10-04)'::daterange,
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
