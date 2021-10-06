exports.seed = async function (knex) {
            await knex('presidencia_municipal_simplificado').where('estado_id', 7).del()
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
        'Ismael Diaz Estrada',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        1,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodrigo Trinidad Rosales Franco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        2,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Sanchez Rojas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.acapetahua.gob.mx/',
        3,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angelina Diaz Mendez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        112,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Roque Tipacamu',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        4,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Guadalupe Lomasto Torres',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        5,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ernesto Teodomiro Osorio Escobar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        6,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andrea Diaz Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        7,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lazaro Escalante Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.angelalbinocorzo.gob.mx/',
        8,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yolanda Alonso De Los Santos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://https',
        9,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Onecimo Esau Santizo Roblero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        10,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fabio Lopez Roblero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        11,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isaias Tomas Soriano Ramos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        113,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Arturo Acero Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        12,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Luis Zenteno Meneses',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        13,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Inchong Juan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.cacahoatan.gob.mx',
        15,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Monica Sofia Cordova Roblero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        119,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Fernanda Dorantes Nuñez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        16,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Geronimo Luna Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        22,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Collazo Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        23,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Perez Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://chanal.gob.mx/2016/',
        24,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rubelio Mondragon Aguilar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        25,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abraham Cruz Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        26,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leonardo Cuesta Ramos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.chiapadecorzo.gob.mx/',
        27,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Valdemar Flores Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        28,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bersain Gutierrez Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        29,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Martin Sepulveda Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        30,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Ildelfonso Jimenez Trujillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.chilon.gob.mx/',
        31,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ernesto Cruz Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.cintalapa.gob.mx',
        17,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lenin Perez Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        18,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Antonio Guillen Dominguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.comitan.gob.mx',
        19,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Eliecer Vazquez Castillejos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
        null,
        21,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Humberto Lopez Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        14,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-09-01, 2024-09-30)'::daterange,
        null,
        121,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joel Ramirez Sargento',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        70,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-09-01, 2024-09-30)'::daterange,
        'http://www.emilianozapata.gob.mx/',
        122,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angel Mendez Carbajal',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        32,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enedina Nañez Gallegos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        33,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos De Jesus Ramirez Aguilar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        34,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Elizabeth De La Cruz Mazariegos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.fronterahidalgo.gob.mx/',
        35,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-09-01, 2024-09-30)'::daterange,
        null,
        124,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Manuel Angel Villalobos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.huehuetan.gob.mx/',
        37,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Mario Montejo Urbina',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        38,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ignacio Alvarez Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        39,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Eduardo Salazar Gam',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        40,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Horacio Dominguez Castellanos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        42,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorenzo Reyes Calderon',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        43,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Naybeth Bautista Orantes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        44,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcelino Atila Castellanos Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        45,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Hugo Lazaro Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        46,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Leyver Mendez Vaquerizo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://chiapasjitotol.gob.mx/index.html',
        47,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Serra Cantoral',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.unionjuarez.gob.mx/index.php',
        48,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Cordova Ochoa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.concordia.gob.mx/',
        20,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Luis Gonzalez Vazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        36,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ivan De Jesus Lopez Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.laindependencia.gob.mx/',
        41,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Porfirio Correa Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        50,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ervin Leonel Perez Alfaro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        99,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ignacio Lopez Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        49,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bladimir Hernandez Alvarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.lasmargaritas.gob.mx',
        52,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Antonio Orantes Noriega',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        74,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elmer Nicolas Noriega Zavala',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        51,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zoel Lopez Gutierrez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        114,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Justo Gomez Beltran',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        115,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wilder Alberto Jacob Guzman',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        53,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro De La Cruz Villalobos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        54,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leobardo Lopez Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        55,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Tilo Alcudia Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        123,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maruca Mendez Mendez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        56,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Consuelo Yolanda Alvarado Gordillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        116,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfonso Meza Pivaral',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        57,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe Alejandro Mendez Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        58,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gilberto Rodriguez De Los Santos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        59,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcos Ramirez Valle',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        60,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Alejandro Maza Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.ocozocoautla.gob.mx/',
        61,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe Hernandez Vazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        62,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Gonzalez Alegria',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        63,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-09-01, 2024-09-30)'::daterange,
        null,
        64,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Cabrera Aguilar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.palenque.gob.mx',
        65,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raquel Trujillo Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        66,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Hernandez Vazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        67,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andres Carballo Cordova',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        68,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Albores Lima',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        69,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Sanchez Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        71,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Gonzalez Trejo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        72,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yesenia Judith Martinez Dantori',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        73,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Bautista Aguilar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        120,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Darwin Gonzalez Cabello',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        75,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roman Mena De La Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        76,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Clemente Gomez Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        117,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariano Alberto Diaz Ochoa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.sancristobal.gob.mx/',
        77,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Antonio Castillejos Castellanos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        78,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Aguilar Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.sanjuancancuc.chiapas.gob.mx/portal/',
        79,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Noe Alejandro Suarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        80,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Diaz Mendez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        118,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-09-01, 2024-09-30)'::daterange,
        null,
        81,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gilberto Martinez Andrade',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        82,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abelardo Perez Nuñez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        83,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Morales Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        84,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Aparicio Trejo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        85,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fredy Espinoza Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        86,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alexis Nucamendi Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        87,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sonia Eloina Hernandez Aguilar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.suchiate.chiapas.gob.mx/',
        88,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edic Francisco Castellanos Rueda',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        89,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Irene Urbina Castañeda',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.tapachula.gob.mx',
        90,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hipolita Urquin Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        91,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosemberg Diaz Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        92,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Guzman Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        93,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alonso Jimenez Guzman',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        94,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruben De Jesus Valdez Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        95,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Limber Gregorio Gutierrez Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        96,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Natividad De Los Santos Miranda',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        97,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eulalia Lopez Guitierrez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        98,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Heidy Mayra Vazquez Arcos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.tumbala.gob.mx/',
        100,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Enrique Gamboa Altuzar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        101,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Orsoe Morales Vazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.tuxtla.gob.mx',
        102,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bany Oved Guzman Ramos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        103,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Joel Altuzar Jimenez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        104,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isaias Verdugo Roblero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.unionjuarez.gob.mx/',
        105,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-09-01, 2024-09-30)'::daterange,
        'http://www.venustianocarranza.gob.mx',
        106,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel De Jesus Cruz Coutiño',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        107,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Robertony Orozco Aguilar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        108,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariano Guadalupe Rosales Zuart',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.villaflores.gob.mx',
        109,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Manuel Utrilla Constantino',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.yajalon.gob.mx',
        110,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariano Francisco Sanchez Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        111,
        7
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

              `)
            }
            