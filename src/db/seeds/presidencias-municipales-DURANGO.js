exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 10).del()
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
        'Dora Elena Gonzalez Tremillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.canatlan.gob.mx/es/',
        1,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De Lourdes Martinez Marin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.canatlan.gob.mx/es/',
        1,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Daniel Sandoval Nieves',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.canatlan.gob.mx/es/',
        1,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika De La Luz Arreola Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.canatlan.gob.mx/es/',
        1,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Maria Alvarado Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.canatlan.gob.mx/es/',
        1,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Timoteo Estrada Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.canatlan.gob.mx/es/',
        1,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De Los Angeles Rojas Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.canatlan.gob.mx/es/',
        1,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Escalera Lozano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.canatlan.gob.mx/es/',
        1,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandra Edith Rutiaga Rosales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.canatlan.gob.mx/es/',
        1,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Sarahi Ontiveros Vizarraga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.canatlan.gob.mx/es/',
        1,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Ruiz Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://canelas.gob.mx/canelas/',
        2,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Catalina Edith Vizcarra Arrieta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://canelas.gob.mx/canelas/',
        2,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Javier Cardenas Gamboa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://canelas.gob.mx/canelas/',
        2,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Isela Avitia Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://canelas.gob.mx/canelas/',
        2,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guillermina Montes Nevarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://canelas.gob.mx/canelas/',
        2,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Lizbeth Hernandez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://canelas.gob.mx/canelas/',
        2,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erasmo Nevarez Olivas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://canelas.gob.mx/canelas/',
        2,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gildardo Hernandez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://canelas.gob.mx/canelas/',
        2,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martin Pineda Acosta',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        3,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuela Concepcion Ochoa Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        3,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Alberto Barraza Qui?ones',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        3,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Estela Batres Villarreal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        3,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Candido Rutiaga Carrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        3,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gloria Rochel Salas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        3,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Candelaria Ortega Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        3,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dora Leticia Landeros Amaya',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        3,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Lourdes Martinez Espinosa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        4,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorena Delgado Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        4,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dagoberto Casta?eda Rivas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        4,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elsa Monarrez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        4,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yeni Del Socorro Irungaray Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        4,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Miguel Gomez Favela',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        4,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felicitas Aguilar Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        4,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mary Cruz Davila Huizar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        4,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Blas Rosales Fernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        4,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carmen Garcia Ovalle',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        4,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Alejandro Salum Del Palacio',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.durangocapital.gob.mx/',
        5,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Maria Ascencio Orrante',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.durangocapital.gob.mx/',
        5,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Rocha Amaro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.durangocapital.gob.mx/',
        5,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Ma. De Los Angeles Soto Almodovar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.durangocapital.gob.mx/',
        5,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Londres Botello Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.durangocapital.gob.mx/',
        5,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Ernestina Hernandez Espino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.durangocapital.gob.mx/',
        5,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Javier Gonzalez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.durangocapital.gob.mx/',
        5,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Vazquez Chacon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.durangocapital.gob.mx/',
        5,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Celia Daniela Soto Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.durangocapital.gob.mx/',
        5,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Ivonne Barboza Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.durangocapital.gob.mx/',
        5,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfonso Primitivo Rios Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.durangocapital.gob.mx/',
        5,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Martha Palencia Nu?ez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.durangocapital.gob.mx/',
        5,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.durangocapital.gob.mx/',
        5,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marisol Carrillo Quiroga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.durangocapital.gob.mx/',
        5,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Medina Samaniego',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.durangocapital.gob.mx/',
        5,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cynthia Montserrat Hernandez Qui?ones',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.durangocapital.gob.mx/',
        5,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio David Payan Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.durangocapital.gob.mx/',
        5,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Christian Paulina Monreal Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.durangocapital.gob.mx/',
        5,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ismael Mata Alvarado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://elorodurango.gob.mx/',
        19,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Soledad Elizabeth Diaz Escontrias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://elorodurango.gob.mx/',
        19,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Socorro Diaz Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://elorodurango.gob.mx/',
        19,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Carmen Ojeda Cano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://elorodurango.gob.mx/',
        19,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz De Alba Corral Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://elorodurango.gob.mx/',
        19,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leticia Holguin Barraza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://elorodurango.gob.mx/',
        19,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jahaziel Holguin Posada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://elorodurango.gob.mx/',
        19,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Macias Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://elorodurango.gob.mx/',
        19,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sclga Sergio Cerda Moreno',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        6,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sara Vitela Olvera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        6,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Perez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        6,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Elida Fraire Suarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        6,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lilia Georgina Salda?a Palacios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        6,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De Los Angeles Barboza Reza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        6,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luciano Reyes Jara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        6,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rufino Cervantes Jaquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        6,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Marina Vitela Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.gomezpalacio.gob.mx',
        7,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De La Luz Ponce Ponce',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.gomezpalacio.gob.mx',
        7,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Jaquez Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.gomezpalacio.gob.mx',
        7,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Refugio Lugo Licerio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.gomezpalacio.gob.mx',
        7,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maximiliano Olvera Core?o',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.gomezpalacio.gob.mx',
        7,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Elda Nevarez Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.gomezpalacio.gob.mx',
        7,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Ramirez Fernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.gomezpalacio.gob.mx',
        7,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Vazquez Hidalgo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.gomezpalacio.gob.mx',
        7,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Francisco Bueno Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.gomezpalacio.gob.mx',
        7,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anavel Fernandez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.gomezpalacio.gob.mx',
        7,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Bardan Ruelas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.gomezpalacio.gob.mx',
        7,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Aidee Liliana Roman Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.gomezpalacio.gob.mx',
        7,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Moreno Espinoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.gomezpalacio.gob.mx',
        7,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Estrella Moron Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.gomezpalacio.gob.mx',
        7,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hortencia Galvan Turrubiate',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.gomezpalacio.gob.mx',
        7,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karla Beatriz Tello Arellano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.gomezpalacio.gob.mx',
        7,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agustin Sosa Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        8,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Avila Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        8,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Flor Angelica Quintanar Villasana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        8,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Bibiana Avalos Nava',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        8,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Yesenia Casta?eda Carlos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        8,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Pablo Villarreal Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        8,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maricruz Soto Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        8,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Herrera Baidon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        8,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Carmen Ceniceros Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        8,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De La Luz Estrada Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        8,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Ayala Arzola',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        9,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz Emma Barraza Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        9,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Inosente Silva Qui?onez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        9,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yadira Aide Marquez Cano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        9,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martin Javier Velazquez Navarro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        9,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Los Angeles Arzola Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        9,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bernardino Qui?ones',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        9,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yolanda Corral Salgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        9,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dora Maria Bustamante Favela',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        10,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Ines Ruiz Alvarado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        10,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hilario Arreola Mota',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        10,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elsa Maria Sosa Aldaco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        10,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Carlos Varela Talamantes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        10,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Medrano Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        10,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Eugenia Ramirez Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        10,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Tostado Caldera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        10,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorena Lucero Bustamante',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        11,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Guerreros Barron Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        11,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfonso Qui?onez Bustamente',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        11,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ponciana Alarcon Huerta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        11,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Encarnacion Hernandez Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        11,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lendy Leticia Ballesteros Najera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        11,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Cobos Astorga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        11,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Veronica Nu?ez Barron',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        11,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Homero Martinez Cabrera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://lerdo.gob.mx/',
        12,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisca Blanco Villanueva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://lerdo.gob.mx/',
        12,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel De Jesus Sanchez Calzada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://lerdo.gob.mx/',
        12,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Sarai Aguilera Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://lerdo.gob.mx/',
        12,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Guadalupe Padilla Saldivar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://lerdo.gob.mx/',
        12,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roxana Acosta Gallegos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://lerdo.gob.mx/',
        12,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esmirna Gutierrez Soto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://lerdo.gob.mx/',
        12,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angel Francisco Luna Puente',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://lerdo.gob.mx/',
        12,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Aurora Holguin Casta?eda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://lerdo.gob.mx/',
        12,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramon Samir Rivera Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://lerdo.gob.mx/',
        12,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Magdalena Barbosa Aganza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://lerdo.gob.mx/',
        12,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Gonzalez Salas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://lerdo.gob.mx/',
        12,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Guadalupe Femat Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://lerdo.gob.mx/',
        12,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Najera Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://lerdo.gob.mx/',
        12,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gloria Torres Bautista',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://lerdo.gob.mx/',
        12,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nancy Yoselin Elias Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://lerdo.gob.mx/',
        12,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marisol Peña Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.mapimi.gob.mx/es/',
        13,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz Del Carmen Reza Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.mapimi.gob.mx/es/',
        13,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Agustin Martinez Regis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.mapimi.gob.mx/es/',
        13,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucina De Anda Ojeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.mapimi.gob.mx/es/',
        13,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudio Cisneros Robledo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.mapimi.gob.mx/es/',
        13,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Josefina Santos Santoyo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.mapimi.gob.mx/es/',
        13,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ofelia Valenzuela Carrillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.mapimi.gob.mx/es/',
        13,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Ruiz Franco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.mapimi.gob.mx/es/',
        13,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Del Carmen Perez Salas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.mapimi.gob.mx/es/',
        13,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Alberto Melero Nava',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.mapimi.gob.mx/es/',
        13,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Osbaldo Santillan Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.elmezquital.gob.mx/Gobierno',
        14,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mercedes Ciriano De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.elmezquital.gob.mx/Gobierno',
        14,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Ramirez Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.elmezquital.gob.mx/Gobierno',
        14,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adelina Soto Cumplido',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.elmezquital.gob.mx/Gobierno',
        14,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felix Solis Cervantes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.elmezquital.gob.mx/Gobierno',
        14,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De La Luz Guzman Ontiveros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.elmezquital.gob.mx/Gobierno',
        14,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayra Alejandra Flores Deras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.elmezquital.gob.mx/Gobierno',
        14,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Mercedes Reyes Cardenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.elmezquital.gob.mx/Gobierno',
        14,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olga Santillan Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.elmezquital.gob.mx/Gobierno',
        14,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Desiderio Escalante Orozco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.elmezquital.gob.mx/Gobierno',
        14,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Socorro Palacio Jaquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        15,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisca Mayela Medrano Licerio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        15,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramon Antonio Molina Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        15,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Irene Garcia Valenuela',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        15,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eva Veliz Vaquera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        15,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Reza Gonzales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        15,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Soto Villa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        15,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Landeros Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        15,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Sifuentes Salas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        16,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Cuauhtemoc Valenciano Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        16,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yuliana Genoveva Garcia Arce',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        16,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Teresa Vazquez Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        16,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cristina Torres Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        16,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario L. Gamiz Gerard',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        16,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Rocio Gamiz Najera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        16,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvia Camacho Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        16,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elizabeth Angon Molina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        16,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Julian Sanchez Mora',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        16,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Galaviz Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.nuevoideal.gob.mx',
        17,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gladys Aracely Moreno Aguirre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.nuevoideal.gob.mx',
        17,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Fallad Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.nuevoideal.gob.mx',
        17,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Kenia Yenisei Marquez Botello',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.nuevoideal.gob.mx',
        17,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Atilano Barragan Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.nuevoideal.gob.mx',
        17,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nubia Marisol Contreras Huerta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.nuevoideal.gob.mx',
        17,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Refugio Arrieta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.nuevoideal.gob.mx',
        17,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Teresa Pedroza Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.nuevoideal.gob.mx',
        17,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karla Patricia Lara Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.nuevoideal.gob.mx',
        17,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zaira Guadalupe Qui?ones Valenzuela',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.nuevoideal.gob.mx',
        17,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Socorro Garcia Armendariz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://ocampo.durango.gob.mx/ocampo/',
        18,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lys Brenda Chavez Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://ocampo.durango.gob.mx/ocampo/',
        18,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Octavio Castro Meza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://ocampo.durango.gob.mx/ocampo/',
        18,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rocio Armendariz Zaragoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://ocampo.durango.gob.mx/ocampo/',
        18,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Asuncion Roacho Grajeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://ocampo.durango.gob.mx/ocampo/',
        18,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Idali Avila Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://ocampo.durango.gob.mx/ocampo/',
        18,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raquel Rios Delgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://ocampo.durango.gob.mx/ocampo/',
        18,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gudberto Gutierrez Soto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://ocampo.durango.gob.mx/ocampo/',
        18,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Herrera Nuñez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        20,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De La Luz Jaquez Corral',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        20,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Raquel Ramirez Nevarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        20,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Estela Favela Navar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        20,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramiro Nu?ez Carranza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        20,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olivia Nu?ez Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        20,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Nu?ez Beltran',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        20,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Graciela Sarabia Paniagua',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        20,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edmundo Mauricio Gandara Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        21,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Garcia Breceda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        21,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Heriberto Sifuentes Lugo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        21,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Beatriz Reyes Huerta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        21,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Armando Rosales Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        21,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Guadalupe Najera Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        21,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Moreno Casta?eda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        21,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Janet Josefina Casasola Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        21,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Naum Amaya Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://penonblanco.durango.gob.mx/',
        22,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aracely Morales Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://penonblanco.durango.gob.mx/',
        22,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Antonio Reyes Puga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://penonblanco.durango.gob.mx/',
        22,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erendida Korina Moreno Benicio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://penonblanco.durango.gob.mx/',
        22,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz Maria Moreno Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://penonblanco.durango.gob.mx/',
        22,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Isidro Reyes Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://penonblanco.durango.gob.mx/',
        22,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De La Luz Rivas Aguirre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://penonblanco.durango.gob.mx/',
        22,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Pedroza Acosta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://penonblanco.durango.gob.mx/',
        22,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Valdez Valenciano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.poanas.gob.mx/',
        23,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruth Cristina Garay Terrones',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.poanas.gob.mx/',
        23,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerson Romeo Nu?ez Molina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.poanas.gob.mx/',
        23,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rebeca Edith Ferniza Serrano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.poanas.gob.mx/',
        23,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Nachita Rojas Rios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.poanas.gob.mx/',
        23,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Villa Vazquez Del Mercado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.poanas.gob.mx/',
        23,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Daniela Ramirez Galindo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.poanas.gob.mx/',
        23,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarito Carrillo Nava',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.poanas.gob.mx/',
        23,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maribel Hernandez Dominguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.poanas.gob.mx/',
        23,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dora Maria Saucedo Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.poanas.gob.mx/',
        23,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adrian Noel Chaparro Gandara',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.pueblonuevo.gob.mx/',
        24,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edith Guadalupe Garcia Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.pueblonuevo.gob.mx/',
        24,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Alonso Sanchez Guevara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.pueblonuevo.gob.mx/',
        24,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adelaida Chamorro Millan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.pueblonuevo.gob.mx/',
        24,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Beatriz Fernandez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.pueblonuevo.gob.mx/',
        24,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Gonzalez De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.pueblonuevo.gob.mx/',
        24,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Graciela Estrada Aguirre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.pueblonuevo.gob.mx/',
        24,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Tovalin Rocha',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.pueblonuevo.gob.mx/',
        24,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maricela Arroyo Espinosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.pueblonuevo.gob.mx/',
        24,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Lilia Rios Coronel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.pueblonuevo.gob.mx/',
        24,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De La Luz Amaya Parra',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://rodeo.durango.gob.mx/',
        25,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Lopez Bustillos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://rodeo.durango.gob.mx/',
        25,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santa Martha Lopez Medrano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://rodeo.durango.gob.mx/',
        25,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Concepcion Mario Rutiaga Villa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://rodeo.durango.gob.mx/',
        25,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hipolito Morales Molina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://rodeo.durango.gob.mx/',
        25,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mercedes Morales Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://rodeo.durango.gob.mx/',
        25,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rubi Esmeralda Medina Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://rodeo.durango.gob.mx/',
        25,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Victoria Uribe Renteria',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://rodeo.durango.gob.mx/',
        25,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Muñoz Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        26,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariza Olimpia Guzman Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        26,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Chavira Talamantes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        26,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Del Refugio Ramirez Monarrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        26,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rene Martinez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        26,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zoila Bustamante Ceniceros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        26,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Pizarro Quezada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        26,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Concepcion Barraza Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        26,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Alejandro Gurrola Romero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sandimas.gob.mx/',
        27,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elisema Calderon Leyva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sandimas.gob.mx/',
        27,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Yesenia Chamorro Nevarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sandimas.gob.mx/',
        27,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tomas Melendez Quintero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sandimas.gob.mx/',
        27,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ofelia Ibarguen Molina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sandimas.gob.mx/',
        27,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Manuel Garcia Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sandimas.gob.mx/',
        27,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nicolas Ramon Soto Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sandimas.gob.mx/',
        27,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elida De Los Rios Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sandimas.gob.mx/',
        27,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodrigo Morga Lozano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sandimas.gob.mx/',
        27,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fabiola Perez Nevarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sandimas.gob.mx/',
        27,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efrain Padilla Flores',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sanjuandeguadalupe.gob.mx',
        28,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De Los Angeles Hernandez Vaquera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sanjuandeguadalupe.gob.mx',
        28,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'German Gonzalez Favela',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sanjuandeguadalupe.gob.mx',
        28,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brianda Lizbeth Ortiz Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sanjuandeguadalupe.gob.mx',
        28,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Natividad Palacio Carreon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sanjuandeguadalupe.gob.mx',
        28,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rolando Martinez Ibarra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sanjuandeguadalupe.gob.mx',
        28,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Faviola Morales Weber',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sanjuandeguadalupe.gob.mx',
        28,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Arturo Enriquez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sanjuandeguadalupe.gob.mx',
        28,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Escajeda Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sanjuandelriodurango.gob.mx',
        29,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Candelaria Ramirez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sanjuandelriodurango.gob.mx',
        29,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Martinez Qui?ones',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sanjuandelriodurango.gob.mx',
        29,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miriam Julieta Bayona Cisneros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sanjuandelriodurango.gob.mx',
        29,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorena Alvarado Valdez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sanjuandelriodurango.gob.mx',
        29,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz Ma. Sifuentes Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sanjuandelriodurango.gob.mx',
        29,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tito Flavio Vespaciano Herbert Avenda?o',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sanjuandelriodurango.gob.mx',
        29,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Berumen Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.sanjuandelriodurango.gob.mx',
        29,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Mayela Ruiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        30,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hilda Sanchez Compean',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        30,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raymundo Jimenez Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        30,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Reyes Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        30,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruben Sarmiento Carrillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        30,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Concepcion Diaz Quezada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        30,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Fuentes Bailon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        30,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Perla Veronica Jimenez Valdez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        30,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reginaldo Carrillo Valdez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://sanpedrodelgallo.durango.gob.mx/',
        31,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Elisa Jurado Retana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://sanpedrodelgallo.durango.gob.mx/',
        31,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfonso Martinez Olo?o',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://sanpedrodelgallo.durango.gob.mx/',
        31,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Beatriz Sotelo Fletes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://sanpedrodelgallo.durango.gob.mx/',
        31,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Enrique Segovia Avila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://sanpedrodelgallo.durango.gob.mx/',
        31,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carmen Elvira Lozano Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://sanpedrodelgallo.durango.gob.mx/',
        31,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cynthia Leonor Avila Carrillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://sanpedrodelgallo.durango.gob.mx/',
        31,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Socorro Herendida Ortiz Amaya',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://sanpedrodelgallo.durango.gob.mx/',
        31,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Abigail Frayre Carranza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.santaclaradurango.gob.mx/',
        32,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Carmen Guangorena Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.santaclaradurango.gob.mx/',
        32,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Montes Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.santaclaradurango.gob.mx/',
        32,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bernardina Cruz Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.santaclaradurango.gob.mx/',
        32,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luciano Casta?eda Esquivel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.santaclaradurango.gob.mx/',
        32,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Concepcion Pichardo Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.santaclaradurango.gob.mx/',
        32,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De Los Angeles Aguilar Casas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.santaclaradurango.gob.mx/',
        32,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Garcia Galindo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.santaclaradurango.gob.mx/',
        32,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julian Cesar Rivas B. Nevarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.santiagopapasquiaro.gob.mx',
        33,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Rita Nu?ez Espinoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.santiagopapasquiaro.gob.mx',
        33,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose David Diaz Sepulveda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.santiagopapasquiaro.gob.mx',
        33,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anakenya Del Rivero Corral',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.santiagopapasquiaro.gob.mx',
        33,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Jaquez Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.santiagopapasquiaro.gob.mx',
        33,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elizabeth Gutierrez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.santiagopapasquiaro.gob.mx',
        33,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Corral Samaniego',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.santiagopapasquiaro.gob.mx',
        33,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roza Maria Nevarez Villa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.santiagopapasquiaro.gob.mx',
        33,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Macias Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.santiagopapasquiaro.gob.mx',
        33,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Haydee Ortega Salas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.santiagopapasquiaro.gob.mx',
        33,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abel Santoyo Salas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.suchil.gob.mx/',
        34,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cecilia Aguilar Soto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.suchil.gob.mx/',
        34,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuela Gonzalez Cabral',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.suchil.gob.mx/',
        34,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Fernandez Quezada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.suchil.gob.mx/',
        34,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Benito Flores De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.suchil.gob.mx/',
        34,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Los Angeles Garcia Gambino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.suchil.gob.mx/',
        34,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Nancy Cortez De La Paz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.suchil.gob.mx/',
        34,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Angel Betancourt Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.suchil.gob.mx/',
        34,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Angel Beltran Felix',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.tamazuladgo.gob.mx/',
        35,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sheila Margarita Felix Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.tamazuladgo.gob.mx/',
        35,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Eligio Angulo Zamudio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.tamazuladgo.gob.mx/',
        35,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Jaqueline Corrales Osorio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.tamazuladgo.gob.mx/',
        35,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martin Felix Romero Saenz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.tamazuladgo.gob.mx/',
        35,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Josefina Aispuro Aispuro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.tamazuladgo.gob.mx/',
        35,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Deisy Trejo Retamoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.tamazuladgo.gob.mx/',
        35,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Estrada Angulo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.tamazuladgo.gob.mx/',
        35,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Candelaria Rivas Aispuro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.tamazuladgo.gob.mx/',
        35,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Agustin Aispuro Correa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.tamazuladgo.gob.mx/',
        35,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eder Raul Gutierrez Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.tepehuanes.gob.mx/',
        36,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marisela Corral Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.tepehuanes.gob.mx/',
        36,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ismael Nevarez Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.tepehuanes.gob.mx/',
        36,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olivia Mendoza Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.tepehuanes.gob.mx/',
        36,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Araceli Alvarado Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.tepehuanes.gob.mx/',
        36,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Rafael Diaz Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.tepehuanes.gob.mx/',
        36,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ivon Holguin Barraza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.tepehuanes.gob.mx/',
        36,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guerrero Martinez Corral',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.tepehuanes.gob.mx/',
        36,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Rodriguez Belmontes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        37,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Lilia Rodriguez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        37,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Hernandez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        37,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elisa Deyanira Hernandez Vega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        37,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Noe Santoyo Avila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        37,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rita Maria Vejar Duarte',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        37,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ernesto Velez Carrillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        37,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zulema Julieta Mejia Olvera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        37,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Candela Enriquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        37,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Carmen Marchand Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        null,
        37,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carmen Cesilia Nevarez Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.topia.gob.mx/',
        38,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yajaira Rubi Pizarro Quintero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.topia.gob.mx/',
        38,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Gonzalez Sarabia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.topia.gob.mx/',
        38,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leandra Lopez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.topia.gob.mx/',
        38,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Liceli Angulo Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.topia.gob.mx/',
        38,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ernestina Sanchez Vizcarra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.topia.gob.mx/',
        38,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Humberto Madrid Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.topia.gob.mx/',
        38,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Apolinar Secundino Zavala Carrasco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.topia.gob.mx/',
        38,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Orlando Gregorio Herrera Aviña',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.vicenteguerrero.gob.mx/',
        39,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Montoya Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.vicenteguerrero.gob.mx/',
        39,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Correa Gracia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.vicenteguerrero.gob.mx/',
        39,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Alvarado Serrano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.vicenteguerrero.gob.mx/',
        39,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angelica Magdaly Garcia Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.vicenteguerrero.gob.mx/',
        39,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karen Alejandra Lira Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.vicenteguerrero.gob.mx/',
        39,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Alberto Perez Orozco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.vicenteguerrero.gob.mx/',
        39,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Manuel Ayala Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.vicenteguerrero.gob.mx/',
        39,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Veronica Rodriguez Paez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.vicenteguerrero.gob.mx/',
        39,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Luisa Rodriguez Serrano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-09-01, 2022-08-31)'::daterange,
        'http://www.vicenteguerrero.gob.mx/',
        39,
        10
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
              `)
}
