exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 17).del()
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
        'Eugenia Nuñez Lopez(interina)',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        1,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oralia García Estrada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        1,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eloy Sánchez Santos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        1,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Graciela Reynoso Nava',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        1,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Calixto Urbano Lagunas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        2,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Abendaño Fuentes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        2,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Camerino Torres Uribe',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        2,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paulino Villalba Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        2,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felix Sanchez Espinoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        3,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Zangano Remedios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        3,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Pacheco Rosas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        3,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María de Jesús Suárez Sandoval',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        3,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emmanuel Mendoza Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        3,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alicia Estudillo Nieto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        3,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isaac Pimentel Mejia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ayala.gob.mx',
        4,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Bravo Durán',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ayala.gob.mx',
        4,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Ángel Ordoñez Alonso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ayala.gob.mx',
        4,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isaac Cortes Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ayala.gob.mx',
        4,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Plascencia Barreto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ayala.gob.mx',
        4,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marisol Cárdenas Muñoz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ayala.gob.mx',
        4,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Manuel Machuca Ponce',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ayala.gob.mx',
        4,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emmanuel Cisneros Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ayala.gob.mx',
        4,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Celso Nieto Estrada',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        5,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rigoberto Flores Figueroa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        5,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eladio Cancino Álvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        5,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Humberto Melgar Rosales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        5,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Corona Damian',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Jaime Cedano Astorga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ángel Cangas Paredes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Giovanni Lezama Barrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irving Samuel Quiroz Díaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Verónica Adriana Andrew Correa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andrés Balon García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Ignacio Guerra Gutiérrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Romell Santiago Galindo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'César Salazar Zamora',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Antonio Villalobos Adan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.cuernavaca.gob.mx',
        7,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'César Salgado Castañeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.cuernavaca.gob.mx',
        7,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Albina Cortes Lugo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.cuernavaca.gob.mx',
        7,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Enrique Güemes Manzo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.cuernavaca.gob.mx',
        7,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Julian Mojica Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.cuernavaca.gob.mx',
        7,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anayeli Fabiola Rodríguez Gutiérrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.cuernavaca.gob.mx',
        7,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Adrian Martínez Terrazas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.cuernavaca.gob.mx',
        7,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Alicia Martínez Gutiérrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.cuernavaca.gob.mx',
        7,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Martínez Dorantes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.cuernavaca.gob.mx',
        7,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Romualdo Salgado Valle',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.cuernavaca.gob.mx',
        7,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Irving Morales Escobar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.cuernavaca.gob.mx',
        7,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ulises Vargas Estrada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.cuernavaca.gob.mx',
        7,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Fernando Aguilar Palma',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://zapatamorelos.gob.mx/home/',
        8,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Felix Castañeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://zapatamorelos.gob.mx/home/',
        8,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandra Remigio Najera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://zapatamorelos.gob.mx/home/',
        8,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo Fugueroa Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://zapatamorelos.gob.mx/home/',
        8,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe Romero Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://zapatamorelos.gob.mx/home/',
        8,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edith Mariaca Uribe',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://zapatamorelos.gob.mx/home/',
        8,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eugenio Monge Espíritu',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://zapatamorelos.gob.mx/home/',
        8,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Soledad Solis Cordova',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://zapatamorelos.gob.mx/home/',
        8,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ulises Pardo Bastida',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        9,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriel Mondragón Cuevas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        9,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nicólas Hernández Eslava',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        9,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mauro Acosta Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        9,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Felipe Dominguez Robles',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        10,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'César Gabriel Rosasa Tapia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        10,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enedino Tadeo Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        10,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Guadalupe Barreto Gutiérrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        10,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Reyes Reyes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://jiutepec.gob.mx/',
        11,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Navarro Salgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://jiutepec.gob.mx/',
        11,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edith Flores Diego',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://jiutepec.gob.mx/',
        11,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Alvarado Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://jiutepec.gob.mx/',
        11,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abrahan Jair Domínguez Espina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://jiutepec.gob.mx/',
        11,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Beltran Toto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://jiutepec.gob.mx/',
        11,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gonzalo Epifanio Durán Vargas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://jiutepec.gob.mx/',
        11,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia Mireya Martínez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://jiutepec.gob.mx/',
        11,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gloria Marlen Ramírez Velazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://jiutepec.gob.mx/',
        11,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Christian de Gante Fuentes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://jiutepec.gob.mx/',
        11,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Angel Flores Bustamante',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://jojutla.gob.mx/',
        12,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Brito Ocampo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://jojutla.gob.mx/',
        12,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Peña Ojeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://jojutla.gob.mx/',
        12,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José de Jesús Pedroza Bautista',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://jojutla.gob.mx/',
        12,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Salgado Olvera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://jojutla.gob.mx/',
        12,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Dircio Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://jojutla.gob.mx/',
        12,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Israel Andrade Zavala',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        13,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Isabel Ramírez Carrillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        13,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Ángel Andrade Arrellano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        13,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brenda Grised Barreto Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        13,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maximina Trinidad Perez Coria',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        14,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Ascencion Torres Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        14,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Toledo Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        14,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Levibani Arteaga Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        14,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abel Espin Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        15,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia María Enríquez Franco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        15,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angel Gustavo Orihuela García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        15,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Evangelina Pallares Santana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        15,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Jesus Anzures Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        16,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gaston Morales Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        16,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Pablo Garces García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        16,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nestor Daniel Jiménez Gutiérrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        16,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Ocampo Ocampo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.municipiopuentedeixtla.gob.mx/',
        17,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Israel Aleman Cárdenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.municipiopuentedeixtla.gob.mx/',
        17,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cristobal Acevedo Aguirre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.municipiopuentedeixtla.gob.mx/',
        17,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruben Morales Ozaeta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.municipiopuentedeixtla.gob.mx/',
        17,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramíro Macedo Domínguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.municipiopuentedeixtla.gob.mx/',
        17,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gilberto Rojas Cárdenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.municipiopuentedeixtla.gob.mx/',
        17,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jazmin Juana Solano Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.temixco.gob.mx',
        18,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yuridia Janet Pérez López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.temixco.gob.mx',
        18,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Cesar Ortíz Popoca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.temixco.gob.mx',
        18,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Damaris Romero Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.temixco.gob.mx',
        18,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Fernando Arenas Rangel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.temixco.gob.mx',
        18,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Solano Díaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.temixco.gob.mx',
        18,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvia Flores Mujica',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.temixco.gob.mx',
        18,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Derek Eduardo Gordillo Oliveros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.temixco.gob.mx',
        18,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Valentin Lavin Romero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        33,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Victorio Ramírez Calzado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        33,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Sánchez Rosales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        33,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isauro Ramírez Rosales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        33,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Sanchez Velez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        19,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erubiel Sánchez Vergara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        19,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sofía Mendoza Aranda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        19,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Candelaria Leana Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        19,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Torres Ortega',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.tepoztlan.gob.mx',
        20,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Hernández Jacobo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.tepoztlan.gob.mx',
        20,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Vargas Bello',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.tepoztlan.gob.mx',
        20,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvia Bello Rendon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.tepoztlan.gob.mx',
        20,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Ángel Villamil Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.tepoztlan.gob.mx',
        20,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Roman Trahyn',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.tepoztlan.gob.mx',
        20,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz Dary Quevedo Maldonado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        21,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Viceira López Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        21,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Reyes Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        21,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wendy Avilene Martínez García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        21,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Israel Gonzalez Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        22,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Susana Isabel Herrera Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        22,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Peralta Roldán',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        22,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Antonio Martínez Alvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        22,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rigoberto Espindola Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        23,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ilse García Mares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        23,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ignacio Morales Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        23,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Caritina Rojas Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        23,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Dominguez Mandujano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://tlaltizapandezapata.gob.mx/',
        24,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brenda Escobar Padilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://tlaltizapandezapata.gob.mx/',
        24,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Flores Salgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://tlaltizapandezapata.gob.mx/',
        24,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felix Bahena Ríos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://tlaltizapandezapata.gob.mx/',
        24,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cristhian Emmanuel Gutiérrez González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://tlaltizapandezapata.gob.mx/',
        24,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Cortes Nava',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://tlaltizapandezapata.gob.mx/',
        24,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Maldonado Ortiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.tlaquiltenango.gob.mx/',
        25,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Gacía Melgoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.tlaquiltenango.gob.mx/',
        25,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodrigo Medina Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.tlaquiltenango.gob.mx/',
        25,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Petra Cid Ocampo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.tlaquiltenango.gob.mx/',
        25,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Dircio García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.tlaquiltenango.gob.mx/',
        25,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Barajas Rangel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.tlaquiltenango.gob.mx/',
        25,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Carmen Pochotitla Tlaltzicapa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        26,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Zapotitla Díaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        26,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Pedraza Santamaría',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        26,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Tepanohaya Santamaría',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        26,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Omar Livera Chavarria',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        27,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Melquiades Ramos Sanvicente',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        27,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Galván Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        27,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniela Lima García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        27,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alberto Sanchez Ortega',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.xochitepec.gob.mx',
        28,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efraín Batalla Villa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.xochitepec.gob.mx',
        28,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yuriria Esquivel Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.xochitepec.gob.mx',
        28,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Hernández Querido',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.xochitepec.gob.mx',
        28,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mauricio Rene González Zamora',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.xochitepec.gob.mx',
        28,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Eduardo Bello Silva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.xochitepec.gob.mx',
        28,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agustin Alonso Gutierrez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.yautepec.gob.mx',
        29,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Berenice Solis Saldaña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.yautepec.gob.mx',
        29,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Omar Sedano García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.yautepec.gob.mx',
        29,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Manuel Amaro Camacho',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.yautepec.gob.mx',
        29,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Imelda Sandoval Heredia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.yautepec.gob.mx',
        29,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Vences Aviles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.yautepec.gob.mx',
        29,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elías Polanco Saldivar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.yautepec.gob.mx',
        29,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Delfino Toledano Alfaro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.yautepec.gob.mx',
        29,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Erik Sanchez Zavala',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.yecapixtla.gob.mx',
        30,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Cordova Pacheco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.yecapixtla.gob.mx',
        30,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Filimon Esteban Lima',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.yecapixtla.gob.mx',
        30,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcos Sánchez González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.yecapixtla.gob.mx',
        30,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cristhian Yael Tapia Carrillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.yecapixtla.gob.mx',
        30,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Gallardo Balderas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.yecapixtla.gob.mx',
        30,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olivia Ramirez Lamadrid',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        31,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Linares Ángulo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        31,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Nahamet Mondragón Abdala',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        31,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Isabel Carbajal Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        31,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Elena Cruz Ocampo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        31,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Maya Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        31,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Adrian Cazares Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        32,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ángel Aguirre Solis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        32,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Noe Barreto Molina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        32,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Marín Alonso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        32,
        17
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
              `)
}
