import React from "react";


const SmurfForm = () => {


    return (
        <form>
            <label>
                Name:
                <input 
                type="text"
                name="name"
                />
            </label>
            <label>
                Age:
                <input 
                type="text"
                name="age"
                />
            </label>
            <label>
                Height:
                <input 
                type="text"
                name="height"
                />
            </label>
        </form>
    )
}

export default SmurfForm;