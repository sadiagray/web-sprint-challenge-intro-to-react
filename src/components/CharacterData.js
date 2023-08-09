import React, { useState } from "react";


function CharacterData (props) {
const { name, height, eye_color, gender, mass, birth_year, hair_color, skin_color} = props;
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen)


return (
    <div>
        <Button onClick={toggle} style={{ marginBottom: '1rem' }}> { name }
        </Button>
        <Collapse isOpen={isOpen} {...props}>
        <Card>
                Name: { name }
                gender: {gender}
                Height: {height}
                Mass: {mass}
                BirthYear: {birth_year}
                Eye Color: {eye_color}
                Hair Color: {hair_color}
                Skin Color: {skin_color}
        </Card>
        </Collapse>
    </div>
);
}

export default CharacterData;