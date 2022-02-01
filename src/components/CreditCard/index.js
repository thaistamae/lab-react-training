import style from './style.module.css';
import visalogo from '../../assets/images/visa.png';
import masterlogo from '../../assets/images/master-card.svg';

export function CreditCard(props){
    let backgroundcolor = {
        'backgroundColor': props.bgColor,
        'color': props.color,
    };
    
    const ccnumber = props.number.substr(-4)

    function logo(){
        return props.type === "Visa" ? visalogo : masterlogo
    }

    return(
        <div style={backgroundcolor} className={style.creditCard}>
            <section className={style.right}>
                <img src={logo()} alt="" className={style.logo}/>
            </section>
            <section className={style.center}>
                <p className={style.text1}><span>&bull;&bull;&bull;&bull;</span> <span>&bull;&bull;&bull;&bull;</span> <span>&bull;&bull;&bull;&bull;</span> {ccnumber}</p>
            </section>
            <section className={style.left}>
                <p className={style.text2}>Expires {props.expirationMonth}/{props.expirationYear}</p>
                <p className={style.text2}>{props.bank}</p>
            </section>
            <section className={style.left}>
                <p className={style.text3}>{props.owner}</p>
            </section>
        </div>
    )
}