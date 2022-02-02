import style from './style.module.css';

export function NumbersTable(props){
    function handleDisplay(){
        let array = [];
        let element
        for (let i = 0; i < props.limit; i++) {
            element = {backgroundColor: i%2 === 0 ? 'red' : 'white'}
         array.push(<p key={i} className={style.numbersTable} style={element} add={i}>{i+1}</p>)
        }
        return array
    }
    return (
        <div className={style.table}>
            {handleDisplay()}
        </div>

    )
}