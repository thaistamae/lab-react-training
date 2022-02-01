import style from './style.module.css';

export function BoxColor(props){
    let backgroundcolor = {
        'backgroundColor':`rgb(${props.r}, ${props.g}, ${props.b})`,
        'fontWeight': 700,
        'color': 'white',
    };

    return(
        <div style={backgroundcolor} className={style.boxcolor}>
            <p>rgb ({props.r}, {props.g}, {props.b})</p>
        </div>
    )
}