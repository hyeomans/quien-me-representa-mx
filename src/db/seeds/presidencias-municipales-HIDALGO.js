exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 13).del()
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
        'Elizabeth Vargas Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://acatlanhidalgo.gob.mx/turistico/inicio.php',
        1,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tania Castro Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://acatlanhidalgo.gob.mx/turistico/inicio.php',
        1,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Ortiz Flor',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://acatlanhidalgo.gob.mx/turistico/inicio.php',
        1,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angela Ortiz Resendiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://acatlanhidalgo.gob.mx/turistico/inicio.php',
        1,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gillermo Perez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://acatlanhidalgo.gob.mx/turistico/inicio.php',
        1,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yeimi Hernandez De La Luz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://acatlanhidalgo.gob.mx/turistico/inicio.php',
        1,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pasiano Francisco Barranco Islas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://acatlanhidalgo.gob.mx/turistico/inicio.php',
        1,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yessica Olvera Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://acatlanhidalgo.gob.mx/turistico/inicio.php',
        1,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Humberto Rosales Guzman',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://acatlanhidalgo.gob.mx/turistico/inicio.php',
        1,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jazmin Sanchez Amador',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://acatlanhidalgo.gob.mx/turistico/inicio.php',
        1,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adela Perez Espinoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://acatlanhidalgo.gob.mx/turistico/inicio.php',
        1,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarito Monterrubio Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://acatlanhidalgo.gob.mx/turistico/inicio.php',
        1,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Quintanar Trejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://acatlanhidalgo.gob.mx/turistico/inicio.php',
        1,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Meza Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://acatlanhidalgo.gob.mx/turistico/inicio.php',
        1,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juliana Ortiz Trejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://acatlanhidalgo.gob.mx/turistico/inicio.php',
        1,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Hernandez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://acatlanhidalgo.gob.mx/turistico/inicio.php',
        1,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Humberto Edonio Salina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://acatlanhidalgo.gob.mx/turistico/inicio.php',
        1,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tatiana Tonantzin P Angeles Moreno',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.actopan.mx/',
        3,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agustin Ramirez Jarillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        4,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ismael Cordero Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        4,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adriana Jarillo Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        4,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Licona Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        4,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esmeralda Soto Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        4,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Uriel Escobedo Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        4,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Clara Elena Cordero Soto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        4,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Liliana Gutierrez Arteaga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        4,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Isabel Islas Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        4,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hugo Edmundo Guzman Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        4,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Leopoldo Basurto Acosta',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.municipioajacuba.net/',
        5,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Citlali Anali Vazquez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.municipioajacuba.net/',
        5,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paola Sarait Martinez Rivas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.municipioajacuba.net/',
        5,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bonifacio Morales Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.municipioajacuba.net/',
        5,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Valadez Leon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.municipioajacuba.net/',
        5,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anastacio Ramirez Ceron',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.municipioajacuba.net/',
        5,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Cervantes Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.municipioajacuba.net/',
        5,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosario Marquez Abraham',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.municipioajacuba.net/',
        5,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sonia Miranda Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.municipioajacuba.net/',
        5,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Feregrino Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://alfajayucan.hidalgo.gob.mx/',
        6,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joel Alexis Anaya Zamudio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://alfajayucan.hidalgo.gob.mx/',
        6,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elvia Ramirez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://alfajayucan.hidalgo.gob.mx/',
        6,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Christian Lorenzo Sixto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://alfajayucan.hidalgo.gob.mx/',
        6,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Larisa Castillo Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://alfajayucan.hidalgo.gob.mx/',
        6,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Sanjuan Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://alfajayucan.hidalgo.gob.mx/',
        6,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Evelyn Guadalupe Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://alfajayucan.hidalgo.gob.mx/',
        6,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Agustin Cruz Tovar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://alfajayucan.hidalgo.gob.mx/',
        6,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sonia San Juan Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://alfajayucan.hidalgo.gob.mx/',
        6,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elizabeth Benitez Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://alfajayucan.hidalgo.gob.mx/',
        6,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Margarita Ramirez Benitez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        7,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Luis Olvera Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        7,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Catalina Villegas Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        7,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agustina Ramirez Cortes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        7,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lilia Vazquez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        7,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruben Olvera Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        7,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María De Los Angeles Espinosa Los',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        7,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nubia Hernandez Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        7,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe Lopez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        7,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Olvera Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        7,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Guadalupe Muñoz Romero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.apan.gob.mx/portal/',
        8,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Luz Contreras Marquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.apan.gob.mx/portal/',
        8,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Beyssy Karem Gonzalez Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.apan.gob.mx/portal/',
        8,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Gertrudis Cid Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.apan.gob.mx/portal/',
        8,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Kibsain Estefany Castillo De Lucio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.apan.gob.mx/portal/',
        8,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Ortega Madrid',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.apan.gob.mx/portal/',
        8,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriel Campos Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.apan.gob.mx/portal/',
        8,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yeny Hernandez Cortes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.apan.gob.mx/portal/',
        8,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Mario Hernandez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.apan.gob.mx/portal/',
        8,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Antonia Olivares Tapia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.apan.gob.mx/portal/',
        8,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hilda Elizabeth Rodriguez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.apan.gob.mx/portal/',
        8,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Alonso Soto Juarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.apan.gob.mx/portal/',
        8,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pastor Joel Fernandez Peñuñuri',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.apan.gob.mx/portal/',
        8,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Naxhyp Gutierrez Marquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.apan.gob.mx/portal/',
        8,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorenzo Agustin Hernandez Olguin',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atitalaquia.gob.mx',
        9,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Humberto Hernandez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atitalaquia.gob.mx',
        9,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leticia Montoya Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atitalaquia.gob.mx',
        9,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blas Perez Lara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atitalaquia.gob.mx',
        9,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosario Lopez Villeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atitalaquia.gob.mx',
        9,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jhony Neri Alvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atitalaquia.gob.mx',
        9,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariana Hernández Obregón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atitalaquia.gob.mx',
        9,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Antonio López Obregón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atitalaquia.gob.mx',
        9,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Monserrat Eli Lienzo Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atitalaquia.gob.mx',
        9,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Petra María Eugenia Hernández Chávez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atitalaquia.gob.mx',
        9,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joel Nochebuena Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://atlapexco.hidalgo.gob.mx/',
        10,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andres Hernandez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://atlapexco.hidalgo.gob.mx/',
        10,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Liliana Naranjo Naranjo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://atlapexco.hidalgo.gob.mx/',
        10,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Solares Bautista',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://atlapexco.hidalgo.gob.mx/',
        10,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcelina Flores Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://atlapexco.hidalgo.gob.mx/',
        10,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Concepcion Honorato Felix',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://atlapexco.hidalgo.gob.mx/',
        10,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eugenio Sanchez Arriaga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://atlapexco.hidalgo.gob.mx/',
        10,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Epifania Flores Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://atlapexco.hidalgo.gob.mx/',
        10,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antero Nochebuena Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://atlapexco.hidalgo.gob.mx/',
        10,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Deisy Vargas Palacios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://atlapexco.hidalgo.gob.mx/',
        10,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Ramirez Tovar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atotonilcodetula.gob.mx/',
        12,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brenda Lorena Cortez Alcantara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atotonilcodetula.gob.mx/',
        12,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rutilo Ceron Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atotonilcodetula.gob.mx/',
        12,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cuahutemoc Gil Alvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atotonilcodetula.gob.mx/',
        12,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Flores Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atotonilcodetula.gob.mx/',
        12,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Sanchez Monterrubio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atotonilcodetula.gob.mx/',
        12,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Veronica Vargas Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atotonilcodetula.gob.mx/',
        12,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rigoberto Rodriguez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atotonilcodetula.gob.mx/',
        12,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silverio Danahe Perez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atotonilcodetula.gob.mx/',
        12,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karina Navarrete Laguna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atotonilcodetula.gob.mx/',
        12,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcela Martínez Cervantes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atotonilcodetula.gob.mx/',
        12,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Delia Coral Rodríguez Medrano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atotonilcodetula.gob.mx/',
        12,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alvaro Iván Rodríguez Vega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.atotonilcodetula.gob.mx/',
        12,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Hugo Ramirez Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://atotonilcoelgrande.gob.mx/turistico/inicio.php',
        11,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Silvia Perez Avendaño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://atotonilcoelgrande.gob.mx/turistico/inicio.php',
        11,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Antonio Gomez Soberanes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://atotonilcoelgrande.gob.mx/turistico/inicio.php',
        11,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Calva Chapa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://atotonilcoelgrande.gob.mx/turistico/inicio.php',
        11,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leopoldo Hernandez Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://atotonilcoelgrande.gob.mx/turistico/inicio.php',
        11,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victorina Calva Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://atotonilcoelgrande.gob.mx/turistico/inicio.php',
        11,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elba Leticia Chapa Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://atotonilcoelgrande.gob.mx/turistico/inicio.php',
        11,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yazmin Tellez Salinas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://atotonilcoelgrande.gob.mx/turistico/inicio.php',
        11,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Jesus Rodriguez Naranjo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://atotonilcoelgrande.gob.mx/turistico/inicio.php',
        11,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maximiliano Butron Licona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://atotonilcoelgrande.gob.mx/turistico/inicio.php',
        11,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isaid Acosta Tellez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        13,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan De La Cruz Bautista',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        13,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Monserrat Escudero Cisneros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        13,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vicente Juarez Solares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        13,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alicia Hernandez Ortega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        13,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hildeberto Vargas Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        13,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Citlalli Juárez Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        13,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Alberto Villegas Nochebuena',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        13,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yareli Melo Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        13,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ventura Hernández Escudero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        13,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariano Cabañas Guzman',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cardonal.hidalgo.gob.mx/',
        14,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fidel Alfonso Santos Salas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cardonal.hidalgo.gob.mx/',
        14,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brenda Guadalupe Montufar Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cardonal.hidalgo.gob.mx/',
        14,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariel Azucena Perez Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cardonal.hidalgo.gob.mx/',
        14,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Mendoza Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cardonal.hidalgo.gob.mx/',
        14,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Chavez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cardonal.hidalgo.gob.mx/',
        14,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yareli Aide Mendieta Escobar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cardonal.hidalgo.gob.mx/',
        14,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Feliciano Gallardo Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cardonal.hidalgo.gob.mx/',
        14,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonia Doñu Ambrosio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cardonal.hidalgo.gob.mx/',
        14,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edith Marlen Zapote Cardon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cardonal.hidalgo.gob.mx/',
        14,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Enrique Tavera Guerrero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.chapantongo.gob.mx/',
        16,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nayla Estefania Garcia Estrada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.chapantongo.gob.mx/',
        16,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Perez Galvan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.chapantongo.gob.mx/',
        16,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Delfino Martinez Riofrio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.chapantongo.gob.mx/',
        16,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Montalvo Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.chapantongo.gob.mx/',
        16,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Moises Lugo Angeles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.chapantongo.gob.mx/',
        16,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alba Rocio Martinez Arteaga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.chapantongo.gob.mx/',
        16,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eligio Figueroa Chavez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.chapantongo.gob.mx/',
        16,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irais Martinez Olvera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.chapantongo.gob.mx/',
        16,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raquel Hernandez Olguin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.chapantongo.gob.mx/',
        16,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Valente Martinez Mayor',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://chilcuautla.hidalgo.gob.mx/',
        18,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felix Cano Martin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://chilcuautla.hidalgo.gob.mx/',
        18,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariela Perez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://chilcuautla.hidalgo.gob.mx/',
        18,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Martinez Barrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://chilcuautla.hidalgo.gob.mx/',
        18,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marlene Pascual Benitez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://chilcuautla.hidalgo.gob.mx/',
        18,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Perez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://chilcuautla.hidalgo.gob.mx/',
        18,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Uribe Cano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://chilcuautla.hidalgo.gob.mx/',
        18,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Clemencia Murillo Mondragon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://chilcuautla.hidalgo.gob.mx/',
        18,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Patricia Gonzalez De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://chilcuautla.hidalgo.gob.mx/',
        18,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karina Garcia Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://chilcuautla.hidalgo.gob.mx/',
        18,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Fermin Rivera Peralta',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cuautepechidalgo.gob.mx/web/inicio.php',
        15,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Jaciel Martinez Aquino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cuautepechidalgo.gob.mx/web/inicio.php',
        15,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nancy Edith Garrido Cenobio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cuautepechidalgo.gob.mx/web/inicio.php',
        15,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Antonio Lopez Enciso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cuautepechidalgo.gob.mx/web/inicio.php',
        15,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Fernanda German Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cuautepechidalgo.gob.mx/web/inicio.php',
        15,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Mirna Garcia Lira',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cuautepechidalgo.gob.mx/web/inicio.php',
        15,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Uvaldo Aguilar Trejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cuautepechidalgo.gob.mx/web/inicio.php',
        15,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalinda Perez Marquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cuautepechidalgo.gob.mx/web/inicio.php',
        15,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hipolito Vega Marquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cuautepechidalgo.gob.mx/web/inicio.php',
        15,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edwin Garcia Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cuautepechidalgo.gob.mx/web/inicio.php',
        15,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Nelly Larios Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cuautepechidalgo.gob.mx/web/inicio.php',
        15,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ginovalente Chavéz Noreña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cuautepechidalgo.gob.mx/web/inicio.php',
        15,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Hernández Islas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cuautepechidalgo.gob.mx/web/inicio.php',
        15,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Beatriz Carbajal Batalla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cuautepechidalgo.gob.mx/web/inicio.php',
        15,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Gerardo Olmedo Arista',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cuautepechidalgo.gob.mx/web/inicio.php',
        15,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Arely Galindo Garrido',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://cuautepechidalgo.gob.mx/web/inicio.php',
        15,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ranulfo Serrano Moedano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://elarenal.gob.mx/turistico/inicio.php',
        19,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Diego Oropeza Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://elarenal.gob.mx/turistico/inicio.php',
        19,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angel Tapia Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://elarenal.gob.mx/turistico/inicio.php',
        19,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Faustino Cruz Fernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://elarenal.gob.mx/turistico/inicio.php',
        19,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nely Esparza Esparza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://elarenal.gob.mx/turistico/inicio.php',
        19,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Griselda Escamilla Cortes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://elarenal.gob.mx/turistico/inicio.php',
        19,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Refugio Espinosa Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://elarenal.gob.mx/turistico/inicio.php',
        19,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vicente Perez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://elarenal.gob.mx/turistico/inicio.php',
        19,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Griselda Esparza Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://elarenal.gob.mx/turistico/inicio.php',
        19,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carina Lopez Ayala',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://elarenal.gob.mx/turistico/inicio.php',
        19,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Badillo Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://eloxochitlan.hidalgo.gob.mx/',
        20,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María De Los Angeles Angeles Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://eloxochitlan.hidalgo.gob.mx/',
        20,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fulgencio Zamora Camargo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://eloxochitlan.hidalgo.gob.mx/',
        20,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martin Ramirez Oliver',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://eloxochitlan.hidalgo.gob.mx/',
        20,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cristina Miranda Serna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://eloxochitlan.hidalgo.gob.mx/',
        20,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oliverio Solis Castañon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://eloxochitlan.hidalgo.gob.mx/',
        20,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Yadira Tellez Villeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://eloxochitlan.hidalgo.gob.mx/',
        20,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Melquiades Miranda Serna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://eloxochitlan.hidalgo.gob.mx/',
        20,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Baltasar Hernandez Delgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://eloxochitlan.hidalgo.gob.mx/',
        20,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maricela Ramos Angeles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://eloxochitlan.hidalgo.gob.mx/',
        20,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Antonio Garcia Aguilera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://emilianozapata.hidalgo.gob.mx/',
        21,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hugo Alfredo Benitez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://emilianozapata.hidalgo.gob.mx/',
        21,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Francisco Cuevas Meneses',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://emilianozapata.hidalgo.gob.mx/',
        21,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eyry Laura Rivas Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://emilianozapata.hidalgo.gob.mx/',
        21,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Vazquez Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://emilianozapata.hidalgo.gob.mx/',
        21,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amairani Perez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://emilianozapata.hidalgo.gob.mx/',
        21,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Ivan Rodriguez Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://emilianozapata.hidalgo.gob.mx/',
        21,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ingrid Gloria Coronel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://emilianozapata.hidalgo.gob.mx/',
        21,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Janine Gutierrez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://emilianozapata.hidalgo.gob.mx/',
        21,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lenny Paola Gutierrez Farfan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://emilianozapata.hidalgo.gob.mx/',
        21,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fidel Arce Santander',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://epazoyucan.hidalgo.gob.mx/',
        22,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Miguel Olvera Cortes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://epazoyucan.hidalgo.gob.mx/',
        22,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hugo Abel Valencia Tellez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://epazoyucan.hidalgo.gob.mx/',
        22,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Juarez Islas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://epazoyucan.hidalgo.gob.mx/',
        22,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorena Leon Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://epazoyucan.hidalgo.gob.mx/',
        22,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Florencia Montiel Castelan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://epazoyucan.hidalgo.gob.mx/',
        22,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos León Pineda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://epazoyucan.hidalgo.gob.mx/',
        22,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Angela Delgadillo Ugalde',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://epazoyucan.hidalgo.gob.mx/',
        22,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Verónica Jiménez Islas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://epazoyucan.hidalgo.gob.mx/',
        22,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Paola Islas Alvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://epazoyucan.hidalgo.gob.mx/',
        22,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Josue Olguin Pardo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.franciscoimadero.gob.mx/',
        23,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Araceli Granados Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.franciscoimadero.gob.mx/',
        23,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Angelica Martinez Orozco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.franciscoimadero.gob.mx/',
        23,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Manuel Rivera Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.franciscoimadero.gob.mx/',
        23,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Alberto Angeles Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.franciscoimadero.gob.mx/',
        23,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cirilo Vazquez Juarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.franciscoimadero.gob.mx/',
        23,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zuleidy Aguilar Delgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.franciscoimadero.gob.mx/',
        23,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joel Arciniega Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.franciscoimadero.gob.mx/',
        23,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Monserrat Tapia Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.franciscoimadero.gob.mx/',
        23,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nury Lizeth Martinez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.franciscoimadero.gob.mx/',
        23,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alicia Avila Camacho',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.franciscoimadero.gob.mx/',
        23,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Sanchez Reyna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.franciscoimadero.gob.mx/',
        23,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aaron Moises Valenzuela Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.franciscoimadero.gob.mx/',
        23,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Mayoral Flores',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huasca.gob.mx/web/inicio.php',
        24,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Isabel Rodriguez Casanova',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huasca.gob.mx/web/inicio.php',
        24,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Hugo Soto Tellez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huasca.gob.mx/web/inicio.php',
        24,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Samantha Soto Lechuga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huasca.gob.mx/web/inicio.php',
        24,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yair Cisneros Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huasca.gob.mx/web/inicio.php',
        24,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gaston Miranda Badillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huasca.gob.mx/web/inicio.php',
        24,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lara Lugo Cid',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huasca.gob.mx/web/inicio.php',
        24,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayra Sandra Lugo Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huasca.gob.mx/web/inicio.php',
        24,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Hernandez Soto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huasca.gob.mx/web/inicio.php',
        24,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brenda Yareli Olvera Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huasca.gob.mx/web/inicio.php',
        24,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe Juarez Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huautla.gob.mx/turistico/inicio.php',
        25,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Osorio Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huautla.gob.mx/turistico/inicio.php',
        25,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Hernandez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huautla.gob.mx/turistico/inicio.php',
        25,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dimas Hernandez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huautla.gob.mx/turistico/inicio.php',
        25,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amanda Angeles Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huautla.gob.mx/turistico/inicio.php',
        25,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucrecia Flores Cortes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huautla.gob.mx/turistico/inicio.php',
        25,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angelica Reyna Escudero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huautla.gob.mx/turistico/inicio.php',
        25,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alberto Andrei Aranda De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huautla.gob.mx/turistico/inicio.php',
        25,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Misael Hernandez Velasco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huautla.gob.mx/turistico/inicio.php',
        25,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teodosia Rayon Negrete',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huautla.gob.mx/turistico/inicio.php',
        25,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Cesar Gonzalez Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huazalingo.gob.mx/web/inicio.php',
        26,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Benito Enrique Hernandez Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huazalingo.gob.mx/web/inicio.php',
        26,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalba Hernandez Lara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huazalingo.gob.mx/web/inicio.php',
        26,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Mendez Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huazalingo.gob.mx/web/inicio.php',
        26,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elvira Santander Sebastian',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huazalingo.gob.mx/web/inicio.php',
        26,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Hernandez Andrade',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huazalingo.gob.mx/web/inicio.php',
        26,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Benigna Faustino Lazaro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huazalingo.gob.mx/web/inicio.php',
        26,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ivan Martinez Tellez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huazalingo.gob.mx/web/inicio.php',
        26,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Florencia Martinez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huazalingo.gob.mx/web/inicio.php',
        26,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Santillan Melo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huehuetla.hidalgo.gob.mx/',
        27,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Estela San Juan Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huehuetla.hidalgo.gob.mx/',
        27,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcial Solis Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huehuetla.hidalgo.gob.mx/',
        27,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcelino Romero Lazcano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huehuetla.hidalgo.gob.mx/',
        27,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandy Garcia Lazcano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huehuetla.hidalgo.gob.mx/',
        27,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ismael Vigueras Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huehuetla.hidalgo.gob.mx/',
        27,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reynalda Montes Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huehuetla.hidalgo.gob.mx/',
        27,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Damaris Escamilla Plata',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huehuetla.hidalgo.gob.mx/',
        27,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maribel Padilla Solis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huehuetla.hidalgo.gob.mx/',
        27,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Felipe Modesto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huehuetla.hidalgo.gob.mx/',
        27,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Andrade Zurutuza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huejutla.gob.mx/turistico/inicio.php',
        28,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Itzel Amairany Rivera Borges',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huejutla.gob.mx/turistico/inicio.php',
        28,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Faustino Gael Galvan Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huejutla.gob.mx/turistico/inicio.php',
        28,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nelvis Nayeli Cano Olivares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huejutla.gob.mx/turistico/inicio.php',
        28,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Eduardo Cabrera Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huejutla.gob.mx/turistico/inicio.php',
        28,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia De La Cruz Vargas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huejutla.gob.mx/turistico/inicio.php',
        28,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudio Hernandez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huejutla.gob.mx/turistico/inicio.php',
        28,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santos Hernandez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huejutla.gob.mx/turistico/inicio.php',
        28,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hilario Hernandez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huejutla.gob.mx/turistico/inicio.php',
        28,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oliva Villagran Andrade',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huejutla.gob.mx/turistico/inicio.php',
        28,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Apolonia Tolentino Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huejutla.gob.mx/turistico/inicio.php',
        28,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Alvarez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huejutla.gob.mx/turistico/inicio.php',
        28,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Guadalupe Salguero Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huejutla.gob.mx/turistico/inicio.php',
        28,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adela Perez Espinoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huejutla.gob.mx/turistico/inicio.php',
        28,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarito Monterrubio Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huejutla.gob.mx/turistico/inicio.php',
        28,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Catalina Ramirez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huejutla.gob.mx/turistico/inicio.php',
        28,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Flores Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huejutla.gob.mx/turistico/inicio.php',
        28,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Margeri Rivera Nuñez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huejutla.gob.mx/turistico/inicio.php',
        28,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hida Alejandrina Hernandez Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huejutla.gob.mx/turistico/inicio.php',
        28,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andres Espinosa Galvan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://huejutla.gob.mx/turistico/inicio.php',
        28,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emeterio Moreno Magos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.huichapan.gob.mx',
        29,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandra Esmeralda Perez Carrillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.huichapan.gob.mx',
        29,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Rocio Arteaga Trejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.huichapan.gob.mx',
        29,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Janette Rojo Rufino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.huichapan.gob.mx',
        29,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abigail Valencia Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.huichapan.gob.mx',
        29,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Resendiz Resendiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.huichapan.gob.mx',
        29,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Severiano Angeles Callejas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.huichapan.gob.mx',
        29,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abundio Olvera Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.huichapan.gob.mx',
        29,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juliana Ortiz Trejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.huichapan.gob.mx',
        29,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Hernandez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.huichapan.gob.mx',
        29,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Humberto Edonio Salina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.huichapan.gob.mx',
        29,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Quintanar Trejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.huichapan.gob.mx',
        29,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Meza Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.huichapan.gob.mx',
        29,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vicente Charrez Pedraza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.ixmiquilpan.gob.mx/',
        30,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Elizabeth Chavez Garza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.ixmiquilpan.gob.mx/',
        30,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jessica Antonia Rodriguez Olguin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.ixmiquilpan.gob.mx/',
        30,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sebastian Ferrara Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.ixmiquilpan.gob.mx/',
        30,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elizabeth Mendoza Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.ixmiquilpan.gob.mx/',
        30,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rutilio Perez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.ixmiquilpan.gob.mx/',
        30,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Hernandez Dañu',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.ixmiquilpan.gob.mx/',
        30,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Ramirez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.ixmiquilpan.gob.mx/',
        30,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Melquiades Dañu Cerro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.ixmiquilpan.gob.mx/',
        30,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leandro Charrez Olguin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.ixmiquilpan.gob.mx/',
        30,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma Magdalena Rubio Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://jacala.hidalgo.gob.mx/',
        31,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ivan Lara Tovar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://jaltocan.gob.mx/turistico/inicio.php',
        32,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Noe Zapata Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://juarez.hidalgo.gob.mx/',
        33,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Ramos Villeda',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://lamision.gob.mx/web/inicio.php',
        34,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ernestino Melo Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://lolotla.gob.mx/',
        35,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joel Huazo Canales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        36,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Morales Mora',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://metztitlan.gob.mx/turistico/inicio.php',
        37,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Israel Jorge Felix Soto',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.mineraldelareforma.gob.mx/',
        40,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Hernandez Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.mineraldelchico.gob.mx/',
        38,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Sierra Tello',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://mineraldelmonte.hidalgo.gob.mx/',
        39,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Dionicio Velasco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://molango.hidalgo.gob.mx/',
        42,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcela Isidro Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.nicolasflores.gob.mx/',
        43,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Enrique Cadena Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        44,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Martin Borbolla Calderon',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://omitlandejuarez.hidalgo.gob.mx/',
        45,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Edgar Baños Rubio',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.pachuca.gob.mx',
        47,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Casas Chavez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        46,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Francisco Gonzalez Garay',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://pisaflores.hidalgo.gob.mx/',
        48,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Mera Olguin',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://progreso.hidalgo.gob.mx/',
        49,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Tellez Romero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://metzquititlan.gob.mx/',
        50,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Felipe Hernandez Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://sanagustintlaxiaca.gob.mx/web/',
        51,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santos Cabrera Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.sanbartolo.gob.mx/',
        52,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Saab Lara',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://orizatlan.gob.mx/turistico/inicio.php',
        53,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Azpeitia Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://sansalvador.hidalgo.gob.mx/',
        54,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edigar Monter Angeles',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        55,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dante Cardenas Flores',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://santiagotulantepec.gob.mx/',
        56,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcos Miguel Taboada Vargas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.singuilucan.gob.mx/',
        57,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Jesus Chavez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        58,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joel Elias Paso',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.tecozautla.gob.mx/',
        59,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erick Mendoza Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://tenangodedoria.hidalgo.gob.mx/',
        60,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marisol Ortega Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.tepeapulco.gob.mx',
        61,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Juan Viggiano Austria',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://tepehuacandeguerrero.hidalgo.gob.mx/',
        62,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Jimenez Calzadilla',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.tepejidelriohgo.gob.mx/',
        63,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elias Castillo Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.tepetitlanhidalgo.gob.mx/',
        64,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandra Zuñiga Chavez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://tetepango.hidalgo.gob.mx/',
        65,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santiago Hernandez Ceron',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://tezontepec.gob.mx/turistico/inicio.php',
        66,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Crisoforo Rodriguez Villegas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://tianguistengo.gob.mx/turistico/inicio.php',
        67,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Susana Araceli Angeles Quezada',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.tizayuca.gob.mx/',
        68,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Alfredo Diaz Moreno',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.tlahuelilpan-hidalgo.com.mx/',
        69,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Said Tiberio Chavez Cobos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://tlahuiltepa.gob.mx/',
        70,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Saul Garcia Ordoñez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://tlanalapa.gob.mx/',
        71,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcos Bautista Medina',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        null,
        72,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Perez Suarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://tlaxcoapan.gob.mx/web/inicio.php',
        73,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gaston Valdespino Avila',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://tolcayuca.hidalgo.gob.mx/index.php',
        74,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Hernandez Badillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.tula.gob.mx/',
        75,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesareo Jorge Marquez Alvarado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://sitio.tulancingo.gob.mx/',
        76,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia Marcela Gonzalez Valencia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.villadetezontepec.gob.mx/',
        77,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Bautista Gutierrez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://xochiatipan.gob.mx/turistico/inicio.php',
        78,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elda Ramirez Maya',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://xochicoatlan.gob.mx/turistico/inicio.php',
        79,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elias Sanjuan Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://yahualicahgo.gob.mx/turistico/inicio.php',
        80,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Josue Moreno Gayosso',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://zacualtipan.gob.mx/web/inicio.php',
        81,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Aguilar Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://zapotlan.hidalgo.gob.mx/',
        82,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Hernandez Juarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://zempoalagob.mx/',
        83,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alan Jesus Rivera Villanueva',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2020-12-15, 2024-09-04)'::daterange,
        'http://www.zimapan.gob.mx/',
        84,
        13
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

              `)
}
