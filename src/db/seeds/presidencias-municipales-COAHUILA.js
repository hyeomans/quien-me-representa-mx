exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 5).del()
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
        'Marisol Treviño Puente',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://conoceabasolo.gob.mx/aba/h-ayuntamiento/',
        1,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Melisa Isamar Rodriguez Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://conoceabasolo.gob.mx/aba/h-ayuntamiento/',
        1,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Armando Rodriguez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://conoceabasolo.gob.mx/aba/h-ayuntamiento/',
        1,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Luisa Rodriguez Coss',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://conoceabasolo.gob.mx/aba/h-ayuntamiento/',
        1,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Guerrero Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://conoceabasolo.gob.mx/aba/h-ayuntamiento/',
        1,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Eugenia Valdez Bernal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://conoceabasolo.gob.mx/aba/h-ayuntamiento/',
        1,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Herlinda Garcia Trevi?o',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://conoceabasolo.gob.mx/aba/h-ayuntamiento/',
        1,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zulema Torres Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://conoceabasolo.gob.mx/aba/h-ayuntamiento/',
        1,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto De Los Santos Vazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.todossomosacuna.com/',
        2,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Muruaga Gallegos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.todossomosacuna.com/',
        2,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Elizabeth Aldrete Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.todossomosacuna.com/',
        2,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karina Elizabeth Cruz Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.todossomosacuna.com/',
        2,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Alonso Flores Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.todossomosacuna.com/',
        2,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Luis Segovia Zertuche',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.todossomosacuna.com/',
        2,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ursula Cari?o Estrada Lomeli',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.todossomosacuna.com/',
        2,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Garza Gallardo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.todossomosacuna.com/',
        2,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cintia Magali Juarez Riojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.todossomosacuna.com/',
        2,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Eduardo Arocha Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.todossomosacuna.com/',
        2,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Luz Murillo Rivas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.todossomosacuna.com/',
        2,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Andres Pati?o De La Garza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.todossomosacuna.com/',
        2,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Jorge Ramon Montemayor',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.todossomosacuna.com/',
        2,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Maria Velazquez Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.todossomosacuna.com/',
        2,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Delia Amalia Gonzalez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.todossomosacuna.com/',
        2,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Roberto Garza Crosby',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.todossomosacuna.com/',
        2,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carmen Vela Ibarra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.todossomosacuna.com/',
        2,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Marcela Saucedo Robles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.todossomosacuna.com/',
        2,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Marcela Saucedo Robles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.todossomosacuna.com/',
        2,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Marcela Saucedo Robles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.todossomosacuna.com/',
        2,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Marcela Saucedo Robles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.todossomosacuna.com/',
        2,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antero Alberto Alvarado Saldivar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        3,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose De Jesus Diaz Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        3,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Del Carmen Reyes Tovar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        3,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Enrique Ramirez Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        3,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pura Ofelia Betancourt Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        3,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Alfonso Rueda Villasana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        3,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Veronica Segura Aguillon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        3,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Armando Esquivel Cerda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        3,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Los Angeles Navarro Valdes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        3,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Christian Nazaret Saucedo Zu?iga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        3,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Jesus Gonzalez Villarreal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        3,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Nakasima Triana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        3,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Everardo Duran Flores',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        4,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Manuel Aleman Cepeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        4,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erendira Velazquez Sanchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        4,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Guadalupe Casta?eda Lizcano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        4,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Beatriz Adriana Duarte Lara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        4,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Ibarra Calderon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        4,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Patricia Marquez Estrada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        4,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Sanchez Avalos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        4,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Marcela Valdes Carbonell',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        4,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Ramiro Melo Valdes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        4,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marta Elida Hernandez Chavez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        4,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elsa Graciela Valdes Valdes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        4,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcos Amador Garza Gonzalez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        5,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Roque Vargas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        5,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosaura Azucena Garcia Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        5,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arcadio Fuentes Padilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        5,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Deyanira Celene Vargas Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        5,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Humberto Mendiola Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        5,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lizzette Villalvazo Leal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        5,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramoncita Roque Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        5,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Soto Ojeda',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Valle Corpus',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elva Zamora Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Moises Pe?a Puente',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yesenia Guadalupe Flores Carreon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Isela Marines Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Castillo Sifuentes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Carlos Limas Avalos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Antonio Garza Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Domingo Arzola Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maribel Costilla Arevalo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        6,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yolanda Cantu Moncada',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        7,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Guadalupe Carielo Osoria',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        7,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esteban Rodriguez Hinojosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        7,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Lumberas Favela',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        7,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Rene Arredondo Ayala',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        7,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Jesus Cardenas Zamarron',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        7,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santos Garza Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        7,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marivel Mendoza Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        7,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dulce Belen De La Rosa Segura',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        8,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ubaldina Moreno Villasana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        8,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rene Medina Esparza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        8,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olga Lidia Sanchez Daniel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        8,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Aguero Rostro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        8,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayra Estela Hernandez Mejia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        8,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Simon Chavez Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        8,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Linda Barboza Elizondo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        8,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jonathan Avalos Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        9,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Perales Esparza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        9,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Cipriana Mercado Campa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        9,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carmen Ruiz Alvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        9,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nohemi Rivera Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        9,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vicente Vega Santoyo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        9,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Concepcion Garcia Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        9,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adolfo Retana Antunez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        9,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariela Marin Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        9,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Manuel Torres Diaz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        9,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Concepcion Delgado Lara',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        9,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Maribel Coronado Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        9,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Crecencia Calderon Ya?ez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        9,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Navarro Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        9,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Raul Hernandez Nu?ez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        9,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Milvia Idalia Lucio Moral',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        9,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Florencio Siller Linaje',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        10,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gregorio Iribarren Delgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        10,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Nohemi Cortinas Casta?eda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        10,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Isaac Cardenas Leija',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        10,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz Maria Rincon Barboza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        10,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Armando Hernandez Molina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        10,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Rosario Pe?a Palacios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        10,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Armando Marquez Rios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        10,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paola Estefania Gamez Garza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        10,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alberto Gaytan Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        10,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodrigo Rivas Urbina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        10,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Elizabeth De Luna Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        10,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramiro Omar Rojas Li?an',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        10,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Lourdes Ramirez Leal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        10,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Guerrero Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        10,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Obdulia Elizabeth Cisneros Noriega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        10,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Gilberto Salas Aguirre',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        11,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alberto Johnatan Iracheta Tovar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        11,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Herlinda Samaniego Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        11,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Amado Marines Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        11,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Elva Cepeda Enriquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        11,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Javier Alonzo Navarro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        11,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Enrique Aleman Espinoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        11,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Patricia Vazquez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        11,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Matilde Estrada Torres',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://wwwguerrerocoah.gob.mx',
        12,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Yolanda Aguilar Rivas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://wwwguerrerocoah.gob.mx',
        12,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Javier Esquivel Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://wwwguerrerocoah.gob.mx',
        12,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Leticia Mata Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://wwwguerrerocoah.gob.mx',
        12,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Espinoza Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://wwwguerrerocoah.gob.mx',
        12,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amelia Flores Valdez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://wwwguerrerocoah.gob.mx',
        12,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Angel Serrato Jasso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://wwwguerrerocoah.gob.mx',
        12,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andres Mata Santana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://wwwguerrerocoah.gob.mx',
        12,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Delia Pimentel Gomez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        13,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Rosario Mireles Navarro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        13,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Eduardo Cortez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        13,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Natalia Guadalupe Hernandez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        13,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Arce Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        13,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elda Janeth Flores Ibarra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        13,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wendy Nallely Garcia Mercado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        13,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cristela Martinez Goytia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        13,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Pecina Villarreal',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        14,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Miguel Viera Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        14,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De Jesus Palacios Ponce',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        14,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Alejandro Ramirez Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        14,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nieves Lopez Villegas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        14,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Ramirez Velazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        14,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rolando Olivo Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        14,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gema Gonzalez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        14,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Carmen Duron Olivares',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        15,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Araceli Quintero Rivas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        15,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Martin Gonzalez Rangel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        15,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amelia Corona Velazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        15,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Adrian Porfirio Guajardo Valdez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        15,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angelita Rosales Zamora',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        15,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Veronica Rodriguez Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        15,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Cesar Mejia Cervantes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        15,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andres Fernando Vazquez Garza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        16,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cipriano Ramos Olvera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        16,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Velia Menchaca Maldonado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        16,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Armendariz Maldonado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        16,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Judith Irasema Palos Vazquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        16,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Camporredondo Villarreal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        16,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Alicia Rodriguez Santillana',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        16,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalinda Arredondo Esquivel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        16,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Horacio Piña Avila',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.matamoroscoahuila.gob.mx',
        17,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Ricardo Ramirez Esquivel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.matamoroscoahuila.gob.mx',
        17,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Medina Ibarra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.matamoroscoahuila.gob.mx',
        17,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Beltran Huitron',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.matamoroscoahuila.gob.mx',
        17,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olympia Marin De Leon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.matamoroscoahuila.gob.mx',
        17,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Montes Jasso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.matamoroscoahuila.gob.mx',
        17,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Azalea Itzel Huitron Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.matamoroscoahuila.gob.mx',
        17,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Joel Herrera Delgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.matamoroscoahuila.gob.mx',
        17,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isidra Jimenez Navarro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.matamoroscoahuila.gob.mx',
        17,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gonzalo Barrios Esparza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.matamoroscoahuila.gob.mx',
        17,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Ayup Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.matamoroscoahuila.gob.mx',
        17,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Evangelina Chavez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.matamoroscoahuila.gob.mx',
        17,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brisli Eduardo De Jesus Barker Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.matamoroscoahuila.gob.mx',
        17,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De Los Reyes Esparza Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.matamoroscoahuila.gob.mx',
        17,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Godines Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.matamoroscoahuila.gob.mx',
        17,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lizeth Inungaray Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.matamoroscoahuila.gob.mx',
        17,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Alfredo Paredes Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.monclova.gob.mx',
        18,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Ariel Venegas Castilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.monclova.gob.mx',
        18,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Teresa De Leon Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.monclova.gob.mx',
        18,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Theodoros Kalionchiz De La Fuente',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.monclova.gob.mx',
        18,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wenddy Maylen Carlos Piza?a',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.monclova.gob.mx',
        18,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Alfonso Maldonado Escobedo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.monclova.gob.mx',
        18,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Aurora Barrios Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.monclova.gob.mx',
        18,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Menchaca Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.monclova.gob.mx',
        18,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Griselda Irazema Arreguin Cuellar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.monclova.gob.mx',
        18,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erick Guillermo Zapata Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.monclova.gob.mx',
        18,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hilda Rivera Cazares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.monclova.gob.mx',
        18,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Garcia Andrade',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.monclova.gob.mx',
        18,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lourdes Kamar Gomez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.monclova.gob.mx',
        18,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Delfina Villa Candelaria',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.monclova.gob.mx',
        18,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Flores Sosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.monclova.gob.mx',
        18,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Maga?a Huitron',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.monclova.gob.mx',
        18,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mercedes Arlet Botello Maldonado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.monclova.gob.mx',
        18,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elva Lucila Garza De La Cerda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.monclova.gob.mx',
        18,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Xavier De Hoyos Perales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        19,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wilfredo Martinez Onofre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        19,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Leticia Hernandez Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        19,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cesar Valdez Medina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        19,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norma Aracely Cervantes Ruiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        19,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Alberto Casas Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        19,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Encarnacion Guadalupe Martinez Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        19,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Magdalena De Hoyos De Hoyos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        19,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luisa Alejandra Del Carmen Santos Cadena',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        20,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alicia Angelica Pruneda Alvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        20,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodrigo Antonio Robles Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        20,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Alicia Leija Teran',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        20,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Palao Alfaro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        20,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angelica Mijares Valadez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        20,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Alfredo Lizarraga Lizarraga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        20,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fabiola Elguezabal Garza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        20,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Elias Garza Alonzo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        20,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yuliana Del Rocio Flores Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        20,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tania Vanessa Flores Guerra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        20,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Rodriguez Ibarra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        20,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia Garza Villarreal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        20,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcelo Martinez Mata',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        20,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karla Monica Escalera Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        20,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sonia Maricela Menchaca Alfaro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        20,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abraham Segundo Gonzalez Ruiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        21,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Montalvo Vasquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        21,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Estela Cepeda Cardenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        21,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gorgonio De Leon Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        21,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Garza Casarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        21,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Puente Barrientos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        21,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rocio Catalina Falcon Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        21,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Linda Noemi Ontiveros Barrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        21,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Zenon Velazquez Vazquez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.nava.gob.mx',
        22,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Joel Alvarado Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.nava.gob.mx',
        22,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Isela Guardiola Sandoval',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.nava.gob.mx',
        22,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Noeh Castillo Uvarios',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.nava.gob.mx',
        22,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ignacia Aguilar Delgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.nava.gob.mx',
        22,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Simon Fabian Herrera Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.nava.gob.mx',
        22,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Keila Morales Pati?o',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.nava.gob.mx',
        22,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Manuel Bocanegra Puente',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.nava.gob.mx',
        22,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Ricardo Fernandez Riojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.nava.gob.mx',
        22,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Ricardo Fernandez Riojas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.nava.gob.mx',
        22,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Lourdes Gonzalez Balderas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.nava.gob.mx',
        22,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Teresa Armendariz Corpus',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.nava.gob.mx',
        22,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Mara Silva Fernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://ocampocoahuila.gob.mx/',
        23,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gumercinda Gaytan Mejia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://ocampocoahuila.gob.mx/',
        23,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucio Martinez Castillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://ocampocoahuila.gob.mx/',
        23,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dania Briseyda Trejo Franco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://ocampocoahuila.gob.mx/',
        23,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hector Ivan Medrano Rivas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://ocampocoahuila.gob.mx/',
        23,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Magdalena Esquivel Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://ocampocoahuila.gob.mx/',
        23,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo Enrique De La Rosa Ramirez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://ocampocoahuila.gob.mx/',
        23,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Feliciano Arizpe Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://ocampocoahuila.gob.mx/',
        23,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramiro Perez Arciniega',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        24,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramon Alvidrez Villarreal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        24,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elia Sandra Jimenez Segura',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        24,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Jose Ni?o Segovia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        24,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Beatriz Alejandra Ortiz Ontiveros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        24,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Francisco Oviedo Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        24,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Esthela Moreno Lopez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        24,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Emanuel Natividad Vielma',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        24,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Jose Morales Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        24,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Evaristo Armando Madero Marcos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        24,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosa Maria Cardenas Chavez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        24,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eunice Gutierrez Ceniceros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        24,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudio Mario Bres Garza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        25,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Jose Angel Hinojosa Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        25,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Antonieta De Jesus Renteria Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        25,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Victor Manuel Garcia Mejia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        25,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lesli Anahi Lopez Chapa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        25,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Maldonado Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        25,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Melissa Orozco Abrego',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        25,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Moises Lechler De La Garza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        25,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Estela Castillo Corralejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        25,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Xavier Fausto Martinez Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        25,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Maria Del Refugio Garcia Ortega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        25,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anselmo Antonio Elizondo Davila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        25,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sonia Villarreal Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        25,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elva Alicia Mu?oz Rojo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        25,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rebeca Perez Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        25,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leocadio Hernandez Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        25,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Arturo Benecchi Luis',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        25,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Gicel Farias Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        25,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Federico Quintanilla Riojas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        26,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Hector Rodriguez Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        26,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tania Rocio Garza De Leon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        26,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manuel Lugo Perez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        26,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rebeca Pineda Hernandez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        26,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Antonio Contreras Malagon',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        26,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Casilda Fraga Estrada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        26,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayra Nelly Cardenas Hinostroza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        26,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Maria Morales Padilla',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ramosarizpe.gob.mx',
        27,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Rodriguez Alcantar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ramosarizpe.gob.mx',
        27,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria De Los Angeles Coronado Leija',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ramosarizpe.gob.mx',
        27,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Segundo Garcia Gutierrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ramosarizpe.gob.mx',
        27,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Guadalupe Lopez Villarreal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ramosarizpe.gob.mx',
        27,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jacinto Hernandez Serrano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ramosarizpe.gob.mx',
        27,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Leza Ortega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ramosarizpe.gob.mx',
        27,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodrigo Antonio Valdez Valdes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ramosarizpe.gob.mx',
        27,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teresa Gabriela Gutierrez Burciaga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ramosarizpe.gob.mx',
        27,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Blasco Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ramosarizpe.gob.mx',
        27,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ernesto Saro Boardman',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ramosarizpe.gob.mx',
        27,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Arturo Ramos Martinez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ramosarizpe.gob.mx',
        27,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Matilde Valdes Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ramosarizpe.gob.mx',
        27,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Heriberto Javier Valdes Garcia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ramosarizpe.gob.mx',
        27,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia Villarreal Burciaga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ramosarizpe.gob.mx',
        27,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Elena Lio Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.ramosarizpe.gob.mx',
        27,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cuauhtemoc Rodriguez Villarreal',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        28,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Armando Perez Grajales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        28,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Deyanira Andrade Bernal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        28,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Francisco Arriaga Barrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        28,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Francisco Gutierrez Rangel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        28,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miriam Guadalupe Salas De La Rosa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        28,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elizabeth De Hoyos Yutani',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        28,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Villanueva Aviles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        28,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mirna Barraza Carrillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        28,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Jaime Ayala Rodriguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        28,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Armando Ibarra Tamez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        28,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elida De Jesus Moreno Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        28,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Jesus Aguirre Cardenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        28,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edith Maldonado Gonzalez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        28,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Hernandez Almaraz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        28,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Graciela Gonzalez Velez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        28,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yajaira Iusiri Reyna Ramos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        29,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paulina Mora Arreola',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        29,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Raul Sanmiguel Ponce',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        29,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Manolo Jimenez Salinas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.saltillo.gob.mx',
        30,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gladys Ayala Flores',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        31,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio Ivan Long Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.nuevarosita.gob.mx/',
        32,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia Oralia Grado Falcon',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        33,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Ramon Tavarez Olivas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        34,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Zermeño Infante',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        'http://www.torreon.gob.mx',
        35,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nadia Haide Jaramillo Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        36,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Narcedalia Padron Arizpe',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        37,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angeles Eloisa Flores Torres',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-01-01, 2021-12-31)'::daterange,
        null,
        38,
        5
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

              `)
}
