import React, { useState } from "react";

function CharacterData (props) {
const { name, height, eye_color, gender, mass, birth_year, hair_color, skin_color} = props;
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen)


return (
    <div>
        <button onClick={toggle} style={{ marginBottom: '1rem' }}> {name} 
        </button> 
        <collapse isOpen={isOpen} {...props}>
         <card>
            <li>
                Name: { name }
            </li>
            <li>
                gender: {gender}
            </li>
            <li>
                Height: {height}
            </li>
            <li>
                Mass: {mass}
            </li>
            <li>
                BirthYear: {birth_year}
            </li>
            <li>
                Eye Color: {eye_color}
            </li>
            <li>
                Hair Color: {hair_color}
            </li>
            <li>
                Skin Color: {skin_color}
            </li>
         </card>
        </collapse>
    </div>
);
}

export default CharacterData;