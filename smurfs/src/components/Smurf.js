import React from 'react';

const Smurf = props => {
    
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h3>Age: {props.age}</h3>
            <h3>Height: {props.height}</h3>
        </div>
    )
}

export default Smurf;