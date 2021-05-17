exports.up = async function () {
  // eslint-disable-next-line no-undef
  await Promise.resolve()
}

exports.down = function (knex) {
  return knex('secciones')
    .where('numero_entidad', 21)
    .orWhere('numero_entidad', 22)
    .orWhere('numero_entidad', 23)
    .orWhere('numero_entidad', 24)
    .orWhere('numero_entidad', 25)
    .del()
}
