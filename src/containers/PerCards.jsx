import React from 'react'

const PerCards = ({actual, header}) => {

    return (
        <div className='col-5 card'>
            <h3>{header}</h3>
            <h2>{actual}</h2>
        </div>
    )
}

export default PerCards
