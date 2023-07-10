import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function Test(){
    const comidas = 
    [
        {id:1, img: 'https://salvadorshoppingonline.com.br/wp-content/uploads/2022/11/Camarao-Oriental-400x400.png',tite:'', desc:'Almoço e/ou Jantar', val:'', link:'/come'},
        {id:2,img: 'https://salvadorshoppingonline.com.br/wp-content/uploads/2022/08/Suco-de-Manga-com-Maracuja-menu-poke-400x400.png', tite:'', desc:'Bebidas', val:'', link:'/bebe'},
        {id:3,img: 'https://salvadorshoppingonline.com.br/wp-content/uploads/2022/06/capuccino_cremoso_200_ml_dona_quitanda-400x400.png', tite:'', desc:'Cafés e Chás', val:'', link:'/suco'},
        {id:4,img: 'https://www.safol.com.br/storage/app/uploads/public/b4e/df9/6c7/thumb__480_480_0_0_crop.jpg', tite:'', desc:'Bombonier', val:'', link:'/bombom'},
    ]
    const [clique, setClique] = useState()

    useEffect(()=>{
       
    }, [])

    return( 
        <div className="test">
            <h1>Gastronomia</h1>
            <div className="commerce margin">
                {
                    comidas.map(i=>
                        <Link className="link" to={i.link}>
                            <div className="caixa" key={i.id} onClick={clique} >
                                <img src={i.img} />
                                <h3>{i.desc} </h3>
                            </div>
                        </Link>
                           
                        )   
                }
            </div>
        </div>
    )
    
}