exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 30).del()
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
        'Joel Molina Rojas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.acajete.gob.mx/',
        1,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Israel German Hernandez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.acajete.gob.mx/',
        1,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Garcia Alarcon',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.acatlanveracruz.mx/',
        2,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isabel Gomez Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.acatlanveracruz.mx/',
        2,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Benjamin Mendoza Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.acatlanveracruz.mx/',
        2,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cuitlahuac Condado Escamilla',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.acayucan.gob.mx/home',
        3,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Armando Ramirez Jerez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.acayucan.gob.mx/home',
        3,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvia Reyes Huerta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.acayucan.gob.mx/home',
        3,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andres Baruch Maldonado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.acayucan.gob.mx/home',
        3,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Gomez Mari?o',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.acayucan.gob.mx/home',
        3,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Morales Juarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.acayucan.gob.mx/home',
        3,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Valencia Valencia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.acayucan.gob.mx/home',
        3,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Alberto Flores Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.acayucan.gob.mx/home',
        3,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Leticia Lara Patraca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.acayucan.gob.mx/home',
        3,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Denisse De Los Angeles Uribe Obregon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.acayucan.gob.mx/home',
        3,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Paulino Dominguez Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://actopan.emunicipios.gob.mx/',
        4,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adan Soto Vargas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://actopan.emunicipios.gob.mx/',
        4,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Carranza Barradas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://actopan.emunicipios.gob.mx/',
        4,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elismey Perez Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://actopan.emunicipios.gob.mx/',
        4,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Altamirano Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://actopan.emunicipios.gob.mx/',
        4,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Delia Lopez Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://actopan.emunicipios.gob.mx/',
        4,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe Pineda Barradas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        5,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teodula Rosas Camacho',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        5,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rene Medel Carrera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://acultzingo.gob.mx/',
        6,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Delfino Cruz Guevara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://acultzingo.gob.mx/',
        6,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Lenin Guzman Ricardez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        206,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erick Jimenez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        206,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Constantino Morales Montiel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        206,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Martinez Badillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        206,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Espinosa Rios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        206,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Esther Santaella Bandera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        206,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Vera Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.alamotemapache.gob.mx/goba/index.php/portada-periodico',
        8,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Faisal Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.alamotemapache.gob.mx/goba/index.php/portada-periodico',
        8,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hilda Nu?ez Cerecedo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.alamotemapache.gob.mx/goba/index.php/portada-periodico',
        8,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ignacio Sanchez Vera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.alamotemapache.gob.mx/goba/index.php/portada-periodico',
        8,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anabel Hernandez Atanacio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.alamotemapache.gob.mx/goba/index.php/portada-periodico',
        8,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruben Arenas Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.alamotemapache.gob.mx/goba/index.php/portada-periodico',
        8,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariel Romo Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.alamotemapache.gob.mx/goba/index.php/portada-periodico',
        8,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Esteban Arguelles Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.alamotemapache.gob.mx/goba/index.php/portada-periodico',
        8,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Imelda Garrido Alvarado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.alamotemapache.gob.mx/goba/index.php/portada-periodico',
        8,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Federico Rosales Vicencio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.alamotemapache.gob.mx/goba/index.php/portada-periodico',
        8,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arcadia Santiago Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.alamotemapache.gob.mx/goba/index.php/portada-periodico',
        8,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Obdulia Dominguez Llanos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.alpatlahuacver.gob.mx/',
        9,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felix Pelayo Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.alpatlahuacver.gob.mx/',
        9,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Castillo Viveros',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.altolucero.gob.mx/gobierno-municipal/',
        10,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eustorgio Morales Duran',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.altolucero.gob.mx/gobierno-municipal/',
        10,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cristina Viveros Montero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.altolucero.gob.mx/gobierno-municipal/',
        10,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ernesto Ruiz Flandes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.altotonga.gob.mx/',
        11,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Octavio Roque Gabriel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.altotonga.gob.mx/',
        11,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santa Guadalupe Hernandez Santillan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.altotonga.gob.mx/',
        11,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elizabeth Balmes Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.altotonga.gob.mx/',
        11,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Anastacio Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.altotonga.gob.mx/',
        11,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Elena Baltazar Pablo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.altotonga.gob.mx/',
        11,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bogar Ruiz Rosas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.alvarado.gob.mx/index.html',
        12,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lili Valencia Cano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.alvarado.gob.mx/index.html',
        12,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Jose Alvarez Pendas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.alvarado.gob.mx/index.html',
        12,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo Aldolfo Uscanga Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.alvarado.gob.mx/index.html',
        12,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lizeth Trinidad Barrientos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.alvarado.gob.mx/index.html',
        12,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aldo Nahun Mojica Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.alvarado.gob.mx/index.html',
        12,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felix Uscanga Carrasco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.alvarado.gob.mx/index.html',
        12,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Refugio Velazquez Barron',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.alvarado.gob.mx/index.html',
        12,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Luis Vergara Galo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        13,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Zamudio Gao',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        13,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Rojas Camacho',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        14,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Cambambia Pena',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        14,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Adrian Vazquez Medorio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        14,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Clara Solis Alvizar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        14,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aurora Rodriguez Virgen',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        14,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Herviz Reyes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://angelrcabada.com.mx/',
        16,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Guillermo Uscanga Fomperosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://angelrcabada.com.mx/',
        16,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariana Parra Zapot',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://angelrcabada.com.mx/',
        16,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ancelmo Gonzalez Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://angelrcabada.com.mx/',
        16,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Flores Colorado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        18,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Delfino De Jesus Valdez Cabrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        18,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jobita Ramirez Limon',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        19,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Alonso Suarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        19,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Ramirez Itehua',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.astacinga.gob.mx/',
        20,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rocio Vianney Tecpile Itehua',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.astacinga.gob.mx/',
        20,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raymundo Ixmatlahua Lemus',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.atlahuilco.gob.mx/',
        21,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oliverio Tlaxcala Tlaxcala',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.atlahuilco.gob.mx/',
        21,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Pimentel Ugarte',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.municipioatoyac.com.mx/',
        22,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rene Rueda Atala',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.municipioatoyac.com.mx/',
        22,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Jesus Dominguez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.municipioatoyac.com.mx/',
        22,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gloria Armenta Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.municipioatoyac.com.mx/',
        22,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Cervantes Reyna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.municipioatoyac.com.mx/',
        22,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Octavio Misael Lorenzo Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.atzacan.gob.mx/',
        23,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teodulfo Jorge Jimenez Caliente',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.atzacan.gob.mx/',
        23,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Homero Dominguez Landa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.atzalan.gob.mx/',
        24,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bernardino Bocarando Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.atzalan.gob.mx/',
        24,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guillermina Martinez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.atzalan.gob.mx/',
        24,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Meliton Castellanos Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.atzalan.gob.mx/',
        24,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Josue Gonzalez Dominguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.atzalan.gob.mx/',
        24,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martina Hernandez Pazos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.atzalan.gob.mx/',
        24,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fileberto Morales Rosas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ayahualulco.gob.mx/',
        26,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leticia Galicia Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ayahualulco.gob.mx/',
        26,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Manuel Rivera Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.banderillaveracruz.gob.mx/',
        27,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carmen Yadira Coronel Del Angel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.banderillaveracruz.gob.mx/',
        27,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isaac Morales Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.banderillaveracruz.gob.mx/',
        27,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Flocelo Ramirez Vargas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        28,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yolanda Torres Olivares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        28,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gregorio Hernandez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        28,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Humberto Alonso Morelli',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.bocadelrio.gob.mx/',
        29,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Humberto Tejeda Taibo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.bocadelrio.gob.mx/',
        29,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Cristina Araiza Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.bocadelrio.gob.mx/',
        29,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'German Arturo Yunes Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.bocadelrio.gob.mx/',
        29,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Mirtha Martinez Beltran',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.bocadelrio.gob.mx/',
        29,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raymundo Montesinos Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.bocadelrio.gob.mx/',
        29,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Smirna Castro Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.bocadelrio.gob.mx/',
        29,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Ruiz Saavedra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.bocadelrio.gob.mx/',
        29,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esther Cruz Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.bocadelrio.gob.mx/',
        29,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique De Jesus Flores Cano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.bocadelrio.gob.mx/',
        29,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Butron Valenzuela',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.bocadelrio.gob.mx/',
        29,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Mikel Hermida',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.bocadelrio.gob.mx/',
        29,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Celia Trinidad Luna Pacheco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.bocadelrio.gob.mx/',
        29,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Carrillo Vazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://calcahualco.gob.mx/',
        30,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramon Vasquez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://calcahualco.gob.mx/',
        30,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Susana Guadalupe Ameca Parissi',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-07-02, 2021-12-31)'::daterange,
        'http://www.camarondetejeda.gob.mx/',
        7,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Meliton Reyes Larios',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.mendoza.gob.mx/',
        31,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Librado Salmeron Paredes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.mendoza.gob.mx/',
        31,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Lopez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.mendoza.gob.mx/',
        31,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Monica Sandoval Pascual',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.mendoza.gob.mx/',
        31,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Javier Molina Arrioja',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        208,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Melchisided Ramos Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        208,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Carrillo Tinoco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://carrillopuerto.emunicipios.gob.mx/',
        32,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eustorgio Sanchez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://carrillopuerto.emunicipios.gob.mx/',
        32,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zoila Caridad Garcia Cristobal',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://castillodeteayo.gob.mx/municipio/',
        33,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Solis Casados',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://castillodeteayo.gob.mx/municipio/',
        33,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandra Garcia Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://castillodeteayo.gob.mx/municipio/',
        33,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juio Cesar Ortega Serrano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.municipiocatemacover.gob.mx/',
        34,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosendo Lara Chacha',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.municipiocatemacover.gob.mx/',
        34,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Devorath Yazmin Minquiz Polito',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.municipiocatemacover.gob.mx/',
        34,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nicolasa Zu?iga Cobos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.municipiocatemacover.gob.mx/',
        34,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Bustamante Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.municipiocatemacover.gob.mx/',
        34,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zenon Pacheco Vergel',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://cazones.gob.mx/',
        35,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Carlos Alpirez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://cazones.gob.mx/',
        35,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Velazquez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://cazones.gob.mx/',
        35,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Martin Zardoni Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://cazones.gob.mx/',
        35,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Lurdes Santiago Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://cazones.gob.mx/',
        35,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Vicente Reyes Juarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cerro-azul.gob.mx/index.html',
        36,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Kevin Omar Macias Balleza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cerro-azul.gob.mx/index.html',
        36,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leonardo Priego Becerril',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cerro-azul.gob.mx/index.html',
        36,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Resendiz Hidalgo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cerro-azul.gob.mx/index.html',
        36,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nora Hernandez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cerro-azul.gob.mx/index.html',
        36,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victoria Armenta Castellanos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cerro-azul.gob.mx/index.html',
        36,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayra Janeth Torres Dominguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.chacaltianguis.gob.mx/',
        56,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efrain Peralta Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.chacaltianguis.gob.mx/',
        56,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bertha Mariana De Jesus Galvan Arguelles',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.presidenciamunicipalchalma.gob.mx/index.html',
        57,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brenda Violeta Sanchez Quezada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.presidenciamunicipalchalma.gob.mx/index.html',
        57,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Geminiano Hernandez Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.presidenciachiconamel.gob.mx/',
        58,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rufina Sanchez Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.presidenciachiconamel.gob.mx/',
        58,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nazario Perea Aguilar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        59,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Araceli Gabriel Rios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        59,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Hernandez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        59,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Adrian Martinez Estrada',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.chicontepec.com.mx/',
        60,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santiago Hernandez Antonio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.chicontepec.com.mx/',
        60,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jovita Montes Vicencio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.chicontepec.com.mx/',
        60,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leidy Hernandez Remigio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.chicontepec.com.mx/',
        60,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Camerino Jimenez Osorio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.chicontepec.com.mx/',
        60,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Catarina De La Cruz Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.chicontepec.com.mx/',
        60,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alberto Martinez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.chicontepec.com.mx/',
        60,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alicia Vera Arenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.chicontepec.com.mx/',
        60,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Antonio Carmona Trolle',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://chinameca.gob.mx/',
        61,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edy Santos Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://chinameca.gob.mx/',
        61,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Susana Patraca Vidal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://chinameca.gob.mx/',
        61,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lazaro Avendaño Parrilla',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://chinampa.gob.mx/',
        62,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Oralia Parrilla Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://chinampa.gob.mx/',
        62,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Lidia Rojas Trejo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.chocamanveracruz.gob.mx/',
        64,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salustia Morales Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.chocamanveracruz.gob.mx/',
        64,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andres Prospero Romero Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.chocamanveracruz.gob.mx/',
        64,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eric Abraham Sosa Mar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.chontla.gob.mx/',
        65,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Minerva Del Rosal Mar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.chontla.gob.mx/',
        65,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Espinoza Salazar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.chumatlan.gob.mx/',
        66,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nazaria Guzman Bernabe',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.chumatlan.gob.mx/',
        66,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Eliza Perez Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.chumatlan.gob.mx/',
        66,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eutiquia Reyes Santiago',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.citlaltepetl.gob.mx/',
        37,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leopolda Bardomiano Dominguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.citlaltepetl.gob.mx/',
        37,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isaac Garcia Alarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://coahuitlan.mx/',
        39,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Matias Marquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://coahuitlan.mx/',
        39,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Enrique Fernandez Peredo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.coatepec.gob.mx/',
        40,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Manuel Carranza Rosaldo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.coatzacoalcos.gob.mx/',
        41,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco De Jesus Zamudio Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.coatzacoalcos.gob.mx/',
        41,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eusebia Cortes Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.coatzacoalcos.gob.mx/',
        41,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angel Raul Estrada Bernal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.coatzacoalcos.gob.mx/',
        41,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fabiani Cueto Salinas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.coatzacoalcos.gob.mx/',
        41,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Benito Soriano Aguilera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.coatzacoalcos.gob.mx/',
        41,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oliver Damas De Los Santos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.coatzacoalcos.gob.mx/',
        41,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karen Itzel Prot Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.coatzacoalcos.gob.mx/',
        41,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe De Jesus Rodriguez Gallegos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.coatzacoalcos.gob.mx/',
        41,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lenis Pauling Aparicio Ambrocio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.coatzacoalcos.gob.mx/',
        41,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martin Juvenal Pati?o Zamora',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.coatzacoalcos.gob.mx/',
        41,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Hilda Cuevas Rosado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.coatzacoalcos.gob.mx/',
        41,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Diaz Juarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.coatzacoalcos.gob.mx/',
        41,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adriana Herrera Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.coatzacoalcos.gob.mx/',
        41,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia Cruz Matheis',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ayuntamientocoatzintla.gob.mx/',
        42,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Miguel Galindo Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ayuntamientocoatzintla.gob.mx/',
        42,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lizeth Casta?eda Luque?o',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ayuntamientocoatzintla.gob.mx/',
        42,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cornelio Solis Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ayuntamientocoatzintla.gob.mx/',
        42,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joaquin Fortino Cocotle',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-07-15, 2021-12-31)'::daterange,
        'http://www.coetzala.gob.mx/',
        43,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teresa Molina Dorantes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        44,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lenin Alfredo Diaz Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        44,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Carmen Canton Croda',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.comapa.gob.mx/Transparencia/',
        45,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gilivaldo Chalche Barradas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.comapa.gob.mx/Transparencia/',
        45,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leticia Lopez Landero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        46,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elia Yadira Espindola Carrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        46,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Antonio Tellez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        46,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo Guzman Milian',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        46,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Cecilia Serrano Soval',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        46,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angel Etiem Jimenez Casta?eda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        46,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Alfredo Riveron Mora',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        46,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felix Emilio Sacre Lara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        46,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Gabriel Hernandez Plaza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        46,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wendy Leticia Santiago Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        46,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cecilia Tapia Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        46,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Hermida Salto',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cosamaloapan.gob.mx/',
        47,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Solano Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cosamaloapan.gob.mx/',
        47,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Beatriz Cruz Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cosamaloapan.gob.mx/',
        47,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silviano Clemente Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cosamaloapan.gob.mx/',
        47,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elvis Del Carmen Dominguez Andrade',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cosamaloapan.gob.mx/',
        47,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Manuel Bonilla Ramon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cosamaloapan.gob.mx/',
        47,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Soto Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cosamaloapan.gob.mx/',
        47,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Palmero Mu?iz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cosamaloapan.gob.mx/',
        47,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hilaria Regules Vicente',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cosamaloapan.gob.mx/',
        47,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anita Hernandez Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cosamaloapan.gob.mx/',
        47,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alicia Valdivia Vargas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        48,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Ruiz Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        48,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Serafin Gonzalez Saavedra',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.coscomatepec.gob.mx/index.html',
        49,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Martinez Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.coscomatepec.gob.mx/index.html',
        49,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Reyes Saavedra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.coscomatepec.gob.mx/index.html',
        49,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucia Lopez Olgui',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.coscomatepec.gob.mx/index.html',
        49,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cirio Vazquez Parissi',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cosoleacaque.gob.mx/',
        50,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paulino Carrizosa Alor',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cosoleacaque.gob.mx/',
        50,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leocadia Cruz Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cosoleacaque.gob.mx/',
        50,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Alberto Cortes Villanueva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cosoleacaque.gob.mx/',
        50,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Alberto Echeverria Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cosoleacaque.gob.mx/',
        50,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elizabeth Villa Mayor Francisco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cosoleacaque.gob.mx/',
        50,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Molina Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cosoleacaque.gob.mx/',
        50,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mabel Roman Miguel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cosoleacaque.gob.mx/',
        50,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Muñiz Rivera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cotaxtla.gob.mx/',
        51,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leobardo Gutierrez Pineda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cotaxtla.gob.mx/',
        51,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reyes Serrano Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cotaxtla.gob.mx/',
        51,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Betsabe Reyes Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cotaxtla.gob.mx/',
        51,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Montero Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cotaxtla.gob.mx/',
        51,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Elizabeth Moreno Cervantes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.cotaxtla.gob.mx/',
        51,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lauro Becerra Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://hacoxquihui.gob.mx/index.html',
        52,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Candido Vazquez Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://hacoxquihui.gob.mx/index.html',
        52,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Antonio Picazo Gutierrez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        53,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Johana Leticia Alvarez Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        53,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Diaz Ortiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://cuichapa.gob.mx/',
        54,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucas Lopez Bernabe',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://cuichapa.gob.mx/',
        54,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Osvaldo Sanchez Cortes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://cuichapa.gob.mx/',
        54,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Ramirez Villalobos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://cuichapa.gob.mx/',
        54,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santiago Gregorio Morales Rendon',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://cuitlahuac.gob.mx/portal/',
        55,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Luisa Pe?a Virgen',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://cuitlahuac.gob.mx/portal/',
        55,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Melquiades Lara Malpica',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://cuitlahuac.gob.mx/portal/',
        55,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cruz Sanchez Olea',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://cuitlahuac.gob.mx/portal/',
        55,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Maria Martinez Guerrero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://elhigo.emunicipios.gob.mx/municipio/',
        207,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramon Razzo Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://elhigo.emunicipios.gob.mx/municipio/',
        207,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elio Raul Alvarado Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://elhigo.emunicipios.gob.mx/municipio/',
        207,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Alberto Mier Acolt',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-07-01, 2021-12-31)'::daterange,
        'http://www.emilianozapata.gob.mx/',
        67,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leon Humberto Perez Candanedo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.elespinal.gob.mx/',
        68,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eliossvany Juarez Alvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.elespinal.gob.mx/',
        68,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Meraldo Carballlo Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.elespinal.gob.mx/',
        68,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agustina Herrera Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.elespinal.gob.mx/',
        68,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Lopez Geronimo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        69,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Isidro Cortes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        69,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Mansur Oviedo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        70,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Jimenez Soto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        70,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisca Martinez Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        70,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fidel Fabian Garcia Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        70,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfonso Corona Antonio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        70,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Andrea Hernandez Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        70,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wilman Monje Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.gutierrezzamora.mx/home.html',
        71,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gonzalo Qui?ones Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.gutierrezzamora.mx/home.html',
        71,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvana Rodriguez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.gutierrezzamora.mx/home.html',
        71,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Hatzel Gomez Ochoa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.gutierrezzamora.mx/home.html',
        71,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalia Garcia Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.gutierrezzamora.mx/home.html',
        71,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Federico Tadeo Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.hidalgotitlan.gob.mx/',
        72,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joaquin Reyes Fernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.hidalgotitlan.gob.mx/',
        72,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yesenia Torres Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.hidalgotitlan.gob.mx/',
        72,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Baldinucci Tejeda Colorado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.huatusco.gob.mx/',
        73,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dagoberto Solis Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.huatusco.gob.mx/',
        73,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arely Flores Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.huatusco.gob.mx/',
        73,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Altagracia Cozar Pe?a',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.huatusco.gob.mx/',
        73,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Enrique Lemus Salazar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.huayacocotla.gob.mx/',
        74,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Perez Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.huayacocotla.gob.mx/',
        74,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Federico Lopez Badillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.huayacocotla.gob.mx/',
        74,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Alberto Quinto Zamorano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.hueyapandeocampo.gob.mx/',
        75,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramiro Ramirez Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.hueyapandeocampo.gob.mx/',
        75,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Sagrero Jauregui',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.hueyapandeocampo.gob.mx/',
        75,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angel Rios Fararoni',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.hueyapandeocampo.gob.mx/',
        75,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yesenia Del Carmen Juarez Atilano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.hueyapandeocampo.gob.mx/',
        75,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Madai De Los Angeles Gomez Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.hueyapandeocampo.gob.mx/',
        75,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Gabriel Flores Sarabia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.huiloapan.gob.mx/',
        76,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcial Flores Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.huiloapan.gob.mx/',
        76,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rene Antonio Cruz Hermida',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ignaciodelallave.gob.mx/',
        77,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Magaly Lara Pastrana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ignaciodelallave.gob.mx/',
        77,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Honorio De La Cruz Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ilamatlan.gob.mx/',
        78,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cornelio Hernandez Villegas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ilamatlan.gob.mx/',
        78,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Molina Landa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.isla.gob.mx/',
        79,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isven Yasel Candado Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.isla.gob.mx/',
        79,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alberto Vazquez Arrioja',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.isla.gob.mx/',
        79,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eloisa Arcos Molina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.isla.gob.mx/',
        79,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Isabel Villiers Arredondo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.isla.gob.mx/',
        79,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Guzman Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        80,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando De La Cruz Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        80,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Vargas Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ixhuacandelosreyes.gob.mx/',
        81,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Ruiz Pedraza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ixhuacandelosreyes.gob.mx/',
        81,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ader Garcia Escalante',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ixhuatlandemadero.emunicipios.gob.mx/',
        82,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gonzalo Cuervo Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ixhuatlandemadero.emunicipios.gob.mx/',
        82,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edmundo Cuervo Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ixhuatlandemadero.emunicipios.gob.mx/',
        82,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teresa Bautista Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ixhuatlandemadero.emunicipios.gob.mx/',
        82,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jhanelly Olvera Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ixhuatlandemadero.emunicipios.gob.mx/',
        82,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Viridiana Breton Feito',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ixhuatlandelcafe.gob.mx/',
        83,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Josefina Licona Larragoitia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ixhuatlandelcafe.gob.mx/',
        83,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Crisoforo Artemio Illescas Villalobos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ixhuatlandelcafe.gob.mx/',
        83,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wilbert Luis Luis',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ixhuatlan.gob.mx/index.html',
        84,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandrina Morales Maza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ixhuatlan.gob.mx/index.html',
        84,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Israel Perez Villegas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ixhuatlancillo.gob.mx/',
        85,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'German Francisco Cenobio Mora',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ixhuatlancillo.gob.mx/',
        85,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Serrano Anaya',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ixmatlahuacan.gob.mx/',
        86,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalia Leon Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ixmatlahuacan.gob.mx/',
        86,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Castelan Crivelli',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ixtaczoquitlan.gob.mx/portal/',
        87,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Carlos Roman Yrigoyen',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ixtaczoquitlan.gob.mx/portal/',
        87,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Rosa Gonzalez Ixmatlahua',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ixtaczoquitlan.gob.mx/portal/',
        87,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adrian De Jesus Monter Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ixtaczoquitlan.gob.mx/portal/',
        87,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adrian Castillo Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ixtaczoquitlan.gob.mx/portal/',
        87,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Susana Nava Mosqueda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ixtaczoquitlan.gob.mx/portal/',
        87,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bibiana Lopez Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ixtaczoquitlan.gob.mx/portal/',
        87,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vicente Garcia Figueiras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ixtaczoquitlan.gob.mx/portal/',
        87,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rigoberto De Jesus Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ixtaczoquitlan.gob.mx/portal/',
        87,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maricela Rodriguez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ixtaczoquitlan.gob.mx/portal/',
        87,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Cortes Murrieta',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.jalacingo.gob.mx/',
        88,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Antonio Montero Marquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.jalacingo.gob.mx/',
        88,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Godolfredo Espinoza Guevera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.jalacingo.gob.mx/',
        88,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Emma Hernandez Cilo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.jalacingo.gob.mx/',
        88,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Alfredo Portilla Vasquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.jalcomulco.gob.mx/',
        90,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aurelia Rodriguez Perea',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.jalcomulco.gob.mx/',
        90,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucas Martinez Torres',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.jaltipan.gob.mx/',
        91,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorenzo Vargas Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.jaltipan.gob.mx/',
        91,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esther Elias Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.jaltipan.gob.mx/',
        91,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alan Jhosep Rosas Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.jaltipan.gob.mx/',
        91,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nelly Welsh Ventura',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.jaltipan.gob.mx/',
        91,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Romay Realpozo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.jaltipan.gob.mx/',
        91,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jonny Baxin Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.jaltipan.gob.mx/',
        91,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agustina Limon Francisco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.jaltipan.gob.mx/',
        91,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lilia Martinez Arias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.jaltipan.gob.mx/',
        91,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Florisel Rios Delfin',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.jamapa.gob.mx/',
        92,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Josefina Torres Sosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.jamapa.gob.mx/',
        92,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Selene Gonzalez Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.jamapa.gob.mx/',
        92,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teresa Guillen Trinidad',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.mpiojesuscarranza.gob.mx/index.php',
        93,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Benigno Jaime Miranda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.mpiojesuscarranza.gob.mx/index.php',
        93,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Mendez Bernal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.mpiojesuscarranza.gob.mx/index.php',
        93,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marisol Cruz Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.mpiojesuscarranza.gob.mx/index.php',
        93,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Fernandez Lara',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        94,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Baez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        94,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julian Valverde Roman',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.joseazueta.gob.mx/',
        168,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fidel Perez Pompian',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.joseazueta.gob.mx/',
        168,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alberto Azamar Alfonso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.joseazueta.gob.mx/',
        168,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Misbel Alvarez Arano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.joseazueta.gob.mx/',
        168,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Basilia Cruz Huervo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.joseazueta.gob.mx/',
        168,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Manzur Navarrete',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://juanrodriguezclara.gob.mx/',
        95,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jonatan Morales Portas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://juanrodriguezclara.gob.mx/',
        95,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Alberto Cardenas Vicente',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://juanrodriguezclara.gob.mx/',
        95,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felicita Jimenez Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://juanrodriguezclara.gob.mx/',
        95,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Armando Torres Cadena',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://juanrodriguezclara.gob.mx/',
        95,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miriam Gonzalez Zarate',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://juanrodriguezclara.gob.mx/',
        95,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lizbeth Emilia Portilla Gumecindo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        96,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Hernandez Olivares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        96,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'P. Jose Cruz Lagunez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-02-02, 2021-12-31)'::daterange,
        'http://laantigua.gob.mx/',
        17,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Bautista Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.laperla.gob.mx/',
        128,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cenobio Romero Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.laperla.gob.mx/',
        128,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Dominguez Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.landeroycoss.gob.mx/',
        97,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Iveth Jimenez Tlaxcala',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.landeroycoss.gob.mx/',
        97,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Tronco Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.laschoapas.gob.mx/',
        63,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Gregorio Cabra Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.laschoapas.gob.mx/',
        63,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emperatriz Santiago Arias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.laschoapas.gob.mx/',
        63,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodolfo Sanchez Soto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.laschoapas.gob.mx/',
        63,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zurisadai Jorge Sastre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.laschoapas.gob.mx/',
        63,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Deysi Morales De Los Santos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.laschoapas.gob.mx/',
        63,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Perla Miriam Marin Villa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.laschoapas.gob.mx/',
        63,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mauricio Bonilla Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.laschoapas.gob.mx/',
        63,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Melquiades Alarcon Caro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        108,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Flora Garma Carballo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        108,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Lino Cruz Romero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.lasvigas.gob.mx/',
        137,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raymundo Aburto Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.lasvigas.gob.mx/',
        137,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hermas Cortes Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.lerdodetejada.gob.mx/',
        98,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lizbeth Hernandez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.lerdodetejada.gob.mx/',
        98,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agripina Jimenez Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.lerdodetejada.gob.mx/',
        98,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eclicerio Tequiliquihua Quiahuixtle',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.losreyes.gob.mx/',
        138,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Natividad Ajactle Xochicale',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.losreyes.gob.mx/',
        138,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fortunata Zepahua Tequihuatle',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.magdalena.gob.mx/',
        99,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Magdaleno Mixteco Mixteco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.magdalena.gob.mx/',
        99,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo Rosas Huerta',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        100,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Viridiana Ceronio Barreda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        100,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Humberto Rosas Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        100,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nora Esther Vela Torres',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.manliofabioaltamirano.gob.mx/',
        101,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fredy Diaz Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.manliofabioaltamirano.gob.mx/',
        101,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Baldomero Montiel Esteves',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.marianoescobedo.gob.mx/index.html',
        102,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joel Cruz Balderavano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.marianoescobedo.gob.mx/index.html',
        102,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose De La Torre Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.martinezdelatorre.gob.mx/',
        103,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgardo Martinez Juarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.martinezdelatorre.gob.mx/',
        103,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Magdalena Guzman Mu?oz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.martinezdelatorre.gob.mx/',
        103,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Kefren Lunagomez Rincon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.martinezdelatorre.gob.mx/',
        103,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angel Abel Belli Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.martinezdelatorre.gob.mx/',
        103,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariana Trinidad Viveros Aguirre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.martinezdelatorre.gob.mx/',
        103,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Manuel Marcos Juarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.mecatlan.gob.mx/',
        104,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Arcos Andres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.mecatlan.gob.mx/',
        104,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bulfre Alfredo Bautista',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        105,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Manuel Gonzalez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        105,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hipolito Deschamps Barros',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.medellin.gob.mx/',
        106,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dominico Romero Lara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.medellin.gob.mx/',
        106,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reyna Esther Rodriguez Valenzuela',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.medellin.gob.mx/',
        106,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hilario Gilberto Lagunes Iba?ez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.medellin.gob.mx/',
        106,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nicolas Reyes Alvarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.minatitlan.gob.mx/',
        109,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Antonio Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.minatitlan.gob.mx/',
        109,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Leticia Siu Gallegos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.minatitlan.gob.mx/',
        109,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Atanasio Rodriguez Rico',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.minatitlan.gob.mx/',
        109,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teresa Perez Baruch',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.minatitlan.gob.mx/',
        109,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Kristhian Marquez Mora',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.minatitlan.gob.mx/',
        109,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Noemi Manrique Valerio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.minatitlan.gob.mx/',
        109,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blas Avalos Santos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.minatitlan.gob.mx/',
        109,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Saul Wade Leon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.minatitlan.gob.mx/',
        109,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Damara Isabel Gomez Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.minatitlan.gob.mx/',
        109,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Prieto Arroniz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.minatitlan.gob.mx/',
        109,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Veronica Burgoa Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.minatitlan.gob.mx/',
        109,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Andrade Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.minatitlan.gob.mx/',
        109,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Othon Hernandez Candanedo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        110,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Lopez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        110,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anuara Mileyka Boo Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        110,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Alberto Leon Y Rendon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        110,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Fernandez Lagunes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        110,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eloy Marin Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        110,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Maria Morales Benavides',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        110,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nancy Barreda Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        110,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leticia Arroyo Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        110,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sclga Crispin Hernandez Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-07-09, 2021-12-31)'::daterange,
        'http://www.mixtladealtamirano.gob.mx/',
        111,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Valentina Temoxtle Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-07-09, 2021-12-31)'::daterange,
        'http://www.mixtladealtamirano.gob.mx/',
        111,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victoria Rasgado Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.moloacan.gob.mx/',
        112,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosenda Mundo Acosta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.moloacan.gob.mx/',
        112,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zoila Balderas Guzman',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.nanchital.gob.mx/',
        205,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De Jesus Aleman Pavon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.nanchital.gob.mx/',
        205,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Felipe Balderas Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.nanchital.gob.mx/',
        205,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angelina Pang Aniceto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.nanchital.gob.mx/',
        205,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Carlos Reyes Aguilar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        113,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Antonio Cuevas Mesa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        113,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karla Nancy Abad Sosa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ayuntamientonaranjal.gob.mx/index.html',
        114,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isidora Mu?oz Galan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ayuntamientonaranjal.gob.mx/index.html',
        114,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Roman Jimenez Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.naranjos.gob.mx/',
        15,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Crisoforo Garcia Constantino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.naranjos.gob.mx/',
        15,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Urania Villareal Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.naranjos.gob.mx/',
        15,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Humberto Ancelin Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.naranjos.gob.mx/',
        15,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Garcia Peralta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.naranjos.gob.mx/',
        15,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cruz Paula Lopez Mendo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.naranjos.gob.mx/',
        15,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victoria Martinez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.naranjos.gob.mx/',
        15,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daicy Faibre Montoya',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.nautla.gob.mx/',
        115,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agustin Barradas Montes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.nautla.gob.mx/',
        115,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adriana Esquivel Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.nautla.gob.mx/',
        115,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Chuzeville Barradas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.nautla.gob.mx/',
        115,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guillermo Mejia Peralta',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://nogales.gob.mx/portal/',
        116,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gloria Bautista Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://nogales.gob.mx/portal/',
        116,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Candido Romero Nestor',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://nogales.gob.mx/portal/',
        116,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blas Palestino Vilchis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://nogales.gob.mx/portal/',
        116,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Luisa Prieto Duncan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.oluta.gob.mx/',
        117,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Antonio Gonzalez Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.oluta.gob.mx/',
        117,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Montalvo Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        118,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miriam Perez Ameca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        118,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Antonio Gomez Pe?a',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        118,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Igor Fidel Roji Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.orizaba.gob.mx/',
        119,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emmanuel Gomez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.orizaba.gob.mx/',
        119,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Teresa Herrera Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.orizaba.gob.mx/',
        119,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rocio Sosa Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.orizaba.gob.mx/',
        119,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Valdivia Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.orizaba.gob.mx/',
        119,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Jose Aguilar Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.orizaba.gob.mx/',
        119,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abel Cuevas Palmero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.otatitlan.gob.mx/inicio-2/',
        120,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Mora Aguirre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.otatitlan.gob.mx/inicio-2/',
        120,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Berlin Lopez Francisco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://oteapan.gob.mx/',
        121,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Dominguez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://oteapan.gob.mx/',
        121,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Antonio Gomez Betancourt',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ozuluama.gob.mx/',
        122,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Del Carmen Castellanos Nieto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ozuluama.gob.mx/',
        122,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elias Campillo Martin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ozuluama.gob.mx/',
        122,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Enrique Delgado Sosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ozuluama.gob.mx/',
        122,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Gonzalez Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.pajapan.gob.mx/',
        123,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De La Cruz Pulido Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.pajapan.gob.mx/',
        123,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Molina Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.panuco.gob.mx/index/',
        124,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Nieto Zamora',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.panuco.gob.mx/index/',
        124,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Guadalupe Pe?a Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.panuco.gob.mx/index/',
        124,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Elias De Paz Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.panuco.gob.mx/index/',
        124,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Benilde Hernandez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.panuco.gob.mx/index/',
        124,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anabel Ponce Calderon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.panuco.gob.mx/index/',
        124,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eslim Muljady Romero Olguin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.panuco.gob.mx/index/',
        124,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pamela Etienne Salvador',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.panuco.gob.mx/index/',
        124,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Javier Herbert Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.panuco.gob.mx/index/',
        124,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rene Aparicio Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.panuco.gob.mx/index/',
        124,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carolina Cardenas Avila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.panuco.gob.mx/index/',
        124,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariano Romero Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://papantlaveracruz.com.mx/',
        125,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Sanchez Mestizo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://papantlaveracruz.com.mx/',
        125,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Benito Castillo Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://papantlaveracruz.com.mx/',
        125,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isabel Jimenez Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://papantlaveracruz.com.mx/',
        125,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalino Garcia Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://papantlaveracruz.com.mx/',
        125,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Lizzete Moncayo Villanueva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://papantlaveracruz.com.mx/',
        125,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oralia Soler Sosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://papantlaveracruz.com.mx/',
        125,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efrain Rivera Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://papantlaveracruz.com.mx/',
        125,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Serguio Rodriguez Islas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://papantlaveracruz.com.mx/',
        125,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Espino Mata',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://papantlaveracruz.com.mx/',
        125,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nora Vanesa Bernabe De Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://papantlaveracruz.com.mx/',
        125,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rut Hernandez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://papantlaveracruz.com.mx/',
        125,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abel Ramirez Coria',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.pasodeovejas.gob.mx/',
        127,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorenzo Jesus Rebolledo Montiel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.pasodeovejas.gob.mx/',
        127,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Monserrat Cordova Pulido',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.pasodeovejas.gob.mx/',
        127,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brenda Mendez Leon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.pasodeovejas.gob.mx/',
        127,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Leon Trejo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        126,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesareo Salgado Huber',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        126,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Bravo Rivadeneyra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        126,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Doritzel Vega Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        126,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariel Roa Murguia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        126,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Francisco Hervert Prado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.perote.gob.mx/home',
        129,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esteban Romano Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.perote.gob.mx/home',
        129,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Leon Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.perote.gob.mx/home',
        129,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angelica Flor Morales Galicia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.perote.gob.mx/home',
        129,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Los Dolores Noriega Barrueta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.perote.gob.mx/home',
        129,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angelina Zavaleta Cordoba',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.perote.gob.mx/home',
        129,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elvira Cruz Hunter',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.platonsanchezgob.mx/',
        130,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dionicio Hernandez Vicente',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.platonsanchezgob.mx/',
        130,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mireya Cruz Rosas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.platonsanchezgob.mx/',
        130,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriel Antonio Alvarez Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.playavicente.gob.mx/',
        131,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Alejandro Martinez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.playavicente.gob.mx/',
        131,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fara Garcia Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.playavicente.gob.mx/',
        131,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucio Andres Sabino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.playavicente.gob.mx/',
        131,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Deysi Casta?eda Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.playavicente.gob.mx/',
        131,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Jose Carre?o Cano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.playavicente.gob.mx/',
        131,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yuliana Lagunes Fernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.playavicente.gob.mx/',
        131,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Javier Velazquez Vallejo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.gobiernodepozarica.gob.mx/',
        132,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felix Ivan Garcia Bustos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.gobiernodepozarica.gob.mx/',
        132,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gregoria Miguel Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.gobiernodepozarica.gob.mx/',
        132,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eloy Nu?ez Leon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.gobiernodepozarica.gob.mx/',
        132,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brenda Guadalupe Carrion Cabrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.gobiernodepozarica.gob.mx/',
        132,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Herrera Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.gobiernodepozarica.gob.mx/',
        132,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De La Luz Mora Alarcon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.gobiernodepozarica.gob.mx/',
        132,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aldo Salvador Maldonado Macias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.gobiernodepozarica.gob.mx/',
        132,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dulce Maria Carpizo Bauza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.gobiernodepozarica.gob.mx/',
        132,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Sigfrido Cantu Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.gobiernodepozarica.gob.mx/',
        132,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fausto Jaimit Cabrera Davila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.gobiernodepozarica.gob.mx/',
        132,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yhereiri Carranza Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.gobiernodepozarica.gob.mx/',
        132,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vanessa Balderas Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.gobiernodepozarica.gob.mx/',
        132,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Fernando Cervantes Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.puebloviejo.gob.mx/',
        133,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Regulo Huerta Govea',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.puebloviejo.gob.mx/',
        133,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Heder Luis Cruz Cerecedo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.puebloviejo.gob.mx/',
        133,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olegario Maldonado Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.puebloviejo.gob.mx/',
        133,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Nelly Perez Jose',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.puebloviejo.gob.mx/',
        133,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Oliva Pi?eiro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.puebloviejo.gob.mx/',
        133,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fabian Sartorius Dominguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://puentenacional.gob.mx/',
        134,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Hernandez Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://puentenacional.gob.mx/',
        134,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isidora Antonio Ramos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.rafaeldelgado.gob.mx/',
        135,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adrian Hernandez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.rafaeldelgado.gob.mx/',
        135,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Allan Libreros Alba',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://rafaellucio.emunicipios.gob.mx/inicio/',
        136,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hugo Alba Libreros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://rafaellucio.emunicipios.gob.mx/inicio/',
        136,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Velasquez Ruano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.rioblanco.gob.mx/',
        139,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Isaias Villegas Caballero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.rioblanco.gob.mx/',
        139,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Rosas Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.rioblanco.gob.mx/',
        139,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Fernandez Aranda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.rioblanco.gob.mx/',
        139,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leticia Carrera Marin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.rioblanco.gob.mx/',
        139,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Los Angeles Nieto Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.rioblanco.gob.mx/',
        139,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sofia Gonzalez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.rioblanco.gob.mx/',
        139,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Lira Mojica',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://saltabarranca.gob.mx/index.html',
        140,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eunice Contreras Godinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://saltabarranca.gob.mx/index.html',
        140,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Magdaleno Ramos Xotlanihua',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sanandrestenejapan.gob.mx/',
        141,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Asuncion Torres Tlaxcala',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sanandrestenejapan.gob.mx/',
        141,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Octavio Perez Garay',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sanandrestuxtla.gob.mx/',
        142,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Delgado Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sanandrestuxtla.gob.mx/',
        142,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Ines Zarza Carrizosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sanandrestuxtla.gob.mx/',
        142,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guillermo Javier Pretelin Silva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sanandrestuxtla.gob.mx/',
        142,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martin Josue Ataxca Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sanandrestuxtla.gob.mx/',
        142,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efrain Chagala Chontal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sanandrestuxtla.gob.mx/',
        142,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edith Olin Arano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sanandrestuxtla.gob.mx/',
        142,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniela Turrent Espinosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sanandrestuxtla.gob.mx/',
        142,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elsa Maria Gonzalez Dominguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sanandrestuxtla.gob.mx/',
        142,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Miguel Quino Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sanandrestuxtla.gob.mx/',
        142,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irving Marcial Baxin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sanandrestuxtla.gob.mx/',
        142,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reina Caixba Arres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sanandrestuxtla.gob.mx/',
        142,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andres Valencia Rios',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sanjuanevangelista.gob.mx/',
        143,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Rodriguez Montiel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sanjuanevangelista.gob.mx/',
        143,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angel Manuel Rosado Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sanjuanevangelista.gob.mx/',
        143,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Tadeo Zamudio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sanjuanevangelista.gob.mx/',
        143,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leticia Vidal Pe?a',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sanjuanevangelista.gob.mx/',
        143,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alicia Margarita Hernandez Agueros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sanjuanevangelista.gob.mx/',
        143,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Daniel Lagunes Marin',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://sanrafael.emunicipios.gob.mx/',
        211,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Alberto Delgado Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://sanrafael.emunicipios.gob.mx/',
        211,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ignacio Pablo Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.santiagosochiapan.gob.mx/',
        212,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfonso Revilla Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.santiagosochiapan.gob.mx/',
        212,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Argenis Vazquez Copete',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        144,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gaudencio De Jesus Castellanos Triana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        144,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Crescencio Rascon Cobos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        144,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Israel Santos Mazaba',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        144,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz Maria Castellanos Calderon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        144,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carolina Anahi Navarrete Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        144,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fredy Ayala Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-07-01, 2021-12-31)'::daterange,
        'http://www.sayuladealeman.gob.mx/',
        145,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Denisse Gonzalez Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sochiapa.gob.mx/',
        147,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Renato Cruz Pedrasa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.sochiapa.gob.mx/',
        147,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rolando Sinforoso Rosas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ayuntamiento.soconusco.gob.mx/#',
        146,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santos Cruz Prieto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.ayuntamiento.soconusco.gob.mx/#',
        146,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Perez De Los Santos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.soledadatzompa.gob.mx/',
        148,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Vicente Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.soledadatzompa.gob.mx/',
        148,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mtra. Martha Ximena Rodriguez Utrera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-02, 2021-12-31)'::daterange,
        'http://www.soledaddedoblado.gob.mx/',
        149,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Faustino Guzman Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-02, 2021-12-31)'::daterange,
        'http://www.soledaddedoblado.gob.mx/',
        149,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorena Sarmiento Marquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-02, 2021-12-31)'::daterange,
        'http://www.soledaddedoblado.gob.mx/',
        149,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Miranda Alvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-02, 2021-12-31)'::daterange,
        'http://www.soledaddedoblado.gob.mx/',
        149,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Deysi Sagrero Juarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.soteapan.gob.mx/',
        150,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eliseo Santiago Bautista',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.soteapan.gob.mx/',
        150,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rufina Franco Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.soteapan.gob.mx/',
        150,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andres Ramos Reyno',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tamalin.gob.mx/',
        151,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Armando Torres Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tamalin.gob.mx/',
        151,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Citlali Medellin Careaga',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tamiahua.gob.mx/',
        152,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Vicencio Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tamiahua.gob.mx/',
        152,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Alejandre Juarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tamiahua.gob.mx/',
        152,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Victoria Gonzalez Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tamiahua.gob.mx/',
        152,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lizabeth Lara Marquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tamiahua.gob.mx/',
        152,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adrian Dominguez Rangel',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tampicoalto.gob.mx/inicio/',
        153,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Susana Yazmin China Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tampicoalto.gob.mx/inicio/',
        153,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipa Y Guillermina Cruz Carballo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tancoco.gob.mx/index.html',
        154,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Alberto Flores Cuervo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tancoco.gob.mx/index.html',
        154,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Esther Melo Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tancoco.gob.mx/index.html',
        154,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalia Alvarez Muñoz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        155,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ascencion Alvarado Olazaran',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        155,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amado Guzman Aviles',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tantoyucaveracruz.gob.mx/index.html',
        156,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Homero Sanchez Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tantoyucaveracruz.gob.mx/index.html',
        156,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eva Moreno Cardenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tantoyucaveracruz.gob.mx/index.html',
        156,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adrian Ramirez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tantoyucaveracruz.gob.mx/index.html',
        156,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lizbeth Monroy Vera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tantoyucaveracruz.gob.mx/index.html',
        156,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rene Salazar Castellanos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tantoyucaveracruz.gob.mx/index.html',
        156,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Angelica Reyes Vera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tantoyucaveracruz.gob.mx/index.html',
        156,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricio Santiago Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tantoyucaveracruz.gob.mx/index.html',
        156,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nancy Adalyd Cortes Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tantoyucaveracruz.gob.mx/index.html',
        156,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esteban Bautista Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tatahuicapan.gob.mx/',
        210,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Alberto Cruz Bautista',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tatahuicapan.gob.mx/',
        210,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Angelica Vazquez Casas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tatatila.gob.mx/',
        157,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Basilio Trujillo Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tatatila.gob.mx/',
        157,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Angel Espejo Maldonado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tecolutla.gob.mx/index.html',
        158,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maribel Duran Valencia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tecolutla.gob.mx/index.html',
        158,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abraham Osvaldo Rodriguez Guzman',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tecolutla.gob.mx/index.html',
        158,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Noemi Huerta Betancourt',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tecolutla.gob.mx/index.html',
        158,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eleazar Chavira Abad',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tecolutla.gob.mx/index.html',
        158,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Armando Gomez Diez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tecolutla.gob.mx/index.html',
        158,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rufino Contreras Medrano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tehuipango.gob.mx/portal/',
        159,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Panzo Chipahua',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tehuipango.gob.mx/portal/',
        159,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abel Hermenegildo Diaz Ponce',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        160,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dagoberto Bautista Jonguitud',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        160,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Hugo Hernandez Solis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        160,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Humberto Arnoldo Silva Medellin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        160,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Saudi Maribel Meraz Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        160,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marisely Arguelles Galvan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        160,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olga Lidia Sanchez Reyes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tenampa.gob.mx/',
        161,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teodulfo Santoyo Vasquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tenampa.gob.mx/',
        161,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Primitiva Sanchez Gabriel',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tenochtitlan.gob.mx/',
        162,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Aquiles Sanchez Gabriel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tenochtitlan.gob.mx/',
        162,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Antonio Chama Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        163,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Valencia Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        163,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz Del Carmen Hernandez Fernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tepatlaxco.gob.mx/',
        164,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yael Melisa Castillo Blanco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tepatlaxco.gob.mx/',
        164,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Romero Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tepetlan.gob.mx/',
        165,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oguilber Castillo Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tepetlan.gob.mx/',
        165,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olga Isela Gerardo Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tepetzintla.gob.mx/',
        166,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Higinio Benito Celestino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tepetzintla.gob.mx/',
        166,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Missael Garcia Zepahua',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tequila.gob.mx/',
        167,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adelaida Colohua Carbajal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tequila.gob.mx/',
        167,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Escamilla Jimenez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        169,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Carmen Hernandez Teodoro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        169,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bernardino Tzanahua Anastacio',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.texhuacan.gob.mx/',
        170,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfreda Tepole Quechulpa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.texhuacan.gob.mx/',
        170,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Saul Reyes Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.texistepec.gob.mx/',
        171,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Candido Cruz Fernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.texistepec.gob.mx/',
        171,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esmeralda Hernandez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.texistepec.gob.mx/',
        171,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Arturo Sanchez Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tezonapa.gob.mx/index.html',
        172,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Eusebio Sanchez Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tezonapa.gob.mx/index.html',
        172,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Javier Santiago Vite',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tezonapa.gob.mx/index.html',
        172,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Acosta Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tezonapa.gob.mx/index.html',
        172,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anel Caballero Murillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tezonapa.gob.mx/index.html',
        172,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguelina Perez Pimentel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tezonapa.gob.mx/index.html',
        172,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricio Aguirre Solis',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tierrablancaver.gob.mx/index.php',
        173,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe De Jesus Burgos Zaleta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tierrablancaver.gob.mx/index.php',
        173,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Jose Ruiz Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tierrablancaver.gob.mx/index.php',
        173,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Catalina Reyes Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tierrablancaver.gob.mx/index.php',
        173,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ernesto Palmeros Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tierrablancaver.gob.mx/index.php',
        173,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marisela Vela Pulido',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tierrablancaver.gob.mx/index.php',
        173,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Montiel Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tierrablancaver.gob.mx/index.php',
        173,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Luisa Lopez Tecalco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tierrablancaver.gob.mx/index.php',
        173,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alicia Salomon Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tierrablancaver.gob.mx/index.php',
        173,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Hernandez Gallardo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tihuatlan-ver.com/',
        174,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edwin Leobardo Gomez Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tihuatlan-ver.com/',
        174,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Janet Maria Guerrero Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tihuatlan-ver.com/',
        174,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Francisco Cuervo Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tihuatlan-ver.com/',
        174,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Benito Solis Quintana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tihuatlan-ver.com/',
        174,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yazmin Gomez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tihuatlan-ver.com/',
        174,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victoria Luis Calixto',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tlachichilco.gob.mx/',
        179,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Saulo Francisco Macario',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tlachichilco.gob.mx/',
        179,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Clara Luz Dominguez Vargas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tlacojalpan.gob.mx/',
        175,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bacilio Hernandez Camarero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tlacojalpan.gob.mx/',
        175,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Velasco Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tlacolulan.gob.mx/',
        176,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Solano Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tlacolulan.gob.mx/',
        176,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Christian Romero Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tlacotalpan.gob.mx/index.html',
        177,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eric Enrique Morteo Verdejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tlacotalpan.gob.mx/index.html',
        177,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Xochitl Del Rosario Ferreira Zamudio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tlacotalpan.gob.mx/index.html',
        177,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gonzalo Palacios Catarino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tlacotalpan.gob.mx/index.html',
        177,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Magdalena Azcanio Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tlacotalpan.gob.mx/index.html',
        177,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julian Carlos Rodriguez Bernal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tlacotalpan.gob.mx/index.html',
        177,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ansberto Marino Espinoza Murillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tlacotepecdemejia.com/Portal.php',
        178,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Beatriz Hernandez Fuentes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tlacotepecdemejia.com/Portal.php',
        178,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agustin Lagunes Alvarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        180,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfonso Lozano Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        180,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guedana Valdivia Lordmendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        180,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Macario Morales Temiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        180,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isaias Perez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        180,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayra Delfin Elvira',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        180,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Angeles Aguirre',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        181,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aurea Geron Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        181,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Cruz Lagunez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        25,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ofelia Jarillo Gasca',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tlapacoyanver.gob.mx/index.php',
        182,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Juarez Animas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tlapacoyanver.gob.mx/index.php',
        182,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Zamora Tanchipe',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tlapacoyanver.gob.mx/index.php',
        182,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zoila Aguilar Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tlapacoyanver.gob.mx/index.php',
        182,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alba Elena Tirado Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tlapacoyanver.gob.mx/index.php',
        182,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Tentzohua Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tlaquilpa.gob.mx/',
        183,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Carlos Sanchez Tzanahua',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tlaquilpa.gob.mx/',
        183,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Ramos Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tlilapan.gob.mx/',
        184,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anselmo Tehuintle De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tlilapan.gob.mx/',
        184,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nicolas Prado Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        185,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Donato Cortes Suazo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        185,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cirina Apodaca Quiñones',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tonayan.gob.mx/',
        186,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efigenia Juarez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tonayan.gob.mx/',
        186,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayra Paredes Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.totutla.gob.mx/',
        187,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yazmin Reyes Quiroz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.totutla.gob.mx/',
        187,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Manuel Diaz Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        204,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Sanchez Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        204,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Antonio Herrera Pe?a',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        204,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ildefonso Santos Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        204,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andrea Manzano Regules',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        204,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Helen Beatriz Reyes Arroniz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        204,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Antonio Aguilar Mancha',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tuxpanveracruz.gob.mx/',
        188,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Bautista Quiroz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tuxpanveracruz.gob.mx/',
        188,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Lopez Aran',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tuxpanveracruz.gob.mx/',
        188,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayte Catalina Villalobos Fortun',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tuxpanveracruz.gob.mx/',
        188,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Javier Mendez Salda?a',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tuxpanveracruz.gob.mx/',
        188,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Beatriz Pi?a Vergara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tuxpanveracruz.gob.mx/',
        188,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Francisco Cruz Lorencez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tuxpanveracruz.gob.mx/',
        188,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sonia Fatima Corona Chain',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tuxpanveracruz.gob.mx/',
        188,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Rafael Alvarez Cobos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tuxpanveracruz.gob.mx/',
        188,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Monica Guadalupe Ortiz Blanco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://tuxpanveracruz.gob.mx/',
        188,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Froylan Estrada Rendon',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tuxtilla.gob.mx/web/index.php',
        189,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aurelio Medina Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.tuxtilla.gob.mx/web/index.php',
        189,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Enrique Benitez Avila',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        190,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Enrique Benitez Avila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        190,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andres Salas Cotreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        190,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eugenio Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        190,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mitzhy Pahola Morales Alarcon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        190,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esteban Campechano Rincon',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://uxpanapa.gob.mx/',
        209,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Baldomero Castro Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://uxpanapa.gob.mx/',
        209,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roman Benedicto Bastida Huesca',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.vegadealatorre.gob.mx/',
        191,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angelina Peredo Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.vegadealatorre.gob.mx/',
        191,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Yunes Marquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://https',
        192,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Eduardo Pineda Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://https',
        192,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ileana Ramirez Dominguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://https',
        192,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel David Hermida Copado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://https',
        192,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Xochitl Nathalie Arzaba Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://https',
        192,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Antonio Salazar Rios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://https',
        192,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Rosario Vera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://https',
        192,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Gomez Valdivia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://https',
        192,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Lara Baez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://https',
        192,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yadira Tapia Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://https',
        192,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Inocente De La Cruz Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://https',
        192,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marlon Eduardo Ramirez Marin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://https',
        192,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victoria Rebolledo Lagunes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://https',
        192,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Clotilde Juliana Reyes Dominguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://https',
        192,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gisela Ramon Contreras',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.villaaldama.gob.mx/',
        193,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isidra Rodriguez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.villaaldama.gob.mx/',
        193,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Laura Soto Rosas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.villaaldama.gob.mx/',
        193,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Hipolito Rodriguez Herrero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ayuntamiento.xalapa.gob.mx/web/guest/home',
        89,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eric Omar Rodolfo Juarez Valladades',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ayuntamiento.xalapa.gob.mx/web/guest/home',
        89,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guillermina Ramirez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ayuntamiento.xalapa.gob.mx/web/guest/home',
        89,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Perez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ayuntamiento.xalapa.gob.mx/web/guest/home',
        89,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Consuelo Ocampo Cano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ayuntamiento.xalapa.gob.mx/web/guest/home',
        89,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan De Dios Alvarado Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ayuntamiento.xalapa.gob.mx/web/guest/home',
        89,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Consuelo Niembro Dominguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ayuntamiento.xalapa.gob.mx/web/guest/home',
        89,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Yerania Diaz Chavar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ayuntamiento.xalapa.gob.mx/web/guest/home',
        89,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Antonio Alvarado Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ayuntamiento.xalapa.gob.mx/web/guest/home',
        89,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Maria Cordoba Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ayuntamiento.xalapa.gob.mx/web/guest/home',
        89,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Gabriel Fernandez Garibay',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ayuntamiento.xalapa.gob.mx/web/guest/home',
        89,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Javier Gonzalez Villagomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ayuntamiento.xalapa.gob.mx/web/guest/home',
        89,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luiza Angelica Bernal Velazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ayuntamiento.xalapa.gob.mx/web/guest/home',
        89,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Osbaldo Martinez Gamez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://ayuntamiento.xalapa.gob.mx/web/guest/home',
        89,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gloria Luz Galvan Orduña',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        194,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Pozos Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        194,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Sabino Miguel Valdivia Pozos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        194,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz Del Carmen Montemira Mavil',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        194,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Magdaleno Juarez Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.xoxocotla.gob.mx/',
        195,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marta Cervantes Tzompaxtle',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.xoxocotla.gob.mx/',
        195,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Apolinar Crivelli Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.yanga.gob.mx/',
        196,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ernesto Alberto Correa Ancona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.yanga.gob.mx/',
        196,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fidencio Romero Ortega',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.yecuatla.gob.mx/',
        197,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Amancio Gomez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.yecuatla.gob.mx/',
        197,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carina Lugo Barron',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        198,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Rueda Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        198,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Minerva Martinez Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.zaragozaver.gob.mx/',
        199,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Hernandez Antonio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.zaragozaver.gob.mx/',
        199,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Rincon Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.zentla.gob.mx/',
        200,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yolanda Quintero Fernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.zentla.gob.mx/',
        200,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Mezhua Campos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.zongolica.gob.mx/index.html',
        201,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Cruz Sanchez De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.zongolica.gob.mx/index.html',
        201,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esperanza Zavaleta Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.zongolica.gob.mx/index.html',
        201,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ranulfo Xocua Zepahua',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.zongolica.gob.mx/index.html',
        201,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arely Tezoco Oltehua',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.zongolica.gob.mx/index.html',
        201,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcelino Susano Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.zontecomatlanveracruz.gob.mx/',
        202,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rolando Cruz Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        'http://www.zontecomatlanveracruz.gob.mx/',
        202,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Faustino Ramiro Velazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        203,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Perez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-01-01, 2021-12-31)'::daterange,
        null,
        203,
        30
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
              `)
}
