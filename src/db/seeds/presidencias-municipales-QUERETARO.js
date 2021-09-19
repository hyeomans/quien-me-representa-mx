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
        'Rosendo Anaya Águilar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Viviana Rodriguez Jurado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Agustina Martinez Arellano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Tomas Felix Gabriel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Rocio Rodriguez Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Magdalena Ugalde Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Cirenia Flores Miranda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Adolfo Hernandez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Iliana Guadalupe Montes Ríos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Ismael Marin Trejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Maria Vidal Balderas Ya?ez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Antonio Gomez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Maria Malaquias Arredondo Salda?a',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Ma. Modesta Martinez Balderas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Ofelia Del Castillo Guillen',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Lizeth Citlally Puebla Cardenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'León Enrique&nbsp; Bolaño Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Stephanie Celina Novoa Alegria',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Silvino Martinez Resendiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Yolanda Vega Villeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Ricardo Mendoza Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Hilda Xilonee Maldonado Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Alejandra Carlota Hernandez Ledesma',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Marissa Vazquez Moran',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Adan Carbajal Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Guadalupe Monserrat Gomez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'José Alejandro Ochoa Valencia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Dulce Jesus Perez Briones',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Filiberto Tapia Mu?oz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Socorro Jimenez Resendiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Emily Mariana Zu?iga Ferruzca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Jose Manuel Terrazas Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Carmen Marlene Puebla Vega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'David De La Vega Ugalde',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Maria Del Rosario Villafuerte Franco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Laura Angelica Dorantes Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Carlos Alberto Lopez Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Patricia Valle Benitez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Eduardo Rafael Montoya Bola?os',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Maria Deyanira Vega Tapia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Paola Balostro Suazo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Lennyz Melendez Chacon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Ricardo Astudillo Suarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Maria Gabriela Moreno Mayorga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Zacarias Avila Corona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Elisa Rendon Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Gloria Mendoza Salinas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Laura Susana Rangel Paredes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Francisco Ivan Galicia Casta?on',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Juana Ayala Escobar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Jose Guadalupe Garcia Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Mario Calzada Mercado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Estela Ayala Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Juan Gabriel Olvera Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Juan Aristeo Gerardo Ramirez Velazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Maria Fernanda Martinez Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Elvia Montes Trejo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Fidel Carbajal Valencia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Hevila Mendoza Montes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Jose Fabian Velazquez Chavez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Alejandra Marin Vega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Israel Perez Montes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Jose Orlando Montes Velazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Gabriela Trejo Dorantes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Leticia Servín Moya',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Maria Georgina Guzman Alvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Valentin Garcia Zepeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Ma. Cristina Orta Crespo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Guadalupe Urias Salinas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Monica Patricia Morales Duran',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Yuliana Herrera De Vicente',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Maria Guadalupe Fonseca Mora',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Celia Amador Enríquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Baldomero Palacios Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Nancy Abbigayl Hernandez Enrique',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Jesus Velazquez Ortega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Jessica Medina Correa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Gabriela Sanchez Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Maribel Salas Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Diego Jimenez Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Marina Pobce Camacho',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Juan Manuel Rangel Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Julieta Robles Amador',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Praxedis Marquez Aviles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Yeni Ivi Lozano Marquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Eva Maldonado Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Ma. Damiana Rodriguez Trejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Magda Benitez Fuentes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Isidro Amarildo Barcenas Reséndiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Ma. Del Rosio Resendiz Nieves',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Ma. Irene Evangelista Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Miguel Octavio Amezquita Jaime',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Ana Laura Ramirez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Emma Laura Landeros Vega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Ramon Malagon Silva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Sully Yanira Mauricio Sixtos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Juan Carlos Linares Águilar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Jairi Esmeralda Gudi?o Balderas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Alejandro Nieto Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Ma. Del Socorro Casas Tello',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Miriam Fabian Fabian',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Lilia Ramirez Trejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Ma. Guadalupe Alvarado Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Eleazar Munguia Olvera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Isidro Garay Pacheco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Lizbeth Silva Saldivar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Nemorio Guerrero Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Maria De La Luz Leal Espinoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Edith Lizeth Martinez Mejia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Silvia Landaverde Bocanegra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Gustavo Bueno Vega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Ma. Concepcion Olmos Pichardo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Luis Bernardo&nbsp; Nava Guerrero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Maria Concepcion Resendiz Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Juan Carlos Briz Cabrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Juanita Elias Solis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Claudio Sinecio Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Ana Maria Hernandez Colunga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Hector Julio Garcia Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Ma. De Jesus Pelagio Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Ivonne Olascoaga Correa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Juan Jose Ruiz Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Luis Gabriel Osejo Dominguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Claudia Karina Varela Najar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Jose Francisco Ramos Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Panfila Rosas Montero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Belem Ledesma Ledesma',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Maria Guadalupe Salvidar Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Orlando Barrera Robles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Maribel Arteaga Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Laura Elena Gonzalez Alvarado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Carlos Manuel Ledesma Robles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Abraham Gonzalez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Maria Pueblito Ledesma Ledesma',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Guillermo&nbsp; Vega Guerrero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Gloria Barron Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Erick Eduardo Juarez Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Judith Ortiz Monroy',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Jesus Mejia Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Celia Guadalupe Rojas Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Luz Virginia Cortes Osornio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Susana Aguila Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Lourdes Sanchez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Antonio Juan Camacho Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Primitivo Santiago Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Giovanni Andres Contestabile Borbolla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'José Antonio Mejía Lira',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Mariela Silvestre Camacho',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Jose Eduardo Nieto Soto *',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Maricruz Pacheco Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Sahid Ismael Quijada Trejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Maria Santana Resendiz Gudi?o',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Maria Ivonne Castro Chavez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Manuel Puebla Jassen',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Maria Del Carmen Martinez Cervantes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Jaime Garrido Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
        'Ma. Guadalupe Alcántara De Santiago',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.toliman.gob.mx',
        18,
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
        'Jose Ricardo Guerrero Vega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.toliman.gob.mx',
        18,
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
        'Ma. Elena Granados De Leon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.toliman.gob.mx',
        18,
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
        'Noe Santos Arellano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.toliman.gob.mx',
        18,
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
        'Ma. De La Luz Jimenez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.toliman.gob.mx',
        18,
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
        'Ana Patricia Jimenez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.toliman.gob.mx',
        18,
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
        'Karla Mariel Mu?oz Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.toliman.gob.mx',
        18,
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
        'Israel Guerrero Bocanegra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
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
