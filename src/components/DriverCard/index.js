import style from './style.module.css';

export function DriverCard(props){
    function rate(){
        if(Math.round(props.rating)===0){
            return `☆☆☆☆☆`
        }else if(Math.round(props.rating)===1){
            return `★☆☆☆☆`
        }else if(Math.round(props.rating)===2){
            return `★★☆☆☆`
        }else if(Math.round(props.rating)===3){
            return `★★★☆☆`
        }else if(Math.round(props.rating)===4){
            return `★★★★☆`
        }else if(Math.round(props.rating)===5){
            return `★★★★★`
        }
    }
    return(
        <div className={style.division}>
            <section>
                <img className={style.photo} src={props.img} alt="" />
            </section>
            <section className={style.block}>
                <p className={style.text1}>{props.name}</p>
                <p className={style.text1}>{rate()}</p>
                <p className={style.text2}>{props.car.model} - {props.car.licensePlate}</p>
            </section>
        </div>
    )
}