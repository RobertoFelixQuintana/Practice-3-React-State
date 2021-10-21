import React, { Component } from 'react';
import Header from './Components/Header';
import Listado from './Components/Listado';
import Producto from './Components/Producto';
import Swal from 'sweetalert2'
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
    ],};
  }
  
  agregar=(codigo)=>{
      const {carrito,productosLista}= this.state; 
      let exist = carrito.find((a)=>a.codigo===codigo);  
      let temporal= productosLista.find(a=>a.codigo===codigo);

      
      if(exist!==undefined){
        temporal.cantidad++;
        temporal.importe=temporal.cantidad * temporal.precio;
        this.setState({
          ...this.state,
          carrito:[...carrito],
          total: this.state.total + temporal.precio,
        }) 
        console.log('carrito',this.state.carrito)
      }
      else{
        temporal['cantidad']=1;
        temporal['importe']=temporal.cantidad * temporal.precio; 
        this.setState({
        ...this.state,
        carrito:[...carrito,temporal],
        total: this.state.total + temporal.precio,
        })  
      }
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto agregado',
        showConfirmButton: false,
        timer: 1500
      })

  }
  eliminar=(codigo)=>{
    const {carrito}= this.state; 
    let temporal = carrito.find(a=>a.codigo===codigo);
    let tempObj=carrito.filter(a=>a.codigo!==codigo)
    let tempExist= [];

    if(temporal.cantidad===1){
        if(carrito.length===1){
          this.setState({
            ...this.state,
            carrito:tempExist,
            })
        }else{
          this.setState({
          ...this.state,
          carrito:[...tempObj],
          })
        }
    }else{
      temporal.cantidad--;
      temporal.importe=temporal.cantidad * temporal.precio;
        this.setState({
        ...this.state,
        carrito: [...carrito],
    })
    }
    this.setState({
      total: this.state.total - temporal.precio,
    })
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Producto eliminado',
      showConfirmButton: false,
      timer: 1500
    })
  }

  eliminarCarrito=()=>{
    const {carrito}= this.state; 
    if(carrito.length!==0){
      this.setState({
        carrito : [],
        total: 0,
      })
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Carrito eliminado',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'No hay nada que eliminar de carrito',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
  render() {
    return (
      
      <div>
        <Header/>
        <div className="contenidoApp">
          <Producto
          agregar={this.agregar}
          productos={this.state.productosLista}
          />

          <Listado
          lista={this.state.carrito}
          total={this.state.total}
          eliminar={this.eliminar}
          eliminarCarrito={this.eliminarCarrito}
          />
        </div>
      </div>
    )
  }
}

export default App;
