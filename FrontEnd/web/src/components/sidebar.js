/* eslint-disable jsx-a11y/anchor-is-valid */
import React from'react';
import { Link } from "react-router-dom";

const Sidebar = () => (
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden  bg-red flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
            <div className="flex items-center flex-no-shrink text-white mr-6 mx-64">

            </div>
            <div className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0">
                <em className="font-semibold text-xl tracking-tight text-black">Cine Yavirac</em>
            </div>
            <div className="md:flex md:flex-col md:items-stretch md:opacity-80 md:relative md:mt-4 md:shadow-none  absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 ">
                <ul className="md:flex-col md:min-w-full flex flex-col ">
                    {/* <li className="items-center">
                        <Link to="/home">
                            <button className="text-green-500 hover:text- text-xs uppercase py-3 font-bold block">
                                Inicio
                            </button>
                        </Link>
                    </li> */}
                    
                    <li className="items-center">
                        <p className="text-gray-900 text-xs uppercase py-3 font-bold block">
                            Películas
                        </p>
                        <ul>
                            <Link to="/add_movie">
                                <li className="mx-4 text-gray-600 hover:text-gray-900">
                                    Crear Película
                                </li>
                            </Link>
                        </ul>
                        <ul>
                            <Link to="/movies">
                                <li className="mx-4 text-gray-600 hover:text-gray-900">
                                    Catálogo
                                </li>
                            </Link>
                        </ul>
                    </li>
                    <li className="items-center">
                        <p className="text-gray-900 text-xs uppercase py-3 font-bold block">
                            Crear y Asignar
                        </p>
                        
                        <ul>
                            <Link to="/schedules">
                                <li className="mx-4 text-gray-600 hover:text-gray-900">
                                    
                                    Crear Horarios
                                </li>
                            </Link>
                        </ul>

                        <ul>
                            <Link to="/rooms">
                                <li className="mx-4 text-gray-600 hover:text-gray-900">
                                    Crear Salas
                                </li>
                            </Link>
                        </ul>
                        {/* <ul>
                            <Link to="/films_room">
                                <li className="mx-4 text-gray-600 hover:text-gray-900">
                                    Asignar Peliculas
                                </li>
                            </Link>
                        </ul> */}
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Sidebar;