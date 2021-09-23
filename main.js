// let carrito = [];
// if (localStorage.carrito != null) {
//   carrito = JSON.parse(localStorage.carrito);
//   document.getElementById("car").innerHTML = carrito.length
//   const compra = carrito.map(elemnto => elemnto.nombre + "  $ " + elemnto.precio)
//   document.getElementById("listaCurso").innerHTML = compra.join("<br/>")
// };

// /***Constructor Clase***/
// class Curso {
//   constructor(img, nombre, nivel, duracion, precio, ) {
//     this.img = img,
//       this.nombre = nombre,
//       this.nivel = nivel;
//     this.duracion = duracion,
//       this.precio = precio;
//   }
// };

// const cursos = []
// cursos.push(new Curso("./img/IMG_3645.jpg", "ABC de Pastelería", "Nivel inicial", "3 meses", 2400));
// cursos.push(new Curso("./img/IMG_3646.jpg", "Masas y Rellenos", "Nivel medio", "3 mes", 2200))
// cursos.push(new Curso("./img/IMG_3648.jpg", "Decoración de Tortas", "Nivel medio", "1 mes", 1200))
// cursos.push(new Curso("./img/macarron1.jpg", "Macarons", "Nivel avanzado", "1 mes", 1200))

// /***Genero las Cards***/
// let mostrar = document.createElement("div")
// mostrar.setAttribute("class", "row mb-5")
// cursos.forEach(curso => {
//   mostrar.innerHTML += `<div class="col-lg-3 col-sm-12 col-12" >
//   <div class="card" onmouseover="bigImg(this)" onmouseout="normalImg(this)">
//   <img src="${curso.img}" class="card-img-top"   loading="lazy" >
//   <div class="card-body text-center" >
//   <h5 class="card-title" id="${curso.nombre}">${curso.nombre}</h5>
//   <p class="card-text">${curso.nivel}</p>
//   <p>Duración ${curso.duracion}</p>
//   <a href="#" onclick="agregarCarro('${curso.nombre}')" class="btn btn-primary" >$${curso.precio}</a>

//   </div>
//     </div>
//       </div>`
// });
// const post = document.getElementById("cardJs")
// post.appendChild(mostrar);

// /***Agregar productos al carrito***/

// function agregarCarro(nombre) {
//   const añadido = cursos.find(curso => curso.nombre === nombre)
//   carrito.push(añadido)
//   document.getElementById("car").innerHTML = carrito.length
//   const compra = carrito.map(curso => curso.nombre + "  $ " + curso.precio)
//   document.getElementById("listaCurso").innerHTML = compra.join("<br>")

//   localStorage.carrito = JSON.stringify(carrito);

// }


// /***Elimino productos del carrito***/

// function quitarCurso() {
//   carrito.pop()
//   document.getElementById("car").innerHTML = carrito.length
//   const compra = carrito.map(curso => curso.nombre + "  $ " + curso.precio)
//   document.getElementById("listaCurso").innerHTML = compra
//   localStorage.removeItem('carrito');

// }

// /***Animación de las Cards***/

// function bigImg(x) {
//   x.style.height = "105%";
//   x.style.width = "105%";
//   x.transition = "0.1s";
// }

// function normalImg(x) {
//   x.style.height = "100%";
//   x.style.width = "100%";
// }

// /***Btn comprar***/
// div = document.getElementById("boton")
// const mensaje = document.getElementById("listaCurso")

// const button = document.createElement('button')
// button.setAttribute('id', 'btnCompra')
// button.setAttribute('class', "btn btn-success")
// button.textContent = "Comprar"
// div.appendChild(button);




// function darMensaje() {
//   const p = document.createElement('p')
//   p.textContent = "Gracias por tu compra"
//   mensaje.appendChild(p);
// }

// function otroMensaje() {
//   const txt = document.createElement('p')
//   txt.textContent = ""
//   mensaje.appendChild(txt);
// }


// button.addEventListener('click', () => {
//   carrito.length != 0 ? (quitarCurso(), darMensaje()) : otroMensaje()

// });

// /**Genero btn vaciar carrito con JQuery**/
// $("#boton").prepend('<button id="btnVaciar" type="button" class="btn btn-secondary" >Vaciar Carrito</button>');

// $("#btnVaciar").click(function () {
//   carrito.splice(0, carrito.length)
//   $("#car").html(carrito.length)
//   const compra = carrito.map(curso => curso.nombre + "  $ " + curso.precio)
//   $("#listaCurso").html(compra)
//   localStorage.removeItem('carrito');

// })


// //Declaración de métodos encadenados
// $("#titulo").css("color", "red")
//   .delay(400)
//   .slideUp(800)
//   .delay(100)
//   .animate({
//       opacity: "0.8"

//     }, "slow",
//     () => {
//       $("#titulo").text(" Cursos y Talleres")
//         .css({
//           'color': 'black',
//           'font-size': '40px',
//           'font-family': 'roboto',
//           'letter-spacing': '13px'
//         })
//     })
//   .slideDown(2000);

// $.get("/productos.json", function(resultado,status) {

// })

// $.ajaxSetup({
  //   headers:{
    //     'Authorizacion': 'Bearer TEST-5660405789946992-092200-b046900043a826fa361c15f989efd369-657245350',
    //     'Content-Type': 'application/json'
    //   }
    // });
    
    // $.post('https://api.mercadopago.com/checkout/preferences', JSON.stringify(elemento),(respuesta,status)=>{
      // console.log(respuesta)
      // });
      
      
      const elemento =     {  "items": [
        {
          "title": "jgjgjgjg",
          "description": "abc",
          "picture_url": "https://picsum.photos/200/300",
          "category_id": "hfjfgjff",
          "quantity": 2,
          "currency_id": "ARS",
          "unit_price": 11
        }
      ]}

fetch('https://api.mercadopago.com/checkout/preferences',{
  method: 'POST',
  mode: 'cors',
  headers: {
    'Authorizacion': 'Bearer TEST-5660405789946992-092200-b046900043a826fa361c15f989efd369-657245350',
    'Content-Type': 'application/json',
    'Accept': '*/*'
    // 'Access-Control-Allow-Origin': '*'
  },
  body: JSON.stringify(elemento),
}).then(response=>{
  console.log(response)
    // return response.json()
  }
  )
// .then(data => {
//   window.open(data.init_point, '_blank');
// })
// $.get("productos.json",function(res){
//     console.log(res)
//     res.forEach(element => {
//       console.log(element.id)
//     });
//   })

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))