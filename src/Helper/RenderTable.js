import React from 'react'

export function renderTable( data ) {
    let header = Object.keys(data[0])
    console.log(header)
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
}