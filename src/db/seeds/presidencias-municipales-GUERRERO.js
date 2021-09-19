exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 12).del()
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
        'Adela Roman Ocampo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andres Alain Rodriguez Serrano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayra Reyna Resendiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hugo Hernandez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Liliana Quijano Buitron',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Cortez Aviles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Azucena Uribe Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Morlett Macho',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alva Patricia Batani Giles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lupe Dorantes Aponte',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ilich Augusto Lozano Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gereli Astudillo Ibarrondo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Aguirre Alcaide',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosaura Rodriguez Carrillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose De Jesus Herrera Pintos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Natividad Rodriguez Chino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Miguel Terrazas Irra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricarda Robles Urioste',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Rivera Velez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Los Angeles Elbjorn Trani',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Carlos Ortega Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.acapulco.gob.mx',
        1,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramiro Salvador Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://acatepec.guerrero.gob.mx/',
        76,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fortino Garcia Neri',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://acatepec.guerrero.gob.mx/',
        76,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Clauidia Santiago Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://acatepec.guerrero.gob.mx/',
        76,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Enrique Dircio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://acatepec.guerrero.gob.mx/',
        76,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paulina Garcia Espinoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://acatepec.guerrero.gob.mx/',
        76,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Braulio Ferrer Paulino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://acatepec.guerrero.gob.mx/',
        76,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonina Sanchez Prisciliano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://acatepec.guerrero.gob.mx/',
        76,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudio Aurelio Catarina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://acatepec.guerrero.gob.mx/',
        76,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esteban Marcelino Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://acatepec.guerrero.gob.mx/',
        76,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Catalina Tacuba Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        2,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maricela Santos Santos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        2,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Casarrubias Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        2,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mauricio Chautla Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        2,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarito Güero Aguirre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        2,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edna Tejeda Casarrubias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        2,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Moctezuma Rendon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        2,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Sebastian Santiago Jacinto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        2,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amantina Guillermo Venegas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        2,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Hugo Vega Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ajuchitlandelprogreso.gob.mx/',
        3,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Cambron Figueroa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ajuchitlandelprogreso.gob.mx/',
        3,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisca Jaimez Rios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ajuchitlandelprogreso.gob.mx/',
        3,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eliceo Rojas Valentin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ajuchitlandelprogreso.gob.mx/',
        3,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Justina Mayorazgo Higuera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ajuchitlandelprogreso.gob.mx/',
        3,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Bulfeda De La Luz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ajuchitlandelprogreso.gob.mx/',
        3,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlota Leon Andrade',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ajuchitlandelprogreso.gob.mx/',
        3,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Nely Rodriguez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ajuchitlandelprogreso.gob.mx/',
        3,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cornelia Pioquinto Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ajuchitlandelprogreso.gob.mx/',
        3,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Sanchez De Jesus',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        4,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silviano Diego Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        4,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mireya Salazar Vargas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        4,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raymundo Lopez Porfirio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        4,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Reyes German',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        4,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Deisi Villanueva Nestor',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        4,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvestre Alejandrino Ruiz Bazan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        4,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Maibelin Luna Ayala',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        5,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rita Pilar Gomez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        5,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Celso Escobar Benicio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        5,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'D. Guadalupe Ayala Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        5,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Artemio Pardo Candia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        5,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruperto Gomez Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        5,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yuliana Diaz Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        5,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Manjarrez Miranda',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://apaxtladecastrejon.gob.mx/',
        6,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Villares Cuevas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://apaxtladecastrejon.gob.mx/',
        6,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Brito Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://apaxtladecastrejon.gob.mx/',
        6,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Barrera Barrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://apaxtladecastrejon.gob.mx/',
        6,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elizabeth Betancourt Orduño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://apaxtladecastrejon.gob.mx/',
        6,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carmela Guadarrama Santamaria',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://apaxtladecastrejon.gob.mx/',
        6,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Cayo Villalobos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://apaxtladecastrejon.gob.mx/',
        6,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adolfo Torales Catalan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        7,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramiro Bahena Velazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        7,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariana Vazquez Teliz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        7,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Martinez Velazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        7,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Cristina Arroyo Avila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        7,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Ocampo Salgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        7,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Xochitl Hurtado Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        7,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Mejia Avianeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        7,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorena Rodriguez Jaimez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        7,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andres Guevara Cardenas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        8,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Camilo Gonzalez Longino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        8,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yessica Ramirez Parra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        8,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Kenia Gisela Gonzalez Barrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        8,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Sanchez Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        8,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Teresa Hernandez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        8,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Alvarez Delgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        8,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Hurtado Catalan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://atlamajalcingodelmonte.gob.mx/',
        9,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Venancio Florentino Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://atlamajalcingodelmonte.gob.mx/',
        9,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blandina Rodriguez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://atlamajalcingodelmonte.gob.mx/',
        9,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Quintila Carrasco Solano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://atlamajalcingodelmonte.gob.mx/',
        9,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vicente Solano Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://atlamajalcingodelmonte.gob.mx/',
        9,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Severiano Morales Benito',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://atlamajalcingodelmonte.gob.mx/',
        9,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucia Martinez Valdez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://atlamajalcingodelmonte.gob.mx/',
        9,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcelino Ruiz Esteban',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        10,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Hernandez Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        10,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elpidia Hidalgo Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        10,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Farias Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        10,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcos Flores Geronimo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        10,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Catalina Garcia Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        10,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Mateos Sinforiano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        10,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eva Hernandez Mateos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        10,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Flores Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        10,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yanelly Hernandez Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        11,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Celida Radilla Barrientos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        11,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fredy Fuentes Najera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        11,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angel Atenacio Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        11,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erendira Alarcon Godoy',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        11,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maximino Villa Zamora',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        11,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Tabares Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        11,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Tellez Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        11,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Cesar Neri Benitez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        11,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Longino Julio Hernandez Campos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ayutla.gob.mx/',
        12,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ayutla.gob.mx/',
        12,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ayutla.gob.mx/',
        12,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Efren Lopez Cortes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        13,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reveriano Marin Mayo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        13,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Maria Ortega Mosso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        13,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nauri Quiterio Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        13,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karina Galvez Allende',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        13,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruli Quiterio Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        13,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juvenal Hernandez Zavala',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        13,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Aguilar Sandoval',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://benitojuarezgro.gob.mx/',
        14,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Nelter Cegueda Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://benitojuarezgro.gob.mx/',
        14,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karina Vanessa Galeana Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://benitojuarezgro.gob.mx/',
        14,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Alberto Acosta Bailon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://benitojuarezgro.gob.mx/',
        14,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eneira Morales Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://benitojuarezgro.gob.mx/',
        14,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Roberto Mendiola Alberto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://benitojuarezgro.gob.mx/',
        14,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Georgina De La Cruz Galeana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://benitojuarezgro.gob.mx/',
        14,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Lilia Botello Figueroa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://buenavistadecuellar.guerrero.gob.mx/',
        15,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jacqueline Salgado Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://buenavistadecuellar.guerrero.gob.mx/',
        15,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reyes Castrejon Villalobos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://buenavistadecuellar.guerrero.gob.mx/',
        15,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Botello Uribe',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://buenavistadecuellar.guerrero.gob.mx/',
        15,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Judith Garcia Landa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://buenavistadecuellar.guerrero.gob.mx/',
        15,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Guadalupe Uribe Figueroa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://buenavistadecuellar.guerrero.gob.mx/',
        15,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcos Leonardo Gomez Figueroa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://buenavistadecuellar.guerrero.gob.mx/',
        15,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Parra Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://chilapa.guerrero.gob.mx/',
        28,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wilfrida Sanchez Tejeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://chilapa.guerrero.gob.mx/',
        28,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Acevedo Rosendo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://chilapa.guerrero.gob.mx/',
        28,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alberta Bautista Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://chilapa.guerrero.gob.mx/',
        28,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nestor Parra Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://chilapa.guerrero.gob.mx/',
        28,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Delia Solano Valle',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://chilapa.guerrero.gob.mx/',
        28,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abel Garcia Villanueva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://chilapa.guerrero.gob.mx/',
        28,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Rosario Reyes Silva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://chilapa.guerrero.gob.mx/',
        28,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Morales Pintor',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://chilapa.guerrero.gob.mx/',
        28,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Octavio Misael Moreno Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://chilapa.guerrero.gob.mx/',
        28,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mirna Calletano Renteria',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://chilapa.guerrero.gob.mx/',
        28,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Ramon Soria Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://chilapa.guerrero.gob.mx/',
        28,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Moyses Zalazar Dircio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://chilapa.guerrero.gob.mx/',
        28,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Gaspar Beltran',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.chilpancingo.gob.mx',
        29,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Alicia Camacho De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.chilpancingo.gob.mx',
        29,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Raul Salgado Carachure',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.chilpancingo.gob.mx',
        29,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brenda Janet Ramirez Santos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.chilpancingo.gob.mx',
        29,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lino Castillo Candia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.chilpancingo.gob.mx',
        29,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Almazam Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.chilpancingo.gob.mx',
        29,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Vargas Barrientos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.chilpancingo.gob.mx',
        29,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Itanduvi Villalba Najera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.chilpancingo.gob.mx',
        29,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sabina Ramirez Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.chilpancingo.gob.mx',
        29,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Flores Pineda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.chilpancingo.gob.mx',
        29,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodolfo Calderon Nava',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.chilpancingo.gob.mx',
        29,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Lilia Leyva Sotelo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.chilpancingo.gob.mx',
        29,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Vazquez Calixto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.chilpancingo.gob.mx',
        29,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Martinez Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        16,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Nicolas Marin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        16,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jessica Bustos Magadan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        16,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isidro Pacheco Bustos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        16,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Concepcion Nuñez Peñaloza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        16,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Afren Castrejon Quiroz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        16,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edelma Lubiano Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        16,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Esteban Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        79,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Solano Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        79,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rufina Garcia Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        79,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafaela Julian Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        79,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Ponce Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        79,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Albino Ignacio Alejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        79,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Busto Valera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        79,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Duarte Bahena',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://cocula.gob.mx/',
        17,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe De Jesus Almazan Maciel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://cocula.gob.mx/',
        17,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Luisa Lozano Lara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://cocula.gob.mx/',
        17,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Del Rocio Escobar Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://cocula.gob.mx/',
        17,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Petra Lara Segura',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://cocula.gob.mx/',
        17,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fabiola Berrun Ocampo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://cocula.gob.mx/',
        17,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zacarias Mena Marchan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://cocula.gob.mx/',
        17,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Garcia Villalba',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        18,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Aguirre Chopin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        18,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eusebio Sosa Cespedes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        18,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De Jesus Ventura Muñoz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        18,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Idolina Martinez Noyola',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        18,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Keila Roxana Guerrero Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        18,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esther Sandoval Carbajal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        18,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julian Castro Santos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        19,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Antonio Dominguez Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        19,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bernardino Luciano Saavedra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        19,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Adan Martinez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        19,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Asuncion De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        19,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorenzo Castro Mejia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        19,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Garcia Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        19,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Aguilar Vazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        20,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Martinez Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        20,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Magdalena Mejorado Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        20,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Areli Garcia Pardo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        20,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irene Verdis Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        20,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Onesimo Espinobarros Bonilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        20,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Nava Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        20,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alberto De Los Santos Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        21,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santo Flores Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        21,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brenda Berenice Bataz Pita',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        21,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cornelio Carreto Tapia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        21,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose De Jesus Quevedo Cabrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        21,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Manrique Resendiz Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        21,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gilberto Vargas Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        21,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santiago Ocampo Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        21,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alicia Gomez Carrier',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        21,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eusebio Echeverria Tabares',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        22,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Octavio Sanchez Avellaneda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        22,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Ivette Romero Valencia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        22,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Filemon Gutierrez Miguel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        22,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marfelia Montufar Burgos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        22,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Benitez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        22,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Diaz Cerraras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        22,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lauro Martinez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        22,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marilu Arroyo Leon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        22,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Alejandro Marin Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ayuntamientocuajinicuilapa.gob.mx/',
        23,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abad Bernabe Campos Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ayuntamientocuajinicuilapa.gob.mx/',
        23,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonia Filomena Noyola Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ayuntamientocuajinicuilapa.gob.mx/',
        23,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amando Castrejon Villalobos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ayuntamientocuajinicuilapa.gob.mx/',
        23,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antelma Leon Marcial',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ayuntamientocuajinicuilapa.gob.mx/',
        23,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rita Eledi Cuevas Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ayuntamientocuajinicuilapa.gob.mx/',
        23,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rey Agama Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ayuntamientocuajinicuilapa.gob.mx/',
        23,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isidra Moctezuma Petatan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ayuntamientocuajinicuilapa.gob.mx/',
        23,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Honorio Molina Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ayuntamientocuajinicuilapa.gob.mx/',
        23,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eugenio Cornelio Garcia Meza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        24,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juvenay Carrasco Pablo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        24,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luzcely Ortega Meza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        24,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Areli Rendon Romano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        24,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Matilde Flores Bernardino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        24,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ervin Flores Moso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        24,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maricela Najera Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        24,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bonerje Arredondo Carmona',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        25,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elizabeth Mendoza Damacio',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        26,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Mireya Salgado Delgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        26,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Ramires Najera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        26,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Disney Gutierrez Torreblanca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        26,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Cortes Villal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        26,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Cruz Aparicio Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        26,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Jenit Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        26,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Catarino Merino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        26,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sonia Aparicio Rafaela',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        26,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elvia Fernandez Miranda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        26,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Segura Rosas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        26,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Moctezuma Godinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        26,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Veronica Barrios Mayo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        26,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Timoteo Arce Solis',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        27,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cornelio Reyes Suarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        27,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eva Torres Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        27,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodrigo Antonio Filos Real',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        27,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bolivar Garcia Aguirre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        27,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Magally Mondragon Gurrustieta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        27,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Kevin Hernandez Pineda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        27,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Natividad Lopez Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        30,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yanett Teodula Ceron Leyva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        30,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        30,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abel Vazquez Laurente',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        30,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salome Martinez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        30,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Humberto Martinez Beltran',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        30,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pavel Miranda Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        30,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Ramos Alonso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        30,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Uvaldo Adame Maturana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        30,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wilberth Sait Garcia Trujillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        31,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Gallardo Palma',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        31,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Suluen Bibiano Salado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        31,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Manzo Ventura',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        31,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yahir Lorenzo Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        31,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ariel Jijon Lorenzo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        31,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Nava Acevedo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        31,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isaac Celis Rios',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        32,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Humberto Ocampo Tranquilino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        32,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yesica Tapia Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        32,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Almazan Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        32,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mercedes Tovar Melquiades',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        32,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo Basilio Rabadan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        32,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De Jesus Rodriguez Villalobos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        32,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Serafin Hernandez Landa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        33,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Dircio Giles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        33,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elizabeth Bernabe Alvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        33,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Timoteo Cisca Trujillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        33,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvana Sotelo Figueroa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        33,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucia Olais Meza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        33,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Figueroa Solano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        33,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Carmen Cruz Giles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        33,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Bravo Cuenca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        33,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elpidio Nava Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.huamuxtitlangro.gob.mx',
        34,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Alfonso Valerio Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.huamuxtitlangro.gob.mx',
        34,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Iris Joana Navarrete Roque',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.huamuxtitlangro.gob.mx',
        34,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victoriano Calvelo Guerra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.huamuxtitlangro.gob.mx',
        34,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jonatha Guzman Huerta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.huamuxtitlangro.gob.mx',
        34,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erica Najera Navarrete',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.huamuxtitlangro.gob.mx',
        34,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Axcel Muñiz Delgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.huamuxtitlangro.gob.mx',
        34,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Avila Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        35,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Rosales Tolentino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        35,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Georgina Figueroa Gaytan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        35,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dulce Asucena Catalan Mata',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        35,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Najera Nieves',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        35,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Lennin Marchan Reza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        35,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Andraca Eligio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        35,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marlen Montes Peña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        35,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Marban Bahena',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        35,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Salvador Jaimes Herrera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://iguala.gob.mx/',
        36,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Estela Martinez Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://iguala.gob.mx/',
        36,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Ciro Olivares Medinas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://iguala.gob.mx/',
        36,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalia Gamboa Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://iguala.gob.mx/',
        36,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Del Rosario Fatima Moreno Dorantes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://iguala.gob.mx/',
        36,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Felix Roman Santana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://iguala.gob.mx/',
        36,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nancy Lorena Soto Alamo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://iguala.gob.mx/',
        36,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eudocio Rojo Chavez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://iguala.gob.mx/',
        36,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalva Carreon Vargas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://iguala.gob.mx/',
        36,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elvia Alicia Lopez Toral',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://iguala.gob.mx/',
        36,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Fidencio Peralta Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://iguala.gob.mx/',
        36,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tania Fabiola Jimenez Mastache',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://iguala.gob.mx/',
        36,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paloma Ramirez Vargas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://iguala.gob.mx/',
        36,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Apolonio Alvarez Montes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        37,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amadeo Solano Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        37,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isaac Leon Bautista',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        37,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leonardo Garcia Basilio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        37,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Añorve Marin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        37,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Evaristo Anastacio Cristobal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        37,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Nepomuceno Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        37,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruperta Nicolas Hilario',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://iliatenco.guerrero.gob.mx/',
        78,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Trifonia Lopez Silva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://iliatenco.guerrero.gob.mx/',
        78,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Panfilo Calleja Villa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://iliatenco.guerrero.gob.mx/',
        78,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Celedonia Galeana Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://iliatenco.guerrero.gob.mx/',
        78,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adrian Merino De Los Santo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://iliatenco.guerrero.gob.mx/',
        78,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuela Moreno Cantu',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://iliatenco.guerrero.gob.mx/',
        78,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Perez Cano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://iliatenco.guerrero.gob.mx/',
        78,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Naucelia Castillo Bautista',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ixcateopandecuauhtemoc.gob.mx/',
        38,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvia Barrios Estrada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ixcateopandecuauhtemoc.gob.mx/',
        38,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruvissel Torres Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ixcateopandecuauhtemoc.gob.mx/',
        38,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Adriana Sotero Rodarte',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ixcateopandecuauhtemoc.gob.mx/',
        38,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Dolores Bustamante Cirilo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ixcateopandecuauhtemoc.gob.mx/',
        38,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Isaias Ocampo Rios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ixcateopandecuauhtemoc.gob.mx/',
        38,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo Giles Becerra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ixcateopandecuauhtemoc.gob.mx/',
        38,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Orquidia Hernandez Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        77,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paula Moyao Galvez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        77,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gonzalo Rosendo Villalva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        77,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joel Morales Salmeron',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        77,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Locadio Bolaños Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        77,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cira Morales Carballo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        77,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agustin Garcia Bartolo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        77,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Delfino Terrones Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.juan-rescudero.gob.mx/',
        40,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eusebio Morales Casimiro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.juan-rescudero.gob.mx/',
        40,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Rodriguez Bello',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.juan-rescudero.gob.mx/',
        40,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Sanchez Avila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.juan-rescudero.gob.mx/',
        40,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Noemi Garcia Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.juan-rescudero.gob.mx/',
        40,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carmina Montalban Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.juan-rescudero.gob.mx/',
        40,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mireya Leyva Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.juan-rescudero.gob.mx/',
        40,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Antonio Moctezuma Flores',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://juchitan.gob.mx/',
        81,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Crescencio Reyes Torres',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://launiondeisidoromontesdeoca.gob.mx/',
        69,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eleuterio Salamanca Rosas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://launiondeisidoromontesdeoca.gob.mx/',
        69,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Rivera Calvario',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://launiondeisidoromontesdeoca.gob.mx/',
        69,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Valdez Pimentel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://launiondeisidoromontesdeoca.gob.mx/',
        69,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andres Lopez Santoyo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://launiondeisidoromontesdeoca.gob.mx/',
        69,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enoelia Salamanca Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://launiondeisidoromontesdeoca.gob.mx/',
        69,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Torres Rosas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://launiondeisidoromontesdeoca.gob.mx/',
        69,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Carmina Coria Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://launiondeisidoromontesdeoca.gob.mx/',
        69,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Tornez Suazo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://launiondeisidoromontesdeoca.gob.mx/',
        69,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ismael Castulo Guzman',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        41,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Heriberto Romero Reyna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        41,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sarahi Maldonado Nava',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        41,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Modesta Dimas Lazaro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        41,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Lourdes Jimenez Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        41,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eliezer Maldonado Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        41,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Gonzalez Ceron',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        41,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abel Bruno Arriaga',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.malinaltepec.gob.mx/',
        42,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efren Flores Solano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.malinaltepec.gob.mx/',
        42,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esmeralda Sanchez Andrade',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.malinaltepec.gob.mx/',
        42,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fabian Diaz Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.malinaltepec.gob.mx/',
        42,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eliud Cuatecal Cantu',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.malinaltepec.gob.mx/',
        42,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Domingo Palacio Jeronimo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.malinaltepec.gob.mx/',
        42,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zacarias Carranza Villegas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.malinaltepec.gob.mx/',
        42,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Marcial Mateos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.malinaltepec.gob.mx/',
        42,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alicia Martinez Jeronimo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.malinaltepec.gob.mx/',
        42,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Adame Montalvan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        80,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Zamora Gallegos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        80,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anahi Chavez Franco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        80,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lazaro Bautista Vargas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        80,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hildeberto Bustos Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        80,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arquimides Diaz Justo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        80,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Garibay Soriano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        80,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jenny Gonzalez Ocampo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        43,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Lilia Morales Astudil Solis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        43,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adrian Arias Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        43,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maribel Yectli Tezoptitlan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        43,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Veronica Iglesias Tejedor',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        43,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Bautista De Jesus',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        43,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lus Elena Salazar Sedilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        43,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zeferino Villanueva Galindo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        44,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leovigildo Mendoza Basurto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        44,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efrain Galvez Montealegre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        44,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Consuelo Sierra Solano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        44,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Favian Gomez Pantaleon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        44,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Braulio Cano Cortez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        44,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Samuel Vitervo Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        44,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jhobanny Jimenez Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ayuntamientmochitlan.gob.mx/',
        45,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Mosso Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ayuntamientmochitlan.gob.mx/',
        45,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Noemi Quiñonez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ayuntamientmochitlan.gob.mx/',
        45,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Rocio Carranza Chino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ayuntamientmochitlan.gob.mx/',
        45,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Natividad Lopez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ayuntamientmochitlan.gob.mx/',
        45,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zully Janeth Mosso Roman',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ayuntamientmochitlan.gob.mx/',
        45,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Belinda Ivett Vargas Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.ayuntamientmochitlan.gob.mx/',
        45,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Juan Herrejon Ortiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://olinala.gob.mx/',
        46,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Hernandez Aquino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://olinala.gob.mx/',
        46,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nazhely Patron Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://olinala.gob.mx/',
        46,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ignacio Manuel Leonardo Navarrete',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://olinala.gob.mx/',
        46,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yoltsin Zeferino Santos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://olinala.gob.mx/',
        46,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Reyes Bello',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://olinala.gob.mx/',
        46,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marbeya Ayala Rendon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://olinala.gob.mx/',
        46,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efren Adame Montalvan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        47,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Benito Felicito',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        47,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Luz Lopez Hilario',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        47,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Torres Tapia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        47,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edith Vargas Dominguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        47,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Albertano Tapia Pelaez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        47,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Selene Mendoza Baños',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        47,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Alvarez Anica',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        47,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elida Garcia Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        47,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olivia Azucena Lopez Rogel',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ixcapuzalco.guerrero.gob.mx/',
        48,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isalia Balmaceda Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ixcapuzalco.guerrero.gob.mx/',
        48,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Alonso Martinez Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ixcapuzalco.guerrero.gob.mx/',
        48,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nohelia Flores Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ixcapuzalco.guerrero.gob.mx/',
        48,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ester Montoya Trujillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ixcapuzalco.guerrero.gob.mx/',
        48,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aureliano Rogel Popoca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://ixcapuzalco.guerrero.gob.mx/',
        48,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esteban Cardenas Santana',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://petatlan.guerrero.gob.mx/',
        49,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Galeana Bautista',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://petatlan.guerrero.gob.mx/',
        49,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Deyanira Viveros Valencia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://petatlan.guerrero.gob.mx/',
        49,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cristobal Bautista Galvan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://petatlan.guerrero.gob.mx/',
        49,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Janet Tellez Serna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://petatlan.guerrero.gob.mx/',
        49,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Juan Roman Bustos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://petatlan.guerrero.gob.mx/',
        49,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Martinez Pascacio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://petatlan.guerrero.gob.mx/',
        49,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maydoli Arreola Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://petatlan.guerrero.gob.mx/',
        49,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Rosales Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://petatlan.guerrero.gob.mx/',
        49,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Velazquez Lara',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.pilcaya.gob.mx/',
        50,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maricarmen Cecilia Dominguez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.pilcaya.gob.mx/',
        50,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gregorio Solano Amates',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.pilcaya.gob.mx/',
        50,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Martinez Figueroa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.pilcaya.gob.mx/',
        50,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anahi Jazmin Diaz Quiroz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.pilcaya.gob.mx/',
        50,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Juan Dominguez Santos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.pilcaya.gob.mx/',
        50,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rutilo Rodriguez Figueroa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.pilcaya.gob.mx/',
        50,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reynel Rodriguez Muñoz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.pungarabato.gob.mx',
        51,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Angel Perez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.pungarabato.gob.mx',
        51,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalba Pineda Mojica',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.pungarabato.gob.mx',
        51,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Manuel Chavez Ortuño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.pungarabato.gob.mx',
        51,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enio Perez Alvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.pungarabato.gob.mx',
        51,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Veronica Gutierrez Reynoso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.pungarabato.gob.mx',
        51,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Delia Laureano Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.pungarabato.gob.mx',
        51,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olivia Alcantar Santibañez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.pungarabato.gob.mx',
        51,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nicandro Mojica Alvear',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.pungarabato.gob.mx',
        51,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Crisoforo Castro Castro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://sites.google.com/site/quechultenangogro/home',
        52,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Perez Victoriano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://sites.google.com/site/quechultenangogro/home',
        52,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Reyes Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://sites.google.com/site/quechultenangogro/home',
        52,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Cuevas Calzada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://sites.google.com/site/quechultenangogro/home',
        52,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Liliana Salazar Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://sites.google.com/site/quechultenangogro/home',
        52,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marlen Santiago Bautista',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://sites.google.com/site/quechultenangogro/home',
        52,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Cruceño Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://sites.google.com/site/quechultenangogro/home',
        52,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Modesta Santiago Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://sites.google.com/site/quechultenangogro/home',
        52,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guillermina Mosso Robles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://sites.google.com/site/quechultenangogro/home',
        52,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agustin Ricardo Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        53,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Muñoz Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        53,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olga Orozco Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        53,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yanet Ignacio Trinidad',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        53,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nicolas Juarez Sierra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        53,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fausta Ricardo Pantaleon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        53,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Flores Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        53,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Filomeno Sierra Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        53,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Quiñonez Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        53,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tomas Hernandez Palma',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://sanmarcos.guerrero.gob.mx/',
        54,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angel Moreno Guinto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://sanmarcos.guerrero.gob.mx/',
        54,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carolina Rodriguez Vences',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://sanmarcos.guerrero.gob.mx/',
        54,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Abarca Chavez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://sanmarcos.guerrero.gob.mx/',
        54,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ezequiel Bailon Acatitla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://sanmarcos.guerrero.gob.mx/',
        54,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Mascada Bibiano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://sanmarcos.guerrero.gob.mx/',
        54,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Villanueva Agaton',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://sanmarcos.guerrero.gob.mx/',
        54,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Alberto Vazquez Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://sanmarcos.guerrero.gob.mx/',
        54,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isis Castillo Lucena',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://sanmarcos.guerrero.gob.mx/',
        54,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Mendoza Acosta',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        55,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Genesis Araujo Marcos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        55,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Margarita Verastegui Alvarado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        55,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Domingo Varona Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        55,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aurora Mendoza Duarte',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        55,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Sllim Rojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        55,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Deisy Crystal Gonzalez Bustamante',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        55,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nahum Barragan Barragan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        55,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Vailett Palacios Salanueva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        55,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcos Efren Parra Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.taxco.gob.mx',
        56,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andres Bahena Montero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.taxco.gob.mx',
        56,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Elena Hernandez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.taxco.gob.mx',
        56,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvino Geronimo Guzman Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.taxco.gob.mx',
        56,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Alberto Gomez Moronatti',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.taxco.gob.mx',
        56,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Ortega Fuentes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.taxco.gob.mx',
        56,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joaquin Diaz Bustos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.taxco.gob.mx',
        56,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Barrera Alday',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.taxco.gob.mx',
        56,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Castro Zambrano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.taxco.gob.mx',
        56,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Angel Perez Guadarrama',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.taxco.gob.mx',
        56,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Obdulia Naranjo Cabrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.taxco.gob.mx',
        56,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Henos Roque Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        57,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Apolinar Velente Nava',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        57,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lambertina Vargas Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        57,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yanileth Salmeron Tacuba',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        57,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Prudencio Marin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        57,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Susano Cano Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        57,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nancy Tornez Matildes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        57,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lilibeth Ramirez Leyva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        57,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Federico Cano Poblete',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        57,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Yasir Deloya Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        58,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Valentin Gutierrez Texta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        58,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Maria Abarca Torreblanca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        58,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Antonio Gallardo Mejia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        58,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emiterio Gama Quirino',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        58,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yesenia Soberanis Vargas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        58,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Valente Romero De La O',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        58,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mirian Gonzalez Mendiola',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        58,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Antonio Radilla Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        58,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efren Angel Romero Sotelo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        59,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Salgado Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        59,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nayelli Guadarrama Villalba',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        59,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lenin Serrano Espidola',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        59,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antelmo Aranda Benito',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        59,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Alvarado Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        59,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nayheli Alday Salgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        59,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Geovanni Guadalupe Patiño Arroyo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        59,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Cristobal Cervantes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        59,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ignacio Ocampo Zavaleta',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        60,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Abarca Almazan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        60,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vania Yitzel Benitez Taboada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        60,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aisen Magdalena Castrejon Rebollar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        60,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leonardo Camilo Altamirano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        60,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elizabeth Gonzalez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        60,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Humberto Nava Nava',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        60,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dalia Pineda Ayala',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        60,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucas Ayala Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        60,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vicente Jaimes Zagal',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tetipac.gob.mx/',
        61,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angel Ramos Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tetipac.gob.mx/',
        61,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Viviana Rivera Aleman',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tetipac.gob.mx/',
        61,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Arce Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tetipac.gob.mx/',
        61,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Evodio Pineda Castellanos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tetipac.gob.mx/',
        61,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Everardo Arturo Pacheco Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tetipac.gob.mx/',
        61,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Dominguez Brito',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.tetipac.gob.mx/',
        61,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Alcaraz Sosa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        62,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Jazmin Morales Muñoz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        62,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio De Los Santos Mosqueria',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        62,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Gutierrez Alvarado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        62,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alberto Loma Pablo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        62,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Elena Honorato Barrios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        62,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alexis Xiuhtlat Galan Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        62,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Angel Juarez Cabrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        62,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angelina De La Cruz Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        62,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Basilio Florentino Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        63,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Lopez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        63,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Manuel Carmona Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        63,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eloy Pedro Juarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        63,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maribelys Zacapala Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        63,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Quinidio Hernandez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        63,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carmelo Cristobal Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        63,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Cantu Faustino',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://tlacoapa.gob.mx/',
        64,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lazaro Vazquez Marcial',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://tlacoapa.gob.mx/',
        64,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mary Estela Espinoza Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://tlacoapa.gob.mx/',
        64,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Cariño Miranda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://tlacoapa.gob.mx/',
        64,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hugo Zeferino Mejia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://tlacoapa.gob.mx/',
        64,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayra Rodriguez Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://tlacoapa.gob.mx/',
        64,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorenzo Perez Rosendo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://tlacoapa.gob.mx/',
        64,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martin Mora Aguirre',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        65,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Morales Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        65,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Fe Perez Zepeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        65,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Briceyda Hurtado Santa Maria',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        65,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Flores Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        65,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Valdemar Cabrera Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        65,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paulino Nuñez Tavares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        65,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elpidio Marcos Lopez Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        66,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ofelio Romero Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        66,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elizabeth Morales Nava',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        66,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Flavia Vazquez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        66,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Magali Vazquez Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        66,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hermilio Eustaquio Zuñiga Vargas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        66,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leticia Ortiz Vidal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        66,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dionicio Merced Pichardo Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        67,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pavel Emmanuel Cardona Bazan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        67,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandra Jimenez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        67,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Flores Romano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        67,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cornelio Gonzalez Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        67,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Modesto Rivera Rosendo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        67,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anayeli Manzano Mosso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        67,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eladio Vazquez Sierra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        67,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emilio Torres Pantaleon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        67,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teresa De Jesus Camacho Acevedo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        67,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Honorio Morales Bonilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        67,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anabel Balbuena Lara',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        68,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dimna Celeste Peñaloza Nolasco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        68,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Celestino Blancas Avilez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        68,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nereyda Clemente Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        68,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cristobal Leon Aguirre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        68,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucila Molina Heredia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        68,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Manuel Laredo Galan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        68,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rene Rosendo Larios Rosas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        70,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Maldonado Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        70,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Balvina Leonor Martinez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        70,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Idalia Iris Melgarejo Villareal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        70,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Odilon Diaz Salvador',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        70,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nicolasa Gallardo Leyva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        70,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agustin Hernandez Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        70,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Arriaga Ramos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://xochihuehuetlan.guerrero.gob.mx/',
        71,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Divino Astudillo Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://xochihuehuetlan.guerrero.gob.mx/',
        71,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adriana Cuautla Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://xochihuehuetlan.guerrero.gob.mx/',
        71,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Sanchez Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://xochihuehuetlan.guerrero.gob.mx/',
        71,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Concepcion Ramos Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://xochihuehuetlan.guerrero.gob.mx/',
        71,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ivonne Astudillo Clemente',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://xochihuehuetlan.guerrero.gob.mx/',
        71,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adriana Teresa Garcia Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://xochihuehuetlan.guerrero.gob.mx/',
        71,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Sanchez Nestor',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        72,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bernabe Merino Santiago',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        72,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aurelia Morales Aparicio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        72,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Frederin Lopez De La Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        72,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Acasia Santiago Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        72,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pascual Macario Aniceto Sebastian',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        72,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcia De Jesus Silva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        72,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rolando Santiago Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        72,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernanda Luis Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        72,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joaquin Rosendo Luciano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        73,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joaquin Rivera Bernabe',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        73,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raquel Meregildo Matias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        73,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Genaro Arriaga Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        73,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cristina Carranza Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        73,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elodio Espinoza Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        73,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Merino Neri',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        73,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Sanchez Allec',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://zihuatanejodeazueta.gob.mx/',
        39,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elba Gonzalez Negrete',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://zihuatanejodeazueta.gob.mx/',
        39,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eleazar Lucatero Solis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://zihuatanejodeazueta.gob.mx/',
        39,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Lili Sanchez Silva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://zihuatanejodeazueta.gob.mx/',
        39,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bartolo Valle Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://zihuatanejodeazueta.gob.mx/',
        39,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isaias Lorenzo Cabrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://zihuatanejodeazueta.gob.mx/',
        39,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Viridiana Sanchez Nuñez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://zihuatanejodeazueta.gob.mx/',
        39,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paulino De Jesus Neri',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://zihuatanejodeazueta.gob.mx/',
        39,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Magali Lopez Ureña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://zihuatanejodeazueta.gob.mx/',
        39,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leticia Gomez Velazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://zihuatanejodeazueta.gob.mx/',
        39,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amador Campos Aleman',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://zihuatanejodeazueta.gob.mx/',
        39,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nadia Peñaloza Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://zihuatanejodeazueta.gob.mx/',
        39,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nieves Elizabeth Manzo Nava',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://zihuatanejodeazueta.gob.mx/',
        39,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gregorio Portillo Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.zirandaroalavanguardia.com/',
        74,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Correa Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.zirandaroalavanguardia.com/',
        74,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vanessa Gonzalez Ortuño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.zirandaroalavanguardia.com/',
        74,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Constantino Martinez Nambo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.zirandaroalavanguardia.com/',
        74,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Modesta Alcantar Gorrosquieta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.zirandaroalavanguardia.com/',
        74,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Onelia Ayala Rios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.zirandaroalavanguardia.com/',
        74,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Fombona Andaya',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.zirandaroalavanguardia.com/',
        74,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Ramos Tecorral',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        75,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Damaso Solis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        75,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yanet Ojeda Corraltitlan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        75,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Genaro Gasparillo Tecolapa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        75,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Nava Alejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        75,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vicente Zazocoteco Salgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        75,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cristina Tecolapa Tixteco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        75,
        12
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
              `)
}
