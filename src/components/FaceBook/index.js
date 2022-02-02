/*import style from './style.module.css';
import profiles from '../../data/berlin.json';

export function FaceBook(props){

    function handleProfiles(){

        let array = [];

    for (let i = 0; i = profiles.length; i++){
        
        array.push(`<article className=${style.card}>
            <section className=${style.firstSection}>
        <img src= ${{profiles}[i].props.img} alt=""/> </section> 
        
        <section>
            <p><b>First name:</b> ${{profiles}[i].props.firstName}</p>

            <p><b>Last name:</b> ${{profiles}[i].props.lastName}</p>

            <p><b>Country:</b> ${{profiles}[i].props.country}</p>

            <p><b>Type:</b> ${{profiles}[i].props.type}</p>

        </section>)
         </article>`)
    }
        return array;

    }

        return(
            <div>
            {handleProfiles()}
            </div>
        
        );
    
}*/