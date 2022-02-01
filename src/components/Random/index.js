import style from './style.module.css';

export function Random(props){

    function randomNumber(max, min) { 
        return Math.floor(Math.random()*(max - min) - min)
    }
    
    return(
        <div className={style.random}>
        <p className={style.text}>Random value between {props.min} and {props.max} = {randomNumber(props.max, props.min)}</p>
        </div>
    )
}

