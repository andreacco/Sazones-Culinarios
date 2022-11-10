
// Aqui solo va a ir:
// Barra de navegacion con el logo, Inicio, Nuestros Productos y una searchBar
// Un banner con imagenes que inciten a la compra
// Un formulario de suscripcion a nuestra lista de correos electronicos
// los cursos mas vendidos
// Nuestras redes Sociales y un pequeño vistazo de ellas 
// Un footer que contenga links importanes o datos interesantes y ademas la seccion del igreso para el admin

const Home = () => {
    
    return (
        <div>
            <div>
                <p>Banner</p>
            </div>
            <div>
                <h2>Suscríbete a nuestro newsletter!</h2>
                <form action="submit">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name"/>
                    <label htmlFor="lastName">Apellido</label>
                    <input type="text" name="lastName"/>
                    <label htmlFor="phoneNumber">Teléfono</label>
                    <input type="text" name="phoneNumber"/>
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="text" name="email"/>
                    <button type="submit">Suscribirse</button>
                </form>
            </div>
            <div>
                <h2>Los más vendidos</h2>
            </div>
            <div>
                <h2>RRSS</h2>
            </div>
        </div>
    )
}

export default Home