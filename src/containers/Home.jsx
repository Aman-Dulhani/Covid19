import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import './styles.css'
import Graph from './Graph'
import PerCards from './PerCards'
import TableBody from './TableBody'

const Home = () => {

  const [chartData, setChartData] = useState([])
  const [tableData, setTableData] = useState([])
  const [total, setTotal] = useState({})


  useEffect(() => {
    fetch('http://corona-ind-19-20.herokuapp.com/api/')
    .then(status => status.json())
    .then(result => setValues(result))
  }, [])
  
  const setValues = (result) => {
    setTableData(result['statewise'])
    setTotal(result['total'])
    setChartData(result['cases_time_series'])
  } 

    return (
      <div className='container-fluid main'>
        <div className='row header'>
          <FontAwesomeIcon icon={ faMap }  className='icon' />
          <h4 className='col-xs-4'>DASHBOARD</h4>
        </div>
        <div className='row' style={{marginLeft: '40px'}}>  
          <div className='col'>  
            <Graph plotData={chartData} />
          </div>
          <div className='col'>
            <div className='row'>
              <PerCards actual={total.active} header='Active Cases' />
              <PerCards actual={total.confirmed} header='Total Cases' />
            </div>
            <div className='row'> 
              <PerCards actual={total.deathrate} header='Death Rate' />
              <PerCards actual={total.recrate} header='Recovery Rate' />
            </div>
          </div>
        </div>
        <div className='table-container'>
          <TableBody data={tableData} />
        </div>
      </div>
    )
}

export default Home
