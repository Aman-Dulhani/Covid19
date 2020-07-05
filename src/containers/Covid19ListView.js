import React,{Component} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';

class Covid19ListView extends Component{
    
    state = {
        columnDefs: [{
            headerName: "State", field: "State"
          }, {
            headerName: "Confirmed", 
            children: [
              {headerName:"C",field: "Confirmed",width: 100},
              {headerName: "DC",field: "DeltaConfirmed", cellStyle: params => params.value > 0 ? {color: 'red'} : null,width: 100}
            ],
            width: 200, 
          },
          {
            headerName: "Active",
            children: [
              { headerName: "",field: "Active",width: 150}
            ]
          },
          {
            headerName: "Recovered",
            children: [
              {headerName:"R", field:"Recovered",width:100},
              {headerName: "DR", field: "DeltaRecovered",
              cellStyle: params => params.value > 0 ? {color: 'green'} : null,width: 100}
            ],
            width: 100,

          },
          {
            headerName: "Death", 
            children: [
              {headerName:"D", field:"Deaths",width:100},
              {headerName: "DD", field: "DeltaDeaths",
              cellStyle: params => params.value > 0 ? {color: 'red'} : null}
            ],
            width: 100
          }
        ],
        rowData:null,
    }
    
    componentDidMount() {
            axios.get('http://corona-ind-19-20.herokuapp.com/api/')
                .then(result => result.data)
                .then(rowData => this.setState({rowData}))
                .catch(err => console.log(err));
        }
    

    
    render() {
        return(
            <div
                className="ag-theme-alpine"
                style={{
                height: '1000px',
                width: '1000px' }}
            >
                <AgGridReact
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}>
                </AgGridReact>
            </div>
        )
    }
}
export default Covid19ListView;