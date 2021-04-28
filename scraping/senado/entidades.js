const baseUrl = 'https://www.senado.gob.mx'
const baseUrlPorEntidadFederativa = `${baseUrl}/64/senadores/por_entidad_federativa`

const entidades = [
  {
    numeroEntidad: 1,
    nombreEntidad: 'AGUASCALIENTES',
    url: `${baseUrlPorEntidadFederativa}/aguascalientes`,
  },
  {
    numeroEntidad: 2,
    nombreEntidad: 'BAJA CALIFORNIA',
    url: `${baseUrlPorEntidadFederativa}/baja_california`,
  },
  {
    numeroEntidad: 3,
    nombreEntidad: 'BAJA CALIFORNIA SUR',
    url: `${baseUrlPorEntidadFederativa}/baja_california_sur`,
  },
  {
    numeroEntidad: 4,
    nombreEntidad: 'CAMPECHE',
    url: `${baseUrlPorEntidadFederativa}/campeche`,
  },
  {
    numeroEntidad: 5,
    nombreEntidad: 'COAHUILA',
    url: `${baseUrlPorEntidadFederativa}/coahuila`,
  },
  {
    numeroEntidad: 6,
    nombreEntidad: 'COLIMA',
    url: `${baseUrlPorEntidadFederativa}/colima`,
  },
  {
    numeroEntidad: 7,
    nombreEntidad: 'CHIAPAS',
    url: `${baseUrlPorEntidadFederativa}/chiapas`,
  },
  {
    numeroEntidad: 8,
    nombreEntidad: 'CHIHUAHUA',
    url: `${baseUrlPorEntidadFederativa}/chihuahua`,
  },
  {
    numeroEntidad: 9,
    nombreEntidad: 'CIUDAD DE MEXICO',
    url: `${baseUrlPorEntidadFederativa}/ciudad_de_mexico`,
  },
  {
    numeroEntidad: 10,
    nombreEntidad: 'DURANGO',
    url: `${baseUrlPorEntidadFederativa}/durango`,
  },
  {
    numeroEntidad: 11,
    nombreEntidad: 'GUANAJUATO',
    url: `${baseUrlPorEntidadFederativa}/guanajuato`,
  },
  {
    numeroEntidad: 12,
    nombreEntidad: 'GUERRERO',
    url: `${baseUrlPorEntidadFederativa}/guerrero`,
  },
  {
    numeroEntidad: 13,
    nombreEntidad: 'HIDALGO',
    url: `${baseUrlPorEntidadFederativa}/hidalgo`,
  },
  {
    numeroEntidad: 14,
    nombreEntidad: 'JALISCO',
    url: `${baseUrlPorEntidadFederativa}/jalisco`,
  },
  {
    numeroEntidad: 15,
    nombreEntidad: 'MEXICO',
    url: `${baseUrlPorEntidadFederativa}/mexico`,
  },
  {
    numeroEntidad: 16,
    nombreEntidad: 'MICHOACAN',
    url: `${baseUrlPorEntidadFederativa}/michoacan`,
  },
  {
    numeroEntidad: 17,
    nombreEntidad: 'MORELOS',
    url: `${baseUrlPorEntidadFederativa}/morelos`,
  },
  {
    numeroEntidad: 18,
    nombreEntidad: 'NAYARIT',
    url: `${baseUrlPorEntidadFederativa}/nayarit`,
  },
  {
    numeroEntidad: 19,
    nombreEntidad: 'NUEVO LEON',
    url: `${baseUrlPorEntidadFederativa}/nuevo_leon`,
  },
  {
    numeroEntidad: 20,
    nombreEntidad: 'OAXACA',
    url: `${baseUrlPorEntidadFederativa}/oaxaca`,
  },
  {
    numeroEntidad: 21,
    nombreEntidad: 'PUEBLA',
    url: `${baseUrlPorEntidadFederativa}/puebla`,
  },
  {
    numeroEntidad: 22,
    nombreEntidad: 'QUERETARO',
    url: `${baseUrlPorEntidadFederativa}/queretaro`,
  },
  {
    numeroEntidad: 23,
    nombreEntidad: 'QUINTANA ROO',
    url: `${baseUrlPorEntidadFederativa}/quintana_roo`,
  },
  {
    numeroEntidad: 24,
    nombreEntidad: 'SAN LUIS POTOSI',
    url: `${baseUrlPorEntidadFederativa}/san_luis_potosi`,
  },
  {
    numeroEntidad: 25,
    nombreEntidad: 'SINALOA',
    url: `${baseUrlPorEntidadFederativa}/sinaloa`,
  },
  {
    numeroEntidad: 26,
    nombreEntidad: 'SONORA',
    url: `${baseUrlPorEntidadFederativa}/sonora`,
  },
  {
    numeroEntidad: 27,
    nombreEntidad: 'TABASCO',
    url: `${baseUrlPorEntidadFederativa}/tabasco`,
  },
  {
    numeroEntidad: 28,
    nombreEntidad: 'TAMAULIPAS',
    url: `${baseUrlPorEntidadFederativa}/tamaulipas`,
  },
  {
    numeroEntidad: 29,
    nombreEntidad: 'TLAXCALA',
    url: `${baseUrlPorEntidadFederativa}/tlaxcala`,
  },
  {
    numeroEntidad: 30,
    nombreEntidad: 'VERACRUZ',
    url: `${baseUrlPorEntidadFederativa}/veracruz`,
  },
  {
    numeroEntidad: 31,
    nombreEntidad: 'YUCATAN',
    url: `${baseUrlPorEntidadFederativa}/yucatan`,
  },
  {
    numeroEntidad: 32,
    nombreEntidad: 'ZACATECAS',
    url: `${baseUrlPorEntidadFederativa}/zacatecas`,
  },
]

module.exports = entidades
