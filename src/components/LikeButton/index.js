import style from './style.module.css';
import {useState} from 'react';

export function LikeButton(){
    
    const [likes, setLikes] = useState(0)

    function handleLikes(){
        setLikes(likes + 1)
    }

    const colors = ['purple','blue','green','yellow','orange','red']

    const newColors = colors.map((elemento) => elemento)

    return (
        <div className={style.block}>
            <button className={style.button} onClick={handleLikes} style={{backgroundColor:newColors[likes % 6]}} >{likes} Likes</button>
        </div>
    )
} 