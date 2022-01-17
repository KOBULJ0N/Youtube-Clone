import React from 'react'
import Content from '../Components/Content'
import Navbar from '../Components/Navbar'
import Siedbar from '../Components/Siedbar'

export const Root = () => {
    return (
        <div>
            <Navbar />
            <Siedbar/>
            <Content />
        </div>
    )
}
export default Root