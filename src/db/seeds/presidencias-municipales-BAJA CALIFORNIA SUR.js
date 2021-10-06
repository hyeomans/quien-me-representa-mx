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
        'Iliana Guadalupe Talamantes Higuera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Lorena Isela Berber Holguin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Ma Concepcion Magaña Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Honorio Arvizu Cota',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Lourdes Guadalupe Vazquez Velazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Ruben Agustin Arce Cordero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Tomas Lopez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Sonia Murillo Macias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Aracely Villicaña Camargo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Milena Paola Quiroga Romero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Ma. Teresa 	 Ruiz Soto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Nestor Alejandro Araiza Castellon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Perla Ivette Carreon Solis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Rogelio Ramos Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Osiris Del Carmen Lara Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Homero Montaño Angulo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Luis Enrique 	 Lucero Meza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Abimael Ibarra Abundez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Jazmin Estrella Ruiz Cota',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Yadane Garcia Carrazco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Lugarda Guadalupe Leon Lucero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Estuardo Gonzalez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Paola Margarita Cota Davis',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Anai Guadalupe Romero Arce',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Delfina Rivas Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Rosalia Romero Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Ivan 	 Bautista Saens',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Francisco Efrain Meza Mayoral',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Anastacio Talamantes Davis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Oscar Leggs Castro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Rogelio Alberto 	 Tornero Carrillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Irene Galindo Román',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Raymundo Zamora Ceseña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Lucia Sánchez Juárez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Cristobal Omar Orbe Vargas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Guillermina Díaz Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Jose Catarino Flores Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Sarahi 	 Ramos Murillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Rosa Edith Victoria Espinoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Andrea Patricia 	 Ramirez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Roberto Jimenez Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Edith Aguilar Villavicencio',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Esther Hinojosa Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Isai Bautista Bautista',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Edith Zuñiga Rosas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Luis Sandez Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Yahaira Lizbeth Contreras Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Leon Roberto Lujan Pruitt',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Maria Jesus Ventura Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Kassandra Romero Amador',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
        'Mario Paul Aviles Cota',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-25, 2024-09-24)'::daterange,
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
