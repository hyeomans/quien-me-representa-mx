exports.up = async function () {
  // eslint-disable-next-line no-undef
  await Promise.resolve()
}

exports.down = function (knex) {
  return knex('secciones')
    .where('numero_entidad', 9)
    .orWhere('numero_entidad', 10)
    .orWhere('numero_entidad', 11)
    .del()
}
