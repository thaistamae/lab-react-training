import style from './style.module.css';

export function Greetings(props) {

    function invokePhrase(){
     if(props.lang === "de"){
        return "Hallo"
    }else if(props.lang === "fr"){
        return "Bonjour"
    }else if(props.lang === "en"){
        return "Hello"
    }else if(props.lang === "es"){
        return "Hola"
    }
    }

    return(
        <div className={style.greetings}>
            <p className={style.text}>{invokePhrase()} {props.children}</p>
        </div>
    )
}