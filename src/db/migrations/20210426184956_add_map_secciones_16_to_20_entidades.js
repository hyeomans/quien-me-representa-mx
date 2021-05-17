exports.up = async function () {
  // eslint-disable-next-line no-undef
  await Promise.resolve()
}

exports.down = function (knex) {
  return knex('secciones')
    .where('numero_entidad', 16)
    .orWhere('numero_entidad', 17)
    .orWhere('numero_entidad', 18)
    .orWhere('numero_entidad', 19)
    .orWhere('numero_entidad', 20)
    .del()
}
