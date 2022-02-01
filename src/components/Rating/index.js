import style from './style.module.css';

export function Rating(props){
    function rate(){
        if(Math.round(props.children)===0){
            return `☆☆☆☆☆`
        }else if(Math.round(props.children)===1){
            return `★☆☆☆☆`
        }else if(Math.round(props.children)===2){
            return `★★☆☆☆`
        }else if(Math.round(props.children)===3){
            return `★★★☆☆`
        }else if(Math.round(props.children)===4){
            return `★★★★☆`
        }else if(Math.round(props.children)===5){
            return `★★★★★`
        }
    }
    return(
        <div className={style.text}>{rate()}</div>
    )
}