import React, { Component } from 'react';
import Header from './Components/Header';
import Listado from './Components/Listado';
import Producto from './Components/Producto';
import './App.css';

 class App extends Component {
  constructor() {
    super();
    this.state = {
    carrito:[],
    total:0,
    productosLista:[
    {codigo:1,descripcion:"Huawei Matebook D 15", precio:15899, url:'https://m.media-amazon.com/images/I/61zKGsIdoPL._AC_SY355_.jpg'},
    {codigo:2,descripcion:"Samsung Galaxy S10", precio:13999, url:'https://cdn-files.kimovil.com/phone_front/0002/92/thumb_191056_phone_front_big.jpeg'},
    {codigo:3,descripcion:"Samsung Galaxy A01", precio:1850, url:'https://http2.mlstatic.com/D_NQ_NP_926246-MLA44282592285_122020-O.jpg'},
    {codigo:4,descripcion:"Xiaomi Redmi Note 9s", precio:5949, url:'https://m.media-amazon.com/images/I/61ShPQu-u0L._AC_SX522_.jpg'},
    {codigo:5,descripcion:"Mochila Xiaomi", precio:699, url:'https://m.media-amazon.com/images/I/51wu2dpWapL._AC_SX569_.jpg'},
    {codigo:6,descripcion:"Teclado Primus Gaming Ballista", precio:1999, url:'https://www.primusgaming.com/media/PKS-301_620.jpg'},
    ],
    };
    }
  render() {
    return (
      <div>
        <Header/>
        <div className="contenidoApp">
          <Producto
          productos={this.productosLista}
          />
          <Listado/>
        </div>
      </div>
    )
  }
}

export default App;
