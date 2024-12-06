import React, { useState } from 'react'
import Loader from './src/components/ClassLoading/Loader'
import ImageComponent from './src/components/ClassLoading/ImageComponent'

function AppLoading() {
    const [count, setCount] = useState(0);
    const [redondo, setRedondo] = useState(false);

    const handleClick = () => {
        setCount(count + 1);
    };

    const changeRedondo = (r) => {
        setRedondo((r) => !r);
    };

    return (
        <>
            <button onClick={handleClick}>Contador {count}</button>


            {/* <Loader /> */}

            <ImageComponent rounde={redondo} source="src\assets\FMNhmMOXIAEUahG.jpeg"/>
            <button onClick={changeRedondo}>Redondo</button>
        </>
    )
}

export default AppLoading