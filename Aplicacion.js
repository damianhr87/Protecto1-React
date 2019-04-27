import React , {Component} from 'react';
import Productos from './Productos';
import Footer from './Footer';
import Header from './Header';


class Aplicacion extends React.Component{
    
    render() { //siempre obligatorio el metodo render
        const productos =[
            {nombre: 'libro', precio:200},
            {nombre: 'disco de musica', precio:3300},
            {nombre: 'instrumentos', precio:1500},
            {nombre: 'reproductor', precio:6500},
            {nombre: 'albun ed', precio:2560}
    
        ]
        return (
            <div>               
                <Header
                    titulo='Nuestra Tienda Virtual'
                />
                <Productos
                    productos={productos}
                />
                <Footer />
            </div>
        )
             }
} 

export default Aplicacion;