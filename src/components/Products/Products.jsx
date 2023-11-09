import CardProduct from "../CardProduct/CardProduct";
import "./Products.css"
const productos = [
    { id: 1, name: "EcoFuel", 
    description: "Ecofuel es la opción definitiva para los conductores conscientes del medio ambiente que desean contribuir a un futuro más limpio y sostenible. Nuestra gasolina ecológica está cuidadosamente formulada para reducir al mínimo su impacto en el medio ambiente, sin comprometer el rendimiento del motor.",
    image:"https://images.pexels.com/photos/12377482/pexels-photo-12377482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 1, name: "EcoFuel", 
    description: "Ecofuel es la opción definitiva para los conductores conscientes del medio ambiente que desean contribuir a un futuro más limpio y sostenible. Nuestra gasolina ecológica está cuidadosamente formulada para reducir al mínimo su impacto en el medio ambiente, sin comprometer el rendimiento del motor.",
    image:"https://images.pexels.com/photos/12377482/pexels-photo-12377482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 1, name: "EcoFuel", 
    description: "Ecofuel es la opción definitiva para los conductores conscientes del medio ambiente que desean contribuir a un futuro más limpio y sostenible. Nuestra gasolina ecológica está cuidadosamente formulada para reducir al mínimo su impacto en el medio ambiente, sin comprometer el rendimiento del motor.",
    image:"https://images.pexels.com/photos/12377482/pexels-photo-12377482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    
    // ...otros productos
  ];
const Products = () => {
    return ( <>
    <div className="container-products">
    <h1 className="title">Productos</h1>
        <CardProduct productos={productos}/>
    </div>
    </> );
}
 
export default Products;