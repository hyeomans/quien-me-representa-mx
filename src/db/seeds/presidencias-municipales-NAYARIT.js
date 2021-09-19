exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 18).del()
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
        'Manuel Ramon &nbsp;salcedo Osuna',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-17, 2024-09-16)'::daterange,
        null,
        1,
        18
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucrecia De Jesús Alduenda Echeagaray',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-17, 2024-09-16)'::daterange,
        'http://ahuacatlanavanza.gob.mx/',
        2,
        18
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Rafael &nbsp;sandoval &nbsp;díaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-17, 2024-09-16)'::daterange,
        'http://www.amatlan.gob.mx/',
        3,
        18
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '&nbsp;mirtha Ilian Villalvazo &nbsp;amaya',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-17, 2024-09-16)'::daterange,
        'http://www.bahiadebanderas.gob.mx/',
        4,
        18
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '&nbsp;romina Chang &nbsp;aguilar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-17, 2024-09-16)'::daterange,
        'http://www.e-compostela.gob.mx/',
        5,
        18
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eugenio Álvarez &nbsp;gómez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-17, 2024-09-16)'::daterange,
        'http://municipiodelnayar.gob.mx/',
        9,
        18
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vicente Rangel Cervantes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-17, 2024-09-16)'::daterange,
        null,
        6,
        18
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '&nbsp;elsa Nayeli Pardo Rivera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-17, 2024-09-16)'::daterange,
        'http://www.ixtlandelrio.gob.mx/',
        7,
        18
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Carrillo &nbsp;ramos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-17, 2024-09-16)'::daterange,
        'http://jalapueblomagico.gob.mx/',
        8,
        18
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-09-17, 2024-09-16)'::daterange,
        'http://www.municipiodelayesca.gob.mx',
        20,
        18
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rito Alfonso Galván Zermeño',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-17, 2024-09-16)'::daterange,
        'http://www.rosamoradanayarit.gob.mx/',
        10,
        18
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Flores Estrada',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-17, 2024-09-16)'::daterange,
        'http://ruiznayarit.gob.mx/',
        11,
        18
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Antonio Barajas López',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-17, 2024-09-16)'::daterange,
        null,
        12,
        18
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '&nbsp;isabel Cristina Coronado Rodríguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-17, 2024-09-16)'::daterange,
        'http://sanpedrolagunillas.com/',
        13,
        18
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marisa Solano &nbsp;trujillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-17, 2024-09-16)'::daterange,
        null,
        14,
        18
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo &nbsp;lugo López',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-17, 2024-09-16)'::daterange,
        'http://www.santiago-ixcuintla.gob.mx',
        15,
        18
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabino Jiménez &nbsp;huerta',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-17, 2024-09-16)'::daterange,
        'http://www.tecuala.gob.mx',
        16,
        18
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Geraldine &nbsp;ponce &nbsp;méndez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-17, 2024-09-16)'::daterange,
        null,
        17,
        18
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis&nbsp; Tovar Ruvalcaba',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-17, 2024-09-16)'::daterange,
        'http://www.tuxpan.gob.mx',
        18,
        18
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Heriberto Castañeda Ulloa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-17, 2024-09-16)'::daterange,
        'http://www.xalisco.gob.mx',
        19,
        18
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

              `)
}
