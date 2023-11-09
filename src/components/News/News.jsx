import CardNews from "../CardNews/CardNews";

const News = () => {

    const noticias=[
        {
        title:"Ecofuel reforesta 1000 hectareas de la selva del amazonas",
        description:"En una destacada muestra de compromiso con la sostenibilidad ambiental, Ecofuel ha emprendido un ambicioso proyecto de reforestación en la vasta selva del Amazonas. Con el objetivo de contrarrestar la deforestación y preservar este invaluable ecosistema, la empresa ha plantado árboles en 1000 hectáreas de la selva amazónica, marcando un hito significativo en la lucha por la conservación de la biodiversidad y la mitigación del cambio climático.Este impresionante esfuerzo de reforestación, liderado por Ecofuel, representa un paso crucial para la protección de uno de los pulmones verdes más importantes del planeta. La selva del Amazonas, con su biodiversidad única y su papel fundamental en la regulación del clima global, se encuentra bajo amenaza constante debido a la deforestación y la expansión de la agricultura y la industria. La iniciativa de Ecofuel es un rayo de esperanza en medio de esta preocupante realidad.",
        image:"https://lanotaeconomica.com.co/wp-content/uploads/2022/06/La_importancia_de_la_reforestacion_en_Mexico.jpg"
    },
        {
        title:"Ecofuel reforesta 1000 hectareas de la selva del amazonas",
        description:"En una destacada muestra de compromiso con la sostenibilidad ambiental, Ecofuel ha emprendido un ambicioso proyecto de reforestación en la vasta selva del Amazonas. Con el objetivo de contrarrestar la deforestación y preservar este invaluable ecosistema, la empresa ha plantado árboles en 1000 hectáreas de la selva amazónica, marcando un hito significativo en la lucha por la conservación de la biodiversidad y la mitigación del cambio climático.Este impresionante esfuerzo de reforestación, liderado por Ecofuel, representa un paso crucial para la protección de uno de los pulmones verdes más importantes del planeta. La selva del Amazonas, con su biodiversidad única y su papel fundamental en la regulación del clima global, se encuentra bajo amenaza constante debido a la deforestación y la expansión de la agricultura y la industria. La iniciativa de Ecofuel es un rayo de esperanza en medio de esta preocupante realidad.",
        image:"https://lanotaeconomica.com.co/wp-content/uploads/2022/06/La_importancia_de_la_reforestacion_en_Mexico.jpg"
    },
        {
        title:"Ecofuel reforesta 1000 hectareas de la selva del amazonas",
        description:"En una destacada muestra de compromiso con la sostenibilidad ambiental, Ecofuel ha emprendido un ambicioso proyecto de reforestación en la vasta selva del Amazonas. Con el objetivo de contrarrestar la deforestación y preservar este invaluable ecosistema, la empresa ha plantado árboles en 1000 hectáreas de la selva amazónica, marcando un hito significativo en la lucha por la conservación de la biodiversidad y la mitigación del cambio climático.Este impresionante esfuerzo de reforestación, liderado por Ecofuel, representa un paso crucial para la protección de uno de los pulmones verdes más importantes del planeta. La selva del Amazonas, con su biodiversidad única y su papel fundamental en la regulación del clima global, se encuentra bajo amenaza constante debido a la deforestación y la expansión de la agricultura y la industria. La iniciativa de Ecofuel es un rayo de esperanza en medio de esta preocupante realidad.",
        image:"https://lanotaeconomica.com.co/wp-content/uploads/2022/06/La_importancia_de_la_reforestacion_en_Mexico.jpg"
    },
]
    return ( <>
    <h2>NOTICIAS</h2>
        <div className="container-news">
{noticias.map((noticia,index)=>{
   return(<CardNews props={noticia} key={index}/>) 
})}
        </div>
    </> );
}
 
export default News;