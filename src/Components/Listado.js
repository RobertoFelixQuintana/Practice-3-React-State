import React, { Component } from 'react';

class Listado extends Component {
    
    
    render() {
      const {lista} = this.props;
        return (
            <div className="contentCenter">
              <div>
                <h1>Carrito</h1>
                <div className="totalEliminar">
                  <div>
                    <p>Total de carrito: ${this.props.total}.00</p>
                  </div>
                  <div>
                    <button className="boton rojo botonEliminar" type="button" onClick={()=>this.props.eliminarCarrito()} variant="danger">Eliminar carrito</button>
                  </div>
                </div>
              </div>
              <div>
              {     
                    lista.length===0
                    ? <img className="carrito" src="https://letrasrecortadas.com/carritoVacio.png" alt="carrito" width="300px" align="middle"/>
                    :
                    <table className="table">
                    <thead>
                      <tr>
                        <th>Cantidad</th>
                        <th>Codigo</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Importe</th>
                        <th></th> 
                      </tr>
                    </thead>
                    <tbody>
                    {
                      lista.map((a,index)=>
                        <tr key={index}>
                            <td>{a.cantidad}</td>
                            <td>{a.codigo}</td>
                            <td>{a.descripcion}</td>
                            <td>${a.precio}.00</td>
                            <td>${a.importe}.00</td>
                            <td><button className="boton rojo" type="button" onClick={()=>this.props.eliminar(a.codigo)} variant="danger">Eliminar</button></td>
                        </tr>
                        
                      )
                    }
                    </tbody>  
                </table>
                }
              </div>
            </div>
        )
    }
}

export default Listado;