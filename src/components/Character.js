import React from "react";
import CharacterData from './CharacterData'

const Character = (props) => {
    const { data } = props;
    return (
        <div className="character-container-wrapper">
            {data.map(element => {return <CharacterData key={element.id} data={data}/> 
            })}
        </div>
    )
}
export default Character;