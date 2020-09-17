import React from 'react';

const TableBody = ({data}) =>{ 
    return(
        <div>
            <table style={{alignContent:'center', margin:'auto', width:'100%'}}>
                <tbody id='state' className='container'>
                    <tr id='state-header'  >
                        <th >STATE</th>
                        <th >ACTIVE</th>
                        <th >CONFIRMED</th>
                        <th >RECOVERED</th>
                        <th >DEATHS</th>
                    </tr>
                    {data.length>0 ? (
                        data.map((status, index) => {
                            const{ state,active,confirmed,recovered,deaths } = status
                            return(
                                <tr id='state-data' key={index}  >
                                    <td >{state}</td>
                                    <td >{active}</td>
                                    <td >{confirmed}</td>
                                    <td >{recovered}</td>
                                    <td >{deaths}</td>
                                </tr>
                            )
                        } )
                    ):(<div></div>) }
                </tbody>
            </table>
        </div>
    )
}

export default TableBody