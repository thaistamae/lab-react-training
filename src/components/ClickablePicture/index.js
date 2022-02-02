import {useState} from "react";

export function ClickablePicture(props){

    const [src, setSrc] = useState(props.img);
    
    function handleImage(){
        if (src === props.img){
            setSrc(props.imgClicked);
        }else {
            setSrc(props.img);
        }
    }


    return <img src={src} alt="" onClick={handleImage}/>;

}