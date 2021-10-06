exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 9).del()
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
        'Lia Limón García',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.dao.gob.mx/',
        10,
        9
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Saldaña Hernández',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://azcapotzalco.cdmx.gob.mx/',
        2,
        9
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santiago Taboada Cortina',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.delegacionbenitojuarez.gob.mx/',
        14,
        9
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Giovani Gutiérrez Aguilar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://coyoacan.cdmx.gob.mx/',
        3,
        9
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adrián Rubalcava Suárez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        4,
        9
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Xantall Cuevas Nieves',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://alcaldiacuauhtemoc.mx/',
        15,
        9
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Chiguil Figueroa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.gamadero.gob.mx/',
        5,
        9
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raúl Armando Quintero Martínez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.iztacalco.cdmx.gob.mx/inicio/index.php',
        6,
        9
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Clara Marina Brugada Molina',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.iztapalapa.cdmx.gob.mx/',
        7,
        9
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Gerardo Quijano Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://mcontreras.gob.mx/',
        8,
        9
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mauricio Tabe Echartea',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://alcaldia.miguelhidalgo.gob.mx/',
        16,
        9
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Judith Venegas Tapia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.milpa-alta.cdmx.gob.mx/',
        9,
        9
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Araceli Berenice Hernández Calderón',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.tlahuac.cdmx.gob.mx',
        11,
        9
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfa Eliana González Magallanes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.tlalpan.gob.mx',
        12,
        9
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Evelyn Parra Álvarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.vcarranza.cdmx.gob.mx/',
        17,
        9
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Carlos Acosta Ruiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://xochimilco.gob.mx/',
        13,
        9
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

              `)
}
