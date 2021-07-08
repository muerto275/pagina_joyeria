import React, { useEffect, useState } from 'react'
import Slider from '../componentes/Slider'
import Populares from '../componentes/Populares';


const Home = () => {

    const [productos, setProductos] = useState([]);

    const getProductos = () => {
        console.log('Funcion GET');
        const URL = 'https://ecomerce-master.herokuapp.com/api/v1/item';
        //End point de la api de ecomerce

        fetch(URL)
            .then(body => body.json())
            .then(respuesta => {
                setProductos(respuesta)
                console.log(respuesta);
            });
    }

    useEffect(() => {
        getProductos();
    }, []);

    
    return (
        <div>
            <div className="position-relative">
                <h1 className="position-absolute top-50 start-50 translate-middle"> Productos Excepcionales para la vida </h1>
            </div>
            <br></br>
            <div className="d-flex justify-content-center flex-wrap">
                <Slider></Slider>
                <br></br>
            </div>
            <br></br>
            <div className="position-relative">
                <h2 className="position-absolute top-100 start-50 translate-middle">Compras Populares</h2>
            </div>
        </div>
    )
}

export default Home
