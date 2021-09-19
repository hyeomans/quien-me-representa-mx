exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 4).del()
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
        'Luis Felipe Mora Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.calakmul.gob.mx',
        11,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yajaira Lagunes Marquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.calakmul.gob.mx',
        11,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nicolas Lopez Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.calakmul.gob.mx',
        11,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martina Onofre Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.calakmul.gob.mx',
        11,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Humberto Castillo Arciga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.calakmul.gob.mx',
        11,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Del Refugio Ca?as Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.calakmul.gob.mx',
        11,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Moises Carreon Cabrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.calakmul.gob.mx',
        11,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Gutierrez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.calakmul.gob.mx',
        11,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Isabel Ba?os Ba?os',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.calakmul.gob.mx',
        11,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roque Jacinto Sanchez Golib',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.calkini.gob.mx',
        2,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rita Maria Carvajal Padilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.calkini.gob.mx',
        2,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Silverio Caamal Zi',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.calkini.gob.mx',
        2,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gloria Crishian Maas Baltazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.calkini.gob.mx',
        2,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Esteban Colli Balam',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.calkini.gob.mx',
        2,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rubi Candelaria Estrada Osalde',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.calkini.gob.mx',
        2,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorenzo Blanqueto Cordova',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.calkini.gob.mx',
        2,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Baltazar Peralta Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.calkini.gob.mx',
        2,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irayde Del Carmen Avilez Kantun',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.calkini.gob.mx',
        2,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Gabriel Moo Colli',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.calkini.gob.mx',
        2,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eliseo Fernandez Montufar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiocampeche.gob.mx/',
        1,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sara Evelin Escalante Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiocampeche.gob.mx/',
        1,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paul Alfredo Arce Ontiveros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiocampeche.gob.mx/',
        1,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yolanda Del Carmen Montalvo Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiocampeche.gob.mx/',
        1,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arbin Eduardo Gamboa Jimenez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiocampeche.gob.mx/',
        1,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elena Ucan Moo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiocampeche.gob.mx/',
        1,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aldo Roman Contreras Uc',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiocampeche.gob.mx/',
        1,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniela Lastra Abreu',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiocampeche.gob.mx/',
        1,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Israel Reyes Fuentes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiocampeche.gob.mx/',
        1,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maricela Salazar Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiocampeche.gob.mx/',
        1,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agustin Alejandro Rosado Sierra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiocampeche.gob.mx/',
        1,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Jesus Zavala Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.municipiocampeche.gob.mx/',
        1,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Farias Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.candelaria.gob.mx/',
        10,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Contreras Alcazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.candelaria.gob.mx/',
        10,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Javier Farias Bailon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.candelaria.gob.mx/',
        10,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yolanda Valles Pech',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.candelaria.gob.mx/',
        10,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Moises Pech Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.candelaria.gob.mx/',
        10,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karen Lizeth Avila Esquivel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.candelaria.gob.mx/',
        10,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eder Alonso Valles Vadillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.candelaria.gob.mx/',
        10,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Abreu Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.candelaria.gob.mx/',
        10,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roman Mijares Elizarraras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.candelaria.gob.mx/',
        10,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Roman Rosas Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.carmen.gob.mx/home/',
        3,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Jesus Bolon Cano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.carmen.gob.mx/home/',
        3,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Perfecto Balan Chi',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.carmen.gob.mx/home/',
        3,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Domitila Rico Camacho',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.carmen.gob.mx/home/',
        3,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Ramon Peralta May',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.carmen.gob.mx/home/',
        3,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayela Cristina Martinez Arroyo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.carmen.gob.mx/home/',
        3,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Haryl Kenny Sanchez Espinoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.carmen.gob.mx/home/',
        3,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Cesar Pulido Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.carmen.gob.mx/home/',
        3,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rocio Del Carmen Cardenas Argaez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.carmen.gob.mx/home/',
        3,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Martin Leon Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.champoton.gob.mx/transparencia3/index.php/es/',
        4,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Melissa Sarmiento Angulo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.champoton.gob.mx/transparencia3/index.php/es/',
        4,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elias Noe Baeza Ake',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.champoton.gob.mx/transparencia3/index.php/es/',
        4,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniela Alejandra Uribe Haydar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.champoton.gob.mx/transparencia3/index.php/es/',
        4,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Faustino Martinez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.champoton.gob.mx/transparencia3/index.php/es/',
        4,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Lourdes Calderon Cabrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.champoton.gob.mx/transparencia3/index.php/es/',
        4,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Lira Puente',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.champoton.gob.mx/transparencia3/index.php/es/',
        4,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isidora Lopez Campos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.champoton.gob.mx/transparencia3/index.php/es/',
        4,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruben Sanchez Chable',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.champoton.gob.mx/transparencia3/index.php/es/',
        4,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodolfo Bautista Puc',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.escarcega.gob.mx',
        9,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yolanda Del Carmen Estrella Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.escarcega.gob.mx',
        9,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maximo Quintal Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.escarcega.gob.mx',
        9,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elizabeth Amaya Mijangos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.escarcega.gob.mx',
        9,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvio Ilderman Moreno Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.escarcega.gob.mx',
        9,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anielka Lizette Palma Dominguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.escarcega.gob.mx',
        9,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nicolasa Elvira Morales Kim',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.escarcega.gob.mx',
        9,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Mario Luna Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.escarcega.gob.mx',
        9,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Soledad Hermosillo Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.escarcega.gob.mx',
        9,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Dolores Brito Pech',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.hecelchakan.gob.mx',
        5,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Guadalupe Balam Mezeta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.hecelchakan.gob.mx',
        5,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Chuc Moo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.hecelchakan.gob.mx',
        5,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Elena Tuz Haas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.hecelchakan.gob.mx',
        5,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Migue Angel Almeyda Huchin',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.hecelchakan.gob.mx',
        5,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisca Rivero Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.hecelchakan.gob.mx',
        5,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fredy Alberto Euan Chi',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.hecelchakan.gob.mx',
        5,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vidalia Coox Moo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.hecelchakan.gob.mx',
        5,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antinea De Jesus Garza Espadas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.hecelchakan.gob.mx',
        5,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandy Areli Baas Cauich',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.hopelchen.gob.mx',
        6,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eddie Manuel Koh Cot',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.hopelchen.gob.mx',
        6,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Delmy Del Rocio Novelo Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.hopelchen.gob.mx',
        6,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorenzo Cauich Tzel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.hopelchen.gob.mx',
        6,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Consuelo Campos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.hopelchen.gob.mx',
        6,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcos Isaac Mis Zazueta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.hopelchen.gob.mx',
        6,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maritza Diaz Dominguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.palizada.gob.mx',
        7,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rubicel Esquivel Correa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.palizada.gob.mx',
        7,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yesenia Diaz Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.palizada.gob.mx',
        7,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edilberto Canul Pat',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.palizada.gob.mx',
        7,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Teresa Lopez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.palizada.gob.mx',
        7,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edel Chan Canul',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.palizada.gob.mx',
        7,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Del Rosario Camara Correa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.palizada.gob.mx',
        7,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Beatriz Garcia Del Rivero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.palizada.gob.mx',
        7,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vicente Guerrero Del Rivero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        'http://www.palizada.gob.mx',
        7,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Carmen Uc Canul',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        8,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Jose Pacheco Camal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        8,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Uc Ku',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        8,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mauricio Uicab Tuyub',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        8,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Elena Cen Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        8,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Antonio Can Hau',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        8,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erick De La Cruz Euan Caamal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        8,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Poot Chan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        8,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brenda Adelaida Moo Chan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-01, 2021-09-30)'::daterange,
        null,
        8,
        4
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
              `)
}
