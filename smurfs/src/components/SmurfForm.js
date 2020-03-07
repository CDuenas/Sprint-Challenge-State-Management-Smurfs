import React, { useContext } from "react";
import SmurfContext from "../SmurfContext";

const SmurfForm = () => {
    const { name, age, height, changeHandler, submitHandler } = useContext(SmurfContext);

    return (
        <form onSubmit={submitHandler}>
            <label>
                Name:
                <input 
                type="text"
                name="name"
                value={name}
                onChange={changeHandler}
                />
            </label>
            <label>
                Age:
                <input 
                type="text"
                name="age"
                value={age}
                onChange={changeHandler}
                />
            </label>
            <label>
                Height:
                <input 
                type="text"
                name="height"
                value={height}
                onChange={changeHandler}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default SmurfForm;