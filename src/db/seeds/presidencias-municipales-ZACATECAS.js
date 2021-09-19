exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 32).del()
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
        'Gabriela Arellano Quezada',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        1,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yanet Morales Huizar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        2,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosaura Sánchez Bañuelos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        3,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Yaneth Correa Cortes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        4,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ángel Gerardo Hernández Vázquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        5,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Regis Zuñiga',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        6,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Alfredo Lazalde Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.chalchihuites.gob.mx/',
        9,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Martinez Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        7,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Javier Arcos Ruiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        8,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Medina Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        15,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Coronado Gamez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        41,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Saul Monreal Avila',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.seguiremoshaciendohistoria.gob.mx/',
        10,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Adrian Reyes Santana',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://genarocodina.gob.mx/',
        12,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Campa Arteaga',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        13,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Garcia Castañeda',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://presidencianieves.org.mx/index.php',
        14,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fredy Gonzalez Vazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        16,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Cesar Chavez Padilla',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://gobiernodeguadalupe.gob.mx/',
        17,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julieta Isamar Camacho Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.huanuscozac.gob.mx/',
        18,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Noe Guadalupe Esparza Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.jalpa.gob.mx/',
        19,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Humberto Salazar Contreras',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://jerez.gob.mx/',
        20,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maricela Herrera Vazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        21,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvano Hassan Garduño Serrano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.hayuntamientojaz.com.mx/',
        22,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Rocio Moreno Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.juchipila.gob.mx',
        23,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo Aguilar Andrade',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.loretozac.mx/',
        24,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Guadalupe Silva Medina',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.luismoyazac.org.mx/',
        25,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Macias Zuñiga',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.mazapil.gob.mx/',
        26,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodolfo Cisneros Gallegos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        27,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Monica Rodarte Davila',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        28,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Perales Gandara',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://miguelauzazac.net/index.php',
        29,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Cabral Mota',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.momaxzac.org.mx/',
        30,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Acosta Galvan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.monteescobedo.gob.mx',
        31,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Robles De Santiago',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        32,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramon Rojas Reynoso',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.moyahua.gob.mx/',
        33,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Manuel Jimenez Fuentes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.nochistlan.gob.mx',
        34,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Becerra De La Rosa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.noriadeangeles16.org.mx/',
        35,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Lopez Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://ojocaliente.gob.mx/',
        36,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Rodriguez Valdez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        37,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Tellez Aguayo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.pinos.gob.mx',
        38,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Cordova Longoria',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.riograndezac.gob.mx',
        39,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Salas Cordero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        40,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Manuel Gonzalez Dorado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.santamariadelapazzac.gob.mx/',
        58,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Alan Murillo Murillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.sombrerete.gob.mx/',
        42,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fabiola Rodriguez Saldivar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        43,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gilberto Martinez Robles',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        44,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gloria Vanessa Rodriguez Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        45,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cuauhtemoc De La Torre Flores',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.tepetongozacatecas.gob.mx/',
        46,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Reyes Torres Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.teul.gob.mx',
        47,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Arellano Anaya',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.tlaltenangozac.gob.mx/',
        48,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Rocha Romo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        57,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arcelia Muro Guzman',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        11,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eleuterio Ramos Leal',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        49,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Refugio Avitud Guerrero',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        50,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pier Michel Rios Ruiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.villadecos.gob.mx',
        51,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Barbaro Flores Lozano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://mpiodevillagarcia.com.mx/home.html',
        52,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ronal Garcia Reyes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        53,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Omar Baudelio Marin Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        null,
        54,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Gonzalez Alvarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://www.villanueva.gob.mx/',
        55,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Miranda Castro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-09-15, 2024-09-14)'::daterange,
        'http://capitaldezacatecas.gob.mx/',
        56,
        32
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

              `)
}
