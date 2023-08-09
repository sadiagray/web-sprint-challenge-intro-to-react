import React, { useState } from "react";

function CharacterData (props) {
const {data} = props;
// const [isOpen, setIsOpen] = useState(false);
// const toggle = () => setIsOpen(!isOpen)


return (
    <div>
        {/* <button onClick={toggle} style={{ marginBottom: '1rem' }}> {data.name}  */}
        {/* </button>  */}
        {/* < isOpen={isOpen} {...props}> */}
         <ul>
            <li>
                Name: { data.name }
            </li>
            <li>
                gender: {data.gender}
            </li>
            <li>
                Height: {data.height}
            </li>
            <li>
                Mass: {data.mass}
            </li>
            <li>
                BirthYear: {data.birth_year}
            </li>
            <li>
                Eye Color: {data.eye_color}
            </li>
            <li>
                Hair Color: {data.hair_color}
            </li>
            <li>
                Skin Color: {data.skin_color}
            </li>
         </ul>
        {/* </collapse> */}
    </div>
);
}

export default CharacterData;