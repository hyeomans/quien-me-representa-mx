exports.up = async function () {
  // eslint-disable-next-line no-undef
  await Promise.resolve()
}

exports.down = async function (knex) {
  await knex('municipios').del()
}
