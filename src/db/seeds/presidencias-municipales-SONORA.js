exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 26).del()
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
        'Rafael Tobillas Duron Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        1,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Alfonso Montaño Durazo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.aguaprieta.gob.mx',
        2,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Víctor Manuel Balderrama Cárdenas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://alamos.gob.mx/',
        62,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Ángel Valenzuela Mendivil',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.altar.gob.mx',
        3,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Flores Robles',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        4,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Isela Medina Maldonado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.arizpe.gob.mx/',
        5,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yolanda Castañeda Quezada',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        6,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Alfonso Sierra Villaescusa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        7,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Belisario Pacheco Galindo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        8,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Angel Medina Valdez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        9,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosendo López Dávalos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.bacoachi.gob.mx/',
        10,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Serge Enriquez Tolano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.bacum.gob.mx/',
        58,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Heberto Corella Yescas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.banamichi.gob.mx/',
        11,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Javier Cedano Tirado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        12,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adam Eduardo Langford Kemson',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.bavispe.gob.mx',
        13,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Florentino Jusacamea Valencia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.benitojuarezsonora.gob.mx/',
        71,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yessica Yuridia Barraza Celaya',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        14,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abraham David Mier Nogales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://caborcasonora.gob.mx/',
        46,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Javier Lamarque Cano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.cajeme.gob.mx',
        59,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Quiroga Jiménez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.cananea.gob.mx',
        15,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sylvia Lenika Placencia Leal',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.carbo.gob.mx',
        47,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Aaron Palomino Ayon',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.cucurpe.gob.mx/',
        16,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Diego Urías Varela',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.cumpas.gob.mx/',
        17,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Misael Acuña Acuña',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        18,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Fuentes Aguilar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.empalme.gob.mx',
        60,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Tadeo Mendivil Valenzuela',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.etchojoa.gob.mx/',
        63,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Valdez Solís',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        19,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Enrique Valdez Reyes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.sonoyta.gob.mx/',
        70,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Vinicio Durazo Durazo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        20,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karla Córdova González',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.guaymas.gob.mx',
        61,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Francisco Astiazarán Gutierrez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.hermosillo.gob.mx',
        49,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mavidenia Ramos Holguín',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        21,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Alberto Urquijo Ramírez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        22,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Jesús Flores Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.huatabampo.gob.mx',
        64,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Eloina Lugo Méndez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        23,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Leonardo García Acedo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        24,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Platt Escalante',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        48,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Ortez Guerrero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.magdalenadekino.gob.mx/',
        25,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramón Rogelio Esquer Gálvez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        50,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Alfredo Quijada Márquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        26,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Lorenzo Villegas Vázquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        27,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Luis Portillo Arvizu',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        28,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Morghen Rivera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.nacozari.gob.mx/',
        29,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Martín Martínez Bojorquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.navojoa.gob.mx',
        65,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Francisco Gim Nogales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        30,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Verónica Valenzuela Avilés',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        66,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorenzo Favian Santa María Brockman',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        51,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz Imelda Ortíz García',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.oquitoa.gob.mx/',
        31,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Janeth Mazón García',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        52,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Iván Pivac Carrillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        53,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Ignacio Zazueta Ruiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        67,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Luis Grijalva Robles',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.rayonsonora.gob.mx/',
        54,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Mendívil Valenzuela',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        68,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Carlos Galindo Duarte',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        32,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Alberto Ballesteros Quiroga',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        33,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abel González Ambriz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.sanignacioriomuerto.gob.mx/',
        72,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa María Encinas Cornejo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        34,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santos González Yescas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.sanluisrc.gob.mx/sanluis/',
        55,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joaquín Munguía Coronado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        56,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramón Ángel Noriega Figueroa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.sanpedrodelacueva.gob.mx/',
        35,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Avechuco Zérega',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.santaana.gob.mx/',
        36,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'René Peralta Torres',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        37,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Osvaldo Parra Soto',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.saric.gob.mx/',
        38,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efraín Moreno Miranda',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.soyopa.gob.mx/',
        39,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Armando Carrillo Duarte',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        40,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aravea García Quijada',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.tepache.gob.mx/',
        41,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuela Duarte López',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        42,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elvia Yuridia Mollinedo Urías',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.tubutama.gob.mx/',
        43,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Manuel Valenzuela Salcido',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://www.ures.gob.mx/',
        57,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Javier Campa Durazo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        'http://https',
        44,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Oved Robinson Bours Del Castillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        45,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yadira Espinoza Méndez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-16, 2024-09-15)'::daterange,
        null,
        69,
        26
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

              `)
}
