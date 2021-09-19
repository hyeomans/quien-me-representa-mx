exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 16).del()
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
        'Miguel Angel Villaseñor Arreola',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        1,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Arturo Valencia Caballero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.aguililla.gob.mx/',
        2,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Sanchez Juarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        3,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hermes Arnulfo Pacheco Bibriesca',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.angamacutiro.gob.mx',
        4,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Sanchez Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://angangueo.gob.mx/',
        5,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Cruz Lucatero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.apatzingan.gob.mx',
        6,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Agustin Torres Sandoval',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.aporo.gob.mx',
        7,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Maria Valencia Guillen',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        8,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Moreno Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.ario.gob.mx',
        9,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Palominos Cornejo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        10,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Esteban Avalos Arceo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.brisenas.gob.mx',
        11,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Baez Torres',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.buenavistamichoacan.gob.mx/portal/',
        12,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reynaldo Gomez Villalobos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.caracuaro.gob.mx/',
        13,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Morales Bonaparte',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        21,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Cortés Espíndola',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.charo.gob.mx/web/inicio.php',
        22,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Silva Gil',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.chavinda.gob.mx',
        23,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        24,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Adame Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        24,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Artemio Rojas Sixto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        24,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Albertina Sanchez Juarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        24,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Rojas Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        24,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Celedonio Romero Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        24,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emilio Sanchez Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        24,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isidro Hernandez Diego',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        24,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Bautista Hurtado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        24,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Campanur Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        24,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia Hernandez Pulido',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        24,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Ramos Alejo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.chilchota.gob.mx',
        25,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruben Dario Larios Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://chinicuila.gob.mx/',
        26,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ivan Guadalupe Lopez Colin',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://chucandiro.gob.mx',
        27,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandra Pimentel Espinoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://churintzio.gob.mx/web/inicio.php',
        28,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guillermo Torres Rojas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://churumuco.gob.mx/',
        29,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gildardo Ruiz Velazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        14,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Obdulia Esquivel Colin',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        15,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcela Velazquez Vazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.coeneo.gob.mx/',
        16,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Lilia Manzo Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        75,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Velazquez Orozco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://contepec.gob.mx/',
        17,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Jaime Garcia Dominguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://copandaro.gob.mx/web/inicio.php',
        18,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yolanda Sanchez Figueroa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://cotija.gob.mx',
        19,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Elia Milan Pintor',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.cuitzeo.gob.mx/web/inicio.php',
        20,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Infante Ayala',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://ecuandureo.gob.mx/web/inicio.php',
        30,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Maya Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.epitacio-huerta.gob.mx/web/inicio.php',
        31,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Calderon Castillejo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        32,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Alberto Andalla Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://gabrielzamora.gob.mx/',
        33,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Tellez Marin',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        34,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Humberto Gonzalez Villagomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://huandacareo.gob.mx/',
        36,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Contreras Vásques',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        37,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Varona Estrada',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        38,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Rocio Dominguez Nambo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://huiramba.gob.mx',
        39,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erick Magaña Garcidueñas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.indaparapeo.gob.mx',
        40,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Palomino Andrade',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://irimbo.gob.mx/web/inicio.php',
        41,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Enoc Tamayo Herrera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        42,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isidoro Mosqueda Estrada',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        43,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Muñoz Ledo Viveros',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.jimenezmich.gob.mx',
        44,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Elias Barajas Bautista',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.jiquilpan.gob.mx',
        45,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruben Robledo Agabo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        46,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cornelio Rios Paniagua',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        47,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Angelica Yañez Sierra',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        48,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruben De Jesus Gonzalez Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        35,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Samuel David Hidalgo Gallardo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.lapiedad.gob.mx',
        70,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Octavio Chavez Aguirre',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        49,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Itze Camacho Zapiain',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.lazaro-cardenas.gob.mx',
        50,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Antonio Salas Valencia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        76,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Froylan&nbsp; Alcauter Ibarra',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        51,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Jaime Hinojosa Campa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        52,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Luis Anguiano Partida',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        53,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfonso Jesús Martínez Alcázar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.morelia.gob.mx',
        54,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Xochitl&nbsp; Campos Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://morelosmich.gob.mx/web/inicio.php',
        55,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hugo Wulfrano Andrade Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.ayuntamientomugica.gob.mx/',
        56,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Onchi Castillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        57,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gonzalo&nbsp; Nares Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.nocupetaro.gob.mx/',
        58,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Antonio Espinoza Rochin',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.nparangaricutiro.gob.mx',
        59,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Carmen Carrillo&nbsp; Gaytan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.nuevourecho.gob.mx/',
        60,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Diaz Camarena',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://numaran.gob.mx/',
        61,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amado Gomez Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://ocampomichoacan.gob.mx/turistico/inicio.php',
        62,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Gerardo Dueñas Barragan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        63,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Lopez Melendez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        64,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eric Rene Padilla Andres',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        66,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Huriel Bautista Cabrera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        65,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Alberto Arreola Vazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.patzcuaro.gob.mx',
        67,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paulina Marlene Herrera Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        68,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Arroyo Arroyo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://periban.gob.mx/sitio/',
        69,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fco. Javier&nbsp; Lopez Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://purepero.gob.mx/',
        71,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Manuel Vazquez Tapia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://puruandiro.gob.mx/',
        72,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador&nbsp; Camacho Serrato',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://querendaro.gob.mx/',
        73,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Estrada Barriga',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://quiroga.gob.mx/',
        74,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Galvez Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.sahuayomich.gob.mx',
        77,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Araceli Saucedo Reyes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.santaclaradelcobre.gob.mx/',
        80,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efrain Serrato Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        78,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Vega Calderon',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://santaanamayamich.gob.mx/',
        79,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Alejandra Vanegas Rios',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.senguiooficial.gob.mx',
        81,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Laura Mondragon Benites',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.susupuato.gob.mx/',
        82,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Artemio Moriya Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.tacambaro.gob.mx',
        83,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Mora Mora',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.ayuntamientotancitaro.gob.mx/',
        84,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodrigo Campos Cuevas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        85,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Melgoza Montañez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.tangancicuaro.gob.mx',
        86,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Francisca Licea Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.tanhuato.gob.mx/web/inicio.php',
        87,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfonso Janitzio Chavez Andrade',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://taretan.gob.mx/web/inicio.php',
        88,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bladimir Alejandro Gonzalez Gutierrez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://tarimbaro.gob.mx',
        89,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramon Del Val Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        90,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marisol Lopez Figueroa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://https',
        91,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Glenda Mendoza Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        92,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Catalina Perez Negron Espinoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.tiquicheo.gob.mx/',
        93,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Medina Montoya',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        94,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agustin Magaña Parocua',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://tlazazalca.gob.mx/',
        95,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Evangelina Villanueva Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        96,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Apolonio Ureña Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        97,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vicente Gomez Nuñez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.turicato.gob.mx/',
        98,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Paredes Correa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.tuxpanmichoacan.gob.mx/',
        99,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Serrato Suarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.tuzantla.gob.mx/',
        100,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'J Guadalupe Ramirez Reyes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        101,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Nauneli Perez Negron Aviles',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.hayuntamientotzitziomich.gob.mx/',
        102,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ignacio Benjamin Campos Equihua',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        103,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yolanda Mayela Macias Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        104,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Froylan Zambrano Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://villamar.gob.mx/',
        105,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'J Dolores Martinez Garibay',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        106,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Moises Navarro Arellano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        107,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Felipe Leon Balbanera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.zacapumich.gob.mx/',
        108,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Soto Delgado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        109,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'J Jesus Zamudio Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        110,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Correa Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        111,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Itzel Gaona Bedolla',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        'http://www.ziracuaretiro.gob.mx/',
        112,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Antonio Ixtlahuac Orihuela',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-01, 2024-08-31)'::daterange,
        null,
        113,
        16
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

              `)
}
