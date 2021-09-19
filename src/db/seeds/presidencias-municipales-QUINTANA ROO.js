exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 23).del()
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
        'Manuel Alexander Zetina Aguiluz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://bacalar.gob.mx/index.html',
        10,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Elias Abuxapqui Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://bacalar.gob.mx/index.html',
        10,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Yahaira Balam Güemez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://bacalar.gob.mx/index.html',
        10,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manrrique Rodriguez Ventura',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://bacalar.gob.mx/index.html',
        10,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Belen Elena Iuit Pantoja',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://bacalar.gob.mx/index.html',
        10,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodolfo Villegas Pech',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://bacalar.gob.mx/index.html',
        10,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aurora Del Carmen Franco Suarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://bacalar.gob.mx/index.html',
        10,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rivelino Valdivia Villaseca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://bacalar.gob.mx/index.html',
        10,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nelia Guadalupe Uc Sosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://bacalar.gob.mx/index.html',
        10,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Trinidad Guillen Nuñez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://bacalar.gob.mx/index.html',
        10,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Elena Hermelinda Lezama Espinosa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cancun.gob.mx',
        1,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Clara Emilia Diaz Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cancun.gob.mx',
        1,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Arturo Sanen Cervantes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cancun.gob.mx',
        1,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paola Elizabeth Moreno Cordova',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cancun.gob.mx',
        1,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Gutierrez Fernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cancun.gob.mx',
        1,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Anahi Gonzalez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cancun.gob.mx',
        1,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Zenteno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cancun.gob.mx',
        1,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maricruz Carrillo Orozco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cancun.gob.mx',
        1,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Humberto Aldana Navarro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cancun.gob.mx',
        1,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorena Martinez Bellos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cancun.gob.mx',
        1,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Issan Janix Alanis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cancun.gob.mx',
        1,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaqueline Hernández Fuentes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cancun.gob.mx',
        1,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Acosta Toledo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cancun.gob.mx',
        1,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reyna Lesley Tamayo Carballo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cancun.gob.mx',
        1,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Pablo Bustamante Beltran',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cancun.gob.mx',
        1,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Niurka Alba Saliva Benitez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cancun.gob.mx',
        1,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Oscar Joaquin Delbouis',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cozumel.gob.mx',
        2,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Elias Farah Ceh',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cozumel.gob.mx',
        2,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rita Adelfa Rodriguez Alonso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cozumel.gob.mx',
        2,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Juan Santamaria Casanova',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cozumel.gob.mx',
        2,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karen Del Carmen Cruz Caamaño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cozumel.gob.mx',
        2,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hugo Jesus Mendoza Estrada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cozumel.gob.mx',
        2,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ligia Maria Goreti Valle Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cozumel.gob.mx',
        2,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juanita Obdulia Alonso Marrufo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cozumel.gob.mx',
        2,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Perla Cecilia Tun Pech',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cozumel.gob.mx',
        2,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fidencio Balam Puc',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.cozumel.gob.mx',
        2,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Esquivel Vargas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.felipecarrillopuerto.gob.mx',
        3,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rene Antonio Ramos Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.felipecarrillopuerto.gob.mx',
        3,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Rosa Ek Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.felipecarrillopuerto.gob.mx',
        3,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Ernesto Gracias Muñoz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.felipecarrillopuerto.gob.mx',
        3,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Cristina Gonzalez Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.felipecarrillopuerto.gob.mx',
        3,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isidro Huex Mis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.felipecarrillopuerto.gob.mx',
        3,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Guadalupe Chi Ay',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.felipecarrillopuerto.gob.mx',
        3,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maricarmen Candelaria Hernandez Solís',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.felipecarrillopuerto.gob.mx',
        3,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paoly Elizabeth Perera Maldonado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.felipecarrillopuerto.gob.mx',
        3,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Ángel Chacon Arcos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.felipecarrillopuerto.gob.mx',
        3,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Luis Carrillo Soberanis',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.islamujeres.gob.mx',
        4,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Roman Martin Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.islamujeres.gob.mx',
        4,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Linda Cristal Martinez Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.islamujeres.gob.mx',
        4,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Genaro Gonzalez Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.islamujeres.gob.mx',
        4,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alba Rocio Maldonado Camara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.islamujeres.gob.mx',
        4,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Daniel Gomez Canche',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.islamujeres.gob.mx',
        4,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elsy Georgina Rivero Arjona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.islamujeres.gob.mx',
        4,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Humberto Gasca Arceo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.islamujeres.gob.mx',
        4,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cecilia Adriana Sosa Arroyo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.islamujeres.gob.mx',
        4,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Fautino Uicab Alcocer',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.islamujeres.gob.mx',
        4,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sofia Alcocer Alcocer',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://josemariamorelos.gob.mx/index.php',
        5,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dulce Lorena Itza Batun',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://josemariamorelos.gob.mx/index.php',
        5,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Rene Tah Koyoc',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://josemariamorelos.gob.mx/index.php',
        5,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Heydi Guadalupe Yam Quijano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://josemariamorelos.gob.mx/index.php',
        5,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Miguel Borges Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://josemariamorelos.gob.mx/index.php',
        5,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alicia Cristal Gonzalez Varguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://josemariamorelos.gob.mx/index.php',
        5,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Antonio Pacheco Che',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://josemariamorelos.gob.mx/index.php',
        5,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Domingo Flota Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://josemariamorelos.gob.mx/index.php',
        5,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erick Noe Borges Yam',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://josemariamorelos.gob.mx/index.php',
        5,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rossana Romero Ávila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://josemariamorelos.gob.mx/index.php',
        5,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Josue Nivardo Mena Villanueva',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.lazarocardenas.gob.mx',
        6,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fidencio Kau Grinda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.lazarocardenas.gob.mx',
        6,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leticia Alcocer Avila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.lazarocardenas.gob.mx',
        6,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tomas De Cantobery Cupul Ayil',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.lazarocardenas.gob.mx',
        6,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lourdes Del Socorro Deinis Lugo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.lazarocardenas.gob.mx',
        6,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruben Alvarez Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.lazarocardenas.gob.mx',
        6,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teresita De Jesus Tuz Ciau',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.lazarocardenas.gob.mx',
        6,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Trinidad García Arguelles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.lazarocardenas.gob.mx',
        6,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fabiola Ileana Cervera Vidal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.lazarocardenas.gob.mx',
        6,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Elena Ruíz Molina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.lazarocardenas.gob.mx',
        6,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Otoniel Segovia Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-03-09, 2021-09-30)'::daterange,
        'http://www.opb.gob.mx',
        7,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Murrieta Bautista',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-03-09, 2021-09-30)'::daterange,
        'http://www.opb.gob.mx',
        7,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nancy Leisly Petul Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-03-09, 2021-09-30)'::daterange,
        'http://www.opb.gob.mx',
        7,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adrian Sanchez Dominguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-03-09, 2021-09-30)'::daterange,
        'http://www.opb.gob.mx',
        7,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Santiago Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-03-09, 2021-09-30)'::daterange,
        'http://www.opb.gob.mx',
        7,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Antonio Rodriguez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-03-09, 2021-09-30)'::daterange,
        'http://www.opb.gob.mx',
        7,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Bella Reyes Mejia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-03-09, 2021-09-30)'::daterange,
        'http://www.opb.gob.mx',
        7,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wilander Javier Tun Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-03-09, 2021-09-30)'::daterange,
        'http://www.opb.gob.mx',
        7,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rufina Cruz Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-03-09, 2021-09-30)'::daterange,
        'http://www.opb.gob.mx',
        7,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Jimenez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-03-09, 2021-09-30)'::daterange,
        'http://www.opb.gob.mx',
        7,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Alfonso Mauricio Velazquez Villegas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-03-09, 2021-09-30)'::daterange,
        'http://www.opb.gob.mx',
        7,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Levin Zelaya Espinoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-03-09, 2021-09-30)'::daterange,
        'http://www.opb.gob.mx',
        7,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cinthia Yamilie Millán Estrela',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-03-09, 2021-09-30)'::daterange,
        'http://www.opb.gob.mx',
        7,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emmanuel Torres Yah',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-03-09, 2021-09-30)'::daterange,
        'http://www.opb.gob.mx',
        7,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Hadad Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-03-09, 2021-09-30)'::daterange,
        'http://www.opb.gob.mx',
        7,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Manuel Valencia Cardín',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-03-09, 2021-09-30)'::daterange,
        'http://www.opb.gob.mx',
        7,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Lynn Fernandez Piña',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.puertomorelos.gob.mx/',
        11,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Luisa Bentacourt Canul',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.puertomorelos.gob.mx/',
        11,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Mendoza Reyna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.puertomorelos.gob.mx/',
        11,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gelmy Lucina De La Candelaria Uribe Estrella',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.puertomorelos.gob.mx/',
        11,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Alberto Rodriguez Carcaño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.puertomorelos.gob.mx/',
        11,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elda Leonor Cahuich Fuentes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.puertomorelos.gob.mx/',
        11,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Humberto Alvarado Villarreal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.puertomorelos.gob.mx/',
        11,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Pablo Aguilera Negron',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.puertomorelos.gob.mx/',
        11,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yazmín Del Carmen Vivas Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.puertomorelos.gob.mx/',
        11,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nohemí Ludivina Menchaca Castellanos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.puertomorelos.gob.mx/',
        11,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Esther Beristain Navarrete',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://gobiernodesolidaridad.gob.mx/',
        8,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Neri Deyanira Martinez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://gobiernodesolidaridad.gob.mx/',
        8,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elio Lara Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://gobiernodesolidaridad.gob.mx/',
        8,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Veronica Del Rocio Gallardo Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://gobiernodesolidaridad.gob.mx/',
        8,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vladimir Montejo Campos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://gobiernodesolidaridad.gob.mx/',
        8,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Barbara Aylin Delgado Uc',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://gobiernodesolidaridad.gob.mx/',
        8,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Enrique Guerra Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://gobiernodesolidaridad.gob.mx/',
        8,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz Elena Muñoz Carranza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://gobiernodesolidaridad.gob.mx/',
        8,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Francisco Berzunza Dajer',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://gobiernodesolidaridad.gob.mx/',
        8,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Jesus Meza Villegas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://gobiernodesolidaridad.gob.mx/',
        8,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Cristina Torres Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://gobiernodesolidaridad.gob.mx/',
        8,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Orlando Muñoz Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://gobiernodesolidaridad.gob.mx/',
        8,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz Fabiola Verónica Ballesteros Xicotencatl',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://gobiernodesolidaridad.gob.mx/',
        8,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo Garcia Utrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://gobiernodesolidaridad.gob.mx/',
        8,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leslie Berenice Baeza Soto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://gobiernodesolidaridad.gob.mx/',
        8,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martín De La Cruz Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://gobiernodesolidaridad.gob.mx/',
        8,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Mas Tah',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.tulum.gob.mx/',
        9,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Keivyn Javier Alegria Santuario',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.tulum.gob.mx/',
        9,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Magali Dzib Raigosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.tulum.gob.mx/',
        9,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adolfo Hau Yeh',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.tulum.gob.mx/',
        9,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emelia Patricia De La Torre Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.tulum.gob.mx/',
        9,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'William Gerardo Garcia Dominguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.tulum.gob.mx/',
        9,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eva Rosely Rocha Geded',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.tulum.gob.mx/',
        9,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eloisa Balam Mazum',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.tulum.gob.mx/',
        9,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marciano Dzul Caamal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.tulum.gob.mx/',
        9,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yenny Del Carmen López Landero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-09-30, 2021-09-30)'::daterange,
        'http://www.tulum.gob.mx/',
        9,
        23
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
              `)
}
