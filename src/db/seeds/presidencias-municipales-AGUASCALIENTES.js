exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 1).del()
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
        'Maria Teresa Jimenez Esquivel',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.ags.gob.mx',
        1,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edson Ruben Camarillo Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.ags.gob.mx',
        1,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mirna Rubiela Medina Ruvalcaba',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.ags.gob.mx',
        1,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Due?as Macias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.ags.gob.mx',
        1,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reyna Cristina Espinoza Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.ags.gob.mx',
        1,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Mu?oz De Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.ags.gob.mx',
        1,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Cristina Villase?or Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.ags.gob.mx',
        1,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Christian Salvador Gutierrez Marquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.ags.gob.mx',
        1,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Berenice Anahi Romo Tapia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.ags.gob.mx',
        1,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Salvador Estrada Escobedo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.ags.gob.mx',
        1,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Israel Tagosam Salazar Imamura Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.ags.gob.mx',
        1,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Javier Quezada Loera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.ags.gob.mx',
        1,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Karola Macias Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.ags.gob.mx',
        1,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sanjuana Martinez Melendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.ags.gob.mx',
        1,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edith Citlalli Rodriguez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.ags.gob.mx',
        1,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Luis Jasso Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.asientos.gob.mx',
        2,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Mu?oz Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.asientos.gob.mx',
        2,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De Jesus Medina Due?as',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.asientos.gob.mx',
        2,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Arturo Ortega Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.asientos.gob.mx',
        2,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amanda Candelas Villanueva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.asientos.gob.mx',
        2,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Maria Flores Rangel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.asientos.gob.mx',
        2,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angel Llamas Collazo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.asientos.gob.mx',
        2,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Virgilio Martinez Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.asientos.gob.mx',
        2,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Ivon Esquivel Salas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.asientos.gob.mx',
        2,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adan Valdivia Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        3,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Lopez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        3,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Cecilia Medina Delgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        3,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guillermo Contreras Blancas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        3,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Luisa Hernandez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        3,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Ponce Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        3,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alina Selene Rodriguez Gaytan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        3,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Martha Viramontes Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        3,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eusebio Enrique Delgado Esparza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        4,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isabel Nava Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        4,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Leticia Moya Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        4,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Isaac Contreras Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        4,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Lourdes Estrada Acosta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        4,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo Padilla Adame',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        4,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anahi Estrada Aranda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        4,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cezar Pedroza Ortega',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.municipiodeelllano.gob.mx/',
        11,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jhovany Salvador Hernandez Gallardo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.municipiodeelllano.gob.mx/',
        11,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Deisi Reyes Peralta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.municipiodeelllano.gob.mx/',
        11,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eleuterio Davila Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.municipiodeelllano.gob.mx/',
        11,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramiro Salas Piza?a',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.municipiodeelllano.gob.mx/',
        11,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Belen Martinez Quezada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.municipiodeelllano.gob.mx/',
        11,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariela Delgado Espinoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.municipiodeelllano.gob.mx/',
        11,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Antonio Arambula Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.jesusmaria.gob.mx',
        5,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ismael Alvarado De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.jesusmaria.gob.mx',
        5,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Cristina Avila Esquivel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.jesusmaria.gob.mx',
        5,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo Bernal Mu?oz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.jesusmaria.gob.mx',
        5,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Del Rosario De Luna Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.jesusmaria.gob.mx',
        5,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yamid Arfaxad Mares Chavez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.jesusmaria.gob.mx',
        5,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De Los Angeles De La Cruz Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.jesusmaria.gob.mx',
        5,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karla Arely Espinoza Esparza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.jesusmaria.gob.mx',
        5,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Blanca Narro Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.jesusmaria.gob.mx',
        5,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cuauhtemoc Escobedo Tejada',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.municipiopabellonags.gob.mx',
        6,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efrain Guevara Araiza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.municipiopabellonags.gob.mx',
        6,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Flor Jazmin Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.municipiopabellonags.gob.mx',
        6,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Humberto Rodriguez Trinidad',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.municipiopabellonags.gob.mx',
        6,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Arcelia Flores Olivares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.municipiopabellonags.gob.mx',
        6,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Topiltzin Regalado Cardona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.municipiopabellonags.gob.mx',
        6,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Molina Meraz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.municipiopabellonags.gob.mx',
        6,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elvia Maricela Mauricio Valdez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.municipiopabellonags.gob.mx',
        6,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Janie Villanueva Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.municipiopabellonags.gob.mx',
        6,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Prieto Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.rinconderomos.gob.mx',
        7,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Arturo Guillen Palacios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.rinconderomos.gob.mx',
        7,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lauren Giselle Duron Avila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.rinconderomos.gob.mx',
        7,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Octavio Casta?eda De Velasco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.rinconderomos.gob.mx',
        7,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Concepcion Irene Garcia Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.rinconderomos.gob.mx',
        7,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Javier Rivera Luevano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.rinconderomos.gob.mx',
        7,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Luevano Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.rinconderomos.gob.mx',
        7,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia Luevano Mu?oz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.rinconderomos.gob.mx',
        7,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gonzaga Castillo Pe?aloza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.rinconderomos.gob.mx',
        7,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Jose Losoya Ponce',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.sanfranciscodelosromo.gob.mx',
        10,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Octavio Ramirez Gallegos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.sanfranciscodelosromo.gob.mx',
        10,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Victoria Arteaga Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.sanfranciscodelosromo.gob.mx',
        10,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudio Miguel Delgado Femat',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.sanfranciscodelosromo.gob.mx',
        10,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carolina Beltran Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.sanfranciscodelosromo.gob.mx',
        10,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Alberto Sandoval Ruvalcaba',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.sanfranciscodelosromo.gob.mx',
        10,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amelia Casta?eda Macias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.sanfranciscodelosromo.gob.mx',
        10,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irene Elizabeth Mu?oz Padilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.sanfranciscodelosromo.gob.mx',
        10,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Silvia Santos Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.sanfranciscodelosromo.gob.mx',
        10,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Cristina Lopez Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        8,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karina Almendaris Santos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        8,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Manuel Najera Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        8,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramona Mu?oz Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        8,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yarenci Margarita Burgos Suarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        8,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Tonatiuh Villase?or Alvarado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        8,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Imelda Llamas Tavarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        null,
        8,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Israel Camarillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.tepezala.gob.mx',
        9,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angel Olivares Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.tepezala.gob.mx',
        9,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Celina Reyes Encina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.tepezala.gob.mx',
        9,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Guillen Tuelles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.tepezala.gob.mx',
        9,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sonia Yessenia Cruz Macias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.tepezala.gob.mx',
        9,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mercedes Vargas Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.tepezala.gob.mx',
        9,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Loza Soto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-10-15, 2021-10-14)'::daterange,
        'http://www.tepezala.gob.mx',
        9,
        1
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
              `)
}
