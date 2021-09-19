exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 6).del()
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
        'Salvador Bueno Arceo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.armeria.gob.mx',
        6,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Cervantes Cázares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.armeria.gob.mx',
        6,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paula Cárdenas Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.armeria.gob.mx',
        6,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Rosales Campos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.armeria.gob.mx',
        6,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Delia Ortiz López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.armeria.gob.mx',
        6,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalío González Cortez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.armeria.gob.mx',
        6,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Héctor Javier Fierros Gaytán',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.armeria.gob.mx',
        6,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eusebio Mesina Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.armeria.gob.mx',
        6,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayra Alejandra Evangelista Leal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.armeria.gob.mx',
        6,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Berenice Valdovinos Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.armeria.gob.mx',
        6,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leoncio Alfonso Moran Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.colima.gob.mx',
        1,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Suárez Zaizar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.colima.gob.mx',
        1,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Magdalena Harayd Ureña Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.colima.gob.mx',
        1,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Cárdenas Sanchéz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.colima.gob.mx',
        1,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Rossana Macías Becerril',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.colima.gob.mx',
        1,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Orlando Godínez Pineda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.colima.gob.mx',
        1,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Melisa González Cárdenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.colima.gob.mx',
        1,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Briceño Alcarz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.colima.gob.mx',
        1,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Héctor Insúa García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.colima.gob.mx',
        1,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sayra Guadalupe Romero Silva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.colima.gob.mx',
        1,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Walter Alejandro Oldenbourg Ochoa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.colima.gob.mx',
        1,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Chapula De La Mora',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.colima.gob.mx',
        1,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Donaldo Ricardo Zuñiga',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.comala.gob.mx',
        2,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Ramos García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.comala.gob.mx',
        2,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elba De La Vega Pascual',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.comala.gob.mx',
        2,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Urbano Carpio Rincon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.comala.gob.mx',
        2,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Guadalupe Ávila Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.comala.gob.mx',
        2,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Edel González Montes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.comala.gob.mx',
        2,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Araceli Carrillo Ascencio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.comala.gob.mx',
        2,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucia Valencia Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.comala.gob.mx',
        2,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramsés Eugenio Díaz Valencia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.comala.gob.mx',
        2,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Guadalupe Benavides Florian',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://coquimatlan.gob.mx',
        3,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hormisdas Escamilla Alcaraz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://coquimatlan.gob.mx',
        3,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Elena Alcalá Macías',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://coquimatlan.gob.mx',
        3,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Flores Ortega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://coquimatlan.gob.mx',
        3,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marta Galván Castellanos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://coquimatlan.gob.mx',
        3,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leonor Alcaraz Manzo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://coquimatlan.gob.mx',
        3,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abel Cárdenas González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://coquimatlan.gob.mx',
        3,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Teresa Guerrero Padilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://coquimatlan.gob.mx',
        3,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Fuentes Pedroza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://coquimatlan.gob.mx',
        3,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Mendoza Godinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.cuauhtemoc-col.gob.mx',
        4,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raúl García Vallejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.cuauhtemoc-col.gob.mx',
        4,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Del Consuelo Rincón Castrejón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.cuauhtemoc-col.gob.mx',
        4,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emilio Puga Corona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.cuauhtemoc-col.gob.mx',
        4,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reyna Jazmín López Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.cuauhtemoc-col.gob.mx',
        4,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Ceballos Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.cuauhtemoc-col.gob.mx',
        4,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Arcelia Rodríguez Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.cuauhtemoc-col.gob.mx',
        4,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ivet Antonia Solís Campos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.cuauhtemoc-col.gob.mx',
        4,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Rodríguez Burgos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.cuauhtemoc-col.gob.mx',
        4,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Héctor Antonio Álvarez Mancilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.cuauhtemoc-col.gob.mx',
        4,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Carrasco Chavez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.ixtlahuacan.col.gob.mx',
        7,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Ramírez Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.ixtlahuacan.col.gob.mx',
        7,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lesly Yesenia Virgen Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.ixtlahuacan.col.gob.mx',
        7,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Alberto Vargas Alvizas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.ixtlahuacan.col.gob.mx',
        7,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juana Sánchez Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.ixtlahuacan.col.gob.mx',
        7,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karla Nallely Cortez Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.ixtlahuacan.col.gob.mx',
        7,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jonatan Abiel Olivares Acevedo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.ixtlahuacan.col.gob.mx',
        7,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gladis Esmeralda Mares Blanco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.ixtlahuacan.col.gob.mx',
        7,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Alberto Hernández Salas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.ixtlahuacan.col.gob.mx',
        7,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Griselda Martinez Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.manzanillo.gob.mx',
        8,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Janett Guadalupe Gutiérrez Quintero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.manzanillo.gob.mx',
        8,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fabián Gonzalo Soto Macedo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.manzanillo.gob.mx',
        8,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De Los Ángeles Camberos Olachea',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.manzanillo.gob.mx',
        8,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Salinas Sanchéz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.manzanillo.gob.mx',
        8,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Josefina Roblada Lara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.manzanillo.gob.mx',
        8,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hipólito Villaseñor Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.manzanillo.gob.mx',
        8,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Arellano Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.manzanillo.gob.mx',
        8,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Leticia Sosa Govea',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.manzanillo.gob.mx',
        8,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Virgilio Mendoza Amezcua',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.manzanillo.gob.mx',
        8,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Velasco Grageda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.manzanillo.gob.mx',
        8,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Zepeda Ruelas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.manzanillo.gob.mx',
        8,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lilia Figueroa Larios',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        null,
        9,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andrea Guadalupe Ochoa Barajas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        null,
        9,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adrián Michel Figueroa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        null,
        9,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Silvia Ceja Palacios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        null,
        9,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Christian Javier Palacios Figueroa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        null,
        9,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Horacio Mancilla González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        null,
        9,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yoana Rosalía Ortiz Figueroa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        null,
        9,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jonathan Martín Ochoa Jiménez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        null,
        9,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Levit Vázquez Anguiano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        null,
        9,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elias Antonio Lozano Ochoa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.tecoman.gob.mx',
        10,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ángel Antonio Venegas López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.tecoman.gob.mx',
        10,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Karent Medina Machuca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.tecoman.gob.mx',
        10,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Ma. Rodríguez Silva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.tecoman.gob.mx',
        10,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Rosa Quintana Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.tecoman.gob.mx',
        10,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Serapio De Casas Miramontes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.tecoman.gob.mx',
        10,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jacchely Isabel Buenrostro Macías',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.tecoman.gob.mx',
        10,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Anguiano Michel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.tecoman.gob.mx',
        10,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isis Carmen Sanchéz Llerenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.tecoman.gob.mx',
        10,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo García Negrete',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.tecoman.gob.mx',
        10,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eloísa Chavarrias Barajas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.tecoman.gob.mx',
        10,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santiago Chávez Chávez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.tecoman.gob.mx',
        10,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe Cruz Calvario',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.villadealvarez.gob.mx',
        5,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Josué Eulalio Vergara Santana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.villadealvarez.gob.mx',
        5,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Graciela Jiménez Meza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.villadealvarez.gob.mx',
        5,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Torres González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.villadealvarez.gob.mx',
        5,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erandi Yunuen Rodríguez Alonzo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.villadealvarez.gob.mx',
        5,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Ángel Barbosa Alcántar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.villadealvarez.gob.mx',
        5,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Gloria Cortés Sandoval',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.villadealvarez.gob.mx',
        5,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Perla Luz Vázquez Montes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.villadealvarez.gob.mx',
        5,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Padilla López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.villadealvarez.gob.mx',
        5,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yulenny Guylaine Cortés León',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.villadealvarez.gob.mx',
        5,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Héctor Magaña Lara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.villadealvarez.gob.mx',
        5,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayrén Polanco Gaytán',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-15, 2021-10-15)'::daterange,
        'http://www.villadealvarez.gob.mx',
        5,
        6
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
              `)
}
