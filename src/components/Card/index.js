import './style.css';

export function Card(props) {
    return(
        <div className="card">       

            <section className="firstSection">
                <img src={props.picture} alt=""/>
            </section> 
            
            <section>
                <p><b>First name:</b> {props.firstName}</p>

                <p><b>Last name:</b> {props.lastName}</p>

                <p><b>Gender:</b> {props.gender}</p>

                <p><b>Height:</b> {props.height/100}m</p>

                <p><b>Birth:</b>{props.birth.toLocaleString()}</p>
            </section>
        </div>
    
    );
}
