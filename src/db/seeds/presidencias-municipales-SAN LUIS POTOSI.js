exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 24).del()
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
        'Jose Ignacio 

 Guerrero Mendoza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.ahualulco-slp.gob.mx/2018-2021/index.php',
        1,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Florisela Hernandez Chavez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        2,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Cuahutemoc Balderas Yañez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.aquismon-slp.gob.mx/2018-2021/',
        3,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Rocio Castillo Vera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        4,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Gregorio Cruz Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        54,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Omar Muñoz Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.cardenas-slp.gob.mx/2018-2021/index.php',
        5,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Guadalupe Carrillo Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.catorce-slp.gob.mx/2018-2021/',
        6,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Howard Francisco Aguilar Vergara',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        7,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Leticia Vazquez Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.cerritos-slp.gob.mx/',
        8,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Esmeralda Abigail Nava Loredo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.municipiodecerrodesanpedro.gob.mx',
        9,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marisol Najera Alba',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.charcas-slp.gob.mx',
        15,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Mireya Vancini Villanueva',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.ciudaddelmaizslp.gob.mx',
        10,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marco Antonio Gonzalez Jasso',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.cdfernandez-slp.gob.mx/index.php',
        11,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'David Armando Medina Salazar',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://vallesslp.gob.mx/',
        13,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Roberto Cruz Hurtado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.coxcatlan-slp.gob.mx/',
        14,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Soledad Carreño Linares',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://municipioebanoslp.wixsite.com/ebanoslp',
        16,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Rafael Olvera Torres',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        57,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Juan Francisco Perez Zapata',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.guadalcazar-slp.gob.mx/',
        17,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Antonio Olivares Morales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://huehuetlan-slp.gob.mx',
        18,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Sergio Alberto Izaguirre Ponce',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.lagunillas.gob.mx/turistico/inicio.php',
        19,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ivan Noe Estrada Guzman',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.matehuala.gob.mx/',
        20,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edgar Ortega Lujan',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.matlapa.gob.mx/',
        58,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Hilario Leal Quistian',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://mexquiticdecarmona-slp.gob.mx/2018-2021/',
        21,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Enrique Vega Manzanares',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.moctezuma-slp.gob.mx',
        22,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Pablo Berrones Alvarado',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://municipiorayonslp.gob.mx/2018-2021/',
        23,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arnulfo Urbiola Roman',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.rioverdeslp.gob.mx/',
        24,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emmanuel Castro Alvarez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://salinas-slp.gob.mx/2018-2021/',
        25,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Edyuenary Gregorio Castillo Hernandez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.municipiodesanantonio.gob.mx/',
        26,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Carlos Pereyra Govea',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.sancirodeacosta-slp.gob.mx',
        27,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Enrique Francisco Galindo Ceballos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.sanluis.gob.mx',
        28,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Fernando Herbert Orta',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        29,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Arturo Elias Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        30,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jesus Soni Bulos',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        31,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Del Amparo Charles Landaverde',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        32,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emmanuel Govea Diaz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.santamariadelrio-slp.gob.mx/',
        33,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Celeste Mata Esparza',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        34,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. Leonor Noyola Cervantes',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.municipiodesoledad.com.mx',
        35,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Alberto Abundis Rangel',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.tamasopo-slp.gob.mx/2018-2021/',
        36,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jose Luis Meza Vidales',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.tamazunchale.gob.mx/',
        37,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Brisseire Sanchez Lopez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://tampacan-slp.gob.mx/2018-2021/',
        38,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Silvia Medina Burgaña',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://tampamolon-slp.gob.mx/',
        39,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Joel 

 Limas Rivera',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        40,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Octavio Contreras Medina',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.tancanhuitz-slp.gob.mx',
        12,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Genaro Ahumada Cedillo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://municipiodetanlajasjuntosparacrecer.gob.mx',
        41,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Maria Sanchez Barrios',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.tanquiandeescobedo.gob.mx/',
        42,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ruben Rodriguez Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        43,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ma. De Jesus Torres Ortiz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://vanegas-slp.gob.mx/2018-2021/index.php',
        44,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Guillermo Martinez Guerra',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://transparenciavenad.wixsite.com/venado',
        45,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Bernabe Mares Briones',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.villadearista.gob.mx/',
        46,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Salvador Lopez Amaro',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        47,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Francisco Olguin Garcia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        48,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Jorge Armando Torres Martinez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.villadelapazslp.gob.mx/2018-2021/',
        49,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erick Giovanni Espino De La Rosa',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        50,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Erika Irazema Briones Perez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://ayuntamientovilladereyes.gob.mx/',
        51,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Ismael Vazquez Rodriguez',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.villahidalgo.gob.mx/',
        52,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Lisa Avigail Izaguirre',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        53,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Oscar Humberto Marquez Plascencia',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        'http://www.xilitla-slp.gob.mx/',
        55,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Emmanuel Diaz Loredo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2021-10-01, 2024-09-30)'::daterange,
        null,
        56,
        24
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

              `)
}
