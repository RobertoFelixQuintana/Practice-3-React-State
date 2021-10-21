import React, { Component } from 'react'
import './Producto.css';

class Producto extends Component {
    render() {
        return (
            <div className="contentCenter">
              <div>
                <h1>Productos</h1>
              </div>
              <div>
                <table className="table">
                        <thead>
                          <tr>
                            <th>Codigo</th>
                            <th>Descripcion</th>
                            <th>Imagen</th>
                            <th>Precio</th>
                            <th></th> 
                          </tr>
                        </thead>
                        <tbody>
                        {
                          this.props.productos.map((a,index)=>
                            <tr key={index}>
                                <td>{a.codigo}</td>
                                <td>{a.descripcion}</td>
                                <td><img className="imgProducto" src={a.url} alt="producto"/></td>
                                <td>${a.precio}.00</td>
                                <td><button className="boton verde" type="button" onClick={()=>this.props.agregar(a.codigo)} variant="sucess">Agregar</button></td>
                            </tr>
                          )
                        }
                        </tbody>
                    </table>
                </div>
              </div>
               
        )
    }
}

export default Producto;
