import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export const NestedContext = React.createContext();
// export const useNested = () => useContext(NestedContext);


export function NestedContextProvider({ children }) {
    const [showNestedModal, setShowNestedModal] = useState(false);
    return (
        <>
            <NestedContext.Provider value={{showNestedModal, setShowNestedModal}}>
                {children}
            </NestedContext.Provider>
        </>
    )
}
