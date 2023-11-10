import CardNews from "../CardNews/CardNews";
import "./News.css"

const News = () => {

    const noticias=[
        {
        title:"Ecofuel Reforesta 10000 Hectareas de la Selva del Amazonas",
        description:"En una destacada muestra de compromiso con la sostenibilidad ambiental, Ecofuel ha emprendido un ambicioso proyecto de reforestación en la vasta selva del Amazonas. Con el objetivo de contrarrestar la deforestación y preservar este invaluable ecosistema, la empresa ha plantado árboles en 1000 hectáreas de la selva amazónica, marcando un hito significativo en la lucha por la conservación de la biodiversidad y la mitigación del cambio climático.Este impresionante esfuerzo de reforestación, liderado por Ecofuel, representa un paso crucial para la protección de uno de los pulmones verdes más importantes del planeta. La selva del Amazonas, con su biodiversidad única y su papel fundamental en la regulación del clima global, se encuentra bajo amenaza constante debido a la deforestación y la expansión de la agricultura y la industria. La iniciativa de Ecofuel es un rayo de esperanza en medio de esta preocupante realidad.",
        image:"https://lanotaeconomica.com.co/wp-content/uploads/2022/06/La_importancia_de_la_reforestacion_en_Mexico.jpg"
    },
        {
        title:"Ecofuel Revoluciona el Mercado Energético: Combustible Ecológico para un Futuro Sostenible",
        description:"En un mundo cada vez más consciente del impacto ambiental, Ecofuel emerge como un líder pionero en la industria energética con su innovador enfoque hacia un futuro sostenible. La empresa, comprometida con la conservación del medio ambiente, ha desarrollado una tecnología revolucionaria para generar combustible de manera ecológica y eficiente.Ecofuel utiliza métodos avanzados de producción que minimizan la huella de carbono, convirtiendo residuos orgánicos y materiales reciclables en un combustible limpio y renovable. Esta iniciativa no solo contribuye a reducir los desechos y la contaminación, sino que también ofrece una alternativa viable a los combustibles fósiles, reduciendo nuestra dependencia de recursos no renovables y mitigando el cambio climático.",
        image:"https://assets.nationbuilder.com/sdintelligence/pages/737/attachments/original/1486147111/maiz-combustible.jpg?1486147111"
    },
        {
        title:"Ecofuel: Energía Limpia que Transforma Residuos en Combustible",
        description:"Lo que distingue a Ecofuel es su enfoque integral hacia la sostenibilidad. La empresa no solo se centra en la producción de combustible ecológico, sino que también se compromete activamente con las comunidades locales para fomentar la conciencia ambiental y la gestión responsable de los desechos. Además, Ecofuel colabora con diversas industrias para recopilar materiales reciclables, promoviendo así la economía circular y la conservación de recursos naturales.Este enfoque holístico de Ecofuel no solo genera un impacto positivo en el medio ambiente, sino que también crea oportunidades de empleo y estimula el desarrollo económico en las áreas donde opera. Al transformar los desechos en una valiosa fuente de energía y promover prácticas sostenibles, Ecofuel está liderando el camino hacia un futuro más limpio, verde y próspero para todos.",
        image:"https://www.valoraanalitik.com/wp-content/uploads/2021/11/combustible-limpio-696x392.jpg"
    },
]
    return ( <>
        <div className="container-news">
    <h2 className="title-sections">Noticias</h2>
{noticias.map((noticia,index)=>{
  let odd= index%2?true:false;
   return(<CardNews props={noticia} odd={odd} key={index}/>) 
})}
        </div>
    </> );
}
 
export default News;