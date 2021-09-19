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
        'Ismael Diaz Bravo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Samuel Ruiz Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Yacseny Castillo Ordoñez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Luis Fernando Hernandez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Nolberta Garcia Jimenes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jose Antonio Sanchez De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Yesenia Garcia Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Imer Puon Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Margarita Hernandez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Tomas De Jesus Nanga Albores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Martha Elena Ruiz Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Consuelo Ynteriano Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Veronica Patricia Perez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mario De Jesus Cruz Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Betsaida Yabne Mendez Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Blanca Patricia Molina Acero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Veronica Del Carmen Carboney Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Patricio Olivera Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Carmela Diaz Fuentes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mauro Espinoza Carballo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Dania Yadira Manzo Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Cornelio Caballero De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Biviana Valenzuela Ovalles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Adalberto Moreno Gallegos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Santa Coutiño Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Catarina Lopez Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Pascual Ruiz Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Veronica Jimenez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Angelina Diaz Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Marco Antonio Sanchez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Noemi Hernandez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Marciano Hernandez Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Guadalupe Gomez Santiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Horacio Vazquez Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Heidi Pino Escobar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Juan Gomez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Abraham Ruiz Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Eneida Torres Castellanos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Nicolas Jimenez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Eugenia Mendez Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Martin Mendez Mejia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Evangelina Diaz Velasco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Miguel Angel Chavez Juarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maricela Torres Lievano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Luis Rosember Cruz Trigueros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Marly Yohana Felipe Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'German Armando Lucas Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Hilda Lopez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Moises Garcia Tomas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Gilda Carrillo Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Paula Bravo Trigueros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Julia Genobeba Bonifas Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Sebastian Bautista Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Antonia Ramirez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Aureliano Gomez Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Carmen Vargas Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Veronica Ferra Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Aleli Roblero Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Eric Rolando Santeliz Rincon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Irene Roblero Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Gumercindo Gonzalez Roblero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Bella Luz Cruz Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Elena Paniagua Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rosa Estela Angel Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Adriana Lilian Ramirez Ventura',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Adan Martin Mendez Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Candelaria Lopez Morgan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jose Alfredo Toledo Blas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Olga Mayreli Aguilar Rasgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jorge Luis Gutierrez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Ana Lucia Ruiz Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Concepcion Palacios Moguel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Alejandra Martinez Bezares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '- - - -',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '- - - -',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Roman Perez Marroquin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Temfora Lopez Santizo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Abisail Marroquin Villatoro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Brisney Carina Roblero Escobar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Elvin Gabriel Escalante Pineda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Yulena Muñoz Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Saul Morales Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Isela Noemi Robison Gallegos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Pedro Gutierrez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Bety Alcudia Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Efrain Perez Alvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Eva Cruz Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Melquiades Gomez Santos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Eneyda Jaramillo Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Oscar Pulido Montejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Angela Contreras Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Ernesto Benjamin Sarmiento Castellanos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Flor De Maria Hernandez Sarmiento',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jose Sixto Reymundo Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Yonalli Hernandez Avila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Gilberto De La Cruz De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria De Lourdes Gonzalez Nafate',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Elizabeth Castañon De Los Santos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Erika Guadalupe Ovando Dominguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Marcos Perez Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Sara Elisa Lopez Camacho',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Abel Lopez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mildre Guadalupe Lopez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Guadalupe Hernandez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Francelia Gomez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Luisa Mercedes Perez Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Estefania Berenice Ruiz Palacios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Elias Morales Peralta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Dania Mareni Velazquez Merida',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Julio Ernesto Padilla Gordillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Cecilia Del Socorro Galvez Dominguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Carlos Hector Castillo Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rosa Aguirre De Leon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Carlos Enrique Alvarez Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Amanda De La Cruz Galvez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Odilia Lopez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Adelaido Salas Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Deyni Perez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Marco Elio Perez Roblero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Reyna Salas Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '- - - -',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '- - - -',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Agustina Diaz Nuñez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Javier Nuñez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Elena Cruz Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mateo Perez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Marcela Perez Nuñez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Norma Diaz Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Manuela Perez Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Gloria Diaz Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Alejandro Lopez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rosa Diaz Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Ramiro Bautista Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rosa Gomez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Julio Cesar Sanchez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Luis Gomez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Antonia Hernandez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Pascuala Diaz Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Consuela Moreno Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Tomas Lopez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Amalia Jimenez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Guadalupe Pascual Bautista',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Roberto Gomez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Socorro Dominguez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jose Vazquez Villarreal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Fidencia Jimenez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Veronica Gomez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Margarita Guzman Saenz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Juan Gutierrez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Zenaida Perez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Regino Hernandez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Ana Griselda Gutierrez Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mariano Perez Caxin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Marcelina Hernandez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Juan David Guzman Arias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Zenaida Gomez Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Cein Gutberto Escobar Espinosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Sheila Janeth Santiago Nanguse',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Heron Hernandez Rodas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Carolina Concepción Toledo Coutiño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Osbar Flecha Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Guadalupe Del Carmen Gomez Zapata',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Caralampio Alegria Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Fernanda Castillo Alfaro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Claudia Elizabeth Vidal Vidal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Fredy Perez Argueta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Noemi Gomez Ballinas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Carlos Perez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Lisbet Gomez Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Maribel Hernandez Macal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '- - - -',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '- - - -',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Cristina Galvez Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Wilmar Rodriguez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Luz Maria Ruiz Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jose De Jesus Ruiz Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Karina Velazquez Alvarado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Monica Janeth Ramirez Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rodolfo Velasco Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rosa Anadeli Altuzar Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Manuel Gutierrez Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Juana Gomez Alvaro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Santiago Miranda Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Aida Del Carmen Hernandez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Alejandro Hernandez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Gabriela Nuñez Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Juana America Lopez Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Antonio Moreno Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Elubia Jocabeth Calderon Solorzano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Pascual Lopez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Isabel Del Carmen Rosales Zuarth',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Pablo Ruiz Valencia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Sally Edith Gallardo Nuñez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Santana Vera Santos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Del Rosario Mondragon Segundo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Lorena Vazquez Castillejos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Karla Gallegos Arce',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Nidya Adeyne Perez Estrada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Victor Manuel Hernandez Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Margarita Perez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Lidia Estrada Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Bella Linda Lopez Dominguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Roberto Antonio Alvarez Solis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Monica Guillen Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jose Hugo Campos Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Liliana Aguilar Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Alfonso Calvo Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Martha Xochitl Aguirre Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Norma Leticia Cordero Fernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Guadalupe Dominguez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Eugenia Recinos Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mauricio Coello Clemente',
        'Regidores',
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
        'Betzaida Perez Meza',
        'Regidores',
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
        'Avinael Juarez Eleria',
        'Regidores',
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
        'Juana Gabriela De La Cruz Cruz',
        'Regidores',
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
        'Bianey Hernandez Santos',
        'Regidores',
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
        'Maricela Adriana Perez Muñoz',
        'Regidores',
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
        'Lucero Del Carmen Jimenez Lopez',
        'Regidores',
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
        'Bellanit Hernandez Lopez',
        'Regidores',
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Urbina Ruiz Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Nirva Marlin Nuñez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Miguel Diaz Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Martha Gomez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mario Sanchez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Micaela Teratol Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Antonieta Ruiz Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Gomez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Ofelia Perez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Segundo Gilberto Vasquez Perez',
        'Regidores',
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
        'Blanca Betzaida Perez Castillejos',
        'Regidores',
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
        'Cergio Hiban Torres Morales',
        'Regidores',
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
        'Elen Del Refugio Jimenez Ruiz',
        'Regidores',
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
        'Elvira Del Carmen Castañeda Maza',
        'Regidores',
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Pablo De Jesus Jimenez Hernandez',
        'Regidores',
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
        'Deysi Corina Hernandez Felipe',
        'Regidores',
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
        'Llaner Perez Jose',
        'Regidores',
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
        'Martha Elvi Ruiz Montero',
        'Regidores',
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
        'Mirella Rodrigues Lopez',
        'Regidores',
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Ismael Roblero Verdugo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Carolina Gutierrez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Hector Alexander Reyes Dominguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Sofia Molina Yamamoto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Elfego Lopez Escobar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mercedes Valencia Chavez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rocio Del Carmen Avendaño Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Luisa Ramos Godinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Magdalena Altunar Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Omero Pablo Rueda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Carolina Cruz Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Lucia Gomez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Filiberto Solis Galvez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Leydi Garcia Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Geny Hurieldo Hidalgo Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Susana Pulido Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Erasmo Calvo Alfaro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Estela Gonzalez Melendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rosalba Ramirez Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Nancy Yareni Aguilar Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maclovio Mendez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Guadalupe Escobar Lam',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Epitacio Ramirez Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Claudia Garcia Navarro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Martha Gomez Cisneros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '- - - -',
        'Regidores',
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
        '- - - -',
        'Regidores',
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Guadalupe Lopez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Dionicio Velazquez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Amable Hernandez Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jose Alfredo Sandoval Rincon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Gleiser Rodriguez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Hilda Reyes Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Elva De Jesus Ibarra Citalan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mariana Rios Santos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Esteban Diaz Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Arelix Cruz Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Filemon Landeta Alvarado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Vanessa Rojas Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Antonio Cruz Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Elizabeth Nataren Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Aurelio Vicente Herrera Dominguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Fortunata Yulene Cruz Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Anselmo Gomez Santiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Fortunata Perez Ton',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Miguel Martinez Santiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Sebastian Bautista Bautista',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Teodoro Ton Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Antonio Lopez Guzman',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Socorro Miranda Juarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jilberto Limones Belasques',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Blanca Estela Caso Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Ramiro Silvano Hernandez Galdamez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mei Ling Lopez Ley',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Carlos Martinez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rosa Maria Borraz Rodas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Eric Mendoza Urquin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Del Carmen Rodriguez Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Carlos Mario Nuñez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Aura Villarreal Castellanos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Esperanza Del Carmen Juarez Pavon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Pedro Sanchez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Dulce Maria Hernandez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Hector Abisai Tovilla Camacho',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Luz Maza Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Anet Pastrana Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Aaron Alberto Salazar Cisneros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Yareli Karem Ruiz Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Federico Perez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Deyvi Guadalupe Rodriguez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Eder Samuel Hernandez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Nemecio Raul Hernandez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Elizabeth Hernandez Pereyra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Norma Dina Hernandez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Amelia Hernandez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Gregorio Diaz Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Leticia Melo Barqueiro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Asuncion Hernandez Bermudez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Candelario Hernandez Albarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Carlos Hugo Cal Y Mayor Colmenares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Yasmin Lopez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Alberto Gomez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Esperanza Cruz Muñiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Domingo Antonio Mancilla Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Angela Ochoa Trinidad',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Noe De Jesus Alvarez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Nelly Edith Cruz Esponda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Ada Leticia Gomez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mauro Rojas Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Felicita Sanchez Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Sebastian Gomez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Victoria Estrada Estrada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Patricia Lopez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Angela Guadalupe Balcazar Solis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Andrea Perez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Eleuterio Gutierrez Landero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Marcela Perez Silva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Wenseslao Dominguez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Yessica Perez Malpica',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Arquimedes Cruz Coliaza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Angelica Ramos Acuña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maribel Gurria Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Sonia Del Carmen Calcaneo Montellano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Amado Guillen Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Antonieta Perez Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Eduardo Trujillo Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mariela Culebro Rincon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Elias Arizmendi Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Eduardo Ernesto Melchor Coutiño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Enelva Gladis Camilo Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Lucia Del Carmen Guzman Meza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Denys Alejandro Castillo Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Francisca Cruz Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Victor Nicacio Diaz Galvez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Corinthia Abril Ocampo Borraz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Candido Rodriguez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Esperanza Hernandez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jose Erbin Romero Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Dori Aguilar Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rolando Lopez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jorge Efren Lopez Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Lopez Alfaro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rosalinda Moreno Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Ricardo Lizcano Lizcano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Iraide Acosta Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Petrona Cambrano Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Joaquina Del Carmen Lopez Ballina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Alfredo Moreno Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Sandra Luz Aguilar Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mario Luis Aguilar Calvo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Yadira Yesenia Aguilar Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Denis Gabriel Solis Alvarado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Juan Espinoza Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Sarbelia Lisset Moreno Guillen',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Patricia Alonzo Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Agustin Perez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Paulina Hernandez Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Alberto Gomez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rosa Maria Diaz Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Manuel Hernandez Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Luisa Hernandez Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Dionicio Hernandez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Asuncion Gomez Teratol',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Cuauhtemoc Lopez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Alicia Del Carmen Morales Zuñiga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Roberto Alfaro Velasco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Elvira Vazquez Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jesus Romeo Ruiz Solis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maydi Magali Rodriguez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Estela Campos Arguello',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Eunice Vazquez Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Gerardo Velasco Alvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jose Alfredo Sanchez Zuñiga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Esperanza Hernandez Santiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jose Angel Martinez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Magdalena Gonzalez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Anastacio Hernandez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Angela Noemi Soto Calvo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Elizabeth Villatoro Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Blanca Aroli Gonzalez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Ana Ceron Cuervo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Gamaliel Becerra Bello',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Bernabed Gomez Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Gabriel Posada Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Patricia Del Carmen Guzman Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Martha Santiago Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Dominga Montes Julian',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Dora Maria Ramos Leon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Agustin Perez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Eloina Chilel Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Armin Vazquez Silva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Albina Lopez Santis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Blanca Lidia Lopez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Florencio Lopez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Celina Isabel Martinez Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Billerman Abadia Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Guadalupe Hernandez Jeronimo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Beatriz Aguirre Chavez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Aurentino Gonzalez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Damaris Yaremi Morales Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Artemio Bravo Mejia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Yolanda Perez Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Yulena Lopez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Lombardo Rodas Chiu',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Guadalupe Orellana Menendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Samuel Hipolito Cardenas Barrios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Veronica De La Cruz Palacios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Arturo Cinco Villarreal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Nanci Esperanza Hernandez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Liliana Yusey Mendez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Ana Cristina Mendez Wong',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Celia Vela Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Imbano Lenin Mejia Cisneros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Grasielo Merida Monzon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Levi Maruqui Galindo Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Berenice Ramirez Argueta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Olivia Maldonado Santizo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Gregorio Gonzalez Rogel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Bella Selene De La Cruz Castellanos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Diego Gomez Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Consuelo Dominguez Camposeco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Guadalupe Lizzeth Gonzalez May',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Anita Santis Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Erasto Ordoñez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Angelina Rodriguez Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rosalinda Ortiz Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Fernando Lopez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '- - - -',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '- - - -',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jorge Eduardo Velazquez Roblero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Estela Vazquez Roblero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Guillermo Rosember Perez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Carmen Lisbeth Gonzalez Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Carmen Velazquez Roblero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Levi Maruqui Galindo Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Berenice Ramirez Argueta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Olivia Maldonado Santizo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Antonio Trinida Lopez Borraz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Flor De Maria Leon Cardenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Alberto Perez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Hugo Cesar Ballinas Arguello',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Karen Yicel Dominguez Lievano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Pedro Gomez Mena',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Ernestina Gutierrez Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Gildardo Abenamar Constantino Rebasa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Edith Genis Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Elizabeth Gonzalez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Marcela Magaly Caamal Cocom',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Pedro Hernandez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Justino Garcia Valencia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Marilu Martinez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rosendo Morales Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Necta Valencia Valencia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Imelda Morales Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Genaro Luis Lopez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Amanda Rangel Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jorge Cruz Solis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Sara Alvarez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Wilfrido Sarmiento Espinosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Julia Cuellar Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Vellaney Rodriguez Pascacio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Aide Del Carmen Camacho Abadia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rubi Del Rocio Perez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jose Manuel Gonzalez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Aida Araceli Lopez Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rodolfo Herrera Enriquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mayra Rodriguez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Alejandra Paramo Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Guadalupe Lopez Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Kico Casanova Esteban',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Abel Elieser De La Cruz De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Zenaida Lopez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Juan Hernandez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Miriam Ruiz Ballinas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Amando Sanchez Alegria',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '- - - -',
        'Regidores',
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
        '- - - -',
        'Regidores',
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Arcides Perez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Perla Micaela Dominguez Trujillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Pedro Gomez Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rocio Belyini Sanchez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Lenin Landero Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Bellanira Asuncion Cordero Hidalgo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Magdalena Lopez Alvaro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Heidy Vazquez Asencio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Paula Isabel Gomez Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Pedro Juarez Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Aura Carmela Lopez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Julio Maldonado Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Carmen Lopez Zepeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Martin Mendez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Norma Lucia Hidalgo Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Elsa Gomez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Cornelio Encino Nuñez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Del Carmen Calvo Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Heberto Lopez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Feliciana Vazquez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Nayeli Garcia Velasco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Beatriz Urquin Dominguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Angel Aristides Culebro Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Elvira Gonzalez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Fredy Morales Alvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Silvia Liliana Arellano Ramon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Darinel Rodriguez Sasso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Isabel Mendoza Zarrazaga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mirella Ortiz Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Alicia Guadalupe Rabelo Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rumaldo Velazquez Bartolon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Petra Guadalupe Rodriguez Loo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Noe Roque Solis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Del Carmen Liques Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Eradio Gomez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Sain Cruz Trinidad',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Faride Abud Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Crus Maria Baltazar Escobar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Antonio Perez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maribel Gomez Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Celin Estrada Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Adacely Guadalupe Hernandez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Porfirio Gomez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Enoc Dias Peres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Ulda Sanchez Villatoro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Antonia Aguilar Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Florinda Aguilar Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Angel Ledesma Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Marisol Aguilar Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Flor Zenteno Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rodimiro Gomez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Iturbide Diaz Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Norma Elena Landeros Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jose Manuel Peralta Asencio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Miriam Ascencio Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Leonel Perez De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Yesenia Judith Martinez Dantori',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Nicanor Solis Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Cristina Garcia Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '- - - -',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '- - - -',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Luis Gomez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Araceli Lopez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Efrain Cruz Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Ana Maria Martinez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Oswaldo Lopez Juarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Deyanira Vazquez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Aurelio Perez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Anita Lopez Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rene Alvarez Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rosa Maria Arcos Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jose Arcos Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Silveria Guzman De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Armando Lopez Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Aurelia Arcos Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mercedes Guzman Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maricusa Sanchez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '- - - -',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '- - - -',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Silvia Shalom Alvarez Torres Valle',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Guillermo Alonso Gomez Loarca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Sonia Aydee Ramos Paniagua',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Emiliano Villatoro Alcazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Claudia Patricia Sancho Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Juan David Hernandez Giron',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Karla Lugo Sarmiento',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rosalinda Santiago Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Linda Higuera Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Romeo Jimenez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Cecilia Yazmin Popomeya Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Darinel Villareal Anza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Ludim De La Cruz Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Gerardo Lopez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Ma. Irene Lopez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Amilcar Chacon Leon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Margarita Lopez Avendaño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Juan Lopez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Juana Cruz Guzman',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Manuel Cruz Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Gomez Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Sebastian Cruz Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rosa Santiz Terat',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Manuel Dominguez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Tina Zepeda Arias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Blanca Flor Morales Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Casiano Moises Perez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Joaquina Herlinda Gutierrez Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Asuncion Mendez Montoya',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Martha Lilia Vargas Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Abel Lopez Roblero',
        'Regidores',
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
        'Francisca Omeyda Vazquez Ramirez',
        'Regidores',
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
        'Celso Guadalupe Dardon Aguilar',
        'Regidores',
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
        'Selene Aglae Roblero Roblero',
        'Regidores',
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
        'Abenamar Ramirez Roblero',
        'Regidores',
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
        'Ana Maria Roblero Perez',
        'Regidores',
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
        'Vitalina Escalante Morales',
        'Regidores',
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
        'Emma Guillermina Roblero Roblero',
        'Regidores',
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Petrona Gomez Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Lorenzo Rodriguez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Manuela Rebeca Cruz Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Felipe Ruiz Nuñez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rosela Ruiz Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Oralia Del Carmen Rodriguez Lara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Manuel Lopez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Ana Isabel Perez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Matea Cruz Deara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Alonso Velasco Guzman',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Natalia Cruz Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Abelardo Perez Nuñez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Vicenta Margarita Guzman Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Javier Muñoz Alfaro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Olgalidia Lopez Culebro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Fernando Meza Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Alicia Muñoz Meza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rigoberto Dominguez Guillen',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Arely Malena Cruz Vidal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Alicia De Jesus Najera Bassaul',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Marilin Lopez Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '- - - -',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '- - - -',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jose Luis Gonzalez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Sandra Diaz Espinosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Genaro Diaz Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Keila Maylen Mendez Velasquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rosa Guadalupe Diaz Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mario Vicente Cundapi',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Estephanie De Jesus Llaven Serrano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Armando Toala Peres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Blanca Adacelia Simuta Lazaro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Alejandro Hernandez Simuta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria De Lourdes Nucamendi Serrano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Ruben Medina Cundapi',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Dilsa Indili Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Fernanda Sandoval Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Sergio Seis Robles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Zoila Campos Guzman',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jose Luis Rosales Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Monica Virginia Rodas Villatoro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Guadalupe Espinoza Toledo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Juana Yolanda De Leon Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Esther Ramirez Villatoro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Miguel Jimenez Rosalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Laurestel Alamilla Gavilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Tilo Lujano Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Martha Castellanos Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Pablo Diaz Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Isidro Ovando Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Viridiana Figueroa Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jose Alberto De Sancristobal Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Cleotilde Lizbeth Ortiz Huerta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Yumaltik De Leon Villard',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Elvira Avalos Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Monica Del Carmen Escobar Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Aida Del Rosario Flores Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Martha Patricia Velazquez Nishizawa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Roselia Diaz Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Cenovio Gomez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Hortencia Garcia Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Veronica Gomez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Oralia Diaz Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '- - - -',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '- - - -',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mareyne De La Cruz Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Hiber Amilcar Gordillo Carrillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Olga Leticia Rodriguez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'M. Enrique Nañez Marquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Manuela Del Carmen Arevalo Conde',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Silvia Juarez Juarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maricruz Rodas Avila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Guadalupe Jimenez Palacios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Alonso Giron Santiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rosa Perez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Manuel Perez Intzin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Hernandez Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Miguel Mendez Giron',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Lopez Guzman',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rebeca Guzman Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Lucia Meza Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Senon Juan Lopez Bautista',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mariana Carolina Gonzalez Lievano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Candido Perez Santiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rusbi Gordillo Abarca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jaime De La Torre Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Viridiana Santiago Urbina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jennifer Del Carmen Fonseca Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Alicia Amparo Moreno Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Lorenzo Gutierrez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Guadalupe Lopez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Limbano Parcero Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Adilery Sofia Perez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Pedro Ramirez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria De Luordes Rodriguez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rafael Martinez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Del Refugio Vazquez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Isaac Toledo Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Lisbeth Rizo Ordoñez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Oscar Marroquin Pascacio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Crisantema Ordoñez Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Samuel Enrique Albino Alcantar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Irma Ruth De Los Santos De Lucio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Fernanda Noemi Cortes Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Olga Isabel Grajales Carrillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mario Vazquez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Margarita Leonor Gordillo Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Humberto Lopez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Romeo Del Carmen Fonseca Ballinas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Susana Ramirez Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Cesario Diaz Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Yesenia Patricia Vazquez Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Andres Vazquez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Ana Garcia Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Gregorio Lopez Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Irma Lopez Andrade',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Gutierrez Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Agustina Lopez Mayo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Lilia De Leon Bermudez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Marcos Castañon Cortes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Ana Guadalupe Santillana Ovando',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Eufrasio De La Cruz De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Candelaria Cortes Constantino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Arcelia Irlanda Lopez Henin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Concepcion De Lourdes Cruz Mejia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Sonia Garcia Solis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jose Luis Tapia Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Adriana Guadalupe Esquinca Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Hugo De Jesus Roblero Catalan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Veronica Espinosa Alvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Sunny Themy Perez Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Edelmira Luz Marin Zenteno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Francisco Antonio Rojas Toledo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Mandiola Totoricaguena',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Adriana Guillen Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rene Hernandez De Leon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Del Carmen Borralles Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mario Estrada Moralez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Marinela Jaime Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Angel Rodrigo Aguilar Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Gladys Gabriela Blas Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Cecilia Dionicio Marroquin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Margarita De La Cruz Palomo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jose Efrain De Arcia Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Olga Hernandez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Eugenio Leon Leon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Elizabeth Hernandez Nuñez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Alfredo Alvarez Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Esperanza Gordillo Gordillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Gerardo Antonio Ventura Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Candelaria Del Carmen Gordillo Gordillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Mario Alberto Perez Barrios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Elda Elucrecia Perez Velazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Felipe De Jesus Morales Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rosa Maria Miguel Robles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Emelio Vazquez Roblero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Aseneth Viridiana Roblero Barrios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Shary Edenisse Vazquez Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Guadalupe Garcia Muñoz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rigoberto Gomez Vazquez',
        'Regidores',
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
        'Maria Gloria Garcia Escandon',
        'Regidores',
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
        'Yelsin Jose Coutiño Ruiz',
        'Regidores',
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
        'Veronica Hernandez Gonzalez',
        'Regidores',
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
        'Jorge Enrique Velazquez Coutiño',
        'Regidores',
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
        'Ehusevia Osuna Suñiga',
        'Regidores',
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
        'Omar Yucundo Coutiño Lazcano',
        'Regidores',
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
        'Amanda Marilu Cancino Lopez',
        'Regidores',
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Irene Garcia Angel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Eroldo Zunun Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Aura Noemi Calcaneo Magdaleno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Antonio Peralta Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Ana Ines Lopez Pere',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Gerardo Perez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Reyna Hernandez Lara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Juanita Esmeralda Montes Vasquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Roney Ventura Tipa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Dona Maria Anzueto Cedeño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jorge Luis Arroyo Arce',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Concepcion Gonzalez Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Martin De Jesus Alias Velazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rosa Eugenia Diaz Rodas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Consuelo Ruiz Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Carolina Zuarth Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Angel De Jesus Jimenez Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Marisa Teco Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Carlos Mario Martinez Del Solar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Arandi Liceli Rincon De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jorge Armando Rojas Cabrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Isabel Pereyra Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria De Luordes Lopez Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Roxana Yanet Ruiz Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Amparo Martinez Lara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jorge Luis Hernandez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Aida Gloria Gutierrez Constantino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Jorge Luis Lopez Mendez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Gloria De Jesus Astudillo Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Juan Arcos Velasquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Maria Cruz Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        'Rogelio Peñate Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
        '[2021-09-01, 2024-09-30)'::daterange,
        null,
        111,
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
        'Domitilo Martinez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
        null,
        111,
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
        'Juana Yolanda Perez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
        null,
        111,
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
        'Alberto Mariano Hernandez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
        null,
        111,
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
        'Josefina Yessica Perez Guzman',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
        null,
        111,
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
        'Mariano Ruiz Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
        null,
        111,
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
        'Jose Esteban Hernandez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
        null,
        111,
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
        'Pascuala Garcia Santiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
        null,
        111,
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
        'Rosa Feliciana Perez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-09-30)'::daterange,
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
