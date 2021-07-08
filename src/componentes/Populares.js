import React from 'react'

const Populares = (props) => {
    const {_id, product_name, description, price, category, image } = props;

    return (
        <div className="card" style={"width: 18rem;"}>
            <img src={{image}} class="card-img-top" alt="Imagen Producto"/>
                <div className="card-body">
                    <h5 className="card-title">{product_name}</h5>
                    <p className="card-text">{description}</p>
                    <a href="a" class="btn btn-primary">Añadir al Carrito</a>
                </div>
        </div>

    )
}

export default Populares
