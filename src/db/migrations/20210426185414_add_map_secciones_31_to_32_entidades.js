exports.up = async function () {
  // eslint-disable-next-line no-undef
  await Promise.resolve()
}

exports.down = function (knex) {
  return knex('secciones').where('numero_entidad', 31).orWhere('numero_entidad', 32).del()
}
