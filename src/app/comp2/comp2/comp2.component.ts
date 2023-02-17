import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})


export class Comp2Component {   
  pizzasQuesos = [
    { nombre: 'Cabramelizada', ingredientes: 'Crema fresca, Queso 100%, mozzarella, queso de cabra, cebolla caramelizada', precio: 8.50,url:'../../../assets/images/pizzas/queso/Cabramelizada.jpg', alt:"Cabramelizada" },
    { nombre: 'Cheesix', ingredientes: 'Crema fresca, Queso 100%, mozzarella, cheddar, emmental, parmesano, gorgonzola, queso de cabra', precio: 9.50,url:'../../../assets/images/pizzas/queso/Cheesix.png', alt:"Cheesix" },
    { nombre: '4 Quesos', ingredientes: 'Salsa de tomate, queso 100%, mozzarella, cheddar, emmental, gorgonzola', precio: 10.50,url:'../../../assets/images/pizzas/queso/Cuatro_Quesos.png', alt:"4 Quesos" }
  ];

  pizzasBbq = [
    { nombre: 'Alabama Pulled Pork', ingredientes: 'Salsa barbacoa original, queso 100% mozarella, pulled pork ahumado, maiz, salsa ranchera por encima y queso cheddar', precio: 12.50,url:'../../../assets/images/pizzas/bbq/PulledPorkAlabama.png', alt:"Alabama Pulled Pork" },
    { nombre: 'Texas BBQ Crispy', ingredientes: 'Salsa BBQ Texas, queso 100% mozzarella, bacon crispy, bacon, pollo a la parrilla, carne de vacuno, queso cheddar', precio: 11.50,url:'../../../assets/images/pizzas/bbq/TexasBBQCrispy.png', alt:"Texas BBQ Crispy" },
    { nombre: 'Buffalo Chicken', ingredientes: 'Salsa BBQ original, queso 100% mozarella, pollo buffalo con un toque picante, bacon crispy, cebolla caramelizada y queso', precio: 13.50,url:'../../../assets/images/pizzas/bbq/BuffaloChicken.png', alt:"Buffalo Chicken" }
  ];

  pizzasEspeciales = [
    { nombre: 'Pecado Carnal', ingredientes: 'Salsa de tomate, extra de queso 100% mozarella, carne de vacuno, bacon, pepperoni, york', precio: 11.50,url:'../../../assets/images/pizzas/especiales/PecadoCarnal.png', alt:"Pecado Carnal" },
    { nombre: 'Cremozza al Estilo Bourbon', ingredientes: 'Base de crema fresca, queso 100% mozarella, bacon, pollo a la parrila, cebolla, salsa Bourbon (0% Alcohol)', precio: 10.50,url:'../../../assets/images/pizzas/especiales/CremozzaBourbon.png', alt:"CremozzaBourbon" },
    { nombre: 'Extravaganzza', ingredientes: 'Salsa de tomate, mozzarella, carne de vacuno, pepperoni, York, bacon, cebolla, pimiento verde, champiñon y aceitunas negras', precio: 9.99,url:'../../../assets/images/pizzas/especiales/Extravaganzza.png', alt:"Extravaganzza" }
  ];

  entrantes = [
    {nombre: 'Alitas de Pollo', precio:1.99, url:'../../../assets/images/entrantes/alitas.png',alt:'Alitas'},
    {nombre: 'Nuggets', precio:1.49,url:'../../../assets/images/entrantes/nuggets.png',alt:'Nuggets'},
    {nombre: 'Pan de ajo con queso', precio:2.99,url:'../../../assets/images/entrantes/pan.png',alt:'Pan de ajo con queso'}
  ]

  salsas = [
    {nombre: 'Salsa Queso', precio:0.99, url:'../../../assets/images/salsas/SalsaQueso.png',alt:'Salsa Queso'},
    {nombre: 'Salsa Sriracha', precio:1.99,url:'../../../assets/images/salsas/SalsaSriracha.png',alt:'Salsa Sriracha'},
    {nombre: 'Salsa Ketchup', precio:0.79,url:'../../../assets/images/salsas/SalsaKetchup.png',alt:'Salsa Ketchup'}
  ]

  postres = [
    {nombre: 'Vulcano de chocolate', precio:0.99, url:'../../../assets/images/postres/Vulcano.png',alt:'Vulcano de Chocolate'},
    {nombre: 'Cookies', precio:1.79,url:'../../../assets/images/postres/cookies.png',alt:'Cookies'},
    {nombre: 'Brownkie', precio:1.99,url:'../../../assets/images/postres/Brownkie.png',alt:'Brownkie'}
  ]
  option: string = '';
}

