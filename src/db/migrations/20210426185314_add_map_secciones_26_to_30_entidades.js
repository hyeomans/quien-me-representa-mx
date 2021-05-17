exports.up = async function () {
  // eslint-disable-next-line no-undef
  await Promise.resolve()
}

exports.down = function (knex) {
  return knex('secciones')
    .where('numero_entidad', 26)
    .orWhere('numero_entidad', 27)
    .orWhere('numero_entidad', 28)
    .orWhere('numero_entidad', 29)
    .orWhere('numero_entidad', 30)
    .del()
}
