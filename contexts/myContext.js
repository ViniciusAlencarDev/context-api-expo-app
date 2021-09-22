import React, { createContext, useState } from 'react';

const Context = createContext();

export default Context;

export function ContextProvider(props) {

    const [tokenUser, setTokenUser] = useState('a');

    return(
        <Context.Provider value={{ tokenUser, setTokenUser }}>
            {
                props.children
            }
        </Context.Provider>
    );

}
