exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 31).del()
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
        'Maria Lorenza Ayala Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        1,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Cruz Herrera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        2,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Iginia Adalberta Zapata Chi',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://https',
        3,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Freddy Miguel Basto Basto',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        4,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruby Alejandrina Sosa Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        5,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Manuel Campos Baeza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://https',
        6,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abigail De Guadalupe Perez Vazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://cansahcab.gob.mx/',
        7,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Fernely Polanco Tun',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        8,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paulino Ek Chan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        9,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wilian Rafael Bermon Conrrado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        10,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Asuncion Ramirez Perera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        11,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angel Hermenegildo Cardoz Fernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        12,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roger Humberto Sanchez Angulo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        16,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Concepcion Tamay Noh',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        17,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lizbet Concepcion Rivero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        18,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucio Balam Herrera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://chemax.gob.mx/',
        19,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Medina Martin',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        21,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amilcar Abricel Reyes Marin',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://https',
        20,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isidro Kauil Chan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        22,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erwin Obet Martin Alcocer',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        23,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Clemente Julian Cano Chan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        24,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hiselle Del Carmen Diaz Del Castillo Canche M',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        13,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tila Rosado Chalas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://https',
        14,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Manuel Soberanis Villanueva',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        15,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Antonio Perez Cabrera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        25,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Wilberto Flota Ake',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        26,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ismael Aguilar Puc',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.dzidzantun.gob.mx/#',
        27,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Armando Herrera Rivera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.dzilamdebravo.gob.mx/periodo-2018-2021/',
        28,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Christian Ismael Carrillo Baeza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        29,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Francisco Perez Koh',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        30,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gloria Magaly Raz Cohuo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        31,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Eugenia Mena Alcocer',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        32,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodolfo Abelardo Castillo Huchim',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        33,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Enrique Euan Franco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        34,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Herberth Ismael Ojeda Sarabia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        35,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Marisol Gongora Salas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        36,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roger Marcel Benitez Espinola',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        37,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edna Marisa Franco Ceballos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://https',
        38,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Raquel Pech Chi',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        39,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Warnel May Escobar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        40,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edwin Jose Bojorquez Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        41,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorena Patricia Gamboa May',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        42,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Crecencio Noh Cen',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        43,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Valentin Pech Dzib',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        44,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Manuel Yah Moo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        45,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Ines Pacheco Poot',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        46,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fredi Evaristo Interian Bojorquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        47,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Camilo Delelys May Cauich',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        48,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrry Josue Kantun Chan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        49,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Renan Alberto Barrera Concha',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.merida.gob.mx',
        50,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Alejandro Cutz Dominguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        51,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roger Rafael Aguilar Arroyo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        52,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Eloisa Castro Contreras',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        53,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Ynes Chim Ake',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        54,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandi Emanuel Calan Ordoñez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        55,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Jose Madrazo Gio',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.oxkutzcabyucatan.gob.mx/',
        56,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Adiel Mena Narvaez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        57,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Renan Gabriel Jimenez Tah',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://ayuntamientopeto.com/',
        58,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julian Zacarias Curi',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.ayuntamientodeprogreso.gob.mx',
        59,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Minelia De Jesus Uicab Cel',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        60,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Floricely Del Carmen Alcocer Marfil',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        61,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvia Ester Interian Espadas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        62,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Samuel Mayen Poot',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        63,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe Antonio Marrufo Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        65,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Ernestina Manzanero Polanco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        64,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Galdino Poot Moreno',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        66,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Isabel Dzul Leo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        67,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipa Nery Mena Aguilar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        68,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Jacobo Cuxin Alfaro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        69,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela De Jesus Pool Camelo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.sucila.gob.mx/',
        70,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Duarte Caamal',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://hsudzal.gob.mx/',
        71,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose De La Cruz Pacheco Bazan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        72,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abraham Ake Uc',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        73,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Neyda Maria Puerto Canche',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        74,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aida Maria De Jesus Fernandez Gongora',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        75,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joel Isaac Achach Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        76,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Antonio Aragon Uicab',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        77,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Msrbin Erbey Carrillo Sosa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        78,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Jose Avila Romero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        79,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe De Jesus Medina Coli',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        80,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gloria Aracelly Cocom Can',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        81,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Jacobo Lopez Alvarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        82,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Alfredo Marrufo Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://telchacpuerto.gob.mx/INICIO/',
        83,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angel Antonio Gonzalez Escalante',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://temax.gob.mx/',
        84,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Manuel Kuyoc Castillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.ayuntamientotemozon.gob.mx/',
        85,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Weyler Aaron Coral Manrique',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        86,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Melesio Canche Ruiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://tetiz.gob.mx/',
        87,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Bernardo Rodriguez Arceo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://teya.gob.mx/',
        88,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Gerardo Montalvo Mata',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        89,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marsi Rosana Ceh Teh',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        90,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alicia Aurora Gongora Mejia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://tinum.gob.mx/',
        91,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramon Nonato Tun Chan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        92,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fabian Andres De Jesus Rivera Frias',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        93,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angelica Panti Cervera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        94,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Rene Lara Cauich',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        95,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Francisco Couoh Suaste',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.tizimin.gob.mx/',
        96,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Ricardo Kuh Mendez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        97,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Freddy Alejandro Carrillo Blanco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        98,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yamili Ivony Cupul Vazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        99,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gener Ismael Pech Leon',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        100,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gaspar Ventura Cisneros Polanco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.uman.gob.mx/',
        101,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Fernandez Arceo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.valladolid.gob.mx/',
        102,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lourdes Maria Tah Maas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        103,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Genri Alberto Pacab Herrera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        104,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'William Jesus Gorocica Falcon',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        105,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Alberto Cool Ake',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        106,
        31
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

              `)
}
