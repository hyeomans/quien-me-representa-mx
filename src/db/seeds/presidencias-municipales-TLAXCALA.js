exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 29).del()
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
        '- - - -',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        22,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nancy Cortes Vazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://amaxac.gob.mx/web/inicio.php',
        1,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angelo Gutierrez Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        2,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Badillo Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://www.apizaco.gob.mx/',
        3,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        4,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Lima Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        5,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://bjuareztlax.gob.mx/web/inicio.php',
        60,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Peña Najera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        6,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo Jimenez Romero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        10,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eddy Roldan Xolocotzi',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://www.contla.gob.mx/turistico/inicio.php',
        18,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Romero Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        8,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Neria Carreño',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        9,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://www.elcarmentequexquitla.gob.mx/',
        7,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Macias Moreno',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        54,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Gonzalez Guarneros',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://espanitatlax.gob.mx/turistico/inicio.php',
        12,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Salvador Santos Cedillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        13,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Angel Roldán Carrillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        14,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Rolando Perez Saavedra',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        15,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Renato Sanchez Rojas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://ixtenco.gob.mx/turistico/inicio.php',
        16,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Pluma Melendez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://tlaltelulco.gob.mx/web/inicio.php?seccion=1',
        52,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://www.lcardenastlax.gob.mx/turistico/inicio.php',
        55,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        17,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Prisco Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        11,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oswaldo Manuel Romano Valdes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        21,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Garcia Sampedro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        23,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felicitas Vazquez Islas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://ayuntamientopanotla.gob.mx/',
        24,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Octavio Rojas Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        41,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        53,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        51,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isidro Nohpal Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://sjzacualpan.gob.mx/',
        56,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hilario Padilla Longino',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        50,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Josue Guzman Zamora',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://huactzinco.gob.mx/',
        47,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oracio Tuxpan Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        59,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://tecopilco.gob.mx/web/inicio.php?seccion=1',
        57,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Tomas Juarez Contreras',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://spm.gob.mx/turistico/inicio.php',
        25,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        20,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        58,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Portillo Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://www.teacalco.gob.mx/web/inicio.php',
        45,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maribel Meza Guzman',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://ayometla.gob.mx/turistico/inicio.php',
        48,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://quilehtlatlax.gob.mx/turistico/inicio.php',
        46,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Martinez Del Razo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        26,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        49,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        27,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodrigo Cuahutle Salazar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        28,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alan Alvarado Islas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://www.tepetitla.gob.mx/turistico/inicio.php',
        19,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        29,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgardo Isaac Olivares Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        30,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andres Ramirez Galicia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        31,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Pablo Angulo Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        32,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Alfredo Corichi Fragoso',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://www.capitaltlaxcala.gob.mx/',
        33,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Flores Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://www.tlaxco.gob.mx/',
        34,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Quirino Torres Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        35,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ravelo Zempoalteca Enriquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        36,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Ramos Montiel',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://www.tzompantepectlax.gob.mx/web/inicio.php?seccion=1',
        38,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Rafael Coca Vazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://www.xaloztoc.gob.mx/turistico/inicio.php',
        39,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Hernandez Vazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        40,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Angel Barroso Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        'http://www.xicohtzinco.gob.mx',
        42,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Anita Chamorro Badillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        43,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hildeberto Perez Alvarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        44,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Rodriguez Contreras',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-08-31, 2024-08-31)'::daterange,
        null,
        37,
        29
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

              `)
}
