const Promise = require('bluebird')

const initLocacion = ({ db, st, logger }) => {
  return async (parent, { latitud, longitud }) => {
    //TODO: Handle errors
    try {
      const location = st.geomFromText(`POINT(${longitud} ${latitud})`, 4326)
      const seccion = await db
        .table('secciones')
        .innerJoin('estados', 'estados.numero_entidad', 'secciones.numero_entidad')
        .innerJoin('municipios', function () {
          this.on('secciones.numero_municipio', '=', 'municipios.numero_municipio').andOn(
            'secciones.numero_entidad',
            '=',
            'municipios.numero_entidad',
          )
        })
        .orderByRaw(`secciones.geom <-> ${location}`)
        .select([
          'estados.nombre             as estado',
          'secciones.numero_entidad   as estado_id',
          'municipios.nombre          as municipio',
          'secciones.numero_municipio as municipio_id',
          'secciones.seccion',
          'secciones.distrito_federal',
          'secciones.distrito_local',
          'secciones.seccion',
          st.distance(location, 'secciones.geom'),
        ])
        .limit(1)
        .first()

      // TODO: Better message frontend
      if (seccion['st_distance'] != 0) {
        return {
          info: {
            latitud,
            longitud,
            estado: '',
            municipio: '',
            distritoLocal: 0,
            distritoFederal: 0,
            seccion: 0,
          },
          representantes: {
            diputacionLocal: null,
            diputacionFederal: null,
            presidenciaMunicipal: null,
            gobernante: null,
            senadores: [],
          },
        }
      }

      const {
        estado_id: estadoId,
        estado,
        municipio,
        municipio_id: municipioId,
        distrito_federal: distritoFederal,
        distrito_local: distritoLocal,
      } = seccion
      const diputacionLocalP = db
        .table('diputacion_local')
        .innerJoin(
          'actores_politicos',
          'actores_politicos.id',
          'diputacion_local.actor_politico_id',
        )
        .select(
          'actores_politicos.nombre',
          'actores_politicos.img_url as imgUrl',
          'diputacion_local.periodo',
          'diputacion_local.distrito_local',
          'diputacion_local.link',
        )
        .where('diputacion_local.distrito_local', distritoLocal)
        .andWhere('diputacion_local.estado', estadoId)
        .first()

      const diputacionFederalP = db
        .table('diputacion_federal')
        .innerJoin(
          'actores_politicos',
          'actores_politicos.id',
          'diputacion_federal.actor_politico_id',
        )
        .select(
          'actores_politicos.nombre',
          'actores_politicos.img_url as imgUrl',
          'diputacion_federal.periodo',
          'diputacion_federal.distrito_federal',
          'diputacion_federal.link',
        )
        .where('diputacion_federal.distrito_federal', distritoFederal)
        .andWhere('diputacion_federal.numero_entidad', estadoId)
        .first()

      const municipioP = db
        .table('presidencia_municipal_simplificado')
        .select('nombre', 'img_url as imgUrl', 'periodo', 'link')
        .where('estado_id', estadoId)
        .andWhere('municipio_id', municipioId)
        .first()

      const gobernacionP = db
        .table('gobernacion')
        .innerJoin('actores_politicos', 'actores_politicos.id', 'gobernacion.actor_politico_id')
        .select(
          'actores_politicos.nombre',
          'actores_politicos.img_url as imgUrl',
          'gobernacion.periodo',
          'gobernacion.link',
        )
        .where('gobernacion.estado', estadoId)
        .first()

      const senadoresP = db
        .table('senadurias')
        .innerJoin('actores_politicos', 'actores_politicos.id', 'senadurias.actor_politico_id')
        .select(
          'actores_politicos.nombre',
          'actores_politicos.img_url as imgUrl',
          'senadurias.periodo',
          'senadurias.link',
        )
        .where('senadurias.estado', estadoId)

      const [
        diputacionLocal,
        diputacionFederal,
        presidenciaMunicipal,
        gobernante,
        senadores,
      ] = await Promise.all([
        diputacionLocalP,
        diputacionFederalP,
        municipioP,
        gobernacionP,
        senadoresP,
      ])

      return {
        info: {
          latitud,
          longitud,
          estado,
          municipio,
          distritoLocal,
          distritoFederal,
          seccion: seccion.seccion,
        },
        representantes: {
          diputacionLocal,
          diputacionFederal,
          presidenciaMunicipal,
          gobernante,
          senadores,
        },
      }
    } catch (e) {
      logger.error(e)
      throw new Error('Hubo un error, por favor intenta de nuevo.')
    }
  }
}

module.exports = initLocacion
