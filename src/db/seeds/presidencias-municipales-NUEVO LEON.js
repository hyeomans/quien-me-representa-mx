exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 19).del()
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
        'Karina Lissette Villarreal Ramírez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        1,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dora Guadalupe Garza Robles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        1,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Esthela Alvarado Soto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        1,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Jesus Flores Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        1,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ignacio Castellanos Amaya',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        2,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De La Luz De La Garza Alcorta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        2,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Estanislao Gonzalez Portillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        2,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isabel Santos Reyna Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        2,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Javier Garza Rubalcava',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        2,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucia Gomez Juarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        2,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Ena Jauregui Salinas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        2,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eva Patricia Salazar Marroquín',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.allende.gob.mx',
        4,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Ramon Cavazos Silva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.allende.gob.mx',
        4,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Maria Fernandez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.allende.gob.mx',
        4,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Alberto Vazquez Tamez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.allende.gob.mx',
        4,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Monica Alejandra Leal Silguero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.allende.gob.mx',
        4,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esteban Armando Cavazos Leal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.allende.gob.mx',
        4,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luordes Alejandra Bazan Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.allende.gob.mx',
        4,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Gerardo Salazar Tamez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.allende.gob.mx',
        4,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Beatriz Adriana Cavazos Reyna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.allende.gob.mx',
        4,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Daniel Ramos Leal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.allende.gob.mx',
        4,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Desiderio Urteaga Ortegón',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        5,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rocio Isabel Santos Chapoy',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        5,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Artemio Cuevas Lara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        5,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marielle Garcia Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        5,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe De Jesus Campos Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        5,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Veronica Calvillo Villareal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        5,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vicente Alejandro Gonzalez Carmona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        5,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisca Macias Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        5,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hilario Alfonso Garza Quiroga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        5,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'César Garza Villarreal',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        6,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Cristina Flores Elizondo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        6,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodolfo Ambriz Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        6,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Melissa Alexandra Caballero Olivares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        6,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claro Francisco Escamilla Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        6,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marla Azucena Treviño Cantu',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        6,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Ruben Pedraza Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        6,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elisa Judith Urbina Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        6,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Ivan Guajardo Guajardo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        6,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Samhanta Lissette Garza Arizpe',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        6,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cirilo Carrizalez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        6,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Thania Cecilia Rivera Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        6,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Isidoro Gonzalez Jauregui',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        6,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Alberto Enriquez Cano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        6,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Veronica Puebla Rodriguez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        6,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Cepeda De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        6,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lizette Nohemi Gomez Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        6,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Jose Cervantes Sanches',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        6,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gaspar Salatiel Del Toro Orozco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://aramberrinl.gob.mx/',
        7,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Los Angeles Gordiano Cerda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://aramberrinl.gob.mx/',
        7,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Antonio Brenes Cazares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://aramberrinl.gob.mx/',
        7,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Azalia Zelinda Castillo Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://aramberrinl.gob.mx/',
        7,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Sergio Mireles Galvan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://aramberrinl.gob.mx/',
        7,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elida Ortega Tienda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://aramberrinl.gob.mx/',
        7,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jazer Esau Hernandez Segovia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://aramberrinl.gob.mx/',
        7,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nohemi Arias Alvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://aramberrinl.gob.mx/',
        7,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Martinez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://aramberrinl.gob.mx/',
        7,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nydia Del Carmen Ramirez Cortez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://aramberrinl.gob.mx/',
        7,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Felipe García Botello',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        8,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sara Zapata Palacios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        8,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Basaldua Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        8,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Valdepeña Retana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        8,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Orozco Zamarron',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        8,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Silvia Balderrama Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        8,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Guadalupe Sanchez Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        8,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ernesto José Quintanilla Villarreal',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        9,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Patricia Gonzalez De Leon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        9,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Omar Perez Rosales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        9,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cecilia Margarita Cantu Montemayor',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        9,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Fernando Magallanes Cantu',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        9,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Aurora Garcia De Leon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        9,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Federico Montalvo Campos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        9,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Soto Bernal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        9,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gloria Margarita Estrella Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        9,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Lizeth Garza Cavazos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        9,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eliud Roberto Garza Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        9,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Baltazar Gilberto Martínez Ríos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        11,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sonia Garza Mascareñas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        11,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Guadalupe Mijares Gaytan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        11,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Minerva Guadalupe Mendez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        11,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leopoldo Martinez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        11,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Gloria Lozano Treviño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        11,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Gonzalez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        11,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raúl Karr Vázquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        13,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Glenda Damaris Olvera Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        13,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Gabriel Torres Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        13,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalia Reyes Cano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        13,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reynaldo Chapa Cantu',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        13,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Laura Perez Quintanilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        13,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mireya Garcia Tamez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        13,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Alonso Casas Quiñones',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        12,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Saenz Villareal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        12,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Guadalupe Contreras Molina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        12,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe De Jesus Sandoval Valdivia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        12,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leonila Serrato Camero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        12,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gaspar Guajardo Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        12,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Esmeralda Garza Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        12,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lidia Hernandez Antonio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        12,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Marin Quiroga Galvan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        12,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Antonio Martínez Rodríguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        14,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Esthela Lucio Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        14,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Paredes Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        14,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Judith Muñoz Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        14,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ezequiel Rodriguez Molina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        14,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tania Berenice Garcia Mireles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        14,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Francisco Martinez Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        14,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Josefina Lopez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        14,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Humberto Niño Melgar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        14,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De La Luz Perez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        14,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Simón Ríos Rangel',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        15,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Guadalupe Montes Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        15,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Americo Treviño Saenz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        15,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sanjuanita Guadalupe Hinojosa Trujillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        15,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Arnoldo Cantu Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        15,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Napoleon Salinas Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        15,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sara Norma Cantu Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        15,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayra Abrego Montemayor',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        16,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Gutierrez Sandoval',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        16,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Olivia Quintanilla Corpus',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        16,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Nicolas Huerta Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        16,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karina Huerta Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        16,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia Valtierra Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        16,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Ernestina Garza Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        16,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Alfonso De La Maza Villarreal',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        10,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Graciela Villareal Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        10,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Villareal Arredondo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        10,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Elva Cantu Villareal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        10,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Yeverino Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        10,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Astrid Liliam Fuentes Guajardo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        10,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Gutierrez Chavez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        10,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carolina Gutierrez Chavez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        10,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Homero Garza Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        10,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felix Romeo Garza Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        10,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Elizondo Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        10,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandra Ramírez Díaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        17,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Enrique Gonzalez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        17,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucia Ceceñas Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        17,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eliud Pedroza Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        17,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Del Socorro Manzanares Salas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        17,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Gerardo Mendoza Huerta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        17,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sabinita Velazquez Gamez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        17,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Astrid Yesenia Del Porte Solis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        17,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Ofelia Gomez Aviles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        17,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martin Benites Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        17,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Guevara Garza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.garcia.gob.mx',
        18,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Evelia Alvarado Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.garcia.gob.mx',
        18,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Flores Carreon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.garcia.gob.mx',
        18,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maryann Hernandez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.garcia.gob.mx',
        18,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Miguel Gutierrez Rios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.garcia.gob.mx',
        18,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Luisa Lira Bustamante',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.garcia.gob.mx',
        18,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Gutierrez Roque',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.garcia.gob.mx',
        18,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Josefina Corona Corpus',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.garcia.gob.mx',
        18,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Manuel Carbajal Barrientos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.garcia.gob.mx',
        18,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariana Camarillo Arriaga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.garcia.gob.mx',
        18,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Martinez Nuñez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.garcia.gob.mx',
        18,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Armando Treviño Rosales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.garcia.gob.mx',
        18,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Guerra Cavazos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.garcia.gob.mx',
        18,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Cantú Fernández',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        20,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalva Rios Cantu',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        20,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Jose Solis Alanis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        20,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Lucila Uribe Rios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        20,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Noel Estanislao Martinez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        20,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Annel Guadalupe Rosales Cavazos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        20,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Cesar Garces Anaya',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        20,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Antonio Quiroga Chapa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-11, 2021-09-30)'::daterange,
        'http://www.escobedo.gob.mx',
        21,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Manuel Mendez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-11, 2021-09-30)'::daterange,
        'http://www.escobedo.gob.mx',
        21,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Velia Contreras Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-11, 2021-09-30)'::daterange,
        'http://www.escobedo.gob.mx',
        21,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Sanchez Cepeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-11, 2021-09-30)'::daterange,
        'http://www.escobedo.gob.mx',
        21,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brenda Elizabeth Orquiz Gaona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-11, 2021-09-30)'::daterange,
        'http://www.escobedo.gob.mx',
        21,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Walter Asrael Salinas Guzman',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-11, 2021-09-30)'::daterange,
        'http://www.escobedo.gob.mx',
        21,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maricela Gonzalez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-11, 2021-09-30)'::daterange,
        'http://www.escobedo.gob.mx',
        21,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Quezada Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-11, 2021-09-30)'::daterange,
        'http://www.escobedo.gob.mx',
        21,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Janeth Cabrera Palacios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-11, 2021-09-30)'::daterange,
        'http://www.escobedo.gob.mx',
        21,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Aaron Jasso Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-11, 2021-09-30)'::daterange,
        'http://www.escobedo.gob.mx',
        21,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Edith Ramos Ojeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-11, 2021-09-30)'::daterange,
        'http://www.escobedo.gob.mx',
        21,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cuauhtemoc Sanchez Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-11, 2021-09-30)'::daterange,
        'http://www.escobedo.gob.mx',
        21,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Antonio Guerra Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-11, 2021-09-30)'::daterange,
        'http://www.escobedo.gob.mx',
        21,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wendy Maricela Cordero Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-11, 2021-09-30)'::daterange,
        'http://www.escobedo.gob.mx',
        21,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carolina Maria Vazquez Juarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-11, 2021-09-30)'::daterange,
        'http://www.escobedo.gob.mx',
        21,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eleuterio Villagómez Guerrero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        22,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa De Leon Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        22,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Garcia Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        22,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Teresa Fernandez Betancourt',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        22,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adrian Quintanilla Garza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        22,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Dolores Cavazos Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        22,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rene Martinez Garza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        22,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juliana Maria Chapa Cantu',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        22,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abelardo Salazar Villagomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        22,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramiro Sierra Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        22,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Liliana Ocañas Quintanilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        22,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elia Hinojosa García',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        23,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Antonio Avalos Salinas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        23,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Socorro Perez Maldonado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        23,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Moreno Garza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        23,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalinda Martinez Villanueva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        23,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eligio Guadalupe Madrigal Madrigal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        23,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Marcelo Hinojosa Salinas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        23,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Arturo Guevara Soto',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        24,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Soledad Rodriguez Cerda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        24,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Venancio Lopez Montoya',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        24,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Veronica Aburto Marquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        24,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andres Perez Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        24,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Maria Soto Celis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        24,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Del Carmen Paredes Soto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        24,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Ángel Martínez Martínez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.zuazua.gob.mx/',
        25,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Martinez Lozano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.zuazua.gob.mx/',
        25,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Guadalupe Alvarez Villalobos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.zuazua.gob.mx/',
        25,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Manuel Alvarez Rios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.zuazua.gob.mx/',
        25,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amparo Martinez Quiroga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.zuazua.gob.mx/',
        25,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Rios Llanas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.zuazua.gob.mx/',
        25,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sonia Monica Ortega Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.zuazua.gob.mx/',
        25,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Veronica Villareal Chapa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.zuazua.gob.mx/',
        25,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Adriana Torres Manzo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.zuazua.gob.mx/',
        25,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cristina Ana Garza Selio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.zuazua.gob.mx/',
        25,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalinda Martinez Chapa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.zuazua.gob.mx/',
        25,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Cristina Díaz Salazar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Torres Alanis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yarely Guadalupe Vera Grimaldo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Johan Herrera Pineda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Veronica Elizabeth Garcia Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martin Efren De La Peña Lozano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Lorena Cavazos Jauregui',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Santos Perez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gina Rocio Lisa Guerra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Rodriguez Padilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Imelda Elizondo Ortega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andres Pinto Caballero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Perla Cecilia Alvarado Urbano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Angel De Leon Rubio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Melva Sidya Orozco Del Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rene Mauricio Martinez Chapa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Iram Gerardo Francisco Lopez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Angel Martinez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Manuel Candelas Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Isabel Banda Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gilberto De Jesus Gomez Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nydia Elizabeth Bonilla Moncada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Liliana Beatriz Alanis De Leon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.guadalupe.gob.mx',
        26,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hernán Cortés Lozano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        28,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karla Dolores Rodriguez Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        28,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jean Michel Williars Rubio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        28,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Jesus Lozano Garza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        28,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gregorio Treviño Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        28,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sully Claribel Sanchez Fuentes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        28,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Ramiro Lozano Cardenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        28,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Belinda Lozano De La Garza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        28,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reyna Guadalupe Gonzalez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        28,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Manuel Ramírez González',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        29,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Delia Sanchez Banda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        29,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Oswaldo Martinez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        29,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Liliana Abigail Ibarra Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        29,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Manuel Garcia Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        29,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan De Dios Gonzalez Montemayor',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        29,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brenda Margarita Cruz Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        29,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Calletana Quiñones Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        29,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Homero Aguilar Hernández',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        30,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Socorro Maria Ibarra Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        30,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amador Sanchez Cervantes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        30,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sanjuanita Pedraza Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        30,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Martinez Aguirre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        30,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Liliana Garcia Cardenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        30,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Jasso Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        30,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cristina Yavidia Rodríguez González',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        31,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Fernando Alonzo Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        31,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marlen Colunga Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        31,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose David Rodriguez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        31,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nancy Lorena Rodriguez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        31,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Maria Torres Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        31,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz Maria Rivero Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        31,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Heriberto Treviño Cantú',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://juarez-nl.gob.mx/',
        32,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fabiola Carreon Ortega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://juarez-nl.gob.mx/',
        32,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Garza Vallejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://juarez-nl.gob.mx/',
        32,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Perla Coral Rodriguez Mercado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://juarez-nl.gob.mx/',
        32,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Castulo Gonzalez Acosta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://juarez-nl.gob.mx/',
        32,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Linda Patricia Garza Rocha',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://juarez-nl.gob.mx/',
        32,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Cesar Cantu Garza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://juarez-nl.gob.mx/',
        32,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elena Esther Rivera Limon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://juarez-nl.gob.mx/',
        32,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Ruben Garcia Faz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://juarez-nl.gob.mx/',
        32,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Christian Guadalupe Perez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://juarez-nl.gob.mx/',
        32,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ileana Patricia Cruz Menchaca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://juarez-nl.gob.mx/',
        32,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Ivett Rangel Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://juarez-nl.gob.mx/',
        32,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Librada Rangel De La Riva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://juarez-nl.gob.mx/',
        32,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hilda Patricia Saenz Alviso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://juarez-nl.gob.mx/',
        32,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Santos Martínez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        33,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sofia Aguirre Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        33,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Perez Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        33,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De La Luz Lozano Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        33,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arnulfo Villareal Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        33,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eusebio Baldemar Gonzalez Serna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        33,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marycela Matta Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        33,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Adame Doria',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.linares.gob.mx/',
        34,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Domitila Rojas Cavazos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.linares.gob.mx/',
        34,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abel Macias Treviño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.linares.gob.mx/',
        34,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dolores Magdalena Jaramillo Cardenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.linares.gob.mx/',
        34,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Gonzalez Lerma',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.linares.gob.mx/',
        34,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hilda Gonzalez Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.linares.gob.mx/',
        34,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Federico Tamez Morali',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.linares.gob.mx/',
        34,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Maria Velasco Garza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.linares.gob.mx/',
        34,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Lucio Garcia Constante',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.linares.gob.mx/',
        34,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Manuel Ramirez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.linares.gob.mx/',
        34,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Guadalupe Villareal Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.linares.gob.mx/',
        34,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Luis Peña Peña',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        3,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Griselda Villareal Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        3,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Tanguma Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        3,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julia Esther Rangel Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        3,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Francisco Garza Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        3,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bernardo Garcia Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        3,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Isabel Sanchez Cervantes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        3,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Alfonso Tijerina López',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        27,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Rosa Garza Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        27,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Rene Garza Garza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        27,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esmeralda Garcia Cortez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        27,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hugo Gonzalo Ayala Guzman',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        27,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aurora Salinas Garza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        27,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Alberto Alanis Quintanilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        27,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Antonio Guajardo Mora',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        43,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juanita Nohemi Garza Lucio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        43,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Alberto Ochoa Cantu',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        43,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Tomasa Flores Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        43,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Gonzalez Suarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        43,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brenda Eloisa Serrato Garza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        43,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Esperanza Perez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        43,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Santamaría Gutiérrez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.marin.gob.mx/',
        35,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julia Vazquez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.marin.gob.mx/',
        35,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Molina Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.marin.gob.mx/',
        35,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Laura Ortiz Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.marin.gob.mx/',
        35,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lino Noe Nañez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.marin.gob.mx/',
        35,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yadira Elena Martinez Villareal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.marin.gob.mx/',
        35,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Gallegos Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.marin.gob.mx/',
        35,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Ramos García',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        36,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucia Araceli Ibarra Chavez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        36,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alberto Ramos Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        36,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lydia Marlen Gonzalez Oviedo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        36,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rigoberto Gonzalez Zavala',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        36,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia De Leon Hinojosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        36,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Valentin Lopez Jasso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        36,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santana Martínez Peña',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        37,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Rios Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        37,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Puga Cervantes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        37,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Susana Mendoza Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        37,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Federico Vargas Jasso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        37,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rebeca Villasana Perales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        37,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Homero Briones Quiroz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        37,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dámaso Avelino Cárdenas Gutiérrez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        38,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisca Alanis Duron',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        38,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcos Elizondo Loera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        38,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Guadalupe Urbina Villareal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        38,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Daniel Suarez Vuentello',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        38,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lizeth Zaraith Aguilar Arzola',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        38,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olga Lidia Quintanilla Peña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        38,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Fernando Garza Guerrero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.montemorelos.gob.mx/',
        39,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Mario Moncada Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.montemorelos.gob.mx/',
        39,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Angelina Zavala Acosta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.montemorelos.gob.mx/',
        39,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Carlos Peñaflor Saldaña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.montemorelos.gob.mx/',
        39,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Liliana Robles Villalobos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.montemorelos.gob.mx/',
        39,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abel Bazan Garza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.montemorelos.gob.mx/',
        39,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Araceli Urrea Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.montemorelos.gob.mx/',
        39,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruth Anabel Diaz Balladares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.montemorelos.gob.mx/',
        39,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Martinez Elizondo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.montemorelos.gob.mx/',
        39,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brenda Lizbeth Sanchez Muñiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.montemorelos.gob.mx/',
        39,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Almira Saldaña Becerra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.montemorelos.gob.mx/',
        39,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adrian Emilio De La Garza Santos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Perla Cordova Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Martinez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Ofelia Coronado Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alvaro Flores Palomo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Liliana Tijerina Cantu',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruben Basaldua Moyeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Cristina Mu?oz Rios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Guerrero Adame',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayela Maria De Lourdes Quiroga Tamez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Humberto Arturo Garza De Hoyos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Montero Solis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Alejandro Alvarado Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Lilia Coronado Araiza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Salazar Guadiana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Thalina Almaraz Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriel Ayala Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De La Luz Estrada Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Armando Arellano Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Adrian Ayala Cantu',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adriana Paola Coronado Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Alfredo Perez Bernal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olga Villarreal Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Obed Murga Chapa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia Alejandra Lozano Onofre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Osvel Abraham Cepeda Miranda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olga Lidia Herrera Natividad',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Gamboa Villarreal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-31, 2021-09-30)'::daterange,
        'http://www.monterrey.gob.mx/oficial/',
        40,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Crescencio Oliveira Cantú',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        41,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Alamo Sepulveda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        41,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Onberto Herrera Vela',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        41,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisca Morena Chapa Molina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        41,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eleodoro Rodriguez Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        41,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Everardo Ruiz Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        41,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dulce Arely Vela Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        41,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Ángel Lozano Munguía',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        42,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Guadalupe Gonzalez Silguero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        42,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodolfo Ortiz Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        42,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yolanda Nataly Lozano Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        42,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Oscar Gonzalez Guajardo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        42,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Noemi Guadalupe Ayala Chay',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        42,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Faustino Venegas Yañez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        42,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Alonso Venegas Sarmiento',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        42,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Lourdes Delgado De Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        42,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aldo Alejandro Elizondo Giacoman',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        42,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Margarita Torres Salazar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        44,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose David Macias Cortes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        44,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Taide Tovar Berlanga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        44,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eliseo Casas Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        44,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Elena Ortiz Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        44,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Atenogenes Escobedo Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        44,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adelaida Salas De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        44,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Omar González Garza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        45,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Maria Garza Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        45,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Gonzalez Espinosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        45,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aileen Xylina Liuskos Lucio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        45,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Luis Lopez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        45,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gloria Mariza Gonzalez Ibarra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        45,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Treviño Elizondo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        45,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paloma Nahyely Avila Cazares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        45,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Davila Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        45,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Isabel Guadiana Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        45,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gonzalo Elizondo Lira',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        46,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayra Veronica Guajardo Elizondo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        46,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Javier Treviño Batres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        46,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Erika Rodriguez Esmeralda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        46,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Morales Garza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        46,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adriana Luz Verduzco Guerra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        46,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Treviño Treviño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        46,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Monica De La Garza Cantu',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        46,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Jesus Gonzalez Sotelo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        46,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dr. Zeferino Salgado Almaguer',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanicolas.gob.mx/',
        47,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Katty Cecilia Castillo Peña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanicolas.gob.mx/',
        47,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reynold Condelle Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanicolas.gob.mx/',
        47,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nora Herminia Garcia Cantu',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanicolas.gob.mx/',
        47,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Galaviz Garza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanicolas.gob.mx/',
        47,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucrecia Moreno Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanicolas.gob.mx/',
        47,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Treviño Valerio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanicolas.gob.mx/',
        47,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aniceta Sarmiento Pacheco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanicolas.gob.mx/',
        47,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Israel Cervantes Alanis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanicolas.gob.mx/',
        47,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Albarelly Guadalupe Garcia Mata',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanicolas.gob.mx/',
        47,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Rodriguez Roque',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanicolas.gob.mx/',
        47,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Cano Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanicolas.gob.mx/',
        47,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yanet Ileana Garza Carvajal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanicolas.gob.mx/',
        47,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Denisse Edith Morales Tudon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanicolas.gob.mx/',
        47,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Antonio Noyola Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanicolas.gob.mx/',
        47,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Arcadio Zendejas Espinosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanicolas.gob.mx/',
        47,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Antonio Villareal Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanicolas.gob.mx/',
        47,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Bernardo Treviño De Hoyos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanpedro.gob.mx/',
        19,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mauricio Sada Santos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanpedro.gob.mx/',
        19,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Monica Lucia Gonzalez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanpedro.gob.mx/',
        19,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Gonzalez Alcantara Caceres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanpedro.gob.mx/',
        19,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniela Nohemi Gomez Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanpedro.gob.mx/',
        19,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Alberto Carlos Paez Y Aragon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanpedro.gob.mx/',
        19,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Marcela Dieck Asad',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanpedro.gob.mx/',
        19,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Armando Aguilar Valdez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanpedro.gob.mx/',
        19,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Venecia Guzman Elizondo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanpedro.gob.mx/',
        19,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ernesto Javier Chapa Calvillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanpedro.gob.mx/',
        19,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karla Janette Flores Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanpedro.gob.mx/',
        19,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Gabriel Ramirez Conde',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanpedro.gob.mx/',
        19,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brenda Tafich Lankenau',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.sanpedro.gob.mx/',
        19,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Héctor Israel Castillo Olivares',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.stacatarina.gob.mx',
        48,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Azucena Alvarez Gaona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.stacatarina.gob.mx',
        48,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arnulfo Daniel Partida Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.stacatarina.gob.mx',
        48,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Veronica Rodriguez Treviño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.stacatarina.gob.mx',
        48,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Alberto Maldonado Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.stacatarina.gob.mx',
        48,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Lourdes Suazo Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.stacatarina.gob.mx',
        48,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Navarro Alvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.stacatarina.gob.mx',
        48,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayela Guadalupe Sanchez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.stacatarina.gob.mx',
        48,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Antonio Cervantes Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.stacatarina.gob.mx',
        48,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Calahorra Urias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.stacatarina.gob.mx',
        48,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efren Garcia Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.stacatarina.gob.mx',
        48,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nora Hortencia Melendez Treviño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.stacatarina.gob.mx',
        48,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Graciela Rodriguez Rangel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.stacatarina.gob.mx',
        48,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Lorenzo Rodriguez Cantu',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.stacatarina.gob.mx',
        48,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Caballero Gaona',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.santiago.gob.mx',
        49,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David De La Peña Marroquin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.santiago.gob.mx',
        49,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruth Elizabeth Lopez Copado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.santiago.gob.mx',
        49,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eliud Villalon Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.santiago.gob.mx',
        49,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Coral Valdez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.santiago.gob.mx',
        49,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Valdes Ordoñez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.santiago.gob.mx',
        49,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wendy Aracely Leal Alanis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.santiago.gob.mx',
        49,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Janeth Castillo Espronceda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.santiago.gob.mx',
        49,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Marcial Valdez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.santiago.gob.mx',
        49,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marlen Salazar Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        'http://www.santiago.gob.mx',
        49,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Lina Margarita Martínez Serna',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        50,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Mario Sanchez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        50,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Melba Abrego Gallegos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        50,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Deolegario Medellin Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        50,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Leticia Gutierrez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        50,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramon Garza Leza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        50,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Garza Esquivel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        50,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gonzalo Robles Rosales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        51,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cynthia Yadira De Leon Elizaldi',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        51,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Gerardo Alvarado Cantu',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        51,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Griselda Lopez Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        51,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando De Jesus Escobedo Villareal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        51,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miosoti Yazmin Arredondo Villareal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        51,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Manuel Nieto Tapia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-31, 2021-09-30)'::daterange,
        null,
        51,
        19
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
              `)
}
