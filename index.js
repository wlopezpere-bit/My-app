import React from 'react';

// Ejercicio 1 - Lista de Productos
const productos = [
  { id: 1, nombre: "Camiseta", precio: 25, categoria: { id: 1, nombre: "Ropa" } },
  { id: 2, nombre: "Zapatos deportivos", precio: 60, categoria: { id: 2, nombre: "Calzado" } },
  { id: 3, nombre: "Gorra", precio: 15, categoria: { id: 1, nombre: "Ropa" } },
  { id: 4, nombre: "Pantalón", precio: 40, categoria: { id: 1, nombre: "Ropa" } },
  { id: 5, nombre: "Bolso", precio: 30, categoria: { id: 3, nombre: "Accesorios" } },
];

function ListaProductos() {
  return (
    <div>
      <h2>Ejercicio 1: Lista de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <strong>Nombre:</strong> {producto.nombre} <br />
            <strong>Precio:</strong> ${producto.precio} <br />
            <strong>Categoría:</strong> {producto.categoria.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Ejercicio 2 - Lista de Usuarios con Direcciones
const usuarios = [
  { id: 1, nombre: "Ana", direccion: { calle: "Calle 10", ciudad: "Bogotá", pais: "Colombia" } },
  { id: 2, nombre: "Luis", direccion: { calle: "Av. Reforma", ciudad: "Ciudad de México", pais: "México" } },
  { id: 3, nombre: "Marta", direccion: { calle: "Gran Vía", ciudad: "Madrid", pais: "España" } },
  { id: 4, nombre: "John", direccion: { calle: "Main St", ciudad: "New York", pais: "USA" } },
  { id: 5, nombre: "Pedro", direccion: { calle: "Rua Augusta", ciudad: "Lisboa", pais: "Portugal" } },
];

function ListaUsuarios() {
  return (
    <div>
      <h2>Ejercicio 2: Lista de Usuarios con Direcciones</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <strong>Nombre:</strong> {usuario.nombre} <br />
            <strong>Dirección:</strong> {usuario.direccion.calle}, {usuario.direccion.ciudad}, {usuario.direccion.pais}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Ejercicio 3 - Lista de Cursos con Módulos
const cursos = [
  { id: 1, nombre: "React", modulos: [{ nombre: "Componentes" }, { nombre: "Hooks" }] },
  { id: 2, nombre: "Next.js", modulos: [{ nombre: "SSR" }, { nombre: "Static Props" }] },
  { id: 3, nombre: "Node.js", modulos: [{ nombre: "Express" }, { nombre: "Middlewares" }] },
  { id: 4, nombre: "Django", modulos: [{ nombre: "Modelos" }, { nombre: "Templates" }] },
  { id: 5, nombre: "Flutter", modulos: [{ nombre: "Widgets" }, { nombre: "State Management" }] },
];

function ListaCursos() {
  return (
    <div>
      <h2>Ejercicio 3: Lista de Cursos con Módulos</h2>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            <strong>Curso:</strong> {curso.nombre}
            <ul>
              {curso.modulos.map((modulo, index) => (
                <li key={index}>- {modulo.nombre}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Ejercicio 4 - Lista de Pedidos con Productos
const pedidos = [
  { id: 1, cliente: "Ana", productos: [{ nombre: "Camiseta", cantidad: 2 }, { nombre: "Gorra", cantidad: 1 }] },
  { id: 2, cliente: "Luis", productos: [{ nombre: "Zapatos", cantidad: 1 }, { nombre: "Bolso", cantidad: 2 }] },
  { id: 3, cliente: "Marta", productos: [{ nombre: "Pantalón", cantidad: 3 }] },
  { id: 4, cliente: "John", productos: [{ nombre: "Sudadera", cantidad: 1 }, { nombre: "Gorra", cantidad: 2 }] },
  { id: 5, cliente: "Pedro", productos: [{ nombre: "Camiseta", cantidad: 5 }] },
];

function ListaPedidos() {
  return (
    <div>
      <h2>Ejercicio 4: Lista de Pedidos con Productos</h2>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id}>
            <strong>Cliente:</strong> {pedido.cliente}
            <p>Productos:</p>
            <ul>
              {pedido.productos.map((producto, index) => (
                <li key={index}>- {producto.nombre} (Cantidad: {producto.cantidad})</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Ejercicio 5 - Lista de Blogs con estructura de datos profundamente anidada
const blogs = [
  {
    id: 1, titulo: "Aprendiendo React", autor: { nombre: "Ana", pais: "Colombia" },
    categorias: ["JavaScript", "Frontend"], comentarios: [{ usuario: "Luis", texto: "Muy útil",
      respuestas: [{ usuario: "Marta", texto: "Totalmente de acuerdo",
        reacciones: [{ tipo: "like", usuario: { nombre: "Pedro", rol: "Estudiante" } },
          { tipo: "love", usuario: { nombre: "John", rol: "Desarrollador" } }
        ]
      }]
    }]
  },
  {
    id: 2, titulo: "Next.js SSR", autor: { nombre: "Luis", pais: "México" },
    categorias: ["JavaScript", "SSR"], comentarios: [{ usuario: "Marta", texto: "Interesante",
      respuestas: [{ usuario: "Ana", texto: "Lo probaré",
        reacciones: [{ tipo: "like", usuario: { nombre: "Luis", rol: "Frontend Dev" } }]
      }]
    }]
  },
  {
    id: 3, titulo: "Node.js API", autor: { nombre: "John", pais: "USA" },
    categorias: ["Backend", "API"], comentarios: [{ usuario: "Pedro", texto: "Me sirvió mucho",
      respuestas: [{ usuario: "Luis", texto: "Gracias por compartir",
        reacciones: [{ tipo: "clap", usuario: { nombre: "Ana", rol: "Fullstack Dev" } }]
      }]
    }]
  },
  {
    id: 4, titulo: "Django ORM", autor: { nombre: "Marta", pais: "España" },
    categorias: ["Backend", "Python"], comentarios: [{ usuario: "Ana", texto: "Claro y conciso",
      respuestas: [{ usuario: "John", texto: "Lo usaré en mi proyecto",
        reacciones: [{ tipo: "like", usuario: { nombre: "Luis", rol: "Backend Dev" } }]
      }]
    }]
  },
  {
    id: 5, titulo: "Flutter Widgets", autor: { nombre: "Pedro", pais: "Portugal" },
    categorias: ["Mobile", "UI"], comentarios: [{ usuario: "Luis", texto: "Genial explicación",
      respuestas: [{ usuario: "Marta", texto: "Muy claro todo",
        reacciones: [{ tipo: "love", usuario: { nombre: "Ana", rol: "UI Designer" } }]
      }]
    }]
  }
];

function ListaBlogs() {
  return (
    <div>
      <h2>Ejercicio 5: Lista de Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog.id} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '20px' }}>
          <h3>{blog.titulo}</h3>
          <p><strong>Autor:</strong> {blog.autor.nombre} ({blog.autor.pais})</p>
          <p><strong>Categorías:</strong> {blog.categorias.join(', ')}</p>
          
          <h4>Comentarios:</h4>
          {blog.comentarios.length > 0 ? (
            <ul>
              {blog.comentarios.map((comentario, index) => (
                <li key={index}>
                  <strong>{comentario.usuario}:</strong> {comentario.texto}
                  
                  <h5>Respuestas:</h5>
                  {comentario.respuestas.length > 0 ? (
                    <ul>
                      {comentario.respuestas.map((respuesta, rIndex) => (
                        <li key={rIndex}>
                          <strong>{respuesta.usuario}:</strong> {respuesta.texto}
                          
                          <h6>Reacciones:</h6>
                          {respuesta.reacciones.length > 0 ? (
                            <ul>
                              {respuesta.reacciones.map((reaccion, rxIndex) => (
                                <li key={rxIndex}>
                                  <strong>Tipo:</strong> {reaccion.tipo} - <strong>Usuario:</strong> {reaccion.usuario.nombre} ({reaccion.usuario.rol})
                                </li>
                              ))}
                            </ul>
                          ) : <p>No hay reacciones.</p>}
                        </li>
                      ))}
                    </ul>
                  ) : <p>No hay respuestas.</p>}
                </li>
              ))}
            </ul>
          ) : <p>No hay comentarios.</p>}
        </div>
      ))}
    </div>
  );
}

// Componente principal de la página que renderiza todos los ejercicios
export default function EjerciciosPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Todos los Ejercicios</h1>
      <ListaProductos />
      <hr />
      <ListaUsuarios />
      <hr />
      <ListaCursos />
      <hr />
      <ListaPedidos />
      <hr />
      <ListaBlogs />
    </div>
  );
}