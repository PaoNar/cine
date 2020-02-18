/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Navega from '../navegacion/navigation';
import Salir from '../navegacion/salir';

import axios from 'axios';

const API = "http://localhost:5000/film/pelicula";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      image: ''
    }
  }

  componentDidMount() {
    axios.get(API)
      .then(response => {
        this.setState({ peliculas: response.data.datos })
        response.data.datos.forEach(element => {
          console.log()     
        });
      })
      .catch(error => {
        console.log(error)
      })
  }

  deleteData = (value) => {
    axios.delete(`${API}?id=${value}`, {
      data: { id: value }
    })
    window.location.assign("http://localhost:3000/movies");
  }

  render() {
    const { peliculas } = this.state
    
    return (
      <div>
        <Navega />,
        <Salir/>,
        {/* <Header />, */}
            <div className="container   mx-auto px-2 md:px-6">
          <div className="flex flex-wrap -mx-1 lg:-mx-2">{ peliculas.map(element =>

                        
            <div className=" w-full  ml-16  mx-2 pt-6  md:w-1/3 lg:my-6 lg:px-2 lg:w-1/4">

                              
              <article className="overflow-hidden    shadow-lg h-auto  w-full " key={element.id}>
              

                <a href="#">
                  <img alt="Placeholder" className="block h-auto w-full" src={element.imagen} ></img>
                </a>

                <header className="flex items-center justify-between leading-tight  md:p-1">
                  <h1 className="text-lg">
                    <a className="text-black  text-xl mb-2">Titulo: {element.titulo}</a>
                             
                  </h1>
                  <a className="text-black  text-xl mb-2">Valor: {element.valorBoleto}</a>

                      

                </header>
                <div className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a className="text-black  text-xl mb-2">Género: {element.categoria}</a>
                 
                </div>
                <div className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a className="text-black  text-xl mb-2">Sinopsis: {element.resumen}</a>


                </div>

                <div className="m-3">
                  <button className="bg-green-400   hover:text-white hover:bg-green-700 font-roboto py-2 px-4 ">
                                            
                    <span className="mr-2">Actualizar</span>
                  </button>
                </div>
                <div className="m-3">
                  <button className=" bg-red-400   hover:text-white hover:bg-red-700 font-roboto py-2 px-4 "
                    onClick={() => this.deleteData(element.id)}>
                    <span className="mr-2">Eliminar</span>
                  </button>
                </div>
                      
              </article>
                
                </div>
               )}
              </div>
            </div>
          </div>
          
    )
  }
}
                    
                
                    
  
   
export default Movies;