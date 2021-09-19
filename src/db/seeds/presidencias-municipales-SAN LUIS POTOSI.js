exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 24).del()
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
        'Federico Monsivais Rojas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ahualulco-slp.gob.mx/2018-2021/index.php',
        1,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wendy Concepcion Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ahualulco-slp.gob.mx/2018-2021/index.php',
        1,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Mancilla Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ahualulco-slp.gob.mx/2018-2021/index.php',
        1,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zaira Sarai Niño Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ahualulco-slp.gob.mx/2018-2021/index.php',
        1,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paola Sujeit Sias Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ahualulco-slp.gob.mx/2018-2021/index.php',
        1,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alba Berenisse Sarahi Castro Sias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ahualulco-slp.gob.mx/2018-2021/index.php',
        1,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De Jesus Zapata Escobedo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ahualulco-slp.gob.mx/2018-2021/index.php',
        1,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Florisela Hernandez Chavez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        2,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efrain Hernandez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        2,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Manuel Martinez Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        2,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ismael Montalban Balleza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        2,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amparo Torres Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        2,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paula Martinez Costilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        2,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elizabeth Gamez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        2,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Suarez Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.aquismon-slp.gob.mx/2018-2021/',
        3,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Guadalupe Martinez Rubio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.aquismon-slp.gob.mx/2018-2021/',
        3,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Altamirano Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.aquismon-slp.gob.mx/2018-2021/',
        3,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rolando Gamez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.aquismon-slp.gob.mx/2018-2021/',
        3,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santos Ricardo Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.aquismon-slp.gob.mx/2018-2021/',
        3,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Landaverde Lara Gloria',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.aquismon-slp.gob.mx/2018-2021/',
        3,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia Marquez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.aquismon-slp.gob.mx/2018-2021/',
        3,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sara Alvarez Rivera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        4,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos German Rico Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        4,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martin Garcia Briseño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        4,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Valentin Vazquez Escalante',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        4,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Escalante Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        4,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roman De Jesus Martinez Maldonado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        4,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Elsa Ramirez Monsivais',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        4,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jovanny De Jesus Ramon Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        54,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Martinez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        54,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Ivan Galvan Lara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        54,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Antonio Perez Jonguitud',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        54,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esmeralda Hernandez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        54,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Griselda Pozos Grijalva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        54,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Consuelo Martinez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        54,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Omar Muñoz Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cardenas-slp.gob.mx/2018-2021/index.php',
        5,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Eloy Guadalupe Azua',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cardenas-slp.gob.mx/2018-2021/index.php',
        5,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Alberto Barragan Izaguirre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cardenas-slp.gob.mx/2018-2021/index.php',
        5,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Antonio Perales Duque',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cardenas-slp.gob.mx/2018-2021/index.php',
        5,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Vazquez Villa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cardenas-slp.gob.mx/2018-2021/index.php',
        5,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Carmen Montaño Uresti',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cardenas-slp.gob.mx/2018-2021/index.php',
        5,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Dolores Pineda Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cardenas-slp.gob.mx/2018-2021/index.php',
        5,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Guadalupe Carrillo Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.catorce-slp.gob.mx/2018-2021/',
        6,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Lopez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.catorce-slp.gob.mx/2018-2021/',
        6,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ernesto Coronado Hermosillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.catorce-slp.gob.mx/2018-2021/',
        6,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jonathan Banda Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.catorce-slp.gob.mx/2018-2021/',
        6,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Guillermo Guerrero Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.catorce-slp.gob.mx/2018-2021/',
        6,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sonia Garcia Aguilar Juana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.catorce-slp.gob.mx/2018-2021/',
        6,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pascuala Beltran Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.catorce-slp.gob.mx/2018-2021/',
        6,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Homero Mata Camarillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        7,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Cristina Mata Molina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        7,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Ignacio Vazquez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        7,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Soto Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        7,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonia Morales Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        7,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ericka Judith Diaz Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        7,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisca Elorza Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        7,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Leticia Vazquez Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cerritos-slp.gob.mx/',
        8,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Joel Zapata Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cerritos-slp.gob.mx/',
        8,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Perez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cerritos-slp.gob.mx/',
        8,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Porfirio Turrubiartes Muñiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cerritos-slp.gob.mx/',
        8,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Garcia Escalante',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cerritos-slp.gob.mx/',
        8,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Federico Castillo Vera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cerritos-slp.gob.mx/',
        8,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Perla Del Rocio Fajardo Alejos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cerritos-slp.gob.mx/',
        8,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Rosaura Loredo Loredo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodecerrodesanpedro.gob.mx',
        9,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Refugio Gomez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodecerrodesanpedro.gob.mx',
        9,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Manuel Villanueva Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodecerrodesanpedro.gob.mx',
        9,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Roman Magdaleno Tobias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodecerrodesanpedro.gob.mx',
        9,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Villagran Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodecerrodesanpedro.gob.mx',
        9,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Natalia Nava Sandoval',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodecerrodesanpedro.gob.mx',
        9,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carolina Solis Chavez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodecerrodesanpedro.gob.mx',
        9,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Lopez Lara',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.charcas-slp.gob.mx',
        15,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Rosario Cazares -',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.charcas-slp.gob.mx',
        15,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Silva Blanco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.charcas-slp.gob.mx',
        15,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Siboney Bustos Bustos Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.charcas-slp.gob.mx',
        15,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose De Jesus Becerra Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.charcas-slp.gob.mx',
        15,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karen Samara Vigil Avelino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.charcas-slp.gob.mx',
        15,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Olivarez Landeros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.charcas-slp.gob.mx',
        15,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mireya Vancini Villanueva',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ciudaddelmaizslp.gob.mx',
        10,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erasmo Castillo Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ciudaddelmaizslp.gob.mx',
        10,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gregorio Esquivel Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ciudaddelmaizslp.gob.mx',
        10,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Ramirez Tovar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ciudaddelmaizslp.gob.mx',
        10,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sarita Tovar Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ciudaddelmaizslp.gob.mx',
        10,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wendy Tovar Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ciudaddelmaizslp.gob.mx',
        10,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bianca Vianney Jimenez Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ciudaddelmaizslp.gob.mx',
        10,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Alfredo Perez Ortiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cdfernandez-slp.gob.mx/index.php',
        11,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yessica Guadalupe Mendez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cdfernandez-slp.gob.mx/index.php',
        11,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Isabel Bocanegra Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cdfernandez-slp.gob.mx/index.php',
        11,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Clara Susana Ramos Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cdfernandez-slp.gob.mx/index.php',
        11,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Los Angeles Hernandez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cdfernandez-slp.gob.mx/index.php',
        11,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Vianey Medina Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cdfernandez-slp.gob.mx/index.php',
        11,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Isabel Montoya Rubio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.cdfernandez-slp.gob.mx/index.php',
        11,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adrian Esper Cardenas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://vallesslp.gob.mx/',
        13,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Del Socorro Calderon Juarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://vallesslp.gob.mx/',
        13,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://vallesslp.gob.mx/',
        13,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ibeth Arenas Vidales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.coxcatlan-slp.gob.mx/',
        14,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Garcia Gamboa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.coxcatlan-slp.gob.mx/',
        14,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Ramirez Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.coxcatlan-slp.gob.mx/',
        14,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Flores Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.coxcatlan-slp.gob.mx/',
        14,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tranquilino Ramirez Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.coxcatlan-slp.gob.mx/',
        14,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yulia Guetsemani Sanchez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.coxcatlan-slp.gob.mx/',
        14,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carmela Hernandez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.coxcatlan-slp.gob.mx/',
        14,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Crispin Ordaz Trujillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://municipioebanoslp.wixsite.com/ebanoslp',
        16,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Virginia Del Angel Cervantes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://municipioebanoslp.wixsite.com/ebanoslp',
        16,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Alejandro Gamez Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://municipioebanoslp.wixsite.com/ebanoslp',
        16,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Castro Avila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://municipioebanoslp.wixsite.com/ebanoslp',
        16,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Soledad Carreño Linares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://municipioebanoslp.wixsite.com/ebanoslp',
        16,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Portales Avila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://municipioebanoslp.wixsite.com/ebanoslp',
        16,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nora Maribell Guzman Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://municipioebanoslp.wixsite.com/ebanoslp',
        16,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eliseo Rodriguez De Leon',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        57,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Rafaela Banda Muñiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        57,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eleazar Gutierrez Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        57,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Mendez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        57,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Jakelin Carrasco Lizardi',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        57,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Isela Enriquez Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        57,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Celia Emilia Tinajero De Leon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        57,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Francisco Perez Zapata',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.guadalcazar-slp.gob.mx/',
        17,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonia Llamas Agundis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.guadalcazar-slp.gob.mx/',
        17,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joaquin Lara Grimaldo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.guadalcazar-slp.gob.mx/',
        17,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yazmin Aguilar Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.guadalcazar-slp.gob.mx/',
        17,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Ofelia Jimenez Segura',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.guadalcazar-slp.gob.mx/',
        17,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maritza Castañeda Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.guadalcazar-slp.gob.mx/',
        17,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Cruz Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.guadalcazar-slp.gob.mx/',
        17,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Antonio Olivares Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://huehuetlan-slp.gob.mx',
        18,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Virginia Martinez Espinosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://huehuetlan-slp.gob.mx',
        18,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Enrique Enriquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://huehuetlan-slp.gob.mx',
        18,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Janeth Hernandez Soni',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://huehuetlan-slp.gob.mx',
        18,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Del Consuelo Suarez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://huehuetlan-slp.gob.mx',
        18,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paulina Hernandez Josefa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://huehuetlan-slp.gob.mx',
        18,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arnulfa Hernandez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://huehuetlan-slp.gob.mx',
        18,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejo Olvera Olvera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.lagunillas.gob.mx/turistico/inicio.php',
        19,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Iris Yael Hernandez Estrada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.lagunillas.gob.mx/turistico/inicio.php',
        19,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Crisogono Calixto Tello',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.lagunillas.gob.mx/turistico/inicio.php',
        19,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Gregorio Andrade Mancilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.lagunillas.gob.mx/turistico/inicio.php',
        19,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Ramirez Tello',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.lagunillas.gob.mx/turistico/inicio.php',
        19,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcela Ramirez Montalvo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.lagunillas.gob.mx/turistico/inicio.php',
        19,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cindy Jimenez Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.lagunillas.gob.mx/turistico/inicio.php',
        19,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Alejandro Segovia Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.matehuala.gob.mx/',
        20,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvia Elena Rodriguez Medellin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.matehuala.gob.mx/',
        20,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Jeronimo Medrano Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.matehuala.gob.mx/',
        20,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Homero Perez Lucio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.matehuala.gob.mx/',
        20,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Herrera Velazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.matehuala.gob.mx/',
        20,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriel Medellin Varela',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.matehuala.gob.mx/',
        20,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Juan Candelaria Partida',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.matehuala.gob.mx/',
        20,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guillermo Eliseo Yrizar Tamayo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.matehuala.gob.mx/',
        20,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandra Maldonado Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.matehuala.gob.mx/',
        20,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Lorena Vazquez Sifuentes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.matehuala.gob.mx/',
        20,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Estela Vivanco Cossio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.matehuala.gob.mx/',
        20,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rubi Stephani Torres Parra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.matehuala.gob.mx/',
        20,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Elia Ortega Abrego',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.matehuala.gob.mx/',
        20,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karina Rivera Obregon',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.matlapa.gob.mx/',
        58,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Saturnino Sagahon Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.matlapa.gob.mx/',
        58,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aurelio Sanchez Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.matlapa.gob.mx/',
        58,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lemuel Vega Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.matlapa.gob.mx/',
        58,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Arturo Barrera Botello',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.matlapa.gob.mx/',
        58,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Isabel Sanchez Calleja',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.matlapa.gob.mx/',
        58,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Rosa Hernandez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.matlapa.gob.mx/',
        58,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Perez Rojas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://mexquiticdecarmona-slp.gob.mx/2018-2021/',
        21,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olivia Lopez Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://mexquiticdecarmona-slp.gob.mx/2018-2021/',
        21,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Melisa Anahi Quistian Rangel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://mexquiticdecarmona-slp.gob.mx/2018-2021/',
        21,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yesennia Guadalupe Ramirez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://mexquiticdecarmona-slp.gob.mx/2018-2021/',
        21,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marisol Mendoza Moha',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://mexquiticdecarmona-slp.gob.mx/2018-2021/',
        21,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Elvia Ramirez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://mexquiticdecarmona-slp.gob.mx/2018-2021/',
        21,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Liliana Carmona Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://mexquiticdecarmona-slp.gob.mx/2018-2021/',
        21,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Diaz Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.moctezuma-slp.gob.mx',
        22,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Juanita Salazar Velez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.moctezuma-slp.gob.mx',
        22,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Horacio Escobedo Monsivais',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.moctezuma-slp.gob.mx',
        22,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rito Raul Puente Alviso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.moctezuma-slp.gob.mx',
        22,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Guadalupe Jasso Almaguer',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.moctezuma-slp.gob.mx',
        22,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Lourdes Sifuentes Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.moctezuma-slp.gob.mx',
        22,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Araceli Mendoza Cuevas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.moctezuma-slp.gob.mx',
        22,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Subituno Castillo Lambarria',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://municipiorayonslp.gob.mx/2018-2021/',
        23,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaqueline Chairez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://municipiorayonslp.gob.mx/2018-2021/',
        23,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Orlando Roel Tello Avalos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://municipiorayonslp.gob.mx/2018-2021/',
        23,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Baltazar Tello Perez Ruben',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://municipiorayonslp.gob.mx/2018-2021/',
        23,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olga Olivia Mendez Padilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://municipiorayonslp.gob.mx/2018-2021/',
        23,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandra Ivet Soldevilla Arvizu',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://municipiorayonslp.gob.mx/2018-2021/',
        23,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Citlalli Yesenia Vazquez Alejandro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://municipiorayonslp.gob.mx/2018-2021/',
        23,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Ramon Torres Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rioverdeslp.gob.mx/',
        24,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julia Isabel Amador Nieto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rioverdeslp.gob.mx/',
        24,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Saul Moreno Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rioverdeslp.gob.mx/',
        24,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ismael Silva Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rioverdeslp.gob.mx/',
        24,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Romulo Garcia Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rioverdeslp.gob.mx/',
        24,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Raul Espinosa Rincon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rioverdeslp.gob.mx/',
        24,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jafet Perez Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rioverdeslp.gob.mx/',
        24,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Augusto Grande Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rioverdeslp.gob.mx/',
        24,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Angeles Garcia Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rioverdeslp.gob.mx/',
        24,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandra Del Carmen Torres Resendiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rioverdeslp.gob.mx/',
        24,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angelica Virginia Chavez Solano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rioverdeslp.gob.mx/',
        24,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Del Rosario Sanchez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rioverdeslp.gob.mx/',
        24,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Magdalena Rodriguez Macias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.rioverdeslp.gob.mx/',
        24,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Venancio Paez Galvan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://salinas-slp.gob.mx/2018-2021/',
        25,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Beatriz Adriana Velazquez Colis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://salinas-slp.gob.mx/2018-2021/',
        25,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isidro Castro Almendarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://salinas-slp.gob.mx/2018-2021/',
        25,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hermenegildo Cisneros Robledo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://salinas-slp.gob.mx/2018-2021/',
        25,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amparo Quintero Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://salinas-slp.gob.mx/2018-2021/',
        25,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Guadalupe Lopez Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://salinas-slp.gob.mx/2018-2021/',
        25,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Lilia Saucedo Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://salinas-slp.gob.mx/2018-2021/',
        25,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edyuenary Gregorio Castillo Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodesanantonio.gob.mx/',
        26,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Narsiza Salazar Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodesanantonio.gob.mx/',
        26,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angel Orta Juana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodesanantonio.gob.mx/',
        26,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Heron Bulos Larraga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodesanantonio.gob.mx/',
        26,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marisol Medina Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodesanantonio.gob.mx/',
        26,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Regina Martinez Rosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodesanantonio.gob.mx/',
        26,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz Elena Cruz Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodesanantonio.gob.mx/',
        26,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Ysabel Gonzalez Serna',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sancirodeacosta-slp.gob.mx',
        27,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Adalberto Montes Balderas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sancirodeacosta-slp.gob.mx',
        27,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Zambrano Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sancirodeacosta-slp.gob.mx',
        27,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruben Flores Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sancirodeacosta-slp.gob.mx',
        27,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Cabrera Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sancirodeacosta-slp.gob.mx',
        27,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julieta Giovanna Galomo Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sancirodeacosta-slp.gob.mx',
        27,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victoria Isabel Gonzalez Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sancirodeacosta-slp.gob.mx',
        27,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Xavier Nava Palacios',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanluis.gob.mx',
        28,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dulce Karina Benavides Avila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanluis.gob.mx',
        28,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Lujambio Cataño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanluis.gob.mx',
        28,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Hugo Briones Marquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanluis.gob.mx',
        28,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Uriel Waldo Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanluis.gob.mx',
        28,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Antonio Salas Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanluis.gob.mx',
        28,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eloy Frankling Sarabia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanluis.gob.mx',
        28,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Daniel Gonzalez Ayala',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanluis.gob.mx',
        28,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angel Manuel Reyna Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanluis.gob.mx',
        28,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Raquel Del Rosario Barcena Jannet',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanluis.gob.mx',
        28,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Veronica Rodriguez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanluis.gob.mx',
        28,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Rosa Pineda Guel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanluis.gob.mx',
        28,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lidia Karina Zavala Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanluis.gob.mx',
        28,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Veronica Campillo Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanluis.gob.mx',
        28,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Frida Fernanda Rosas Zarate',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanluis.gob.mx',
        28,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Mireya Cerino Zapata',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.sanluis.gob.mx',
        28,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Crescencio Rivera Guerrero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        29,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maribel Goytortua Campos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        29,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jehu Eulogio Felix',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        29,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Celerino Felix Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        29,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Valentina Bautista Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        29,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teresa Victorio Arellano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        29,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Filiberta Hernandez Bautista',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        29,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Infante Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        30,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fabiola Vargas Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        30,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Joaquin Mata Guillen',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        30,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Claudia Navarro Macias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        30,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ventura Oliva Ponce',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        30,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karina Infante Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        30,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Gabriela Castillo Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        30,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Josue Soni Cortes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        31,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Isabel Valencia Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        31,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nicasio Hernandez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        31,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alcadio Salvador Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        31,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nelida Hidalgo Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        31,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irene Rodriguez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        31,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Socorro Rivera Robles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        31,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erick Verastegui Olvera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        32,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Martinez Erika',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        32,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leonides Perez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        32,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Catalino Medina Botello',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        32,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dominga Rubio Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        32,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Aurelia Botello Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        32,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Catalina Salvador Duran',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        32,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Israel Reyna Rosas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.santamariadelrio-slp.gob.mx/',
        33,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Berenice Loreo Ventura',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.santamariadelrio-slp.gob.mx/',
        33,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.santamariadelrio-slp.gob.mx/',
        33,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruben Diaz Espinoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        34,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gemayely Solis Dominguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        34,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nestor Garcia Puente',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        34,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Quiroz Del Rio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        34,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Noelia Aguilar Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        34,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Isabel Loera Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        34,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Moreno Alamilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        34,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gilberto Hernandez Villafuerte',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodesoledad.com.mx',
        35,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Virginia Zuñiga Maldonado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodesoledad.com.mx',
        35,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emmanuel Filiberto Garcia Castañon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodesoledad.com.mx',
        35,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Gerardo Zapata Rosales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodesoledad.com.mx',
        35,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Federico Rodriguez De Lira',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodesoledad.com.mx',
        35,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martin Bravo Galicia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodesoledad.com.mx',
        35,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hipolito Leija Leija',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodesoledad.com.mx',
        35,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Martinez Silva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodesoledad.com.mx',
        35,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Oviedo Solano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodesoledad.com.mx',
        35,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Maria Zavala Tristan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodesoledad.com.mx',
        35,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariana Velazquez Nava',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodesoledad.com.mx',
        35,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Araceli Martinez Acosta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodesoledad.com.mx',
        35,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Grecia Selene Perez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiodesoledad.com.mx',
        35,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalba Chavira Baca',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tamasopo-slp.gob.mx/2018-2021/',
        36,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Plutarco Alvarez Tapia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tamasopo-slp.gob.mx/2018-2021/',
        36,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ulises Martinez Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tamasopo-slp.gob.mx/2018-2021/',
        36,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Armando Najera Marquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tamasopo-slp.gob.mx/2018-2021/',
        36,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Torres Loredo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tamasopo-slp.gob.mx/2018-2021/',
        36,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Juana Angelica Ponce Rosas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tamasopo-slp.gob.mx/2018-2021/',
        36,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Martha Ramirez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tamasopo-slp.gob.mx/2018-2021/',
        36,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Antonio Costa Medina',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tamazunchale.gob.mx/',
        37,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fabiola Berridi Echavarria',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tamazunchale.gob.mx/',
        37,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Eduardo Rangel Gallegos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tamazunchale.gob.mx/',
        37,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emilio Hernandez Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tamazunchale.gob.mx/',
        37,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tonantzin Callejas Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tamazunchale.gob.mx/',
        37,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tatiano Perez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tamazunchale.gob.mx/',
        37,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bulmaro Gonzalez Izeta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tamazunchale.gob.mx/',
        37,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Azuara Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tamazunchale.gob.mx/',
        37,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agustin García Rubio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tamazunchale.gob.mx/',
        37,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ernestina Mancera Maldonado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tamazunchale.gob.mx/',
        37,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Carmen Hernandez Montiel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tamazunchale.gob.mx/',
        37,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alda Nely Oliva Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tamazunchale.gob.mx/',
        37,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Guadalupe Zavala Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tamazunchale.gob.mx/',
        37,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brisseire Sanchez Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://tampacan-slp.gob.mx/2018-2021/',
        38,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cornelio Roque Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://tampacan-slp.gob.mx/2018-2021/',
        38,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Arnulfo Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://tampacan-slp.gob.mx/2018-2021/',
        38,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Luisa Hernandez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://tampacan-slp.gob.mx/2018-2021/',
        38,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberta Hernandez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://tampacan-slp.gob.mx/2018-2021/',
        38,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Jesus Posadas Posadas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://tampacan-slp.gob.mx/2018-2021/',
        38,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucia Hernandez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://tampacan-slp.gob.mx/2018-2021/',
        38,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isidro Mejia Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://tampamolon-slp.gob.mx/',
        39,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Patricia Cano Yañez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://tampamolon-slp.gob.mx/',
        39,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Ildifonso Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://tampamolon-slp.gob.mx/',
        39,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Regulo Luna Rea',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://tampamolon-slp.gob.mx/',
        39,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Icela Leon Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://tampamolon-slp.gob.mx/',
        39,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eloisa Silvano Camargo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://tampamolon-slp.gob.mx/',
        39,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalba Santiago Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://tampamolon-slp.gob.mx/',
        39,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esmeralda Sanchez Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        40,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amado Sobrevilla Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        40,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Guillermo Villegas Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        40,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aldo Cesar Rangel Salas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        40,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandro Vega Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        40,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elda Abigail Gonzalez Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        40,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Minerva Rodriguez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        40,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Arrieta Vita',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tancanhuitz-slp.gob.mx',
        12,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipa Flores Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tancanhuitz-slp.gob.mx',
        12,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Luna Sandoval',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tancanhuitz-slp.gob.mx',
        12,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Germain Larraga Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tancanhuitz-slp.gob.mx',
        12,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Rosario Diaz Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tancanhuitz-slp.gob.mx',
        12,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Priscila Reyes Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tancanhuitz-slp.gob.mx',
        12,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cristina Del Rocio Ocejo Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tancanhuitz-slp.gob.mx',
        12,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Rivera Olvera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://municipiodetanlajasjuntosparacrecer.gob.mx',
        41,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Magdalena Felix Catarina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://municipiodetanlajasjuntosparacrecer.gob.mx',
        41,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lina Martinez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://municipiodetanlajasjuntosparacrecer.gob.mx',
        41,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Imelda Hernandez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://municipiodetanlajasjuntosparacrecer.gob.mx',
        41,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zoila Bautista Ildefonso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://municipiodetanlajasjuntosparacrecer.gob.mx',
        41,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esther Del Consuelo Oyarvide Padron',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://municipiodetanlajasjuntosparacrecer.gob.mx',
        41,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sebera Bernardo Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://municipiodetanlajasjuntosparacrecer.gob.mx',
        41,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alain Azuara Robles',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tanquiandeescobedo.gob.mx/',
        42,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dora Alicia Maya Acosta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tanquiandeescobedo.gob.mx/',
        42,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Rivera Zuñiga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tanquiandeescobedo.gob.mx/',
        42,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Hernandez Lizama',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tanquiandeescobedo.gob.mx/',
        42,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karen Yazmin Trejo Soriano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tanquiandeescobedo.gob.mx/',
        42,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ines Perez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tanquiandeescobedo.gob.mx/',
        42,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Keyla Aradillas Ahumada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tanquiandeescobedo.gob.mx/',
        42,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarito Chaverria Delgado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        43,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Christian Isabel Rivera Melendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        43,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Sanchez Arellano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        43,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Montalvo Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        43,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Virginia Martinez Turrubiartes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        43,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Guadalupe Maldonado Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        43,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Belen Del Carmen Padron Rosas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        43,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guillermo Martinez Guerra',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://transparenciavenad.wixsite.com/venado',
        45,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marissol Delgado Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://transparenciavenad.wixsite.com/venado',
        45,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Justino Arriaga Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://transparenciavenad.wixsite.com/venado',
        45,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Rivera Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://transparenciavenad.wixsite.com/venado',
        45,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Negrete Aguiñaga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://transparenciavenad.wixsite.com/venado',
        45,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Araceli Lopez Orozco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://transparenciavenad.wixsite.com/venado',
        45,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nestora Sena Silva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://transparenciavenad.wixsite.com/venado',
        45,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Moises Aurelio Arriaga Tovar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.villadearista.gob.mx/',
        46,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marta Cepeda Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.villadearista.gob.mx/',
        46,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Ivan Castillo Gamez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.villadearista.gob.mx/',
        46,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Zavala Tristan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.villadearista.gob.mx/',
        46,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paulina Rodriguez Rosales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.villadearista.gob.mx/',
        46,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aurea Cepeda Mares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.villadearista.gob.mx/',
        46,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zeidy Guadalupe Rodriguez Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.villadearista.gob.mx/',
        46,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo Torres Roblero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        47,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz Elena Rodriguez Monreal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        47,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Cesar Galindo Aranda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        47,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Victor Rodriguez Cardona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        47,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Estela Martinez Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        47,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Veronica Lopez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        47,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daisy Yenisey Delgadillo Almendarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        47,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Lopez Blanco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        48,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Beatriz Ovalle Carrizalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        48,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruperto Espinosa Marquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        48,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Francisco Obregon Gamez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        48,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Estrada Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        48,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cinthia Ibarra Gallegos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        48,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayda Yanet Gamez Aguilera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        48,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Armando Torres Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.villadelapazslp.gob.mx/2018-2021/',
        49,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Patricia Puente Faz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.villadelapazslp.gob.mx/2018-2021/',
        49,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Flores Peña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.villadelapazslp.gob.mx/2018-2021/',
        49,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adalberto Peña Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.villadelapazslp.gob.mx/2018-2021/',
        49,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Rosalba Escamilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.villadelapazslp.gob.mx/2018-2021/',
        49,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nydia Coyolxauhqui Del Valle Borjas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.villadelapazslp.gob.mx/2018-2021/',
        49,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ileana Sharay Silva Amaya',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.villadelapazslp.gob.mx/2018-2021/',
        49,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abraham Villa Ortega',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        50,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cinthia Karina Delgado Dueñas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        50,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Perez De La Rosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        50,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Dueñas Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        50,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Minerva Gonzalez Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        50,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Rocio Castillo Vera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        50,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Elvia Lopez Navarro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        50,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Irazema Briones Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ayuntamientovilladereyes.gob.mx/',
        51,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Rocha Rivas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ayuntamientovilladereyes.gob.mx/',
        51,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Carmelo Cipriano Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ayuntamientovilladereyes.gob.mx/',
        51,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Gerardo Espinoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ayuntamientovilladereyes.gob.mx/',
        51,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Belinda Peña Mujica',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ayuntamientovilladereyes.gob.mx/',
        51,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Graciela Segura Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ayuntamientovilladereyes.gob.mx/',
        51,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Consuelo Zavala Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ayuntamientovilladereyes.gob.mx/',
        51,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Euridice Meza Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.villahidalgo.gob.mx/',
        52,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maximino Mendez Romo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.villahidalgo.gob.mx/',
        52,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Gaudencio Lopez Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.villahidalgo.gob.mx/',
        52,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teodulo Ricardo Guerrero Milan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.villahidalgo.gob.mx/',
        52,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jennifer Cassandra Godinez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.villahidalgo.gob.mx/',
        52,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Patricia Martinez Partida',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.villahidalgo.gob.mx/',
        52,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Lydia Flores Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.villahidalgo.gob.mx/',
        52,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Teodora Reyes Infante',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        53,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efrain Galvan Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        53,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cidoro Moreno Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        53,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Torres Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        53,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Javier Aguilar Galvan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        53,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Patricia Soriano Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        53,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brenda Judith Torres Baez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        53,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martin Eduardo Martinez Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.xilitla-slp.gob.mx/',
        55,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jannett Lopez Marquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.xilitla-slp.gob.mx/',
        55,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruben Hervert Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.xilitla-slp.gob.mx/',
        55,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Xochitl Ignacio Ventura',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.xilitla-slp.gob.mx/',
        55,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Rosario Perez Garay',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.xilitla-slp.gob.mx/',
        55,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felicitas Ramirez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.xilitla-slp.gob.mx/',
        55,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Guadalupe Vega Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.xilitla-slp.gob.mx/',
        55,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paloma Bravo Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        56,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Benigno Gomez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        56,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Cardenas Govea',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        56,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Martinez Guzman',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        56,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ines Sanchez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        56,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dulce Mariela Alvarez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        56,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gisela Edith Sanchez Quiroz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        56,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
              `)
}
