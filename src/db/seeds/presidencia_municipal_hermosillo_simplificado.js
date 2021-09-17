exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('presidencia_municipal_simplificado').del()

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
    'ANTONIO FRANCISCO ASTIAZARÁN GUTIERREZ',
    'Presidente municipal',
    'https://via.placeholder.com/50',
    '[2021-09-16, 2024-11-15)'::daterange,
    'http://www.hermosillo.gob.mx',
    49,
    26
  ) ON CONFLICT (
    nombre_formatted, 
    puesto
  )
  DO UPDATE SET img_url = EXCLUDED.img_url;
  `)
}
