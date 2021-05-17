exports.up = async function () {
  // eslint-disable-next-line no-undef
  await Promise.resolve()
}

exports.down = function (knex) {
  return knex('secciones')
    .where('numero_entidad', 12)
    .orWhere('numero_entidad', 13)
    .orWhere('numero_entidad', 14)
    .orWhere('numero_entidad', 15)
    .del()
}
