import React, { createContext, useContext } from 'react'
import SideMock from '.././Mock/sideMock'

export const SiedContext = createContext()

const Siedbar = ({ children }) => {
    const [Mock, setMock]= useContext(SideMock)
    return (
        <SiedContext.Provider value={Mock}>
            {children}
        </SiedContext.Provider>
    )
}
export default Siedbar
