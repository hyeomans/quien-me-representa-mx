exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('presidencia_municipal').del()

  await knex.schema.raw(`
  insert into actores_politicos (nombre, puesto, img_url, created_at)
  values ('Fermín González Gaxiola', 'Presidente municipal Hermosillo', 'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620222512/presidencia_municipal/sonora/hermosillo/ferm%C3%ADn_gonz%C3%A1lez_gaxiola.jpg', '2021-04-20 20:24:23.681184')
  ON CONFLICT (nombre_formatted, puesto) DO UPDATE SET img_url = EXCLUDED.img_url;
  `)

  await knex.schema.raw(`
    insert into presidencia_municipal(actor_politico_id, periodo, municipio_id, estado_id, link)
    select id, '[2021-04-08,2021-11-16)'::daterange, 49, 26, 'https://www.hermosillo.gob.mx/GabineteNuevo.aspx'
    from actores_politicos
    where nombre_formatted = 'fermin gonzalez gaxiola' and puesto ='Presidente municipal Hermosillo';
  `)
}
