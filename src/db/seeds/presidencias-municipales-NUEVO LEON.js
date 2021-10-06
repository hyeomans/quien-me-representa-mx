exports.seed = async function (knex) {
  await knex('presidencia_municipal_simplificado').where('estado_id', 19).del()
  await knex.schema.raw(`
              
              `)
}
