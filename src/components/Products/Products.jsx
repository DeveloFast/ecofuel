import CardProduct from "../CardProduct/CardProduct";
import "./Products.css"
const products = [
    {
      name: 'EcoFuel',
      image: 'https://images.pexels.com/photos/12377482/pexels-photo-12377482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Ecofuel es una revolucionaria y avanzada opción de combustible diseñada para impulsar un futuro más sostenible y respetuoso con el medio ambiente. Esta gasolina ecológica representa un gran avance en la industria automotriz al combinar un rendimiento excepcional con un compromiso firme con la conservación del entorno natural.',
    },
    {
      name: 'EcoFast',
      image: 'https://autoplanet.pe/wp-content/uploads/2021/12/lubricantes-autos-1.png',
      description: 'Ecofast es una innovadora solución de lubricación que no solo impulsa el rendimiento de maquinaria y equipo, sino que también está firmemente comprometida con la sostenibilidad y la protección del medio ambiente. Este lubricante ecológico se destaca por sus características líderes en la industria que lo convierten en la elección ideal para empresas y consumidores conscientes del entorno.',
    },
    {
      name: 'EcoShop',
      image: 'https://www.dima-sa.es/wp-content/uploads/2020/11/Tiendas-conveniencia-Slider-1-baja-e1606394760942.jpg',
      description: 'Ecoshop es mucho más que una simple tienda en una gasolinera; es un destino de compra comprometido con la sostenibilidad y la comodidad de sus clientes. Esta tienda innovadora ha sido diseñada para ofrecer una experiencia de compra única que responde a las necesidades de aquellos que desean un enfoque más ecológico en su estilo de vida, incluso mientras hacen una parada en una estación de servicio.',
    },
    {
      name: 'EcoTech',
      image: 'https://i0.wp.com/www.ecci.edu.co/wp-content/uploads/2021/11/Mecanica-Automotriz.webp',
      description: 'Ecotech es mucho más que un servicio de mecánico convencional; es una experiencia de servicio automotriz que prioriza la eficiencia, la tecnología de vanguardia y la sostenibilidad. Nuestro enfoque revolucionario en la industria automotriz se traduce en un servicio integral que satisface las necesidades de los conductores modernos y conscientes del medio ambiente.',
    },
    // Agrega más productos según sea necesario
  ];
const Products = () => {
    return ( <>
    <div className="container-products">
    <h1 className="title">Productos</h1>
        <CardProduct products={products}/>
    </div>
    </> );
}
 
export default Products;