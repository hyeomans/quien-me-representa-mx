exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 11).del()
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
        'Samuel Cruz Chessani',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.conoceabasolo.gob.mx',
        1,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amador Chagolla Linares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.conoceabasolo.gob.mx',
        1,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ángela Belem Guzmán Arellano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.conoceabasolo.gob.mx',
        1,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Villalobos Cuellar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.conoceabasolo.gob.mx',
        1,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Guevara Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.conoceabasolo.gob.mx',
        1,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Esther Cuevas Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.conoceabasolo.gob.mx',
        1,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rigoberto Gallardo Ledesma',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.conoceabasolo.gob.mx',
        1,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Margarita Martínez Álvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.conoceabasolo.gob.mx',
        1,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Janeth Monserrat Navarrete Mares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.conoceabasolo.gob.mx',
        1,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Tirado Zúñiga',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://gobiernoacambaro.gob.mx/',
        2,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura Ríos Cárdenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://gobiernoacambaro.gob.mx/',
        2,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe Martínez López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://gobiernoacambaro.gob.mx/',
        2,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Rosaura Juárez Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://gobiernoacambaro.gob.mx/',
        2,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayra Neli Rivera Pizaña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://gobiernoacambaro.gob.mx/',
        2,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lisandro Díaz Corona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://gobiernoacambaro.gob.mx/',
        2,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eleazar Mendoza Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://gobiernoacambaro.gob.mx/',
        2,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucila Noyola Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://gobiernoacambaro.gob.mx/',
        2,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Albarrán Ballesteros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://gobiernoacambaro.gob.mx/',
        2,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cecilia Ibarra Segarra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://gobiernoacambaro.gob.mx/',
        2,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carol Aimed Castañeda Villagrán',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://gobiernoacambaro.gob.mx/',
        2,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María del Carmen Ortiz Terrazas',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://municipioapaseoelalto.org/',
        4,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elizabeth Camacho Patiño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://municipioapaseoelalto.org/',
        4,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco García Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://municipioapaseoelalto.org/',
        4,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rubén Quintino Muñoz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://municipioapaseoelalto.org/',
        4,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Evelyn Arteaga Vázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://municipioapaseoelalto.org/',
        4,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gildardo García Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://municipioapaseoelalto.org/',
        4,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Zavala Donjuan',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://municipioapaseoelalto.org/',
        4,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Cecilia Álvarez Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://municipioapaseoelalto.org/',
        4,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esperanza Herrera Ruelas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://municipioapaseoelalto.org/',
        4,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guerrero Guerrero Lara',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://apaseoelgrande.gob.mx/',
        5,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Román Bravo Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://apaseoelgrande.gob.mx/',
        5,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ema Hernández Arellano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://apaseoelgrande.gob.mx/',
        5,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Antonio Camacho Malagón',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://apaseoelgrande.gob.mx/',
        5,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfonso Ramírez Guerra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://apaseoelgrande.gob.mx/',
        5,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo González Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://apaseoelgrande.gob.mx/',
        5,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andrea Abigaíl Olvera Valdés',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://apaseoelgrande.gob.mx/',
        5,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Samuel Cabrera Lazarini',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://apaseoelgrande.gob.mx/',
        5,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Graciela Sánchez Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://apaseoelgrande.gob.mx/',
        5,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Elena Ramos Loyola',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://atarjea.gob.mx',
        6,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Elisabel Landaverde Espitia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://atarjea.gob.mx',
        6,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Félix Escorcia Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://atarjea.gob.mx',
        6,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Imelda Velázquez Velázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://atarjea.gob.mx',
        6,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cupertino Camacho Rosales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://atarjea.gob.mx',
        6,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucio Landaverde Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://atarjea.gob.mx',
        6,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ángela Montes Velázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://atarjea.gob.mx',
        6,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maximino Espinosa Zárate',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://atarjea.gob.mx',
        6,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leonila García Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://atarjea.gob.mx',
        6,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elvira Paniagua Rodríguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.celaya.gob.mx/cya/',
        7,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Rivas Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.celaya.gob.mx/cya/',
        7,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Angélica Ramírez Barba',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.celaya.gob.mx/cya/',
        7,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aldo Sahib Velásquez Velázquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.celaya.gob.mx/cya/',
        7,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rebeca Lomelín Velasco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.celaya.gob.mx/cya/',
        7,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María de la Salud García Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.celaya.gob.mx/cya/',
        7,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mauricio Hernández Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.celaya.gob.mx/cya/',
        7,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mónica Delgado Delgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.celaya.gob.mx/cya/',
        7,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Uriel Agustín Pineda Soto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.celaya.gob.mx/cya/',
        7,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bárbara Varela Rosales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.celaya.gob.mx/cya/',
        7,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Sierra Ríos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.celaya.gob.mx/cya/',
        7,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ezequiel Mancera Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.celaya.gob.mx/cya/',
        7,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos Oliveros Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.celaya.gob.mx/cya/',
        7,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Carlos Nieto Juárez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.comonfort.gob.mx/sitio/',
        9,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gilberto Zárate Nieves',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.comonfort.gob.mx/sitio/',
        9,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marina Mendoza Villegas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.comonfort.gob.mx/sitio/',
        9,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Brenda Gámez Silva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.comonfort.gob.mx/sitio/',
        9,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Saucillo Méndez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.comonfort.gob.mx/sitio/',
        9,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isaac Ortega Nieto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.comonfort.gob.mx/sitio/',
        9,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Dolores Centeno Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.comonfort.gob.mx/sitio/',
        9,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rocío Azul Cano Fernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.comonfort.gob.mx/sitio/',
        9,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe Montes Olalde',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.comonfort.gob.mx/sitio/',
        9,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Araceli Pérez Granados',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.coroneo.gob.mx/',
        10,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Georgina Adriana Mendoza Tamez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.coroneo.gob.mx/',
        10,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Rivera Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.coroneo.gob.mx/',
        10,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mireya Cid del Prado Estrada',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.coroneo.gob.mx/',
        10,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Ríos Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.coroneo.gob.mx/',
        10,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Pérez Plata',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.coroneo.gob.mx/',
        10,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Neri Isabel Granados Guerrero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.coroneo.gob.mx/',
        10,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Román Torres Caballero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.coroneo.gob.mx/',
        10,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Vargas Alaniz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.coroneo.gob.mx/',
        10,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ariel Enrique Corona Rodríguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://cortazar.gob.mx/',
        11,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Raúl Ortiz Novoa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://cortazar.gob.mx/',
        11,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Concepción Sánchez Abraham',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://cortazar.gob.mx/',
        11,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfredo Ruiz García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://cortazar.gob.mx/',
        11,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mara del Consuelo Lorca Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://cortazar.gob.mx/',
        11,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Alejandra Guerra Acosta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://cortazar.gob.mx/',
        11,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Agustín Banda Olivarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://cortazar.gob.mx/',
        11,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalía Aguilar Albarran',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://cortazar.gob.mx/',
        11,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ernesto Alonso Subías Godínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://cortazar.gob.mx/',
        11,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Érika Lissette Patiño Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://cortazar.gob.mx/',
        11,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Valentín Lerma Arriaga',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://cortazar.gob.mx/',
        11,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Rosa Bueno Macías',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        12,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandra Jasso Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        12,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alan López Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        12,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Susana Rivera Cortez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        12,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Filiberto Procel Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        12,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Rosales González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        12,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Laura Mendoza Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        12,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Christopher Castañeda Negrete',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        12,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Botello Gamiño',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        12,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Luis Arvizu Méndez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.doctormora.gob.mx/portal/',
        13,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Reséndiz Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.doctormora.gob.mx/portal/',
        13,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Verónica Sosa Barrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.doctormora.gob.mx/portal/',
        13,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Marmolejo Lucio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.doctormora.gob.mx/portal/',
        13,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Julio César Chávez Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.doctormora.gob.mx/portal/',
        13,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Lucía Lugo Mata',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.doctormora.gob.mx/portal/',
        13,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Uriel Rangel Jiménez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.doctormora.gob.mx/portal/',
        13,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Abid Bazaldúa Lugo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.doctormora.gob.mx/portal/',
        13,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Basaldúa Basaldúa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.doctormora.gob.mx/portal/',
        13,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Ángel Rayas Ortiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://dh.gob.mx/',
        14,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Ramón González Álvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://dh.gob.mx/',
        14,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jénniferelayne Edith Rodríguez Cárdenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://dh.gob.mx/',
        14,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Juárez Lugo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://dh.gob.mx/',
        14,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Sánchez Sierra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://dh.gob.mx/',
        14,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ivonne Montes Johnson',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://dh.gob.mx/',
        14,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Del Carmen Villegas Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://dh.gob.mx/',
        14,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Ángel Martínez Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://dh.gob.mx/',
        14,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Eustolia Sánchez Márquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://dh.gob.mx/',
        14,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leonel Rodríguez Jiménez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://dh.gob.mx/',
        14,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ulises Barba Aguilera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://dh.gob.mx/',
        14,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Alejandro Navarro Saldaña',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.guanajuatocapital.gob.mx/',
        15,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cecilia Pöhls Covarrubias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.guanajuatocapital.gob.mx/',
        15,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alejandro Chávez Valdez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.guanajuatocapital.gob.mx/',
        15,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Virginia Hernández Marín',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.guanajuatocapital.gob.mx/',
        15,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando López Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.guanajuatocapital.gob.mx/',
        15,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karen Burstein Campos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.guanajuatocapital.gob.mx/',
        15,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Óscar Edmundo Aguayo Arredondo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.guanajuatocapital.gob.mx/',
        15,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Magaly Liliana Segoviano Alonso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.guanajuatocapital.gob.mx/',
        15,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lilia Margarita Rionda Salas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.guanajuatocapital.gob.mx/',
        15,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro García Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.guanajuatocapital.gob.mx/',
        15,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Camacho Trejo Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.guanajuatocapital.gob.mx/',
        15,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Esther Garza Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.guanajuatocapital.gob.mx/',
        15,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Bertha Melo González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.guanajuatocapital.gob.mx/',
        15,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Solís Pantoja',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        16,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Norberto García García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        16,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlota López Frías',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        16,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Alejandro Cerpa Zavala',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        16,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricio Zavala Mosqueda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        16,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Contreras Armenta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        16,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andrea Monserrat Méndez Trigueros',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        16,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Griselda Soto Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        16,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Soria Tafolla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        16,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Ricardo Ortiz Gutiérrez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.irapuato.gob.mx/e-gob/',
        17,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Chico Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.irapuato.gob.mx/e-gob/',
        17,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Ángel Rodríguez Barroso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.irapuato.gob.mx/e-gob/',
        17,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Antonieta Rotllán Zavala',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.irapuato.gob.mx/e-gob/',
        17,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Chacón Gutiérrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.irapuato.gob.mx/e-gob/',
        17,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rebeca Almanza Villaseñor',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.irapuato.gob.mx/e-gob/',
        17,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dulce María Astrid Gallardo Rangel',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.irapuato.gob.mx/e-gob/',
        17,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Eduardo Ramírez Vergará',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.irapuato.gob.mx/e-gob/',
        17,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniela Rivera Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.irapuato.gob.mx/e-gob/',
        17,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Francisco Herrera Murillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.irapuato.gob.mx/e-gob/',
        17,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Palacios Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.irapuato.gob.mx/e-gob/',
        17,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karen Marlén Guerra Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.irapuato.gob.mx/e-gob/',
        17,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Padilla Fuerte',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.irapuato.gob.mx/e-gob/',
        17,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Alberto Vargas Franco',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.jaralgto.gob.mx',
        18,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Lourdes Mariza Ramírez Herrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.jaralgto.gob.mx',
        18,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José González Ojeda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.jaralgto.gob.mx',
        18,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lidia Lara Santos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.jaralgto.gob.mx',
        18,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Isabel Cacique Arroyo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.jaralgto.gob.mx',
        18,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Octavio Arroyo Ferrer',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.jaralgto.gob.mx',
        18,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sonia Durán Cadena',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.jaralgto.gob.mx',
        18,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Martínez García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.jaralgto.gob.mx',
        18,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Nieto Navarrete',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.jaralgto.gob.mx',
        18,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Alberto Vega Vega',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.jerecuaro.gob.mx/',
        19,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hugo Alfredo Ruiz del Catillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.jerecuaro.gob.mx/',
        19,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Georgina Venecy Beltrán Pineda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.jerecuaro.gob.mx/',
        19,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Gamboa Naranjo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.jerecuaro.gob.mx/',
        19,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gonzalo Sánchez Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.jerecuaro.gob.mx/',
        19,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Maribel Martínez Fonseca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.jerecuaro.gob.mx/',
        19,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Patiño Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.jerecuaro.gob.mx/',
        19,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pueblito Antonio Martínez Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.jerecuaro.gob.mx/',
        19,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Moreno Terrazas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.jerecuaro.gob.mx/',
        19,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Héctor Germán René López Santillana',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.leon.gob.mx',
        20,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana María Esquivel Arrona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.leon.gob.mx',
        20,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Sánchez Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.leon.gob.mx',
        20,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana María Carpio Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.leon.gob.mx',
        20,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gilberto López Jiménez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.leon.gob.mx',
        20,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karol Jared González Márquez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.leon.gob.mx',
        20,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Arturo Cabrera González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.leon.gob.mx',
        20,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Olimpia Zapata Padilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.leon.gob.mx',
        20,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela del Carmen Echeverría González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.leon.gob.mx',
        20,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriel Durán Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.leon.gob.mx',
        20,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Vanessa Montes de Oca Mayagoitia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.leon.gob.mx',
        20,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfonso de Jesús Orozco Aldrete',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.leon.gob.mx',
        20,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernanda Odette Rentería Muñoz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.leon.gob.mx',
        20,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gustavo Adolfo Alfaro Reyes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        8,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Emmanuel Rojas Jaramillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        8,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yazmín Yessenía Servín Villa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        8,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Manuel Vera Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        8,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Leticia Castellano Guzmán',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        8,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Yanet Macías Canales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        8,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Juan Gerardo Porras Alatorre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        8,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ofelia Ayala Morgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        8,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio de Jesús Villalobos Bernal',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        8,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Ortiz Ortega',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        21,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Cristina Alvarado Belman',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        21,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriel García de Alba Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        21,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Josefina Espinoza Sandoval',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        21,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alfonso Guzmán Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        21,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lorena Zamudio Balcázar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        21,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Artemio Guzmán Zamudio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        21,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Durán Castro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        21,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Azeneth Guzmán Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        21,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Geovanni Zavala López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        21,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Maribel Gaytán Álvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        21,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Guadalupe Rodríguez Martínez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.ocampo-gto.gob.mx/',
        22,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Dolores Cervantes Carranco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.ocampo-gto.gob.mx/',
        22,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Saúl Ortiz Beltrán',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.ocampo-gto.gob.mx/',
        22,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Elena Flores Luna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.ocampo-gto.gob.mx/',
        22,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Miguel Mendoza Díaz de León',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.ocampo-gto.gob.mx/',
        22,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elsa Valadez Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.ocampo-gto.gob.mx/',
        22,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Portugal Araiza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.ocampo-gto.gob.mx/',
        22,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Del Socorro Rodríguez Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.ocampo-gto.gob.mx/',
        22,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ezequiel Díaz Pacheco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.ocampo-gto.gob.mx/',
        22,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan José García López',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.municipiodepenjamo.gob.mx/',
        23,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Édgar Omar Rodríguez Ponce',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.municipiodepenjamo.gob.mx/',
        23,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Paula Viridiana Olmedo López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.municipiodepenjamo.gob.mx/',
        23,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alonso Luviano Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.municipiodepenjamo.gob.mx/',
        23,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Barajas Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.municipiodepenjamo.gob.mx/',
        23,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rigoberto Elizarrarás Álvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.municipiodepenjamo.gob.mx/',
        23,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reyna Patricia Peña Carrizales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.municipiodepenjamo.gob.mx/',
        23,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Christian David Tejeda Alatorre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.municipiodepenjamo.gob.mx/',
        23,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Carlos Andrés Reyes Reyes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.municipiodepenjamo.gob.mx/',
        23,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Liliana Karina Arredondo Jiménez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.municipiodepenjamo.gob.mx/',
        23,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Jiménez Delgado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.municipiodepenjamo.gob.mx/',
        23,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Larisa Solorzano Villanueva',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.pueblonuevogto.gob.mx/gobierno/ayuntamiento/',
        24,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvia Razo Rosales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.pueblonuevogto.gob.mx/gobierno/ayuntamiento/',
        24,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Efraín Solórzano Villanueva',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.pueblonuevogto.gob.mx/gobierno/ayuntamiento/',
        24,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Concepción Vázquez Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.pueblonuevogto.gob.mx/gobierno/ayuntamiento/',
        24,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Del Refugio García Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.pueblonuevogto.gob.mx/gobierno/ayuntamiento/',
        24,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Librado González Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.pueblonuevogto.gob.mx/gobierno/ayuntamiento/',
        24,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Martínez Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.pueblonuevogto.gob.mx/gobierno/ayuntamiento/',
        24,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Gabriela Villalpando Celio',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.pueblonuevogto.gob.mx/gobierno/ayuntamiento/',
        24,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Pedraza Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.pueblonuevogto.gob.mx/gobierno/ayuntamiento/',
        24,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Padilla Gómez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://purisimadelrincon.mx/',
        25,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Sáinz Soto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://purisimadelrincon.mx/',
        25,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Hernández León',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://purisimadelrincon.mx/',
        25,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Salmerón Verdín',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://purisimadelrincon.mx/',
        25,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Concepción Saldaña García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://purisimadelrincon.mx/',
        25,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rodrigo Cabrera Preciado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://purisimadelrincon.mx/',
        25,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz María López Vargas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://purisimadelrincon.mx/',
        25,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Daniel Aranda Collazo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://purisimadelrincon.mx/',
        25,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucina García Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://purisimadelrincon.mx/',
        25,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oswaldo Ponce Granados',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://romita.gob.mx/',
        26,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Alejandro Elías Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://romita.gob.mx/',
        26,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yanet del Carmen Jaramillo Lozoya',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://romita.gob.mx/',
        26,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Hilario Lozano Arias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://romita.gob.mx/',
        26,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mariela Drenice Ramírez Lozano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://romita.gob.mx/',
        26,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martha Leticia Mancillas Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://romita.gob.mx/',
        26,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sanjuana Isabel Velázquez Montesinos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://romita.gob.mx/',
        26,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Rangel Carrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://romita.gob.mx/',
        26,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Blanca Rodríguez Arias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://romita.gob.mx/',
        26,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Beatriz Hernández Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.salamanca.gob.mx',
        27,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Armando Alonso Olivares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.salamanca.gob.mx',
        27,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Angélica Berrones Aguayo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.salamanca.gob.mx',
        27,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Carlos González Muro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.salamanca.gob.mx',
        27,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Aida Araceli Muñoz Zetina',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.salamanca.gob.mx',
        27,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María del Carmen Campos García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.salamanca.gob.mx',
        27,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo José Aguirre Cortés',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.salamanca.gob.mx',
        27,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karina Cárdenas Diosdado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.salamanca.gob.mx',
        27,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emilia Alejandra Verastegui de la Garma',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.salamanca.gob.mx',
        27,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Víctor Hugo Rueda Olmos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.salamanca.gob.mx',
        27,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isabel María Campo Martín',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.salamanca.gob.mx',
        27,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Óscar Ignacio González Alcaraz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.salamanca.gob.mx',
        27,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ana Laura Robles Rosales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.salamanca.gob.mx',
        27,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Karla Alejandrina Lanuza Hernández',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://desarrollodegobier6.wixsite.com/salvatierra',
        28,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marina Aguilar Carapia',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://desarrollodegobier6.wixsite.com/salvatierra',
        28,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Félix Almanza García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://desarrollodegobier6.wixsite.com/salvatierra',
        28,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alicia Tapia Sancén',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://desarrollodegobier6.wixsite.com/salvatierra',
        28,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Nicolás Ortega García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://desarrollodegobier6.wixsite.com/salvatierra',
        28,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wendy Castillero Orzuna',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://desarrollodegobier6.wixsite.com/salvatierra',
        28,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz María Zavala Palmerín',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://desarrollodegobier6.wixsite.com/salvatierra',
        28,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Luis Zamora Cabrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://desarrollodegobier6.wixsite.com/salvatierra',
        28,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hugo Lanuza García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://desarrollodegobier6.wixsite.com/salvatierra',
        28,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rocío Paredes Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://desarrollodegobier6.wixsite.com/salvatierra',
        28,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Alberto Cardiel Ledesma',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://desarrollodegobier6.wixsite.com/salvatierra',
        28,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diego Alberto Leyva Merino',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sandiegodelaunion.gob.mx/',
        29,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Encarnación Alfredo Segura Covarrubias',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sandiegodelaunion.gob.mx/',
        29,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Saray Segura Gutiérrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sandiegodelaunion.gob.mx/',
        29,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santiago Gutiérrez Gordoa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sandiegodelaunion.gob.mx/',
        29,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rosalba González Arévalo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sandiegodelaunion.gob.mx/',
        29,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Virgilio Márquez Benítez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sandiegodelaunion.gob.mx/',
        29,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ananías Baruk Platas Mata',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sandiegodelaunion.gob.mx/',
        29,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Doria Estefani Casas Chaire',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sandiegodelaunion.gob.mx/',
        29,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Mendiola Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sandiegodelaunion.gob.mx/',
        29,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Maldonado García',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanfelipegto.gob.mx/',
        30,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Édgar Abel Martínez Ochoa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanfelipegto.gob.mx/',
        30,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Guadalupe Cano Ortega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanfelipegto.gob.mx/',
        30,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Gerardo Jaramillo Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanfelipegto.gob.mx/',
        30,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mónica Rodríguez Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanfelipegto.gob.mx/',
        30,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Reynaldo Arvizo Calvillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanfelipegto.gob.mx/',
        30,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Natalia Posashkova -',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanfelipegto.gob.mx/',
        30,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Carlos Pérez Huerta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanfelipegto.gob.mx/',
        30,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Luna Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanfelipegto.gob.mx/',
        30,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sonia Cristina Uriegas Uriegas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanfelipegto.gob.mx/',
        30,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esteban Otoniel Ortiz Tovar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanfelipegto.gob.mx/',
        30,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Casillas Saldaña',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanfrancisco.gob.mx',
        31,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Avelio Díaz Llamas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanfrancisco.gob.mx',
        31,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucia del Carmen Gómez Dimas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanfrancisco.gob.mx',
        31,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Héctor Francisco Becerra Morales',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanfrancisco.gob.mx',
        31,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Angélina Granados Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanfrancisco.gob.mx',
        31,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Alemán Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanfrancisco.gob.mx',
        31,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Antonio de Jesús Navarro Padilla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanfrancisco.gob.mx',
        31,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mayra Teresita Gordillo Gutiérrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanfrancisco.gob.mx',
        31,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Antonio Marún González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanfrancisco.gob.mx',
        31,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Verdín Saldaña',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanfrancisco.gob.mx',
        31,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Montserrat Paulina Serna Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanfrancisco.gob.mx',
        31,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Genaro Martín Zúñiga Soto',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanjoseiturbide.gob.mx/',
        32,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mario Armando Lugo Álvarez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanjoseiturbide.gob.mx/',
        32,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cristina Dolores Monjarás Gutiérrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanjoseiturbide.gob.mx/',
        32,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Teresa Rocío González Maldonado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanjoseiturbide.gob.mx/',
        32,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jerónimo Pérez Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanjoseiturbide.gob.mx/',
        32,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bernardino Montes Buenrostro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanjoseiturbide.gob.mx/',
        32,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anabel Gutiérrez Ibarra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanjoseiturbide.gob.mx/',
        32,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mireya Montes Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanjoseiturbide.gob.mx/',
        32,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Érik Alan Dueñas Rivera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanjoseiturbide.gob.mx/',
        32,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Gerardo Sánchez Sánchez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanluisdelapaz.gob.mx/',
        33,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jairo Armando Álvarez Vaca',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanluisdelapaz.gob.mx/',
        33,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De los Ángeles Ferro Campos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanluisdelapaz.gob.mx/',
        33,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eliodoro Peña Mejía',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanluisdelapaz.gob.mx/',
        33,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'René Rangel Gutiérrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanluisdelapaz.gob.mx/',
        33,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Teresa Tejeda Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanluisdelapaz.gob.mx/',
        33,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mireya Guadalupe Olalde Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanluisdelapaz.gob.mx/',
        33,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Alonso González Arredondo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanluisdelapaz.gob.mx/',
        33,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Terán Ramos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanluisdelapaz.gob.mx/',
        33,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Issac Torres Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanluisdelapaz.gob.mx/',
        33,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Israel Ibañez Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://sanluisdelapaz.gob.mx/',
        33,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Alberto Villarreal García',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanmiguelallende.gob.mx',
        3,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe de Jesús Tapia Campos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanmiguelallende.gob.mx',
        3,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luz María Gutiérrez Tovar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanmiguelallende.gob.mx',
        3,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pavel Alejandro Hernández Gómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanmiguelallende.gob.mx',
        3,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Patricia del Carmen Villa Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanmiguelallende.gob.mx',
        3,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Helio Huéscar Caupolincán Bastién Partida',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanmiguelallende.gob.mx',
        3,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cristóbal Olvera Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanmiguelallende.gob.mx',
        3,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laura González Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanmiguelallende.gob.mx',
        3,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Humberto Campos Trujillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanmiguelallende.gob.mx',
        3,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Elena Vázquez Muñoz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanmiguelallende.gob.mx',
        3,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alan Rafael Romo Goff',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.sanmiguelallende.gob.mx',
        3,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sonia García Toscano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        34,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Rafaela Cabrera Orozco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        34,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Laurencio Guillén Lugo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        34,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elvia María Hernández Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        34,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Juan Moya Vargas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        34,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rufino Jiménez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        34,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yenny López Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        34,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gonzalo Barrera Barrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        34,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Liviel Dorantes Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        34,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Serafín Prieto Álvarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.juventinorosas.gob.mx/',
        35,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guadalupe Balderas Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.juventinorosas.gob.mx/',
        35,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Santa Pantoja Lugo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.juventinorosas.gob.mx/',
        35,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martín González Cano',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.juventinorosas.gob.mx/',
        35,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fidel Armando Ruiz Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.juventinorosas.gob.mx/',
        35,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe de Jesús González de la Torre',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.juventinorosas.gob.mx/',
        35,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Regina Cirenia Corrales Almanza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.juventinorosas.gob.mx/',
        35,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lucía Storms Montenegro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.juventinorosas.gob.mx/',
        35,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramón Gasca Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.juventinorosas.gob.mx/',
        35,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Rosas Cardoso',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://santiagomvtio.guanajuato.gob.mx/',
        36,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Andrés Ruiz García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://santiagomvtio.guanajuato.gob.mx/',
        36,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miriam Cristina Martínez Arreola',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://santiagomvtio.guanajuato.gob.mx/',
        36,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Jiménez Cardona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://santiagomvtio.guanajuato.gob.mx/',
        36,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra María Sánchez Sánchez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://santiagomvtio.guanajuato.gob.mx/',
        36,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Del Carmen López Nava',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://santiagomvtio.guanajuato.gob.mx/',
        36,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Eduardo Barrios Murillo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://santiagomvtio.guanajuato.gob.mx/',
        36,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elisa Narváez Cardona',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://santiagomvtio.guanajuato.gob.mx/',
        36,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cornelio López Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://santiagomvtio.guanajuato.gob.mx/',
        36,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Antonio Trejo Valdepeña',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        37,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José David Tovar Jasso',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        37,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maricela Rodríguez Barajas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        37,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Galván Gutiérrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        37,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marcela Patricia Hinojosa Navarro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        37,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Miguel Ángel González Bravo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        37,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Virginia Chacón Aguilar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        37,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Araujo Villalobos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        37,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Cruz Rangel Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        37,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana del Rosario Paco Arguello',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        37,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María de la Luz Ibarra Valdenegro',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        37,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Juana Campos Alegría',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://tarandacuao.gob.mx/',
        38,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Catalina Hernández Soto',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://tarandacuao.gob.mx/',
        38,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Óscar Delgado Alcántar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://tarandacuao.gob.mx/',
        38,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Teresa del Carmen Perea Ortiz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://tarandacuao.gob.mx/',
        38,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'León Jaime García López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://tarandacuao.gob.mx/',
        38,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Guadalupe Gómez Cruz',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://tarandacuao.gob.mx/',
        38,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fernando Ayala Moreno',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://tarandacuao.gob.mx/',
        38,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Víctor Rojas Huerta',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://tarandacuao.gob.mx/',
        38,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Teresa Moreno Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://tarandacuao.gob.mx/',
        38,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Arreola Mandujano',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.tarimoro.gob.mx',
        39,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis Arriola Contreras',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.tarimoro.gob.mx',
        39,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rut Azaret Estrada Navarrete',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.tarimoro.gob.mx',
        39,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Manuel Rosillo Yépez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.tarimoro.gob.mx',
        39,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Guadalupe Rico Ávila',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.tarimoro.gob.mx',
        39,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Rico Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.tarimoro.gob.mx',
        39,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Claudia Alejandra Zúñiga García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.tarimoro.gob.mx',
        39,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Guadalupe Trejo Fuentes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.tarimoro.gob.mx',
        39,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Moisés Maldonado López',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.tarimoro.gob.mx',
        39,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Pueblito Hernández García',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://tierrablanca.guanajuato.gob.mx',
        40,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jaime Reséndiz Roque',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://tierrablanca.guanajuato.gob.mx',
        40,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Jesús Pérez Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://tierrablanca.guanajuato.gob.mx',
        40,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Guadalupe García Félix',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://tierrablanca.guanajuato.gob.mx',
        40,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramiro Romero Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://tierrablanca.guanajuato.gob.mx',
        40,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zenaida Hernández Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://tierrablanca.guanajuato.gob.mx',
        40,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Zenaida Pérez Pérez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://tierrablanca.guanajuato.gob.mx',
        40,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Aguilar Gutiérrez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://tierrablanca.guanajuato.gob.mx',
        40,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Beatriz Romero Bárcenas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://tierrablanca.guanajuato.gob.mx',
        40,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Anastacio Rosiles Pérez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.uriangato.gob.mx/',
        41,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Hernández Torres',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.uriangato.gob.mx/',
        41,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jannet Sosa Rosiles',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.uriangato.gob.mx/',
        41,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pedro Zamudio Ávalos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.uriangato.gob.mx/',
        41,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Vieyra Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.uriangato.gob.mx/',
        41,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sandra Leticia Díaz Domínguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.uriangato.gob.mx/',
        41,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ricardo Martínez Vargas',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.uriangato.gob.mx/',
        41,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martín González Bedolla',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.uriangato.gob.mx/',
        41,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Wendy Martínez Guzmán',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.uriangato.gob.mx/',
        41,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Serrato Ávalos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.uriangato.gob.mx/',
        41,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Renata Romero Ávalos',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.uriangato.gob.mx/',
        41,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alejandro Alanís Chávez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.valledesantiago.gob.mx',
        42,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Manuel Enríquez Gallardo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.valledesantiago.gob.mx',
        42,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Irma Serrano Roa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.valledesantiago.gob.mx',
        42,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesús Ignacio Ambriz Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.valledesantiago.gob.mx',
        42,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ramiro Aguilar Martínez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.valledesantiago.gob.mx',
        42,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Cárdenas García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.valledesantiago.gob.mx',
        42,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Romeo Ramírez Flores',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.valledesantiago.gob.mx',
        42,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Georgina Arredondo Miranda',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.valledesantiago.gob.mx',
        42,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José David García Cornejo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.valledesantiago.gob.mx',
        42,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Lidia Prieto González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.valledesantiago.gob.mx',
        42,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Isaías Vargas Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.valledesantiago.gob.mx',
        42,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Berenice Montes Estrada',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.victoriaguanajuato.gob.mx/',
        43,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gabriela Hernández Ortega',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.victoriaguanajuato.gob.mx/',
        43,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Javier Reséndiz González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.victoriaguanajuato.gob.mx/',
        43,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Edith González García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.victoriaguanajuato.gob.mx/',
        43,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gerardo Luna Zarazúa',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.victoriaguanajuato.gob.mx/',
        43,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Tobías Hernández Dorado',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.victoriaguanajuato.gob.mx/',
        43,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Trinidad Ramírez Cabrera',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.victoriaguanajuato.gob.mx/',
        43,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Guadalupe Sánchez Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.victoriaguanajuato.gob.mx/',
        43,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Leopoldo Salinas Valtierra',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.victoriaguanajuato.gob.mx/',
        43,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Lara Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://villagrangto.wordpress.com/',
        44,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Martín Enríquez Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://villagrangto.wordpress.com/',
        44,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Diana Érika Subías Ramírez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://villagrangto.wordpress.com/',
        44,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Felipe Franco García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://villagrangto.wordpress.com/',
        44,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Blanca Daniela Moya Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://villagrangto.wordpress.com/',
        44,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Concepción Montiel Rodríguez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://villagrangto.wordpress.com/',
        44,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Carlos Alberto Ramos Naranjo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://villagrangto.wordpress.com/',
        44,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cinthia Guadalupe Teniente Mendoza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://villagrangto.wordpress.com/',
        44,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Verónica Leticia Reséndiz Blanco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://villagrangto.wordpress.com/',
        44,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Guadalupe Ramírez Esquivel',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        45,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Guadalupe Cárdenas Arvizu',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        45,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ambrocio Sánchez Romero',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        45,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'María Ramírez García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        45,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Octavio Pachuca Jiménez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        45,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Fidelina Díaz Galván',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        45,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Érika Chavero García',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        45,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lázaro Mata Benavidez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        45,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Elvia Sandoval Fuentes',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        null,
        45,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salomón Carmona Ayala',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.yuriria.gob.mx/',
        46,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Yassay Daniel Durán Cázares',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.yuriria.gob.mx/',
        46,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Dulce Milagros Martínez Villagómez',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.yuriria.gob.mx/',
        46,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Guerrero Santoyo',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.yuriria.gob.mx/',
        46,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Araceli Bolaños Celestín',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.yuriria.gob.mx/',
        46,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Alma Delia Martínez Baeza',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.yuriria.gob.mx/',
        46,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lázaro Díaz González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.yuriria.gob.mx/',
        46,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Amanda Miguel López Hernández',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.yuriria.gob.mx/',
        46,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'José Luis González González',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.yuriria.gob.mx/',
        46,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Belen Orozco Orozco',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.yuriria.gob.mx/',
        46,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rogelio Salazar Salazar',
        'Regidores',
        'https://via.placeholder.com/50',
        '[2018-10-10, 2021-10-09)'::daterange,
        'http://www.yuriria.gob.mx/',
        46,
        11
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              
              `)
}
