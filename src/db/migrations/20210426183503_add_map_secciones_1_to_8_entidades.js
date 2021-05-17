exports.up = async function () {
  // eslint-disable-next-line no-undef
  await Promise.resolve()
}

exports.down = async function (knex) {
  return knex('secciones')
    .where('numero_entidad', 1)
    .orWhere('numero_entidad', 2)
    .orWhere('numero_entidad', 3)
    .orWhere('numero_entidad', 4)
    .orWhere('numero_entidad', 5)
    .orWhere('numero_entidad', 6)
    .orWhere('numero_entidad', 7)
    .orWhere('numero_entidad', 8)
    .del()
}
