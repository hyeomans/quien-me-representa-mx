exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 3).del()
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
        'Jose Walter Valenzuela Acosta',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.comondu.gob.mx',
        1,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosendo Ozuna Chavez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.comondu.gob.mx',
        1,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Concepcion Maga?a Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.comondu.gob.mx',
        1,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Gerardo Garcia Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.comondu.gob.mx',
        1,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Zoraida Ceja De Dios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.comondu.gob.mx',
        1,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Genaro Javier Rodriguez Ocsejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.comondu.gob.mx',
        1,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Celene Venalonzo Camacho',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.comondu.gob.mx',
        1,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Alejandro Garcia Berber',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.comondu.gob.mx',
        1,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Carmen Nieblas Meza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.comondu.gob.mx',
        1,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Garcia Rosas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.comondu.gob.mx',
        1,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruben Gregorio Muñoz Alvarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.lapaz.gob.mx',
        3,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Pavel Castro Rios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.lapaz.gob.mx',
        3,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcela Amador Morga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.lapaz.gob.mx',
        3,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Maria Aviles Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.lapaz.gob.mx',
        3,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Yolanda Robledo Galaviz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.lapaz.gob.mx',
        3,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Ramon Dominguez Leyva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.lapaz.gob.mx',
        3,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cecilia Higuera Murillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.lapaz.gob.mx',
        3,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Homero Davis Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.lapaz.gob.mx',
        3,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Beatriz Adriana Hernandez Paredes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.lapaz.gob.mx',
        3,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pilar Eduardo Carballo Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.lapaz.gob.mx',
        3,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Iris Celina Alvarez Banderas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.lapaz.gob.mx',
        3,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Ivan Mario Rica?o Enciso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.lapaz.gob.mx',
        3,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arely Arce Peralta',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.loreto.gob.ec/loreto/',
        5,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lizeth Areane Arce Ojeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.loreto.gob.ec/loreto/',
        5,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Iran Silverio Rodriguez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.loreto.gob.ec/loreto/',
        5,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lidia Higuera Amador',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.loreto.gob.ec/loreto/',
        5,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Manuel Delgado Vargas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.loreto.gob.ec/loreto/',
        5,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Carmina Sedano Talamantes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.loreto.gob.ec/loreto/',
        5,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Reyes Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.loreto.gob.ec/loreto/',
        5,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Armida Castro Guzman',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.loscabos.gob.mx',
        4,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irene Roman Salgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.loscabos.gob.mx',
        4,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Flavio Antonio Olachea Monta?o',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.loscabos.gob.mx',
        4,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irene Berenice Serrato Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.loscabos.gob.mx',
        4,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Torres Tovar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.loscabos.gob.mx',
        4,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Georgina Roldan Avi?a',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.loscabos.gob.mx',
        4,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Israel Lopez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.loscabos.gob.mx',
        4,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isabel Dolores Teodora Castro Aguirre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.loscabos.gob.mx',
        4,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Christian Agundez Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.loscabos.gob.mx',
        4,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julia Maria Rodriguez Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.loscabos.gob.mx',
        4,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Armando Lopez Espinoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.loscabos.gob.mx',
        4,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tabita Rodriguez Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        'http://www.loscabos.gob.mx',
        4,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Felipe Prado Bautista',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        null,
        2,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Fausto Gonzalez Mayoral',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        null,
        2,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oralia Zu?iga Espinoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        null,
        2,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Manuel Talamantes Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        null,
        2,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hiroshima Fuerte Nu?ez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        null,
        2,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Ignacio Arce Villegas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        null,
        2,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zaira Lizette Aviles Cota',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        null,
        2,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Contreras Leyva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        null,
        2,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lizbeth Emerita Patron Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        null,
        2,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Jesus Osuna Rangel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-27, 2021-09-27)'::daterange,
        null,
        2,
        3
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
              `)
}
