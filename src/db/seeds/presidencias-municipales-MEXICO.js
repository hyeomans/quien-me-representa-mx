exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 15).del()
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
        'Maribel Alcantara Nuñez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        1,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Susana Bailón Correa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        1,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Ángeles González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        1,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Josefipna Cruz Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        1,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Álvarez Sebastián',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        1,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Guadalupe González González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        1,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Wilfredo Alcántara González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        1,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Ernesto Alcántara González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        1,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Bueno Rendón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        1,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Ángel Pnavarrete González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        1,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gizel Ameyali Ruiz Carapia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        1,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rigoberto Cortes Melgoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        2,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Arturo Ruíz Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        2,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandripna López Mora',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        2,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Ernesto Ortíz Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        2,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalba Álvarez Carreón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        2,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Campuzano Córdova',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        2,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irene Herrera González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        2,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe De Jesús Álvarez Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        2,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Benito Peláez Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        2,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Apna Lilia Galindo Pozos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        2,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Guadalupe Mauriño Bautista',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        2,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Alfredo Osornio Victoria',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        3,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Antonio Trejo Ibarra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        3,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Noemi Cristipna Casarez Clement',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        3,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Peralta Ruíz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        3,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalba Resendíz Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        3,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emmanuel Vepnancio Ruíz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        3,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma De Jesús Anselmo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        3,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paula Ruíz González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        3,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Cervantes Ruíz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        3,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Griselda García Padilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        3,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Hernández Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        3,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leopoldo Dominguez Flores',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        4,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Víctor Enedino Morales Cruzalta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        4,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joaquipna Flores Posada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        4,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isaías Álvarez Galan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        4,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yeimy Hernández Garduño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        4,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Flores Ayllon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        4,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cynthia Edith Gordiano Palafox',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        4,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emmanuel Adalberto Rodríguez Roa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        4,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marisela Martínez Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        4,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Flores Ortíz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        4,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abigail Roa Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        4,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Sanchez Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        5,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Coyote García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        5,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Georgipna Álvarez Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        5,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santos Hernández García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        5,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jenny Ivonne Arriaga López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        5,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gonzalo García Arriaga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        5,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Yolanda López Paredes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        5,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esperanza Colin Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        5,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'J Santos Contreras Garduño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        5,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Myriam Cardepnas Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        5,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fermín Romero Valdés',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        5,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esmeralda Gonzalez Lagunas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        6,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Rosa Lagupnas Enríquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        6,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo Ortíz García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        6,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Iliapna Díaz Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        6,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Hernández Figueroa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        6,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ángeles Michua Berpnal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        6,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agustín Nuñez Galicia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        6,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Lucía Acosta Baranda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        6,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mauricio Palafox Trejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        6,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Geovanni Galicia Palomares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        6,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rocío Delgadillo Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        6,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Elena Martinez Robles',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        7,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Elia Martínez Cayetano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        7,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Ávila Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        7,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edith Mejía De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        7,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Félix Jiménez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        7,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Roque Arias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        7,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Marín Román',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        7,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Luisa Santapna Colín',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        7,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Faustino Cirilo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        7,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abel Rubio Rubio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        7,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Cruz Hernández González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        7,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Obed Santos Rojo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        8,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Constantino Ávila Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        8,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Janet Arce Benítez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        8,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Armando Hernández Águilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        8,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María De Lourdes Casilla Vences',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        8,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Misael Pnavarrete Vivero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        8,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leonila Arellano Campuzano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        8,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Misael Berpnal Vences',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        8,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafúl Rodríguez Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        8,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Apna María Cuellar Pinzón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        8,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Uriel Aviles Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        8,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ivette Topete Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        9,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Calvo Valencia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        9,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucia Ma Concepcion Peña Espindola',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        9,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús David Castillo Parrilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        9,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raquel Sandoval Davalos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        9,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Germayn Aguilar Carrillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        9,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Virginia Pnabi Galicia Águilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        9,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olaf Rodríguez León',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        9,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Álvarez Milla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        9,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Topnantzin De La Rosa Camarepna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        9,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eder De Jesús Carmopna García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        9,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Gaspar Montiel Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        10,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Balderas Vázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        10,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tania Bonilla Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        10,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Orlando Ramírez Monroy',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        10,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tita Ramopna Hernández Silva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        10,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Sánchez Estrada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        10,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Benítez Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        10,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe Cruz Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        10,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Verónica Estrada Baltazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        10,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Higinio Gárcia Dimas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        10,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Luisa Ambrosio Parra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        10,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Talia Citlali Cruz Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        11,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Cortés Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        11,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rocío López Gascon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        11,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Mendoza Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        11,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Erika Nopaltitla Casarreal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        11,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vicente Benjamin Olivares Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        11,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Janeth Zambrano Moya',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        11,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Jiménez Pacheco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        11,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Constancio Calderón Solorzano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        11,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Elepna Nopaltitla Ruíz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        11,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Sánchez Salmeron',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        11,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isaac Reyes Salazar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        12,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martín Francisco Conde Juárez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        12,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angélica Vega Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        12,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miztli Hernández Villa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        12,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nohemy Molipna Miranda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        12,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bruno González Jiménez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        12,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Abigaíl Pueblas García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        12,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zabdi Flores Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        12,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olga Victoria González González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        12,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorenzo Torrés Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        12,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayte Molipna Alonso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        12,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro David Rodriguez Villegas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        13,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia Alonso Várgas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        13,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodrigo Segura Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        13,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lilia María Del Pilar Cedillo Olivares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        13,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Celso Domínguez Cura',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        13,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Apna Lilia López Jiménez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        13,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'César Bacilio Campos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        13,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvia Pnava López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        13,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Lara Becerril',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        13,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Nevith Madrea',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        13,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marisela González Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        13,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Altamirano Gutiérrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        13,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hugo Uriel Esqueda Mondragón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        13,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Alejandra Arepnas Várgas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        13,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marisol Del Socorro Arias Flores',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        14,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isidro Martínez Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        14,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Felix González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        14,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Díaz Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        14,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Honoria Escobar Melchor',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        14,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Baltazar Felix',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        14,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edith González García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        14,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Alejandro Castro García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        14,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Fuentes Amador',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        14,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maríapna Ivette Colín Servín',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        14,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Domínguez Marcos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        14,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Enrique Valencia Venegas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        15,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alonso Peña Amaro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        15,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irene Limones Álvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        15,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bruno López Sotero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        15,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ceila Selem Toledano Lozada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        15,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hipolito Rendón Cabrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        15,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karipna Rojas Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        15,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pnatali Madai Paez Marín',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        15,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enriqueta Baz Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        15,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pnadia Karipna Torres Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        15,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Soto Vázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        15,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miriam Coronel Meneses',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        16,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Bautista Mata',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        16,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Perla Betzabeth Elizalde Rojo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        16,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dulce María Cervantes Mora',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        16,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emiliano García Ávila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        16,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lupe Cervantes De Jesús',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        16,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Robledo Gutiérrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        16,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Celia Tellez Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        16,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Minerva Curiel Elizalde',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        16,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Álvaro Pereira Pasten',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        16,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Elepna García Coronel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        16,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rene Martin Velazquez Soriano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        17,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hugo López Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        17,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dulce María Carmopna Tirado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        17,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Ramos Berpnal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        17,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leticia Moysen Márquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        17,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Solís Silva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        17,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruth Castro Badillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        17,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniela Ivonne Gutíerrez Palma',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        17,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Israel Dopnaldo Viais Suárez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        17,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cecilia López Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        17,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yovani Escalopna Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        17,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Hernandez Meza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        18,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Martín Vargas Maya',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        18,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvia Díaz Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        18,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alexis Noé Garay Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        18,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rocio Valencia Becerril',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        18,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Arellano Becerril',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        18,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Apnabely Valdes Piña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        18,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jopnatan Jacob Rosario Becerril',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        18,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gloria Selene Cervantes García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        18,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Tomás Olmedo Bobadilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        18,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Guadalupe Muciño Muciño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        18,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Casimiro Emmanuel Alvarado Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        19,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Elizalde Esquivel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        19,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angélica González Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        19,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Gómez Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        19,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Areli Martínez Delgadillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        19,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Corache García Pulido',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        19,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maritza García Águilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        19,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Susapna Roque Reza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        19,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Coral Guadarrama Armas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        19,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edith Figueroa Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        19,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Guadalupe Aguirre Arias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        19,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Miguel Gutierrez Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        26,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erasmo Calderón Fuentes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        26,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Asención Garduño Lujano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        26,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Víctor Hugo Juárez Barberepna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        26,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mireya Pnayeli Ramírez Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        26,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roel Cobos Uriostegui',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        26,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Apna Patricia Valdivia Calderón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        26,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alendro Martínez Peña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        26,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandra Saldaña Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        26,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teodoro Dominguez Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        26,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pnadia Ivett Arroyo Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        26,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olvia Del Carmen Ramírez Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        26,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Ángel Rivero Carbajal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        26,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Soledad Ramírez Ríos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        26,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aniceto Pastor Cruz Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        27,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Guadalupe García Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        27,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo López Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        27,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martipna Rodríguez Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        27,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Martínez Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        27,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yeniderta Santillan Cedillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        27,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Cisneros Cisneros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        27,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Benites Fuentes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        27,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leticia Sapnabria Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        27,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pnancy Hernández Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        27,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Cruz Macedonio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        27,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Amalia Gonzalez Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        28,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Isabel González Becerril',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        28,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cirilo González Gutiérrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        28,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karipna Zetipna Zetipna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        28,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Óscar Leopoldo Pérez Negrete',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        28,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lirio González Ayala',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        28,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Ángel Reyes Díaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        28,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aristea Isabel Velázquez Almaraz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        28,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Blancas Cortez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        28,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jazmín Delgado López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        28,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adrián Isaac López Cano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        28,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maricela Melo Rojas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        29,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Ramírez Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        29,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Viridiapna Aguilar Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        29,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ulises Roldan Buendía',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        29,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hortensia Sánchez Menéses',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        29,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Ordoñez Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        29,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Herrera Bojorges',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        29,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lilian Johapna Villegas Juárez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        29,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elizabeth Reyes Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        29,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Marquez López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        29,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Felix Prado Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        29,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nancy Jazmin Gomez Vargas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        30,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Esther Monroy Velázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        30,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andrés García González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        30,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Caterin Lizbeth Gómez Tirado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        30,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julián Ferpnando Velázquez Medipna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        30,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        30,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Sergio Mendoza Vasquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        30,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angélica Pérez Cerón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        30,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joel Gómez Robledo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        30,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María De La Luz Cruces Pineda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        30,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Manuel González Lima',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        30,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Balbipna Gallardo Onofre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        30,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Antonio Corrales Lemus',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        30,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karen Marisol Baepna Lemus',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        30,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agustina Catalina Velasco Vicuña',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        31,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bellanira Margarita Montes Velasco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        31,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Sánchez Padilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        31,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olga Ramírez Ruíz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        31,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Jopnathan Zacarías Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        31,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Florencia Aída Pérez Muñoz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        31,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Campero Olvera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        31,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Pablo Vidal Galván Zacarías',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        31,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Romero Cadepnas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        31,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Berpnardo Yescas Padilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        31,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Apna Lady Cervantes Yescas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        31,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Xochitl Flores Jimenez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        32,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Morales Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        32,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Araceli Hinojosa Jaimes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        32,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Cruz Gallardo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        32,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joaquipna Torres Carmopna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        32,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Jorge Hermenegildo González Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        32,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zaira Lizeth Huerta Palma',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        32,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ismael Mota González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        32,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Angélica Olivares Paéz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        32,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Aram Castro Escalopna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        32,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Socorro Pérez Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        32,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andrea Becerril Vázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        32,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandra García García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        32,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Ramírez Bobadilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        32,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Del Rosario Cano Silva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        32,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Valverde Gutiérrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        32,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Contreras Velázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        32,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia Loyola Calderón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        32,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Tolentino San Agustín',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        32,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Sanchez Isidoro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciacoacalco20192021',
        20,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Christian Jesús Rodríguez Jiménez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciacoacalco20192021',
        20,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Andrea Rios Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciacoacalco20192021',
        20,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Héctor Mosqueda González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciacoacalco20192021',
        20,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Esmeralda Endoqui Espinosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciacoacalco20192021',
        20,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elías Calderón Ortíz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciacoacalco20192021',
        20,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maricela Cervantes Díaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciacoacalco20192021',
        20,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Jhovany Morelos Rosas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciacoacalco20192021',
        20,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Amin Moreno Lojero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciacoacalco20192021',
        20,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mishell Herrera Alvarado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciacoacalco20192021',
        20,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Hernández Lucio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciacoacalco20192021',
        20,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Héctor Virgilio Esaú Jaramillo Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciacoacalco20192021',
        20,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Frida Del Carmen Sánchez Paredes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciacoacalco20192021',
        20,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yadira Mayaly Cruz Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciacoacalco20192021',
        20,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Diaz Juarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        21,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Chaves Esquivel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        21,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Viridiapna Vázquez Serrano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        21,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Reyes Escobar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        21,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María De Jesús Domínguez Arce',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        21,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reymundo Guarda Mercado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        21,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Estanes Figueroa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        21,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandra Castillo Nieto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        21,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Del Carmen Domínguez Mercado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        21,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Hernández García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        21,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María De Los Milagros De Jesús Cuevas Guitierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        21,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felix Guzman Florin',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciamunicipal@cocotitlan.gob.mx',
        22,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Montoya Jímenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciamunicipal@cocotitlan.gob.mx',
        22,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Apna Jael Castillo Galicia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciamunicipal@cocotitlan.gob.mx',
        22,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Kaulitz Perea',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciamunicipal@cocotitlan.gob.mx',
        22,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sofía Florín Guzmán',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciamunicipal@cocotitlan.gob.mx',
        22,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Francisco Mora Rubio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciamunicipal@cocotitlan.gob.mx',
        22,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Verónica Mejía Trujano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciamunicipal@cocotitlan.gob.mx',
        22,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diapna Olivia Florín Crespo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciamunicipal@cocotitlan.gob.mx',
        22,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Ángel Álvarez Nápoles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciamunicipal@cocotitlan.gob.mx',
        22,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patsy Rojas Florín',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciamunicipal@cocotitlan.gob.mx',
        22,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Enrique Galicia Beristaín',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.presidenciamunicipal@cocotitlan.gob.mx',
        22,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andres Oscar Montoya Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        23,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Donís López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        23,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Apna Berta Garay Casillas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        23,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Héctor Damián López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        23,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Clemente Velásquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        23,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Rufin Fones',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        23,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eluid Rodríguez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        23,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Griselda Flores Pineda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        23,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santiago Rodríguez Abundez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        23,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nora Solano Cristóbal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        23,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Leonel Pineda Paz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        23,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aldo Lezama Reyna',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        24,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Javier Rojas Alemán',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        24,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Apna Vega Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        24,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raúl Magaña Soltero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        24,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elvia Martínez González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        24,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José René Sinecio Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        24,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elvia Sánchez Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        24,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olivia Lupna Córdova',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        24,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ociel Plancarte Soto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        24,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abner Agustín Rojo Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        24,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Del Rocío Montes Monroy',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        24,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karla Leticia Fiesco Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        25,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Isaac Martínez Solís',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        25,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Rivera Y Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        25,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Areli Glaván Trejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        25,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Romina Jímenez Barcenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        25,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jhonathan Guadarrama Montes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        25,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Meybi Lesbia Zoraida Segura Zárate',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        25,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Trejo Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        25,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Isabel Castro Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        25,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agustín Mercado Benítez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        25,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Rivero Ríos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        25,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joanna Alejandra Felipe Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        25,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ernestina Alejandra Esquivel Corchado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        25,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Germán González García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        25,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Adela Bravo Langle',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        25,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Ángel Huesca Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        25,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Hilda Ramos Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        25,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Javier Del Moral Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        25,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fabián Enríquez Gamíz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        25,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Carmen Albarran Gabriel',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        33,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Dolores Toribio Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        33,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maximino Bueno Gutiérrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        33,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yeritza Estrada De Jesús',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        33,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Macedonio García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        33,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa María Quintero Francisco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        33,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Berpnardo Hilario Vilchis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        33,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalio Garduño Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        33,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nicolasa Hernández Vilchis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        33,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guillermo Ínes De Jesús',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        33,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Francisco Manuel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        33,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Fernando Vilchis Contreras',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Andrés Sibaja González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Azucepna Cerrillo Vázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'León Felipe Ríovalle Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Beatriz Jímenez Sígala',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Ángel Juárez Franco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angélica Gabriela López Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guillermo Fragoso Báez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Apna Laura Lara Bautista',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ether Martín Hernández Leyva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Carmen Fragoso López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Antonio García Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Araceli Torres Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika González Espinosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gil González Cerón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mireya De Los Angeles Mendez Bello',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hugo Vepnancio Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvia Lucero Valdes Casares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Apna Laura Pluma Paredes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Fragoso Ordaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Guadalupe Ríos Velázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia Pérez Soria',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        34,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rebeca Perez Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.ecatzingo.gob.mx',
        35,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guillermipna Flores Ríos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.ecatzingo.gob.mx',
        35,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonino Pérez Espinosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.ecatzingo.gob.mx',
        35,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leticia Vergara Barragan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.ecatzingo.gob.mx',
        35,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raúl Pérez Rivero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.ecatzingo.gob.mx',
        35,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Elepna Yáñez González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.ecatzingo.gob.mx',
        35,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Toledano Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.ecatzingo.gob.mx',
        35,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carmen Vergara Violante',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.ecatzingo.gob.mx',
        35,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Alberto Marín López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.ecatzingo.gob.mx',
        35,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yopnatan Morales Yáñez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.ecatzingo.gob.mx',
        35,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rufipna Martínez Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.ecatzingo.gob.mx',
        35,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruth Salazar Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        65,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Castro Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        65,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Griselle Rodríguez Navarrete',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        65,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mauricio Martínez Rueda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        65,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Del Carmen Zacarias Urzua',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        65,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Hipólito Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        65,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fabiola Jalapa Ruíz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        65,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Austreberto Quezada Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        65,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Servín Sandoval',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        65,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Elena Morales Mondragón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        65,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo López Segundo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        65,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Milton Castañeda Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        36,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Berpnardo Aguilar Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        36,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Irene Reypna Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        36,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Igpnacio Álvaro Ortega Pnarvaez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        36,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pnancy Viridiapna Lozano García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        36,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leonel García Choreño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        36,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Piña González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        36,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Indira Yadira Orozco Rincon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        36,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Verónica González Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        36,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Velázquez Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        36,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Nuñez Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        36,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Vargas Colin',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        37,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodolfo David Vidal Soto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        37,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Guadalupe Quezada Zamora',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        37,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rubén Doroteo Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        37,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Apnaya Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        37,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel López Vigueras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        37,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Itzel Jocelyn Enríquez Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        37,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo Pérez Miguel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        37,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guillermipna Becerra Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        37,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Reyes Bravo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        37,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Adriapna Peláez Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        37,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Romina Contreras Carrasco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        38,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Iván Rosas Anaya',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        38,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carla Guadalupe Reyes Montiel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        38,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Narciso Fierro Cima',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        38,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María De Jesús Mendoza Cañas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        38,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emilio Joaquín Flores Clemente',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        38,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Eugenia Torres Pérez Tejada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        38,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Ángel Ramírez Vázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        38,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Garay Barragan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        38,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Aurelio Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        38,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Jiménez García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        38,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Mercedes Vázquez Delgadillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        38,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Edgar Tinoco Ruíz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        38,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sofia Correa Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        38,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Astrid Anita Davila Ordoñez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        39,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María De Los Ángeles Argüelles Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        39,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jacobo Nazario Vargas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        39,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Ruedas Mayén',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        39,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Alonzo Prudencio Rosas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        39,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raquel Azucena Trejo Rosas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        39,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Rosas Blanquel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        39,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Estefany Guadalupe López Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        39,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Israel Osnaya Rosas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        39,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Josefina Aceves Neri',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        39,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guillermo Trejo Mondragón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        39,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe Rafael Arvizu De La Luz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        40,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Kevya Navi Galván Camacho',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        40,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Emmanuel Arreguin Guizar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        40,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Ramos Cadena',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        40,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tomás Suárez Campos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        40,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Candelaria De La Luz De La Rosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        40,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jonathan Delgado Peregrina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        40,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marina Guerrero Barrón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        40,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carmen Nayely González Domínguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        40,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Guerrero Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        40,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosario Ramírez García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        40,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brandon Martínez Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        40,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fanny Anahi Colina Anguiano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        40,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leobardo Padilla Díaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        40,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Misael Ocampo Ayala',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        41,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Gregorio Celis Domínguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        41,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karla Angélica Velázquez Puentes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        41,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Crisogomo Delgado Arizmendi',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        41,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marlen Reza Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        41,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Mancera Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        41,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lourdes Giovanna Becerril Arizmendi',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        41,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan José Hernández Vences',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        41,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anhahí Avilez Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        41,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Saúl Delgado Ayala',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        41,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oguri Janett Pichardo Sotelo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        41,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Benigno Arroyo Bautista',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        42,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Móises Quintero Bacilio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        42,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Consuelo Villalpando Cuevas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        42,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Facundo Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        42,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Marcelino García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        42,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Severo Bacilio Pascual',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        42,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fidelina Gómez Arrollo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        42,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angelita González Gabriel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        42,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Facundo Álvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        42,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karla Arroyo Barcenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        42,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Víctor Adrian González Osorio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        42,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abuzeid Lozano Castañeda',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        43,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Tellez González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        43,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalia López Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        43,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bulmaro Matias Ortega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        43,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yesenia Álvarez Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        43,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adán Hernández Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        43,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angélica Serrano Varela',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        43,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Benito De Jesús Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        43,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Suárez Avilez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        43,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Flores Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        43,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hermilio De Jesús Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        43,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Rosario Payne Islas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        45,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Hernández Rafael',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        45,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Deysi Escobar Espinosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        45,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dario Anselmo Galicia Rocandio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        45,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Georgina Jacqueline Fuentes Landon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        45,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucio Estrada Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        45,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carla Daniela Hernández Elias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        45,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Alberto Cervantes Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        45,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maríana Yaquelin López Hidalgo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        45,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Jorge Vargas Vázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        45,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Laura Zamora Casanova',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        45,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodolfo Nogues Barajas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        46,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Octavio Leonel Maldonado Rodea',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        46,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Del Rocío Rueda Alcántara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        46,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Primo Torales Huitrón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        46,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Neidy Laura Pimentel Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        46,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Cruz García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        46,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Celia Escobar Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        46,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Betsabe Pacheco Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        46,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel García Colín',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        46,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leopoldo Rafael Olguin Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        46,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'César Colín Díaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        46,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Teresa Casas Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        47,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz María Mayén Oropeza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        47,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Mayén Nuñez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        47,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maricela Aceves Navarro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        47,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ignacio Blancas González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        47,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maribel Rojas Patiño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        47,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge García Lugo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        47,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz Mirey Archundia Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        47,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandra Aseret Peñaloza Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        47,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Justo Esquivel Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        47,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Meza Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        47,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe De Jesus Sanchez Davila',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.jiquipilco.gob.mx',
        48,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cecilia Gasca Salinas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.jiquipilco.gob.mx',
        48,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Mercado Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.jiquipilco.gob.mx',
        48,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adriana Sánchez Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.jiquipilco.gob.mx',
        48,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Ramírez Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.jiquipilco.gob.mx',
        48,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ileana Judith García Tarango',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.jiquipilco.gob.mx',
        48,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sabino Angel Albarran Castañeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.jiquipilco.gob.mx',
        48,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Galicia Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.jiquipilco.gob.mx',
        48,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eva Pérez De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.jiquipilco.gob.mx',
        48,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Avila Rubio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.jiquipilco.gob.mx',
        48,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eleuterio Jacinto Maldonado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.jiquipilco.gob.mx',
        48,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Jesus Cedillo Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        49,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Manuel Sánchez Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        49,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Del Consuelo Contreras López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        49,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rigoberto Leon López Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        49,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yadira Martínez Miguel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        49,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Gómez Cid',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        49,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ernestina Orta García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        49,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eulalia Mendoza Modesto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        49,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Antonio Rios García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        49,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mireya Gil López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        49,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis López Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        49,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rausel Cervantes Huertas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        50,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martín López Márquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        50,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paloma Hernández Valdez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        50,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hugo Cervantes Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        50,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Angélica Moreno Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        50,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Alberto Peña Álvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        50,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Saraí Gómez Álvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        50,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maritza Urbina Guzmán',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        50,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teodulo Zetina Segura',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        50,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando España Montalban',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        50,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sofía Carrillo Arellano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        50,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marisol Nava Linares',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        51,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adrián Sánchez Ponce',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        51,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maribel Pavía Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        51,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo José Sánchez Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        51,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Azucena Dominguez Juárez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        51,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Burgos Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        51,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Petra Castillo García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        51,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfa Zuleima Becerril Galván',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        51,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martina Romero García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        51,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Israel Alcocer Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        51,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Graciela Castillo López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        51,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cristina Gonzalez Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        71,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Oropeza García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        71,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge López Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        71,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Janet Ramírez Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        71,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eusebio Martínez Peláez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        71,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Teresa Soria Ruíz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        71,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guillermo Esquivel Esquivel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        71,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reyna Ayala Argonza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        71,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Méndez Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        71,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Patricia Aguilar Carmona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        71,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Stephanie Gabriela García Neyra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        71,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emmanuel Cerón Crisostomo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        71,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jéssica Beltrán Zanabría',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        71,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús León Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        71,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Ramirez Ponce',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        52,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Osvaldo Cuadros Ponce',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        52,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lizeth Valle Silva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        52,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Osorio Suárez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        52,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana María Contreras Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        52,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Christian Reyes Baltazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        52,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Blas Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        52,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Prudencio Ricardo Ramos Arzate',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        52,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lidia Lechuga Davila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        52,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodrigo Zarco García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        52,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Janeth Marín Garduño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        52,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Maria Garduño Cienfuegos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        123,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Senovio Hernández José María',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        123,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Iris Portillo Arellano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        123,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel López Jaimes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        123,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'América Martínez Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        123,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manolo Jaramillo Jiménez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        123,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gregoria Casiano Suárez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        123,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Carbajal Benítez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        123,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Aguilar Jaimes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        123,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yeinni Larissa Maldonado Jaimes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        123,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Benjamín Domínguez Arce',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        123,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Antonio Mendoza Pedroza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        53,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ángel César López Castañeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        53,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dulce Jazmín Tetatzín Almanza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        53,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Humberto Juárez Vera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        53,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Guadalupe Pérez Ceballos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        53,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis González Cotero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        53,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gloria Mercedes Segura Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        53,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Adriana Cerón Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        53,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erly Charbel López Cortés',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        53,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tania Estela González Poblete',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        53,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Jaime Ayala',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        53,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victoria Aurelia Viquez Vega',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        54,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victoria Aurelia Víquez Vega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        54,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martin Robles García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        54,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rocio Yolanda Víquez Víquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        54,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teodulfo Zuñiga Zamora',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        54,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cindy Aida Alvarado Guzmán',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        54,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Christian David Víquez Sulvaran',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        54,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karen Guadalupe Ruiz Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        54,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Misael Pérez Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        54,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Concepción Prado López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        54,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Betsy Mariel Navarro Sandoval',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        54,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Gustavo Flores Fernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        55,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ilze Eugenia Torres Enríquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        55,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Alejandro González Márquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        55,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Del Consuelo Estrada Plata',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        55,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Héctor Vázquez García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        55,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Araceli Sánchez Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        55,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Enrique Trujillo Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        55,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hilda Camacho Arzate',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        55,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paola Sandoval Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        55,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro De Jesús Acevedo Esquivel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        55,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María De Las Mercedes Bravo Álvarez Malo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        55,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Luisa García Colín',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        55,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Rodrigo Falcón Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        55,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Del Carmen Camacho Lira',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        55,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ariadne Saray Benitez Espinoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        56,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Velázquez Carranza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        56,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Isabel Miranda Mata',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        56,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgardo Alazañez Arzate',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        56,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leticia Estrada Mejía',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        56,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ejen Sánchez Bernal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        56,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vicenta Maribel Terán Casas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        56,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudio Salinas Maza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        56,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Trinidad Ruíz Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        56,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Riquelme Valdez Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        56,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Trinidad González Domínguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        56,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miriam Nancy Garcia Antonio',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        57,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe Valdez Portocarrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        57,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miriam Nancy García Antonio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        57,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Víctor Cid García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        57,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Flor Beatriz Moreno Monroy',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        57,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gregorio Flores Romulo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        57,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Del Carmen Zaragoza Galicia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        57,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Luna Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        57,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karina Rocio Bernal Acosta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        57,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Samuel López Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        57,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sugey Cedillo Monroy',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        57,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angelica Moya Marin',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        58,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carmen Abigail Ruiz Coutiño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        58,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Francisco Hernández Luis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        58,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Graciela Alexis Santos García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        58,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ubaldo Jaime Gutiérrez Nieto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        58,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Guadalupe Angel Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        58,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodrigo Gómez Orta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        58,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maricela Hernádez Inocente',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        58,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Velázquez Meza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        58,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Alejandra Aldana Chávez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        58,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Fuentes Ayala',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        58,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra León Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        58,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Paulina Pérez González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        58,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anselmo García Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        58,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Araceli Matehuala Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        58,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Antonio Fontaine Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        58,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angélica Del Valle Mota',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        58,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Eduardo Sisiniega Otero Monoatl',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        58,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De Los Ángeles Pontaza Vázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        58,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        '- - -',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        59,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Melida Guerrero Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        59,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco González Enríquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        59,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olga Paredes Zambrano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        59,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Ramírez Vaquero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        59,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Evelyn Mireya González Saldaña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        59,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Florencio Granados Villanueva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        59,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marisol Carpio Fernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        59,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Ramírez Camacho',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        59,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esmeralda Jacqueline Hernández Juárez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        59,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sara Liliana Soriano Silva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        59,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adolfo Cerqueda Rebollo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Gerson García Calderón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Castañeda Sereno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lizbeth Zaira Quiroz García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Guadalupe Estrada Posadas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blasa Estrada Posadas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodrigo Rosas Esparza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Gabriela Herrera Ayala',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Santigo López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Samantha Alitzel Ramírez Zurita',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gonzalo Adrián Rosales Olascoaga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roxana González Centeno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cirilo Revilla Fabián',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yahishta Montes Vargas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Rojas Carmona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Vargas Palapa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Zanabria Ortíz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Del Carmen Perete Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Leon Díaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Mireles Andonegui',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Flora Martha Angon Paz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gumecindo Aguilar Rendón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        60,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Navarrete Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        61,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Trinidad Hernández Moctezuma',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        61,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Melva Carrasco Godinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        61,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Aceves Eusebio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        61,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Antonieta García Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        61,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Arzate Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        61,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Martha Ronzon Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        61,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar González Jiménez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        61,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo Mondragon Aviles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        61,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María De La Paz Gómez Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        61,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Rivera Escalona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        61,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rocio Echeverria Quintos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        61,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriel Alejandro Navarro García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        61,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Araceli Zamora Rosas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        61,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gumaro Waldo Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        62,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Araceli Aguilar Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        62,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Moises Aleman Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        62,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Judith Patricia López Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        62,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Florencio Ceron Nava',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        62,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nancy Sánchez Vázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        62,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Alberto Delgadillo Blanco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        62,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Belen Aguilar Díaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        62,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Escamilla Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        62,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lino Martínez De Lucio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        62,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Benedicto Madrid López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        62,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Samuel Verdeja Ruiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        63,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberta Ibarra Armendariz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        63,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio García Pulido',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        63,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isabel Marina Díaz Gonzalez Escamilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        63,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raúl Castillo García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        63,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvia Reyes Díaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        63,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Moisés Bailón Márquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        63,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Valladares Monroy',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        63,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Angélica Linarte Ballesteros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        63,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Rodríguez Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        63,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Beatriz Solis Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        63,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emilio Arriaga Villa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.ocuilan.gob.mx',
        64,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enriqueta Ibarra Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.ocuilan.gob.mx',
        64,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcos Romero Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.ocuilan.gob.mx',
        64,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jennifer Martínez Pastrana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.ocuilan.gob.mx',
        64,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amado Tomás Ortega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.ocuilan.gob.mx',
        64,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maribel Ramírez Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.ocuilan.gob.mx',
        64,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvano Nava Peña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.ocuilan.gob.mx',
        64,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Amador Gómez Villagómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.ocuilan.gob.mx',
        64,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarito Vázquez Ibáñez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.ocuilan.gob.mx',
        64,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Josefina Cruz Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.ocuilan.gob.mx',
        64,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hilarion Coronel Lemus',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        66,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Olvera Juárez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        66,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosaura Lazcano Espinoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        66,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esteban Espinosa Yañéz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        66,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reyna Gerónimo Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        66,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Víctor Sánchez Beltrán',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        66,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anayeli Álvarez Camacho',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        66,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosario García González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        66,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Ignacio Juárez Ortíz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        66,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Lizeth Huerta Suárez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        66,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Ramírez Aragón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        66,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yureni Nuñez Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        67,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariela López Cabrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        67,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Valentín Loza López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        67,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marbella Ruíz Avilez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        67,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonino Mercado Loza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        67,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irene Alvarado Garduño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        67,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vulfrano Ruíz Ruíz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        67,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ismael Loza Santana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        67,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Verónica Rebollar Ruíz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        67,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ernesto Martínez Váldez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        67,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leonila Ruíz Gorostieta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        67,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Sevilla Alvarado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        68,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Miriam Gil Rivero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        68,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Víctor Hugo Montiel Chavero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        68,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Udolia De Jesús Martínez Santibáñez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        68,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Ángel Peña Fernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        68,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcela Domínguez Fernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        68,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Ángel Peña Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        68,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tania Valero Galván',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        68,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe De Jesús Huerta Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        68,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana María Maya Guadarrama',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        68,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Casilda Ambrocio González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        68,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Valentin Martinez Castillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        69,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique De La Rosa Montiel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        69,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Elena Maximiliano Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        69,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Enríquez Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        69,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Griseth Corrales Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        69,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Uriel Cortés Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        69,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Idalia Rivera Valenzuela',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        69,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Paez Velázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        69,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Del Carmen Ruíz Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        69,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro López Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        69,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Jesús Rosales Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        69,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodrigo Ruiz Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        70,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ulises Mauricio Nolasco Quintero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        70,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mary Deasy Espinoza Miranda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        70,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tomás Rodrigo Espinoza Godínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        70,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fátima Guadalupe Rojas Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        70,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Trujano López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        70,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Ayde Ramírez Ambriz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        70,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Guadalupe Godínez Miranda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        70,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Baños Carpinteyro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        70,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Itzayana Victores López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        70,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angélica María Mendoza Carpinteyro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        70,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teresita Sanchez Barcena',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        72,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Carrillo Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        72,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Elena Maqueda Serrano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        72,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laonardo Daniel Hernández Anaya',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        72,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Xilonen Chavero Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        72,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Jazmani Resendiz Lugo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        72,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olivia Resendiz Estrada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        72,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fausta Martínez Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        72,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joel Bravo Santos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        72,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Guadalupe Ledesma Mejía',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        72,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abel Alvarado Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        72,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erick Vladimir Cedillo Hinojosa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        73,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Velázquez García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        73,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana María Martínez Vidal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        73,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Noé Gutiérrez Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        73,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorenza Adriana Nava Albarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        73,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Víctor Manuel Lara Garduño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        73,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Magdalena Fany Nava Mercado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        73,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Florina Irma Díaz López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        73,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Eusebio García Morón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        73,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Giovanny Nicolás Nava San Juan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        73,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Del Socorro Cedillo Hinojosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        73,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lizeth Marlene Sandoval Colindres',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        74,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mónica López Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        74,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rufino López Carrillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        74,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ernestina Lechuga Manjarrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        74,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Filiberto Ayala Arevalo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        74,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nancy Ensaustigue Cerón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        74,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Jiménez Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        74,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Domingo Archundia Guillén',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        74,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mahdha Torres Silva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        74,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emilio García Olivares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        74,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mauricio Sotelo San Juan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        74,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Jeronimo Apolonio',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        75,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Israel Mateo Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        75,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela González Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        75,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Marcos Octaviano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        75,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Laura Luciano Esquivel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        75,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Álvaro Nieves Bautista',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        75,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Rufina Dominga Urrieta López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        75,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felisa Cuevas Ruíz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        75,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cruz Ivette González Jerónimo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        75,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Ángel Hernández Lara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        75,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Laura Romero Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        75,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Maria Vazquez Carmona',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        124,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Josefina Caballero Esquivel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        124,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raúl De Jesús Segundo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        124,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Areli Granados García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        124,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Octavio Rojas Camacho',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        124,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Elena Rangel De La O',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        124,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Moreno Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        124,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Federico Salgado Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        124,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Eduardo Ramírez De Jesús',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        124,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olga Cruz Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        124,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Mario Guzmán Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        124,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Martinez Barragan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        76,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Javier Nuñez Valenzuela',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        76,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Selene Hernández Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        76,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alberto Omar López Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        76,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Irma Hernández Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        76,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis García Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        76,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Angélica Juárez Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        76,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angélica María Alva Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        76,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Morales Alarcón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        76,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Iván De Jesús Martínez Barragán',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        76,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lakshmi Nahomi Ruíz García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        76,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Aurora Muñiz Neyra',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.sanmateoatenco.gob.mx',
        77,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Antonio Alcántara Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.sanmateoatenco.gob.mx',
        77,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Karen González Espinoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.sanmateoatenco.gob.mx',
        77,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gregorio González Ortíz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.sanmateoatenco.gob.mx',
        77,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reina Loperena Trochi',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.sanmateoatenco.gob.mx',
        77,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jair De Jesús Pichardo Zepeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.sanmateoatenco.gob.mx',
        77,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María De Los Ángeles Flores Alcaráz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.sanmateoatenco.gob.mx',
        77,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Patricia Porcayo Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.sanmateoatenco.gob.mx',
        77,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Romeo Segura Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.sanmateoatenco.gob.mx',
        77,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis González Nuñez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.sanmateoatenco.gob.mx',
        77,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bernardino Paniagua Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.sanmateoatenco.gob.mx',
        77,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sara Mora De Jesus',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        78,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaqueline Amairani Hernández Obispo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        78,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Primitivo Agustín Carrión Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        78,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalba Jaimes Vences',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        78,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abel Ramos Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        78,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karina Martínez Vargas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        78,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Víctor Hugo Alpizar Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        78,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Federico Arellano Mucio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        78,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Ramírez Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        78,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isidro Vences Barcenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        78,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edith Maruri Colín',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        78,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Rosario Matias Esquivel',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        79,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anayeli Gama De Paz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        79,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Colín Villalpando',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        79,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Araceli Jaimes Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        79,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salomón Gómez Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        79,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Beatriz Hernández Colín',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        79,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Ángel Paniagua Ávila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        79,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia Eugenia Plata Garduño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        79,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efraín De Paz Vilchiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        79,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucila Álvarez Domínguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        79,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gregorio Cabrera González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        79,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Espinoza Arciniega',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        80,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Francisco Rojo Vargas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        80,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esperanza Montiel Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        80,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Lobera Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        80,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Carina Ortíz García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        80,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Valentín García Ibarra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        80,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Silvia Elizalde Gil',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        80,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anaí Cruz Badillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        80,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Alcántara De Jesús',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        80,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victoria Barrios Cordero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        80,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Patricia Ramírez Anaya',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        80,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Alberto Mejia Santa Olalla',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        81,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Heriberto Hernández Ávilez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        81,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María De Guadalupe Rodríguez Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        81,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vicente Toledo Salomón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        81,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Liliana Areli Uribe Macedo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        81,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Cenobio García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        81,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Romualda Acosta Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        81,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esmeralda Arellano Sotelo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        81,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adrián Díaz Abarca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        81,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lidia Campuzano Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        81,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Gaona Mercado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        81,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariela Gutierrez Escalante',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        82,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Liliana Areli Rivera Gutiérrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        82,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agustín Delgado Ochoa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        82,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Yolanda Wong Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        82,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isidro Javier González Sandoval',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        82,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Laura Villanueva Magallon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        82,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ignacio Nuñez Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        82,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Delia Cruz Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        82,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorenzo Gutiérrez Ugalde',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        82,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leslye Paola Velázquez Colín',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        82,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Israel Ovando Becerra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        82,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa María Laura Olivares Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        82,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abel Alejandro Domínguez Izar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        82,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayra Cruz Díaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        82,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rigoberto Lopez Rivera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        83,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Antonio Vallejo Gama',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        84,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leandro Bonilla Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        84,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Manuel Orozpe Marías',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        84,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adriana Alcántara Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        84,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esteban Ricardo Avalos Juárez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        84,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karen Iraís Galicia Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        84,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Díaz López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        84,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dolores Hernández Rosales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        84,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elisa Saraí Reyes Cortés',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        84,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Rosales Rocha',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        84,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Itzel Hidalia Morales Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        84,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anahic Orozpe Ocampo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        84,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Quirino Meneses Vivaldo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        85,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paula Gómez Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        85,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nestor Benito Santillán Orozco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        85,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Rodríguez Marínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        85,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Ramos Madrid',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        85,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zenaida Sánchez Merino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        85,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Macario Casasola Cerón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        85,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cecilia Meneces Ríos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        85,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aurelio Marínez Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        85,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Santos Toral Mora',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        85,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Saturnina Rufina González Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        85,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Alejandro Pérez García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        85,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Espinoza Navarrete',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        86,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maximiano Orozco De Nova',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        86,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esteban Tobias Garduño Miranda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        86,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rebeca Ruíz Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        86,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raúl Miguel García García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        86,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvia Andrea Lezama García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        86,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Milton Legorreta Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        86,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María De Jesús Contreras Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        86,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elda González Quintana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        86,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Felipe Ruíz Chimal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        86,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esperanza Rodríguez Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        86,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Ángel Flores Miranda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        86,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Gonzalez Berra',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        87,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fidela Benítez Osorio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        87,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Lucas Hernández Benítez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        87,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anahi Romero González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        87,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efraín Caballero Ángeles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        87,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Deñ Carmen Ramírez Montor',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        87,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Jaramillo Vera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        87,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Florencia López Vázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        87,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Placido Lazos López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        87,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ahimelec Villa Peña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        87,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cristian Velázquez Pedraza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        87,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raúl Sandoval Legorreta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        87,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nelly Brigida Rivera Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        88,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isaías Gómez Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        88,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gricelda Felipe Albino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        88,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Gregorio Bruno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        88,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisca Guadalupe Felipe',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        88,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio García Garduño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        88,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Balderas Carlos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        88,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oton Silva Gónzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        88,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wenceslao De La Cruz Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        88,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Verónica De La Cruz Victoriano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        88,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abel Macias Nicolas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        88,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Gutiérrez Fabela',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        88,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Gordillo Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        89,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ilce Ponce Arellano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        89,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rene Velázquez Mireles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        89,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Natiely Yazareth Jardón Delgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        89,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Ermilo Pedroza Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        89,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Del Socorro Pedraza Domínguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        89,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Rubio Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        89,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carolina Velázquez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        89,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gonzalo Vázquez Vázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        89,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aurelia Stephanie Reynoso Villanueva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        89,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Alberto Jardón Zarza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        89,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elizabeth Lara González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        89,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Avila Ventura',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        90,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maximo Mayolo Evodio Mártinez Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        90,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia Velarde Bustamante',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        90,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adrián David García Lugo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        90,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Del Camen Mundo Concha',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        90,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Petronilo Romero Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        90,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Inés Montilla Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        90,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvestre Jaen Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        90,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Ramírez Díaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        90,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Filogonio Plata Domínguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        90,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Garces Faustino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        90,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio De Jesus Conde',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        90,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Bautista Arellano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        91,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jonathan Norberto Morales Villegas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        91,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yaqueline Velázquez Mejía',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        91,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jonathan Isassi Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        91,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elizabeth Olvera Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        91,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Dionisio Hinojosa Campos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        91,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yuridia San Juan Mucientes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        91,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leticia Vázquez Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        91,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wenceslao Monroy Arias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        91,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Angélica Domínguez Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        91,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Roberto Salgado Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        91,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maribel Mártinez Carbajal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        91,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Uribe Padilla',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        92,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miriam Carranza Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        92,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Jiménez Vera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        92,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Araceli Garay Casillas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        92,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marciano Pérez Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        92,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Griselda Leyva Casas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        92,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emiliano Jeronimo Bautista López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        92,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Abad Orozco Solis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        92,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Gutiérrez Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        92,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teresa Rosas Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        92,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Germán García Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        92,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Verónica Corzo Leon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        92,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Paredes De La Torre',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        93,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Félix Morales Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        93,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Citlaly Medina Díaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        93,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luciano Crispin Badillo Aguirre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        93,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brenda Joyce Cosme Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        93,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nestor Badillo Rodriguiez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        93,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayremm Jamie Favela Elizalde',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        93,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abimael Sánchez Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        93,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Barroso Bautista',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        93,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maríana Hernández Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        93,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efraín López López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        93,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karina Aleman Gil',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        93,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ismael Olivares Vazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        94,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Del Rocio Martínez Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        94,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Javier Espejel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        94,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francelia Rodríguez Mártinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        94,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Israel Ruben Lavastida Vázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        94,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Noemí Inés Bustamante Espinoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        94,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Almeraya Perafan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        94,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Selene Ivonne Vazquéz Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        94,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ángel Hernández Vergara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        94,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Concepción Bravo Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        94,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Froylán Mendez Anaya',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        94,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abelardo Rodriguez Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        95,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Mártinez Galicia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        95,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eva Sánchez Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        95,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Liborio Muñoz Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        95,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucila Rosas Galván',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        95,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ascencio Avila López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        95,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia Liliana Rangel Alvarado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        95,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Espinosa Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        95,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Eduardo Rodríguez Cortés',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        95,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Del Rosario Hernández Zamora',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        95,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma López Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        95,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Los Angeles Zuppa Villegas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        96,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andrés Rodríguez Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        96,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Luisa Soria Quiroz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        96,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Topete Escorza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        96,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Celia Moran Ruíz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        96,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ernesto Sánchez Baltazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        96,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Del Rocío Ponce Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        96,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Iris Rubí Norberto Mondragón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        96,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriel Azarias Quintanilla González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        96,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Hernández Ojeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        96,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Víctor Manuel Gloria Rivas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        96,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Raul Meneses Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        97,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Concepción Hernández González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        97,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yésica Remedios Martínez Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        97,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Flavio César Quevedo Almazán',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        97,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lirio Edith Talonia Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        97,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Héctor Jesús Pérez Vidal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        97,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miriam Pérez Tapía',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        97,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Salvador Ramírez Clemente',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        97,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Fuentes Juárez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        97,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rubí Franco Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        97,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ingrid Jaqueline Rodríguez Tovar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        97,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Lujano Huerta',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        98,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Carbajal Dario',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        98,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Martha Calixto Zarate',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        98,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Armando Calixto Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        98,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Faustina Margarita Gorostieta Alonso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        98,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Justino Escobar Ortíz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        98,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Soledad Castañeda Ambríz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        98,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia Mercado Maya',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        98,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorena Escobar Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        98,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodrigo Calixto Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        98,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Olivares García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        98,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Xochitl Maribel Ramirez Bermejo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        99,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Araceli Barrera Santillán',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        99,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aldo Monroy Segura',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        99,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Begonia Reyes Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        99,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lázaro Nerick Hernández Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        99,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elva Martha Gómez Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        99,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martín Hinojosa Barrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        99,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yanelli Gutiérrez Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        99,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Mata González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        99,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Viridiana Rivera Gutiérrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        99,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Evelyn Pilar Gutiérrez Solano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        99,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Luz Falcon Venegas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        100,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Nancy Escobar Landon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        100,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hilario Onofre Buendía',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        100,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cecilia Cruz Patiño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        100,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joel Aguilar Espinosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        100,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Genoveva Bernal Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        100,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santiago Yescas Estrada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        100,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maribel Peña Bojorgez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        100,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dinorah Salado Solano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        100,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wenndy Jiménez Alcántara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        100,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Héctor Jesús Olvera Enciso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        100,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Heine Davalos Osorio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        100,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalía Marín González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        100,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eliseo Espinosa Márquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        100,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Uriel Morales Avila',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        101,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María De Los Ángeles Trujillo Rosas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        101,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Gabriel López De León',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        101,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Alejandra Domínguez Serafín',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        101,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José De Jesús Santos López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        101,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ariana Rubí Jiménez Valencia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        101,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Olanda Muñoz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        101,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Ramón Martínez Ángeles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        101,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lilí Marlen Rodríguez Vázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        101,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Guillermo Pacheco Montaño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        101,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Giovanna García Lazcano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        101,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Eric Moreno Valle',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        102,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Santiago Cazares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        102,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Eleazar Romero Cayetano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        102,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan López Melchor',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        102,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rocío Morelos Alberto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        102,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodolfo Castillo Huertas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        102,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Azucena Camacho Reynoso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        102,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anaís Guzmán Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        102,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bárbara Rubí Ortega Ortega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        102,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Samuel Antonio Casas Zuñiga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        102,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esther Gabriela Castañeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        102,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isaias Lugo Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        103,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Josefina Sánchez Dávila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        103,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jonathan Hernández Monroy',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        103,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carmen Lagunas Barrios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        103,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Zepeda Esquivel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        103,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaquelin Miranda Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        103,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Catarino González Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        103,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Guadarrama Monroy',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        103,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elidia Martínez Andres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        103,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zenón Guadarrama Esquivel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        103,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalva Alcántara Iniesta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        103,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Enrique Sanchez Reyes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        104,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marisol Olivo Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        104,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vicente Peña Arenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        104,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jazmín Rivera Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        104,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Aguilar Velázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        104,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María De Jesús Gamez Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        104,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel González Siguenza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        104,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Yazmín García Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        104,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Germán León Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        104,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa María Olguin Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        104,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gilberto Sámano Arellano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        104,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Rodriguez Hurtado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        105,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Guerrero Villegas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        105,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María De La Luz Hernández Camacho',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        105,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Víctor Manuel Pérez Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        105,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Krishna Karina Romero Velázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        105,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Cruz Jiménez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        105,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victoria Hernández Arellano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        105,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Morales Jiménez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        105,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María De Lourdes Curiel Rocha',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        105,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Vicente Domínguez Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        105,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arlethe Estephanie Grimaldo Osorio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        105,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Elba Soto Mojica',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        105,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karen Aketzali Zamarripa Quiñones',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        105,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alonso Adrián Juárez Jiménez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        105,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Itze Lizbeth Nava López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        105,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alina Alejandra Luna Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        105,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Andrés López Camacho',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        105,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Lorena Roa López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        105,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvia Téllez González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        105,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Crisoforo Hernandez Mena',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        106,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Magdaleno Hernández Benítez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        106,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emma Hernández Mena',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        106,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isaías Carpeña Aranda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        106,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julissa Gisel López Popoca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        106,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Jiménez Pomulo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        106,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia Salgado García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        106,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Martha Serrano González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        106,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Elena Hernández Olascoaga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        106,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Saúl Rongel López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        106,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Yely Marcellez Tinoco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        106,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raymundo Edgar Martinez Carbajal',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        107,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Crúz Urbina Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        107,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Janet Cruz Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        107,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Rodríguez Albarran',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        107,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Antonio Díaz Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        107,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Concepción Heidi García Alcantara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        107,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Chavarria Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        107,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Araceli Martínez Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        107,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erick Omar Mandujano Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        107,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Eugenia Muciño Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        107,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandro Abdias Mejía Sanabria',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        107,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marite Del Rio Domínguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        107,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marlet Sthefanía Rodea Díaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        107,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Geciel Mendoza Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        107,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nelly Dávila Chagolla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        107,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eymar Javier Gutiérrez Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        107,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Estrella Eulalia Garduño Zaldivar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        107,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eladio Hernández Álvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        107,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paola Jiménez Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        107,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mauro Martinez Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        125,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Suárez Ixtlahuaca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        125,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karinca Rodríguez Mauricio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        125,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Hernández Segura',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        125,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maríana Flores Chávez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        125,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Víctor Rivero Ortíz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        125,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Josefina Rosa Martínez García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        125,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Saúl Durán Rodrigo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        125,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adriana Rodríiguez Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        125,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramón Rodrigo Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        125,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Soyla Delgado Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        125,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Evelia Marlem Ayala Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        108,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Garardo López Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        108,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Romelia Arizmendi Estrada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        108,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gregorio Nava Arista',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        108,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruth Malonado Gracía',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        108,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mardonio Fuentes Sotelo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        108,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nancy Fuentes Tapia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        108,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniela Becerra Mandoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        108,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Javier Cruz Gordillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        108,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Lizbeth Ruíz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        108,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Morales López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        108,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramon Sergio Luna Cortes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        109,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriel Hernández Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        109,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Magnolia Araceli Meliton Rios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        109,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Valente Jose Manuel González Cano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        109,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Guadalupe Martínez Jiménez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        109,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Muñoz Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        109,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yolanda Escobedo Velázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        109,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aime Sánchez López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        109,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emmanuel Meza Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        109,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teresa Adela Sandoval Meneses',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        109,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laila Zuñiga Urban',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        109,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elena Garcia Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        110,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra María Luisa Pichardo Mireles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        110,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Tellez Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        110,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Lilia Navarro Sandoval',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        110,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alan Guarneros Ángeles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        110,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Margarita Rojas López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        110,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Gustavo Juárez Molina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        110,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dora Elia Rocha Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        110,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Porfirio Ramírez García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        110,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Michel Ailed Bárcenas Guarneros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        110,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jacob Francisco Jiménez Nieto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        110,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ismael García Chávez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        110,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fabiola Ocaña Mojica',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        110,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Axel Nava Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        110,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Michelle Nuñez Ponce',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        111,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis De Jesús Hernández Guadarrama',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        111,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Griselda Jaramillo Patiño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        111,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rubén De Paz Peña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        111,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cristina Mondragón Domínguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        111,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Horacio Bravo Pedraza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        111,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Berenice Marin Becerril',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        111,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Magdalena Rodríguez Benítez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        111,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto López Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        111,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Jaramillo González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        111,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De La Luz Izquierdo Teran',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        111,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Garcia Mendez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        122,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo David Vilchis Lara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        122,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joahana Arlette Cruz Escamilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        122,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Eladio Romro Mez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        122,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Evelia Mares Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        122,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gregorio Felipe Serrano Guevara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        122,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Elena Carmona Padilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        122,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Medel Villagómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        122,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo González Carrillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        122,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leslie Abril Romero León',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        122,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Odon Solís Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        122,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aurora Ramírez Natividad',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        122,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Tenorio Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        122,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Reyes Regalado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        122,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Piña Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        112,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Valdez Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        112,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Casillas Ocampo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        112,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rubén Iturbide Fabián',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        112,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sugey García Cuellar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        112,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tomás Marin Agapito',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        112,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Andrea Minerva Bernal Marcelino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        112,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Juan González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        112,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yeni Ferrer Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        112,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nestor Benhumea Guadarrama',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        112,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Del Carmen Castillo Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        112,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andri Guadalupe Correa Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        113,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Uriel Cruz Rueda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        113,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erica Cruz Jiménez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        113,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Pineda Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        113,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Beatriz Suyin Hernández Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        113,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Cruz Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        113,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elizabeth Angeles González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        113,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Peralta Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        113,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Víctor Maldonado Barrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        113,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María De Socorro Medina Rueda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        113,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Miranda Granada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        113,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Lugo Millan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        114,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Del Carmen López Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        114,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fredy Salinas Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        114,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Magali Pedroza Ayala',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        114,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adolfo Castillo Alba',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        114,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz Elisa Carmona Yáñez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        114,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Virgilio Millán Ayala',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        114,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Ortega Vázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        114,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sallyjit Jouhayerk Venegas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        114,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reginaldo Arellano Díaz Leal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        114,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De Jesús Díaz Vázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        114,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Luisa Carmona Alvarado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        115,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Martínez Velázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        115,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika De La Cruz Mariano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        115,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Filiberto Estrada Vargas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        115,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Luisa Colín Santana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        115,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Antonio Martínez González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        115,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Dávila Abarca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        115,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Del Rosario Carmona Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        115,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isaías López Enguilo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        115,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniela Reyes Mondragón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        115,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hugo César Vilchis Guzmán',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        115,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abel Flores Guzman',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        44,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marín González Garduño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        44,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Angélica Torres Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        44,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Félix Miranda Estrada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        44,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alondra Patricia Garcés Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        44,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Galindo Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        44,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandra Quiroz Noyola',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        44,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rubén Zavala Juárez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        44,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniela Paloma Quiroz González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        44,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia Quiroz Palacios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        44,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Estela Quiroz Méjia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        44,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Gonzalez Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        116,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gastón Valdéz García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        116,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miriam Ortega Aldama',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        116,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Álvarez Villaseñor',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        116,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Simei Jared Rincón Bartolo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        116,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eloy Nelson García Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        116,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Del Carmen Morales García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        116,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anastacia González Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        116,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Bonifacio Portillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        116,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adriana Ivonne Trujillo Coahuila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        116,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pavel Iván Ortíz Bustamante',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        116,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Vicente Jaramillo Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        117,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alicia López Mercado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        117,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Pedraza Lujano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        117,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Imelda Ugarte Ponce',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        117,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo Ponce Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        117,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mirella López Cabrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        117,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Salbador Villafaña Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        117,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalba Villafaña Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        117,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joaquín Mejía Piña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        117,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvina Cardozo Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        117,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Jiménez Miranda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        117,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Beatriz Perez Vasquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.zacualpanmex.gob.mx',
        118,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Gómez Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.zacualpanmex.gob.mx',
        118,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Petra Cruz Pérez Chávez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.zacualpanmex.gob.mx',
        118,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Barrios Ascencio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.zacualpanmex.gob.mx',
        118,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adela Porcayo Ronces',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.zacualpanmex.gob.mx',
        118,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cosme Damián De La Rosa Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.zacualpanmex.gob.mx',
        118,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosario Ma. De Jesús Bustos Peralta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.zacualpanmex.gob.mx',
        118,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fidel Rogel Valle',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.zacualpanmex.gob.mx',
        118,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dulce Flor Bahena Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.zacualpanmex.gob.mx',
        118,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Armando Martínez Jaimez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.zacualpanmex.gob.mx',
        118,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Bertha Rodríguez Bahena',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        'http://www.zacualpanmex.gob.mx',
        118,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Vilchis Viveros',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        119,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis De Jesús Álvarez Orozco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        119,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Mercado Olvera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        119,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leonardo Joaquín Bravo Villanueva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        119,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Iriana De La Vega Barrios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        119,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernado Escobedo Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        119,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Romero Peña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        119,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Díaz De Jesús',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        119,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos García Huerfano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        119,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Filemón García Sandoval',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        119,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nancy Valdéz Escamilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        119,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Sánchez Ladrillero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        119,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Guadalupe Reyes Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        119,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Luis Vázquez Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        119,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nora Angelica Fuentes Aguilar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        120,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Héctor Alexis Pérez Ocampo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        120,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Lima González Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        120,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irene Villalva Merida',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        120,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karen Alondra Suárez Juárez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        120,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anastacio Juárez Casales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        120,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Amateco García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        120,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Irene Rayón Salinas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        120,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Teodoro Cuellar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        120,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Alfredo Flores Fuentes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        120,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Guillermina Pavón Díaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        120,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Gamboa Monroy',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        121,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Belén Oropeza Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        121,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Felipe Barrera León',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        121,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vera Svanilda Oropeza Baca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        121,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Flores Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        121,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Antonia Ramírez Montiel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        121,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Román Rivero Alarcón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        121,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abraham Casasola Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        121,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erik Soto Brindis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        121,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elvia Adriana Ortega Jandette',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        121,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ascención Ramírez Escalona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        121,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abril Maetzy Clemente Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        121,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Jiménez Muñoz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        121,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maríana Domínguez Villalobos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-01-01, 2024-12-31)'::daterange,
        null,
        121,
        15
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
              `)
}
