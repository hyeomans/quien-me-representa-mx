exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 2).del()
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
        'Armando Ayala Robles',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-10-01, 2021-09-30)'::daterange,
        'http://www.ensenada.gob.mx',
        1,
        2
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Marina Del Pilar Avila Olmeda',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-10-01, 2021-09-30)'::daterange,
        'http://www.mexicali.gob.mx',
        2,
        2
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Hilda Araceli Brown Figueredo',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-10-01, 2021-09-30)'::daterange,
        'http://www.rosarito.gob.mx',
        5,
        2
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Olga Zulema Adams Pereyra',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-10-01, 2021-09-30)'::daterange,
        'http://www.tecate.gob.mx',
        3,
        2
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

      insert into presidencia_municipal_simplificado(
        nombre,
        puesto,
        img_url,
        periodo,
        link,
        municipio_id,
        estado_id
      ) VALUES (
        'Luis Arturo Gonzalez Cruz',
        'Presidente municipal',
        'https://via.placeholder.com/50',
        '[2019-10-01, 2021-09-30)'::daterange,
        'http://www.tijuana.gob.mx',
        4,
        2
      ) ON CONFLICT (
        nombre_formatted,
        puesto
      )
      DO UPDATE SET img_url = EXCLUDED.img_url;
              

              `)
}
