const PuntoEnElMapa = ({ info, representantes, setData }) => {
  return (
    <div className="absolute w-10/12 z-10 inset-y-0 left-0 mx-3 mt-1 sm:w-6/12 lg:w-4/12 overflow-x-auto mb-2">
      <div className="flex flex-col rounded shadow-lg overflow-hidden">
        <div className="bg-indigo-400 flex items-start justify-between px-3 py-2">
          <div className="text-white">
            <h2 className="text-xl font-bold">{info.municipio}</h2>
            <h2 className="text-sm -mt-1">{info.estado}</h2>
          </div>

          <button className="text-white" onClick={() => setData({ status: 'pristine' })}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="bg-white px-2">
          {info.distritoFederal === 0 ? (
            <div className="px-3 text-red-400">Punto no se encuentra en México</div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {/* Distritos */}
              <li className="py-2 flex space-x-3 justify-center">
                <div className="bg-indigo-400 text-white p-2 rounded-md">
                  Distrito local {info.distritoLocal}
                </div>
                <div className="bg-indigo-400 text-white p-2 rounded-md">
                  Distrito federal {info.distritoFederal}
                </div>
              </li>
              {/* Gobernación estatal */}
              <li className="py-4 flex">
                {representantes.gobernante.imgUrl && (
                  <img
                    className="h-12 w-10 rounded-full"
                    src={representantes.gobernante.imgUrl}
                    alt="imagen"
                  />
                )}
                <div className="ml-3">
                  <p className="text-sm font-medium text-indigo-500">
                    {representantes.gobernante.nombre}
                  </p>
                  <p className="text-sm text-gray-500">Gobernación estado de {info.estado}</p>
                </div>
              </li>

              {/* Diputación federal */}
              <li className="py-4 flex">
                {representantes.diputacionFederal ? (
                  <>
                    <img
                      className="h-12 w-10 rounded-full"
                      src={representantes.diputacionFederal.imgUrl}
                      alt="imagen"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-indigo-500">
                        {representantes.diputacionFederal.nombre}
                      </p>
                      <p className="text-sm text-gray-500">
                        Diputación federal distrito {info.distritoFederal}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="ml-3">
                    <p className="text-sm font-medium text-indigo-500">
                      Distrito federal {info.distritoFederal} no tiene diputación federal
                    </p>
                  </div>
                )}
              </li>

              {/* Senadores */}
              {representantes.senadores.map((senador) => (
                <li key={senador.nombre} className="py-4 flex">
                  <img className="h-12 w-10 rounded-full" src={senador.imgUrl} alt="imagen" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-indigo-500">{senador.nombre}</p>
                    <p className="text-sm text-gray-500">Senaduría {info.estado}</p>
                  </div>
                </li>
              ))}

              {/* Presidencia municipal */}
              {representantes.presidenciaMunicipal && (
                <li className="py-4 flex">
                  <img
                    className="h-12 w-10 rounded-full"
                    src={representantes.presidenciaMunicipal.imgUrl}
                    alt="imagen"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-indigo-500">
                      {representantes.presidenciaMunicipal.nombre}
                    </p>
                    <p className="text-sm text-gray-500">Presidencia municipal {info.municipio}</p>
                  </div>
                </li>
              )}

              {/* Diputación local */}
              {representantes.diputacionLocal && (
                <li className="py-4 flex">
                  <img
                    className="h-12 w-10 rounded-full"
                    src={representantes.diputacionLocal.imgUrl}
                    alt="imagen"
                  />
                  <div className="ml-3">
                    {representantes.diputacionLocal.link ? (
                      <a
                        href={representantes.diputacionLocal.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        <p className="text-sm font-medium text-indigo-500 underline hover:text-indigo-900">
                          {representantes.diputacionLocal.nombre}
                        </p>
                        <p className="text-sm text-gray-500">
                          Diputación local distrito {info.distritoLocal}
                        </p>
                      </a>
                    ) : (
                      <>
                        <p className="text-sm font-medium text-indigo-500">
                          {representantes.diputacionLocal.nombre}
                        </p>
                        <p className="text-sm text-gray-500">
                          Diputación local distrito {info.distritoLocal}
                        </p>
                      </>
                    )}
                  </div>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default PuntoEnElMapa
