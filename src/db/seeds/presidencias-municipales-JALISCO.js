exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 14).del()
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
        'Marco Tulio Moya Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://acatic.com.mx/',
        1,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Enrique Velasco Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.acatlandejuarez.gob.mx',
        2,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Bladimir Arreola Alvarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.ahualulcodemercado.jalisco.gob.mx',
        3,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz Elvira Duran Valenzuela',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.amacueca.jalisco.gob.mx/index.html',
        4,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Josue Saul Perez Ocampo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.amatitan.gob.mx',
        5,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Valentin Serrano Jimenez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.ameca.gob.mx',
        6,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Isabel Bañuelos Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.arandas.gob.mx',
        8,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santiago Leon Castro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        10,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz Teresa Valle Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.atengo.gob.mx',
        11,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayra Isela Guitron Contreras',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.atenguillo.gob.mx',
        12,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Aurelio Fonseca Olivares',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.atotonilco.gob.mx',
        13,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karla Alejandra Cruz Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.atoyac.jalisco.gob.mx/index.html',
        14,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo Salvador Robles Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.autlan.gob.mx',
        15,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodolfo Hernandez Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.ayotlanjalisco.gob.mx',
        16,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Angel Prudencio Vargas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.ayutla.gob.mx/',
        17,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santos Gonzalez 0',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        19,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Silva Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://cabocorrientes.gob.mx',
        20,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Oropeza Ruvalcaba',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.canadasdeobregon.jalisco.gob.mx/',
        117,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Pelayo Guzman',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://casimirocastillojal.gob.mx/',
        21,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro De Jesus Aguirre Curiel',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.chapala.gob.mx',
        31,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcos Miguel Bramasco Palacios',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.chimaltitan.gob.mx/',
        32,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alvaro Gonzalez Alvarado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.chiquilistlan.gob.mx/',
        33,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Eliseo Salas Chavez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.cihuatlan.gob.mx/',
        22,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Ibarra Flores',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.cocula.gob.mx',
        25,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Julian Quezada Santoyo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.colotlan.gob.mx',
        26,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Salvador Sanchez Navarro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.concepciondebuenosaires.jalisco.gob.mx/',
        27,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'J Jesus Delgado Camberos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.cuautitlan-jalisco.gob.mx/Portal/',
        28,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Manuel Torres Arreola',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://cuautlajalisco.gob.mx/',
        29,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ubaldo Chavez Delgadillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.ayuntamiento-cuquio.com/',
        30,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Garcia Navarro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        34,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriel Ramirez Santana',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://ejutlajalisco.com/ayuntamiento.html',
        35,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Martin Camarena Baltazar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.elarenal.jalisco.gob.mx',
        9,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Milton Carlos Cardenas Osorio',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://elgrullo.gob.mx/',
        39,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nelson Gonzalez Figueroa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://ellimon.jalisco.gob.mx/index.html',
        56,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Zaid Santillan Cortes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.elsalto.gob.mx/',
        72,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gilberto Antonio Palomar Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.encarnaciondediazjal.gob.mx',
        36,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Camarena Gonzalez Rubio',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://etzatlan.gob.mx/',
        37,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nestor Emmanuel De La Cruz Macias',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        38,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Feliciano Castro Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.guachinango.gob.mx/',
        40,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Pablo Lemus Navarro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.guadalajara.gob.mx',
        41,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teresa De Jesus Gonzalez Carmona',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.hostotipaquillojalisco.gob.mx/',
        42,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arcelia Diaz Marquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.huejucar.jalisco.gob.mx',
        43,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gloria Elena Moreno Muñoz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://huejuquillaelalto.com.mx/',
        44,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Heriberto Garcia Murillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.ixtlahuacandelosmembrillos.gob.mx/',
        46,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Haro Ocampo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        47,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Alvarez Campos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.jalostotitlan.gob.mx/hoy/',
        48,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Celestino Molina Sahagun',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://portal.jamayjalisco.gob.mx/',
        49,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Ivan Gonzalez Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.jesusmariajalisco.gob.mx',
        50,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

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
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.jilotlan.gob.mx/',
        51,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Miguel Gomez Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.jocotepec.gob.mx',
        52,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco De La Cerda Suarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.juanacatlan.gob.mx',
        53,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Rangel Fletes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        54,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Hernandez Becerra',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.labarca.gob.mx',
        18,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Gomez Carrasco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        45,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Miguel Sanchez Del Rio',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.lamanzanilladelapaz.jalisco.gob.mx/',
        59,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tecutli Jose Guadalupe Gomez Villalobos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.ldm.gob.mx/',
        55,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Trejo Tellez Giron',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.magdalenajalisco.gob.mx',
        57,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Rubio Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.mascota.gob.mx',
        60,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Enrique Magaña Valencia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.mazamitla.gob.mx/',
        61,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leonardo Gomez Lomeli',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.mexticacan.jalisco.gob.mx/index.html',
        62,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Rolando De La Cruz Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.mezquitic.gob.mx/website/index.php',
        63,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eva Maria Rubio Becerrera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.mixtlan.gob.mx/',
        64,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Josue Avila Moreno',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        65,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Jasso Romo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.ojuelosdejalisco.gob.mx/',
        66,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Humberto Amezcua Bautista',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        67,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Isrrael Ascencio Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.poncitlan.gob.mx/',
        68,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Alberto Michel Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.puertovallarta.gob.mx',
        69,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Contreras Godoy',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        71,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Luz Elena Guzman Cardona',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        73,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose De Jesus Sanchez Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.sandiegodealejandria.gob.mx/',
        74,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Rafael Valencia Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.sangabrieljalisco.com',
        24,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Noe Plascencia Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.sanignaciocg.gob.mx',
        125,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro De Anda Lozano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        75,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Octavio Gonzalez Ruiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.sanjuanitodeescobedo.jalisco.gob.mx/',
        7,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Isabel Loza Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        76,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Patricia Reyes Ruiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        77,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Evangelina Perez Villarreal',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://sanmartinjalisco.webnode.mx/',
        78,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Moises Rodriguez Camacho',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        79,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Alfonso Navarro Trujillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.sanmiguelelalto.gob.mx',
        80,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mirna Citlalli Amaya De Luna',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.tlaquepaque.gob.mx',
        99,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Aurora Ponce Peña',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.sansebastiandeloeste.gob.mx',
        81,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Minerva Robles Ortega',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.santamariadelosangeles.gob.mx/',
        82,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Sandoval Farias',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        58,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Daniel Carrion Calvario',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        83,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Porfirio Casillas Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.talajalisco.gob.mx',
        84,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia Sanchez Moro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.talpadeallende.gob.mx/',
        85,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Everardo Gutierrez Castañeda',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.tamazuladegordiano.gob.mx',
        86,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio Zamora Velazco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.tapalpa-gob.com/',
        87,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martin Larios Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        88,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Cortes Cortes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://techalutademontenegro.jalisco.gob.mx/',
        90,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Eliud Saldaña Vazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        89,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Manuel Cardenas Castillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.tenamaxtlan.com.mx/',
        91,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Manuel Vallejo Pedroza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.teocaltiche.gob.mx',
        92,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Sahagun Quiñonez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        93,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Angel Esquivias Esquivias',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.tepatitlan.gob.mx',
        94,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Alfonso Magallanes Rubio',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.tequilajalisco.gob.mx',
        95,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Ascencion Murguia Santiago',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        96,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martin Silva Ramirez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        97,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Zamora Zamora',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.tlajomulco.gob.mx',
        98,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sofia Asuncion Lopez Palacios',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.tolimanjalisco.gob.mx/',
        100,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Ruiz Benavides',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.tomatlanjal.gob.mx/',
        101,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Armando Chavez Davalos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.tonala.gob.mx',
        102,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Uribe Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.tonayajalisco.gob.mx/',
        103,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Martin Hernandez Alvarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        104,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz Elena Cardenas Salazar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.totatiche.jalisco.gob.mx/',
        105,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Velazquez Iñiguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://tototlan.jalisco.gob.mx/index.html',
        106,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramon Reynaga Araiza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        107,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Antonio Aceves Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.tuxcueca.gob.mx/',
        108,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Gil Montes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.tuxpan-jal.gob.mx',
        109,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paula Gutierrez Magaña',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        110,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gala Del Carmen Lepe Galvan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.uniondetula.gob.mx',
        111,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Renteria Torres',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        112,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Manuel Chavez Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.valledejuarezjalisco.gob.mx/',
        113,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Sencion Guzman',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.villacorona.gob.mx/',
        114,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Alfredo Solis Sarrelangue',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://villaguerrerojal.com.mx/',
        115,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Cruz Villalpando',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.villahidalgo.gob.mx/',
        116,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Guadalupe Sanchez Zavalza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://villapurificacion.gob.mx/',
        70,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Danniela Julemmy Vazquez Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.yahualica.gob.mx',
        118,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hilda Cachux Andrade',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.zacoalcodetorres.gob.mx/',
        119,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Jose Frangie Saade',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.zapopan.gob.mx',
        120,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Gerardo Sedano Vizcaino',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.zapotiltic.gob.mx',
        121,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Cruz Arias Reyes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.zapotitlandevadillo.gob.mx',
        122,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Saul Padilla Gutierrez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.zapotlandelrey.jalisco.gob.mx',
        123,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Barragan Sanchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.zapotlan.gob.mx',
        23,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Morales Sandoval',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.zapotlanejo.gob.mx/2016/',
        124,
        14
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

              `)
}
