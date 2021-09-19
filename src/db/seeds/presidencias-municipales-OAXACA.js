exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 20).del()
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
        'Adan Jose Maciel Sosa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        2,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudio Vasquez Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        3,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Galdino Everardo Morales Flores',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        5,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Toral Rios',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lizbeth Victoria Huerta',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        7,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Godofredo Hernandez Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        8,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angel Martinez Vasquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        9,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Miguel Ortiz Quintero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        10,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Mendoza Velasco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        11,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felix Tomas Miranda Alvarado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        13,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriel Hernandez Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2021-12-31)'::daterange,
        null,
        14,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leobardo Ramos Lazaro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        15,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adolfo Nicolas Nicolas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        16,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Clementino Morales Vasquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://chiquihuitlan.com',
        187,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Concepcion Libia Hernandez Castillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        17,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Cheng Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        41,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pascacio Gregorio Vasquez Santiago',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        18,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Modesto Najera Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2021-12-31)'::daterange,
        null,
        19,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Antonio Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        21,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        22,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aniceto Chavez Viruel',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2022-12-31)'::daterange,
        null,
        23,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvano Flores Gordillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.municipiodecosolapa.org.mx/',
        24,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ponciano Rodrigo Soriano Espinosa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        25,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Moises Perez De La Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        26,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rene Linares Illescas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        27,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Angel Carrasco Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        12,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hazael Matus Toledo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        30,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alonso Nieto Guerrero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2021-12-31)'::daterange,
        null,
        29,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Matilde Barroso Mendez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        31,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marta Garcia Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        32,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Isabel Montaño Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        33,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruben Ortiz Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        35,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leonardo Diaz Jimenez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        28,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juanita Arcelia Cruz Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.huajuapandeleon.gob.mx',
        37,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Aparicio Santiago',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        553,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        549,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efren Garcia Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        38,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Peralta Allende',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        39,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Israel Sofonias Herrera Suarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        40,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emilio Montero Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        43,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rigoberto Guzman Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        20,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        68,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Molina Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        73,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raymundo Rivera Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        44,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        45,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felix Sampedro Trinidad',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        46,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ponciano Antonio Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        47,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Maximo Aquino',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        48,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Flora Barrios',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://www.magdalenapenasco.com/',
        49,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodolfo Ignacio Fructuoso',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        50,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roel Filio Lozano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://tequisistlan.gob.mx/',
        51,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodolfo Hernandez De La Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        52,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Fabian Flores Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        53,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        54,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Rodolfo Sanchez Arzola',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        55,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marta Elva Añorve Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        56,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Juarez Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        57,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Rosas Blanco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        58,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victoria Rodriguez Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://mesoneshidalgo.gob.mx/',
        36,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Genaro Esau Hernandez Jimenez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://municipiomiahuatlandeporfiriodiaz.gob.mx/municipio/',
        59,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Luis Cruz Zurita',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        61,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nadia Heidi Niño Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        63,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Manuel Rodriguez Valenzuela',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        64,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Hernandez Cuevas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://municipionuevozoquiapam.gob.mx/',
        65,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oswaldo Garcia Jarquin',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.municipiodeoaxaca.gob.mx',
        66,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Mendoza Vasquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ocotlanoaxaca.gob.mx/',
        67,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hortensia Garcia Bernal',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.pinotepadedonluis.gob.mx',
        69,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Josue Silva Jacinto',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://www.plumahidalgo.gob.mx/',
        70,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Guzman Carrasco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        71,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aracely Garcia Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        72,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Santiago Ruiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        74,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        75,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Atecas Altamirano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        76,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enriqueta Rubi Ramirez Juarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        77,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efrain Camacho Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        78,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eric Cajero Garzon',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        79,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Celso Ambrosio Perez Torres',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        80,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Rey Ortiz Santiago',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://sanagustinetla.mx/',
        81,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Macabeos Moises Santiago Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        82,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Castro Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        83,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nicolas Cruz Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        84,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Garcia Lucero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        85,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Remedios Del Pilar Perez Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        86,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Francisco Garcia Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        87,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nicolas Pacheco Santiago',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://sanandreshuayapamoaxaca.gob.mx/',
        88,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        89,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Perez Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        90,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        91,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        92,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isaac Castellanos Victoria',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        93,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        95,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Filogonio Ortega Ramos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        96,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cipriano Mateo Velasco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        97,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edilberto Garcia --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        98,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Alberto Santos Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        99,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esteban Abel Sanchez Campos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        100,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Justino Bernardo Padilla',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://municipiodesanantoninoelalto.com/',
        101,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eusebio Bautista Peña',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        102,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        104,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Doroteo Caballero Caballero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        105,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcos Ramiro Bolaños Diego',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        106,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Bautista Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        107,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Damian Damian',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        108,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Florencio San German Santiago',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        109,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Atenogenes Jimenez Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        110,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Cruz Pacheco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://sanbartolocoyotepec.gob.mx/',
        112,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elizabeth Miguel Velasco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        113,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcos Antonio Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        114,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Constantino Cruz Borjas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        115,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bibiano Gaspar Zurita',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        116,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victorino Gomez Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        117,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriel Martinez Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        118,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Bernardo Trujillo Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        120,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonino Morales Toledo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        121,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Aragon Parada',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        122,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Celso Santos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        123,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramos Rodolfo Ortiz Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        124,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        127,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Noel Garcia Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        128,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Lopez Carreño',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://sandionisioocotlan.gob.mx/',
        129,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Bautista Barrios',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        130,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Garcia Velazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        131,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Eusebio Cuevas Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        132,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Filemon Bernardo Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        133,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Heladio Lopez Barragan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        134,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandra Aragon Cosme',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        136,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santiago Bazan Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        137,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Vargas Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        138,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Constantino Morales Alameda',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        139,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Florencio De La Cruz Valdivieso',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        140,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Florentino Francisco Mendez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        141,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abelardo Saavedra Guzman',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        142,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramon Vasquez Bautista',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        143,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Cruz Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        144,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marceliano Reyez Roque',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        145,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Cruz Idiaquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        146,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nidia Betzabeth Garcia Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        147,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Lopez Gutierrez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        148,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcelo Ruber Torralba Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        149,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ulises Santos Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://sangabrielmixtepecoaxaca.gob.mx/municipio/',
        150,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Bautista Luis',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        151,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Federico Vasquez Reyes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        152,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yolanda Adelaida Santos Montaño',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        154,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jacinto Mendez Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        155,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Israel Juarez --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        156,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Martinez Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        157,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eli Martinez Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        158,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santos Martinez Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        159,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        160,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Isabel Martinez Mendez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        161,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        162,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Moises Cariño Rios',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        163,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martin Garcia Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        164,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarito Garcia Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        165,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amador Jaime Vasquez Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        169,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carmela Parral Santos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        166,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agar Cancino Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        167,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucia Fabian Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        168,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hugo Garcia Rios',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        170,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wilver Gonzalez Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        171,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Garzon Trujillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        173,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Onofre Guzman',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        174,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maricel Mariscal Gaytan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        175,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        176,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucas Dolores Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        177,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aquileo Aguirre Nuñez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        178,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gloria Angelica Arias Villamil',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        179,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alverto Pedro Gonsalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        180,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marta Regules Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        181,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Bautista Davila',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        182,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reynaldo Magaña Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        183,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Abelardo Baños',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        184,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Francisco Cruz Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        186,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emanuel Mejia Salazar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        188,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Carrera Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        189,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tania Remedios Arias Del Castillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        190,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        191,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gaudencio Herrera Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        193,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marino Martinez Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        196,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eloy Manuel Baltazar Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        198,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raynel Ramirez Mijangos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        199,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gloria Elda Martinez Ortiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        200,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esperanza Rios Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        203,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Melchor Ruiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        204,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bernardino Robles Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        205,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Pastor Bolaños',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        206,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        208,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        209,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Octavio Castro Chavez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        210,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Reyes Villavicencio',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        211,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Simeon Santos Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        213,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esteban Cruz Castillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2021-12-31)'::daterange,
        null,
        214,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Justino Victoria Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        215,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efrain Lazaro Lazaro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        217,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Juan Marquez Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        219,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Albaro Palacios Flores',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        220,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Mario Hernandez Ramos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        221,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rufina Hernandez Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        224,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Baltazar Hernandez Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        225,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Olivera Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        226,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alberto Alfonso Mendoza Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://sanlorenzocacaotepec.gob.mx/',
        227,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Carrera Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        228,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejo Bautista Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        229,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Manuel Garcia Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://sanlorenzovictoria.com.mx/',
        230,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        231,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alicia Moreno Pereda',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://sanlucasojitlan.gob.mx/',
        232,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vicente Santos Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        233,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Carrera Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        234,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        235,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zacarias Juarez Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        236,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Guerrero Pastrana',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        237,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vicenta Rios Santiago',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        238,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Perez Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        239,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Cruz Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        240,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Liborio Fabian Chavez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        241,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roman Juarez Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        242,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raymundo Jimenez Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        243,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Marin Serrano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        244,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vidal Margarito Velasco Reyes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        245,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bernardino Ponce Hinojosa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        247,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guillermo Hernandez Rojas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        248,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Primitivo Morales Montalvo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        249,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Hernandez Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        250,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tomas Victorio Garcia Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        251,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Cesar Lopez Guendulain',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        252,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aurelio Francisco Reyes Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        253,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Crescencio Vasquez Herrera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        255,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        567,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vicente Miguel Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        257,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fidela Bernarda Cuenca Fermin',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        258,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariano Cruz Santiago',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        259,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Mario Alvaro Vazquez Mata',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        260,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ester Guzman Jimenez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        262,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Sanchez Gutierrez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        263,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        264,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Gonzalez Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://sanmigueldelpuerto.gob.mx/',
        265,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodrigo Lucas Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://www.sanmiguelejutla.gob.mx/',
        267,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Lopez Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        268,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tomas Cruz Velasco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        269,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cirino Sanchez Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        271,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Resendez Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        272,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nemecio Mendoza Juarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        273,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Constantino Gaytan Cardenas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        275,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nazario Antonio Hernandez Velasquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        276,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emigdio Pacheco Jacinto',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        277,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eliseo Garcia Arroyo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        279,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brijido Ramirez Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://www.sanmigueltenangoteh.gob.mx/#home',
        280,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Cruz Navarrete',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        281,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Casto Emilio Perez Luis',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        282,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Florencio Abelardo Reyes Alberto',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        283,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Froylan Artemio Garcia Maldonado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        284,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        287,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isidora Del Rocio Galindo Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        288,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abraham Lopez Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        289,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adelfo Ramirez Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        290,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfonso Perez Mendez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        291,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Ulberto Martinez Santiago',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        292,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Arango Romero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        293,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Gonzalez Silva',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        295,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abelardo Ruiz Acevedo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        296,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vulfrano Victoria Velazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        298,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Taurino Avila Gopar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://sanpedroapostol.gob.mx/',
        299,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eliezer Silvino Gutierrez Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        300,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Francisca Antonio Santiago',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        303,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruben Hernandez Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        302,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raymundo Orocio Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        304,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Virgilio Fuentes Zarate',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        305,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarito Moreno Desalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        306,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bartolo Carrera Palacios',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        307,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Evodio Duarte Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://sanpedroixtlahuaca20172019.com.mx/home.html',
        308,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agustin Jimenez Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        309,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anatolio Damian Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        310,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcelino Garcia Duran',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        311,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mauro Edmundo Diaz Carmona',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        312,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adalberto Lopez Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        313,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Mateos Barriga',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        314,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        315,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Freddy Gil Pineda Gopar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        317,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        317,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cupertino Cruz Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        318,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        320,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Saymi Adriana Pineda Velasco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        322,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emma Benites Zarate',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        323,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Imelda Vera Alfaro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        324,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruffo Eder Soriano Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        325,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Macedonio Diaz Palma',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        326,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramiro Valencia Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        327,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcos Antonio Trobamala Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        328,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wilfrido Miguel Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://sanpedrotidaa.gob.mx',
        329,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erasto Cruz Palacios',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        330,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Leon Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        331,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Juan Garcia Montes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        334,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ohamed Vasquez Valenzuela',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        335,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Moises Martinez Velasco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        338,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olegario Luis Benitez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        339,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maximino Garcia Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        340,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Lopez Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        341,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Magaly Ramirez Guzman',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        342,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        344,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Alvarado Dominguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        345,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ezequiel Hernandez Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        346,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esequiel Carlos Velasco Navarro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        347,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Jimenez Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        348,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Simon Ursino Bazan Mendez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        349,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dominguito Antonio Antonio',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        350,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erasto Francisco Sanchez Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        351,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Vasquez Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        352,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        353,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Dominguez Glavan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://https://www.santaanaateixtlahuaca.gob.mx',
        354,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Honorio Granja Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        355,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ignacio Hipolito Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        356,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adolfo Carreño Gopar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        357,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Filiberto Cristino Velasquez Heredia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        358,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elmer Gaspar Guerra',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        360,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Timoteo Valencia Vasquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        361,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabino Constantino Jimenez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://www.cuixtla.gob.mx/informacion.html',
        362,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Zarate Pacheco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        364,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Telesforo Ramirez Contreras',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        365,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leonilo Ruiz Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://municipiosantacatarinaloxicha.org/index.html',
        366,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tomas Quiroz Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        367,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Arellanes --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        368,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Benito Lopez Roque',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        369,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Celerino Jimenez Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        370,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ismael Aguilar Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        371,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irineo Hernandez Nicolas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        372,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Aparicio Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        373,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Barbosa Jimenez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        374,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joel Zaragoza Carrera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        375,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Natividad Matias Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        376,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Librado Angel Arzola Vazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        377,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Trujillo Aguilar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        378,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Medardo Reyes Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        379,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Pablo Aguilar Barrios',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://santacruznundaco.com.mx/',
        380,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fermin Jose Sanchez Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        381,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Laura Martinez Palafox',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        382,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ofelio Alcibiades Cavez Santiago',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        383,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Sanjuan Ortiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        384,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Modesto Santos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        385,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emmanuel Alejandro Lopez Jarquin',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.xoxocotlan.gob.mx/',
        386,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Odilon Avendaño Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        387,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ofelia Mireya Mendez Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        388,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abraham Santiago Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        391,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laurencio Gaspar Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        389,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Jesus Saveche Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        390,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dante Montaño Montero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        392,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Moises Luis Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        393,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gonzalo Rodrigo Peña Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        394,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvino Nahum Arango Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        395,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Bautista Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        398,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Agustin Vasquez Ortiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://municipiodesantamariaatzompa.wordpress.com/',
        400,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hugo Nain Pelaez Rojas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://santamariacamotlan.gob.mx',
        401,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martin Espinosa Montesinos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://santamariachachoapam.gob.mx',
        402,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Martinez Escobedo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://santamariachilchotla.com.mx/',
        404,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Idelfonzo Lopez Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        405,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carmelo Cruz Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://www.santamariacolotepec.gob.mx/',
        406,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Luisa Vargas Ayona',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        407,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe Castillo Santiago',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        408,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angelica Santos Avendaño',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        409,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gregorio Peralta Vasquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://municipiodesantamariadeltule.com/index.php',
        410,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eddy Gibert Ramirez Jarquin',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        411,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Florentino Mendez Mendez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        412,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Sanchez --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://santamariaguienagati.gob.mx/',
        413,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Giovanne Gonzalez Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.huatulco.gob.mx',
        414,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Froilan De Luna Simon',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        415,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Tapia Avila',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        416,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Javier Bautista',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        417,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Raul Hernandez Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        418,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joselin Esquivel Balseca',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        419,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Daza Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        399,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Vasquez Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        421,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Uryel Bautista Vasquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        422,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Dolores Jimenez Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        423,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        424,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esteban Sanchez --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        425,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Montreal Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        426,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nicolas Santiago Santiago',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        428,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oliver Lopez Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        427,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amando Gaspar Lopez Antonio',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        429,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rene Martin Morales Canceco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        430,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zenon Juan De Dios Santiago --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        431,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Iris Cristal Mendez Arteaga',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        432,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Valentin Cortes Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        434,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Susana Alvarado Lozano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        435,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lourdes Hernandez Menchaca',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        437,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        439,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hugo Castrejon Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        440,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Floriberto Monteros Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        441,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Sanchez Guerra',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        442,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elias Velasco Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        445,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Noe Taurino Lopez Vasquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        446,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eulogio Wulfrano Aparicio Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        447,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Lopez Lucas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        448,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Odilon Ramirez Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        449,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Altamirano Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://santamariazoquitlan.gob.mx/',
        450,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abel Garcia Santiago',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        451,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Artemio Norberto Jimenez Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        452,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teodoro Garcia Santiago',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        453,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dorian Geovanni Ricardez Medina',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        454,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Palacios Mendez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        456,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teresita Del Carmen Martinez Flores',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        457,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Evergisto Gamboa Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        460,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leoncio Navarrete Carrasco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        462,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Ramirez Alverdin',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        463,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Gilberto Bautista Nicolas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        464,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Benyuset Hernandez Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        465,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Garcia Velasco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        467,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cecilia Rivas Marquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        468,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Escarcega Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        469,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nicolas Enrique Feria Romero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        470,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ciro Rivera Gonzales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        471,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aksa Yuray Toledo Prado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        473,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yolanda Peña Salinas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        475,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlitos Mendez Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://www.municipiosantiagomatatlan.gob.mx/municipio',
        476,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Ortega Flores',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        477,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe Ramirez Carbajal',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        478,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amney Santiago Santiago',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        479,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Pablo Santos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        480,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adelaido Ricoy Cortes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        481,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Constancio Sanjuan Sanjuan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        482,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Gildardo Perez Sarabia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        483,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Alberto Fenochio Vigil',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        484,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Cesar Rodriguez Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.santiagosuchilquitongo.gob.mx/',
        485,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anayeli Angelica Huerta Atristain',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        486,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andres Veronica Silva',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        487,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mauro Cruz Leyva',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        488,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Crecencia Salustia Gandarillas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        490,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruben Carrera Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        491,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felix Vasquez Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        492,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Santiago Nicolas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        493,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angel Serafin Santiago Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        494,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anastasio Ignacio Pacheco Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        495,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aida Hernandez Moreno',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        496,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Salinas Santiago',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        498,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gilberto Cervantes Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        500,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patrocinio Martinez Carrizosa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        501,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martin Rafael Carrera Alcorta',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://www.santiagoyucuyachi.gob.mx/',
        502,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalina Serrano Salinas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        506,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruben Ordaz Torres',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        507,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruben Enrique Juarez Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        508,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amelia Gomez Rios',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        509,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bertoldo Bernabe Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        510,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Lopez Miguel',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        511,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Crisoforo Santo Jimenez Aguilar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        512,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Delfino Espinosa Deheza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        513,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vilma Martinez Cortes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        515,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Otoniel Cruz Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://municipiosantodomingoteojomulco.gob.mx/',
        516,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Heladio Cruz Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        518,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Conrado Martinez Cortes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        519,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Josue Hernandez Castillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        520,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aureliano Ramos Espinoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        521,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        523,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adelma Nuñez Geronimo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        525,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Osvaldo Hernandez Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://santotomasjalieza.gob.mx/',
        526,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Maurilio Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://santotomasmazaltepec.gob.mx/',
        527,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Camilo Federico Garcia Reyes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        528,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adan Pinacho Cortes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        529,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bulmaro Sanchez Vasquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        530,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Cerqueda Cortes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://www.santosreyespapalo.org.mx/',
        531,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aparicio Reyes Rojas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        'http://www.santosreyestepejillo.gob.mx/',
        532,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Francisco Amado Aja',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        533,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carmen Silva Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        534,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Yolando Jarquin Bustamante',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        535,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sonia Gonzalez Playas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        537,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ariel Osbaldo Ramos Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        538,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dimas Ruiz Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        542,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Osmin Nieto Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        545,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andres Gutierrez Sosa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        546,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosendo Garcia Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        547,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Donaciano Jimenez Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        548,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Manuel Leon Monterrubio',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        550,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gaspar Vasquez Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        552,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Lavariega Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        555,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Carrasco Vicente',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        557,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dante Roberto Miranda Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        558,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- -- -- --',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        403,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elias Roberto Mendoza Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        560,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Xochitl Moreno Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        459,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Noel Hernandez Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        539,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Juarez Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        332,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Castulo Breton Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        566,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alheiro Garcia Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        561,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ismael Martinez Galvan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2021-12-31)'::daterange,
        null,
        562,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esau Nuñez Calvo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        536,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leticia Bautista Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        543,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isaias Lopez Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        563,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santos Pacheco Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        564,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Cruz Mojaraz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        565,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fabiola Honorina Morales Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        568,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Artemio Cruz Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-01-01, 2022-12-31)'::daterange,
        null,
        569,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Cesar Barroso Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        570,
        20
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

              `)
}
