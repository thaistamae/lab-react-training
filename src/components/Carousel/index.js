import {useState} from 'react';

export function Carousel (props){
    
    const [src, setSrc] = useState(0)
    let image = props.images[src]
        
    function changeLeft(){
        setSrc(src === 0 ? props.images.length-1 : src-1)
    }   

    function changeRight(){
        setSrc((src >= props.images.length-1) ? 0 : src+1)
    }

    return (
        <div>
            <section>
                <img src={image} alt=""/>
            </section>

            <section>
                <button onClick={changeLeft}>Left</button>
                <button onClick={changeRight}>Right</button>
            </section>   
        </div> 
    )
}