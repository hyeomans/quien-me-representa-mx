exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 8).del()
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
        'Fabian Fourzan Trujillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        1,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Rubio Castillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        2,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Horacio Soto Armendariz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        3,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teresa Erives Baca',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        4,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ivonne De La Hoya Venzor',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        5,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Viviana Altamirano Cardenas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        6,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Augusto Medina Aguirre',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        7,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Aaron Ruelas Fernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        8,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Macario Baldivar Hermosillo Pompa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        9,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Pacheco Flores',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        10,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Alejandro Aldana Aguilar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        11,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ivan Alejandro Gutierrez Villarreal',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        12,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Lucero Galaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        13,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Bonilla Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        'http://www.municipiochihuahua.gob.mx',
        19,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salome Ramos Salmon',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        20,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leo Lopez Muñoz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        14,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ilse Gissel Torres Coronado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        15,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elìas Humberto Pèrez Mendoza Pèrez Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        17,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cayetano Ordoñez Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        18,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Alberto Valenciano Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        'http://municipiodelicias.com/',
        21,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felizardo Gallegos Loya',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        22,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Rodriguez Chavez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        64,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ammon Dayer Lebaron Tracy',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        'http://galeanachihuahua.gob.mx/',
        23,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María de los Ángeles Moreno Rascón',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        25,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gilberto Gutiérrez Montes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        26,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Miguel Yañez Ronquillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        'http://guachochi.mx/',
        27,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fausto Gonzalez Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        28,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Cesar Chavez Ponce',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        29,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joel Guillermo Bustillos Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        30,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Comaduran Amaya',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        31,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Alberto Peña Valles',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        'http://www.hidalgodelparral.gob.mx/',
        32,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Flora Ruiz Corral',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        33,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lauro Orozco Gómez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        34,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joel Loya Márquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        35,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcos Chavez Torres',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        36,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cruz Perez Cuellar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        'http://www.juarez.gob.mx/',
        37,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Moncayo Porras',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        38,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Luis Olvera Gallegos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        16,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Heberto Caballero Román',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        39,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcelino Prieto Carreon',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        40,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Ignacio Quezada Enriquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        41,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Garcia Villanueva',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        42,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorena Vazquez Peñaloza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        43,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Enrique Peña Vazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        44,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miriam Soto Ornelas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        45,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose De Loreto Javalera Bojorquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        46,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Perla Gacela Lopez Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        47,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Barraza Robledo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        48,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Salinas Villalobos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        49,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Jose Garcia Valenzuela',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        50,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lilia Irene Ramirez Bayrruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        51,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andres Ramos De Anda',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        52,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Selestino Estrada Villanueva',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        53,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Adrian Aguilar Corral',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        54,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcial Romualdo Marquez Gutierrez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        55,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aron Alfonso Saenz Eguade',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        56,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vicente Anselmo Nevarez Villalba',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        57,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Ramirez Carrasco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        58,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Huerta Luevano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        59,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Antonio Bilbao Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        60,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Jacquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        24,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Muñoz Anchondo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        61,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuela Aide Lopez De Anda',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        62,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramon Humberto Varela Godina',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        63,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Aaron Silva Figueroa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        65,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcelo Rascon Felix',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        66,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Misael Homero Marquez Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-10, 2024-09-09)'::daterange,
        null,
        67,
        8
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

              `)
}
