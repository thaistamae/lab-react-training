import style from './style.module.css';
import { useState } from 'react';
import Dice0 from '../../assets/images/dice-empty.png';
import Dice1 from '../../assets/images/dice1.png';
import Dice2 from '../../assets/images/dice2.png';
import Dice3 from '../../assets/images/dice3.png';
import Dice4 from '../../assets/images/dice4.png';
import Dice5 from '../../assets/images/dice5.png';
import Dice6 from '../../assets/images/dice6.png';

export function Dice(){

    const dices = [Dice0, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]

    const [src, setSrc] = useState(dices[0]);
    

    function handleDice() {
        setSrc(dices[0])
        setTimeout(() => setSrc(dices[Math.floor(Math.random()*(7-1))+1]), 1000)
      }      
    
    return(
        <div>
            <img className={style.dice} src={src} alt="" onClick={handleDice} />
        </div>
    )

}